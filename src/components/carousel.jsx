"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Carousel({ images, interval = 1500 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-48 overflow-hidden">
      {images.map((image, index) => (
        <div key={index} className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? "opacity-100" : "opacity-0"}`}>
          <Image src={image.src} alt={image.alt} layout="fill" objectFit="contain" />
        </div>
      ))}
    </div>
  );
}
