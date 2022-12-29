import React, { useEffect } from 'react';
import Typed from 'typed.js';

interface ITypedStrings {
  id: string;
  strings: string[];
  loop?: boolean;
}

export default function TypedStrings({
  id,
  strings,
  loop = false,
}: ITypedStrings) {
  useEffect(() => {
    const typedSubtitles = new Typed(`#${id}`, {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
      loop: loop,
    });
    typedSubtitles.start();
    return () => typedSubtitles.destroy();
  });
  return <span id={id} />;
}
