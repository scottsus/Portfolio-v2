import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
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
  const { ref, inView } = useInView({ triggerOnce: true });
  useEffect(() => {
    const typedSubtitles = new Typed(`#${id}`, {
      strings: strings,
      typeSpeed: speed,
      backSpeed: 50,
      loop: loop,
    });
    if (inView) typedSubtitles.start();
    return () => typedSubtitles.destroy();
  }),
    [inView];
  return <span id={id} ref={ref} />;
}
