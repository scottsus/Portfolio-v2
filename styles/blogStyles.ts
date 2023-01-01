import styled from 'styled-components';
import { small, medium } from './responsive';

export const BlogDiv = styled.section``;

export const SectionHeading = styled.h2`
  font-size: 40px;
  font-family: Kamerik;
  font-weight: 700;
  margin: 80px auto 50px;

  @media (${small}) {
    margin: 80px auto 30px;
  }
`;

export const Featured = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (${small}) {
    flex-direction: column;
  }
`;

const featuredStandardAttributes = `
  width: 285px;
  height: 365px;
  border: 5px solid transparent;
  border-radius: 10px;
  background-origin: border-box;
  background-clip: padding-box, border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const FeaturedBoxLeft = styled.div`
  ${featuredStandardAttributes}
  background-image: linear-gradient(#171a21, #171a21),
  linear-gradient(128.61deg, #ef4439 -1.3%, #d131a4 107.39%);
`;

export const FeaturedBoxCenter = styled.div`
  ${featuredStandardAttributes}
  background-image: linear-gradient(#171a21, #171a21),
  linear-gradient(133.89deg, #c0327f -7.34%, #b631e4 104.15%);

  @media (${small}) {
    margin: 20px 0;
  }
`;

export const FeaturedBoxRight = styled.div`
  ${featuredStandardAttributes}
  background-image: linear-gradient(#171a21, #171a21), 
  linear-gradient(
    133.06deg,
    #b816e0 -1.11%,
    #153fd3 52.54%,
    #14ce96 101.15%
  );
`;

export const AllPosts = styled.section`
  height: 100%;
`;

export const Blog = styled.div`
  height: 100%;
  margin-bottom: 80px;
`;

export const BlogTitle = styled.h2`
  font-size: 27px;
  font-family: Articulat, Arial;
  font-weight: 600;
  margin: 0;

  @media (${small}) {
    font-size: 24px;
  }
`;

export const BlogContent = styled.p`
  font-size: 21px;
  font-family: Articulat, Arial;
  font-weight: 400;
  color: #bcbcbc;
  margin: 30px 0;

  @media (${small}) {
    margin: 20px 0;
  }
`;

export const ReadTime = styled.p`
  font-size: 21px;
  font-family: Articulat, Arial;
  font-weight: 400;
  color: #ababab;
  margin-bottom: 0;
  margin-top: auto;
`;

export const ReadAll = styled.h3`
  width: 65%;
  font-size: 27px;
  font-family: Articulat, Arial;
  font-weight: 400;
  text-align: center;
  margin: 80px auto;
`;
