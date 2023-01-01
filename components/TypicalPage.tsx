import styled from 'styled-components';
import { small, medium } from '../styles/responsive';

export const Title = styled.h1`
  font-size: 65px;
  font-family: Kamerik, Arial;
  font-weight: 700;
  margin: 60px auto 40px;

  @media (${small}) {
    font-size: 35px;
    margin: 40px auto 30px;
  }
`;

export const Subtitle = styled.p`
  font-size: 21px;
  font-family: Articulat, Arial;
  font-weight: 400;
  color: #bcbcbc;
  margin: 15px 0;
`;
