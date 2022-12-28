import React, { useEffect } from 'react';
import Typed from 'typed.js';

interface ITypedStrings {
  strings: string[];
}

export default function TypedStrings({ strings }: ITypedStrings) {
  useEffect(() => {
    const typedSubtitles = new Typed('#typed', {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
    typedSubtitles.start();
    return () => typedSubtitles.destroy();
  });
  return <span id='typed' />;
}
