import React, { useState } from 'react';

type ImageProps= {
  src: string,
  alt: string,
  className: string
}

const Image = ({ src , alt , className, ...props }: ImageProps): JSX.Element => {
    const [source, setSource] = useState(src); 
  
    // Fallback Image.
    const onError = () => {
      setSource('/images/car-default.png');
    }
  
    return (
      <img
        className={className}
        src={source}
        alt={alt}
        onError={onError}
        {...props}
      />
    );
  };
 
export default Image;  