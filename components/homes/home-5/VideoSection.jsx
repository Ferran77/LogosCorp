"use client";
import YouTubeModal from "@/components/common/ModalVideo";
import React, { useState } from "react";

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div id="video-2" className="video-section">
        <div className="video-inner-box">
          <div className="play-btn">
            <a
              onClick={() => setIsOpen(true)}
              className="video-play-btn mfp-iframe"
            >
              <i className="las la-play" />
            </a>
          </div>
        </div>
      </div>
      <YouTubeModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        videoId={"E1-Vtm6UJxg"}
      />
    </>
  );
}
