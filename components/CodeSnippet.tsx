import React from 'react';
import styled from 'styled-components';
import TypedStrings from './TypedStrings';
import { small, medium } from '../styles/responsive';

interface ICodeSnippet {
  id: string;
  text: string[];
  speed?: number;
  width: number;
}

export default function CodeSnippet({
  id,
  text,
  speed = 50,
  width,
}: ICodeSnippet) {
  return (
    <CodeSnippetDiv width={width}>
      <TypedStrings id={id} strings={text} speed={speed} />
    </CodeSnippetDiv>
  );
}

interface ICodeSnippetDiv {
  width: number;
}

export const CodeSnippetDiv = styled.div<ICodeSnippetDiv>`
  min-width: ${(props) => props.width}px;
  min-height: 100px;
  margin-right: 35px;
  padding: 30px;
  background-color: #222632;
  border-radius: 10px;
  font-size: 16px;
  font-family: SourceCodePro;
  font-weight: 400;
  line-height: 1.5;

  :last-child {
    margin-right: 0;
  }

  #purple {
    color: #bb7cd7;
  }
  #red {
    color: #d17277;
  }
  #orange {
    color: #c99c6e;
  }
  #yellow {
    color: #dfc184;
  }
  #green {
    color: #a1c281;
  }
  #blue {
    color: #74ade9;
  }
  #teal {
    color: #6fb4c0;
  }
  #grey {
    color: #acb2be;
  }

  @media (${small}) {
    min-width: 0;
    max-width: 100%;
    font-size: 12px;
    margin: 10px 0;
    padding: 15px;
  }
`;
