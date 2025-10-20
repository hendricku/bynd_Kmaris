import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { MongoClient } from "mongodb";

export const dynamic = 'force-dynamic';
export const revalidate = 60; // Cache for 60 seconds

interface ArticleDocument {
  _id: any;
  title?: string;
  author?: string;
  date?: string;
  newsImage?: string;
  newsVideo?: string;
  videoUrl?: string;
  readTime?: string;
  category?: string;
  description?: string;
  views?: number;
  status?: string;
  createdAt?: Date;
}

export async function GET() {
  const startTime = Date.now();
  
  try {
    console.log("[Articles API] Starting request...");
    
    // Add timeout to connection
    const client = await Promise.race([
      clientPromise,
      new Promise<MongoClient>((_, reject) => 
        setTimeout(() => reject(new Error("Database connection timeout")), 10000)
      )
    ]) as MongoClient;
    
    console.log(`[Articles API] Connected to DB in ${Date.now() - startTime}ms`);

    if (!client) {
      return NextResponse.json(
        { error: "Database connection failed" },
        { status: 500 }
      );
    }

    const db = client.db("kmaris");
    const articlesCollection = db.collection<ArticleDocument>("articles");

    // Create index if it doesn't exist (runs in background, doesn't block)
    articlesCollection.createIndex({ createdAt: -1 }).catch((err: Error) => 
      console.error("Index creation error:", err)
    );

    console.log(`[Articles API] Starting query...`);
    
    // Optimized query with projection and proper indexing
    const articles = await articlesCollection
      .find(
        {}, 
        {
          projection: {
            _id: 1,
            title: 1,
            author: 1,
            date: 1,
            newsImage: 1,
            newsVideo: 1,
            videoUrl: 1,
            readTime: 1,
            category: 1,
            description: 1,
            views: 1,
            status: 1,
            createdAt: 1
          },
          // Add timeout to query
          maxTimeMS: 5000
        }
      )
      .sort({ createdAt: -1 })
      .limit(50) // Reduced from 100 for faster initial load
      .toArray();

    console.log(`[Articles API] Query completed in ${Date.now() - startTime}ms. Found ${articles.length} articles`);

    // Efficient transformation with minimal operations
    const safeArticles = articles.map((a: ArticleDocument) => ({
      _id: a._id.toString(),
      title: a.title || "",
      author: a.author || "",
      date: a.date || "",
      newsImage: a.newsImage || "",
      newsVideo: a.newsVideo || "",
      videoUrl: a.videoUrl || "",
      readTime: a.readTime || "",
      category: a.category || "",
      description: a.description || "",
      views: a.views || 0,
      status: a.status || 'published'
    }));

    console.log(`[Articles API] Total time: ${Date.now() - startTime}ms`);

    return NextResponse.json(safeArticles, { 
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120'
      }
    });
  } catch (error) {
    console.error(`[Articles API] Error after ${Date.now() - startTime}ms:`, error);
    return NextResponse.json(
      {
        error: "Error fetching articles",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}