export interface OfferingProps {

  imageSrc?: string;

  title?: string;

  description?: string;

  ctaLabel?: string;

  ctaHref?: string;

  // Video properties
  videoSrc?: string;
  videoThumbnail?: string;
  youtubeChannelUrl?: string;

  // Local video file properties
  videoFile?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
}
