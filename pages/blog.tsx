import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { Title, Subtitle } from '../components/TypicalPage';

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <Title>A glimpse into my mind...</Title>
      <Subtitle>
        I&apos;m not a good writer - being a multilingual in 3 languages, 1
        dialect, and N programming languages has made me a Jack of all trades,
        but master of none - but that doesn&apos;t mean I won&apos;t try.
      </Subtitle>
      <Subtitle>
        Here you have access to my unorganized thoughts and bad English, but if
        I were a betting man, I&apos;d say that I&apos;m at the exponentially
        increasing part of a sigmoid curve in my writing journey.
      </Subtitle>
      <SectionHeading>Featured</SectionHeading>
      <Featured>
        <FeaturedBoxLeft>
          <BlogTitle>
            My experience using Go for my internship at Sourcegraph
          </BlogTitle>
          <ReadTime>5 min read</ReadTime>
        </FeaturedBoxLeft>
        <FeaturedBoxCenter>
          <BlogTitle>
            Why Christopher Nolan is undisputably the best movie director of all
            time, even before Oppenheimer
          </BlogTitle>
          <ReadTime>8 min read</ReadTime>
        </FeaturedBoxCenter>
        <FeaturedBoxRight>
          <BlogTitle>Top 5 books to read in 2023</BlogTitle>
          <ReadTime>2 min read</ReadTime>
        </FeaturedBoxRight>
      </Featured>
      <SectionHeading>All Posts</SectionHeading>
      <AllPosts>
        <Blog>
          <BlogTitle>My thoughts on NextJS vs React/Express</BlogTitle>
          <BlogContent>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
            tempora in reprehenderit eaque nobis eum a cumque temporibus
            voluptatem aliquam facilis sed, labore sint praesentium alias
            voluptas optio dicta necessitatibus.
          </BlogContent>
          <ReadTime>3 min read</ReadTime>
        </Blog>
        <Blog>
          <BlogTitle>Computer Engineering & Computer Science</BlogTitle>
          <BlogContent>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            adipisci perferendis autem labore, repellendus repellat, veniam
            tempora, neque hic magni iste laboriosam facilis est fuga officiis
            nisi architecto excepturi alias.
          </BlogContent>
          <ReadTime>2 min read</ReadTime>
        </Blog>
        <Blog>
          <BlogTitle>
            WRIT 340, Emily Artiano, and Synchronous Classes
          </BlogTitle>
          <BlogContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique
            voluptates repellendus veritatis eos incidunt error beatae nemo
            magni voluptatibus doloremque earum aspernatur deserunt sunt dicta,
            nam quam suscipit expedita?
          </BlogContent>
          <ReadTime>4 min read</ReadTime>
        </Blog>
      </AllPosts>
      <ReadAll>
        You&apos;ve read all my posts! Thank you for reading, fellow blogger!
        🚀🚀
      </ReadAll>
    </>
  );
}

const SectionHeading = styled.h2`
  font-size: 50px;
  font-family: Kamerik;
  font-weight: 700;
  margin: 80px auto 50px;
`;

const Featured = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const featuredStandardAttributes = `
    max-width: 320px;
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

const FeaturedBoxLeft = styled.div`
  ${featuredStandardAttributes}
  background-image: linear-gradient(#171a21, #171a21),
    linear-gradient(128.61deg, #ef4439 -1.3%, #d131a4 107.39%);
`;

const FeaturedBoxCenter = styled.div`
  ${featuredStandardAttributes}
  background-image: linear-gradient(#171a21, #171a21),
    linear-gradient(133.89deg, #c0327f -7.34%, #b631e4 104.15%);
`;

const FeaturedBoxRight = styled.div`
  ${featuredStandardAttributes}
  background-image: linear-gradient(#171a21, #171a21), 
    linear-gradient(
      133.06deg,
      #b816e0 -1.11%,
      #153fd3 52.54%,
      #14ce96 101.15%
    );
`;

const Blog = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 80px;
`;

const BlogTitle = styled.h2`
  font-size: 30px;
  font-family: Articulat, Arial;
  font-weight: 600;
  margin: 0;
`;

const BlogContent = styled.p`
  font-size: 21px;
  font-family: Articulat, Arial;
  font-weight: 400;
  margin: 30px 0;
`;

const ReadTime = styled.p`
  font-size: 21px;
  font-family: Articulat, Arial;
  font-weight: 400;
  color: #eaeaea;
  margin-bottom: 0;
  margin-top: auto;
`;

const AllPosts = styled.section`
  width: 100%;
`;

const ReadAll = styled.h3`
  width: 65%;
  font-size: 27px;
  font-family: Articulat, Arial;
  font-weight: 400;
  text-align: center;
  margin: 80px auto;
`;
