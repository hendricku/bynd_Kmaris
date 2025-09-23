"use client";

import React, { useState, useRef } from "react";
import { AppButton } from "@/components/Button/Button";
import { OfferingProps } from "./interface";
import {
  Section,
  Container,
  Grid,
  Image,
  Content,
  Description,
  ButtonWrapper,
  VideoContainer,
  VideoThumbnail,
  PlayButton
} from "./elements";
import { Heading } from "@/components/Heading/Heading";

// Default content for the component
const defaultProps: Required<Omit<OfferingProps, 'imageSrc' | 'videoSrc' | 'videoThumbnail' | 'youtubeChannelUrl' | 'videoFile' | 'autoPlay' | 'muted' | 'loop'>> = {
  title: "Company offering all visa & Immigration Services",
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit, pretium sapien mattis nulla litora proin purus varius, pulvinar diam netus volutpat morbi magnis. Porta semper potenti faucibus blandit torquent ad vehicula sociis integer, feugiat aptent netus gravida enim neque posuere penatibus, sed imperdiet maecenas venenatis scelerisque consequat tempus mauris.",
  ctaLabel: "Learn More",
  ctaHref: "#",
};

export function Offering({
  imageSrc = "/offering.webp",
  title = defaultProps.title,
  description = defaultProps.description,
  ctaLabel = defaultProps.ctaLabel,
  ctaHref = defaultProps.ctaHref,
  videoSrc,
  videoThumbnail = "/placeholder.png",
  youtubeChannelUrl = "https://www.youtube.com/@kmaristv4568",
  videoFile,
  autoPlay = false,
  muted = true,
  loop = true
}: OfferingProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    if (videoSrc) {
    
      setIsVideoPlaying(true);
      setShowThumbnail(false);
    }
  };

  const handleLearnMoreClick = () => {

    window.open(youtubeChannelUrl, '_blank');
  };


  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = videoSrc ? getYouTubeVideoId(videoSrc) : null;

  return (
    <Section>
      <Container>
        <Grid>
          {videoSrc && videoId ? (
            <VideoContainer>
              {showThumbnail && (
                <>
                  <VideoThumbnail
                    src={videoThumbnail}
                    alt={title}
                    onClick={handleVideoClick}
                  />
                  <PlayButton onClick={handleVideoClick} />
                </>
              )}
              {isVideoPlaying && (
                <iframe
                  style={{
                    display: showThumbnail ? 'none' : 'block',
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: '16px'
                  }}
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${muted ? 1 : 0}&loop=${loop ? 1 : 0}&controls=1&rel=0&modestbranding=0&showinfo=0&iv_load_policy=3&fs=1&disablekb=0`}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </VideoContainer>
          ) : videoFile ? (
            <VideoContainer>
              {showThumbnail && (
                <>
                  <VideoThumbnail
                    src={videoThumbnail}
                    alt={title}
                    onClick={handleVideoClick}
                  />
                  <PlayButton onClick={handleVideoClick} />
                </>
              )}
              <video
                ref={videoRef}
                style={{ display: showThumbnail ? 'none' : 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                autoPlay={autoPlay}
                muted={muted}
                loop={loop}
                controls
                onEnded={() => {
                  setIsVideoPlaying(false);
                  setShowThumbnail(true);
                }}
              >
                <source src={videoFile} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </VideoContainer>
          ) : (
            <Image src={imageSrc} alt={title} />
          )}
          <Content>

            <Heading level={2} variant="section" align="left" marginBottom={16}>
              {title}
            </Heading>
            <Description>{description}</Description>
            <ButtonWrapper>

              <AppButton
                label={ctaLabel}
                href={youtubeChannelUrl}
                size="large"
                withArrow
                onClick={handleLearnMoreClick}
              />
            </ButtonWrapper>
          </Content>
        </Grid>
      </Container>
    </Section>
  );
}

export default Offering;
