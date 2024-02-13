'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

// Define a component to fetch and display the video
function VideoComponent() {
  const videoPrefix = 'https://storage.googleapis.com/yf-processed-videos/';
  const videoSrc = useSearchParams().get('v');

  return <video controls src={videoPrefix + videoSrc} />;
}

// Wrap the VideoComponent in Suspense in your main component
export default function Watch() {
  return (
    <div>
      <h1>Watch Page</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <VideoComponent />
      </Suspense>
    </div>
  );
}
