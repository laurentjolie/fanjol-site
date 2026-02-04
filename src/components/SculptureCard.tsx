'use client';

import Image from 'next/image';
import { useRef, useEffect } from 'react';
import type { Sculpture } from '@/data/sculptures';

function SculptureCard({ sculpture }: { sculpture: Sculpture }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <div className="group">
      <div className="aspect-[3/4] relative overflow-hidden bg-gray-50">
        {sculpture.video ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            poster={sculpture.video.poster}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          >
            <source src={sculpture.video.webm} type="video/webm" />
            <source src={sculpture.video.preview} type="video/mp4" />
            <Image
              src={sculpture.image}
              alt={sculpture.title}
              fill
              className="object-cover"
            />
          </video>
        ) : (
          <Image
            src={sculpture.image}
            alt={sculpture.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
      <p className="mt-3 text-sm text-gray-700 text-center font-light">
        {sculpture.title}
      </p>
    </div>
  );
}

export default SculptureCard;
