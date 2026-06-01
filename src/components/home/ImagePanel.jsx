import referenceImage from '../../assets/images/philoveey-reference.jpeg'

function ImagePanel({
  alt = '',
  className = '',
  position = 'center',
  src = referenceImage,
  children,
}) {
  return (
    <div className={`image-panel ${className}`}>
      <img
        src={src}
        alt={alt}
        aria-hidden={alt ? undefined : true}
        style={{ objectPosition: position }}
      />
      {children}
    </div>
  )
}

export default ImagePanel
