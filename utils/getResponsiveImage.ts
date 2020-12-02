function getResponsiveImageSizes(image) {
  // Responsive images stuff, formatting the srcset string
  // Using same sizes as ghost
  const sizes = [300, 600, 1000, 2000];
  return sizes
    .map(
      (size) => `${image.replace('images', `images/size/w${size}`)} ${size}w`
    )
    .join(', ');
}

export default getResponsiveImageSizes;
