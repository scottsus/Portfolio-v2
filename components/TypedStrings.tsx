import React, { useEffect } from 'react';
import Typed from 'typed.js';

interface ITypedStrings {
  id: string;
  strings: string[];
  speed?: number;
  loop?: boolean;
}

export default function TypedStrings({
  id,
  strings,
  speed = 50,
  loop = false,
}: ITypedStrings) {
  useEffect(() => {
    const typedSubtitles = new Typed(`#${id}`, {
      strings: strings,
      typeSpeed: speed,
      backSpeed: 50,
      loop: loop,
    });
    typedSubtitles.start();
    return () => typedSubtitles.destroy();
  });
  return <span id={id} />;
}
