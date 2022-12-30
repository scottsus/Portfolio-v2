import React from 'react';
import styled from 'styled-components';

interface IHandWave {
  fontSize?: number;
}

export default function HandWave({ fontSize }: IHandWave) {
  return <HandWaveContainer>👋</HandWaveContainer>;
}

const HandWaveContainer = styled.span`
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
  font-size: inherit;

  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @media (max-width: 450px) {
    font-size: 50px;
  }
`;
