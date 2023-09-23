'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import placesData from '@/data/places.json';
import Blog from '@/components/blog-body/blog';

export default function page() {
  const { id } = useParams() as any;
  const place = placesData.places[id];
  return (
    <>
      <Blog place={place} />
    </>
  );
}
