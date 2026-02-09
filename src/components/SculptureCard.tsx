'use client';

import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { ShopSculpture } from '@/data/shop-sculptures';

interface Props {
  sculpture: ShopSculpture;
  material?: string;
}

export default function SculptureCard({ sculpture, material }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <div className="group">
      <div className="aspect-[9/16] relative overflow-hidden bg-gray-100">
        {sculpture.video ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            poster={sculpture.video.poster}
            className="absolute inset-0 w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          >
            <source src={sculpture.video.webm} type="video/webm" />
            <source src={sculpture.video.preview} type="video/mp4" />
            <Image
              src={sculpture.video.poster}
              alt={sculpture.title}
              fill
              className="object-contain"
            />
          </video>
        ) : (
          <Image
            src={sculpture.image}
            alt={sculpture.title}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
      <p className="mt-3 text-sm text-gray-700 text-center font-light">
        {sculpture.title}
      </p>
      {material && (
        <p className="text-xs text-gray-500 text-center font-light">
          {material}
        </p>
      )}
    </div>
  );
}
