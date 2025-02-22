import React from 'react';
import PhotoAlbum from 'react-photo-album';

const photos = [
  { src: "detectivedana.webp", width: 800, height: 600 },
  { src: "/images/photo2.jpg", width: 600, height: 800 },
  { src: "/images/photo3.jpg", width: 800, height: 600 },
];

const PhotoGallery = () => {
  return <PhotoAlbum layout="rows" photos={photos} />;
};

export default PhotoGallery;