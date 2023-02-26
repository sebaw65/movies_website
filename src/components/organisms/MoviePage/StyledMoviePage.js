import styled from 'styled-components';

export const Content = styled.article`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: repeat(10, 8vh);
  width: 80vw;
  margin: 0 auto;
  column-gap: 14px;
  row-gap: 10px;
  height: 100vh;
`;

export const PosterImg = styled.img`
  width: 100%;
  height: 100%;
  grid-column: 1/5;
  grid-row: 2/9;
  object-fit: cover;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  grid-column: 6/12;
  grid-row: 2/3;
  margin: auto 0;
`;

export const Rating = styled.div`
  grid-column: 6/7;
  grid-row: 3/4;
  display: flex;
  font-size: 1.5rem;
  justify-content: baseline;

  & > p {
    margin-left: 5px;
  }
`;

export const Runtime = styled.h3`
  grid-column: 6/8;
  grid-row: 4/5;
  display: flex;
  font-size: 1.5rem;

  & > p {
    margin-left: 5px;
  }
`;

export const ReleaseDate = styled.h3`
  font-size: 1.2rem;
  grid-column: 6/7;
  grid-row: 5/6;
  border: 2px solid #fff;
  height: fit-content;
  width: fit-content;
  padding: 5px;
  border-radius: 18px;
`;

export const Categories = styled.div`
  grid-column: 6/10;
  grid-row: 6/7;
  display: flex;

  & > p {
    font-size: 1.2rem;
    border: 2px solid #fff;
    height: fit-content;
    width: fit-content;
    border-radius: 3px;
    margin-right: 14px;
    padding: 5px;
  }
`;

export const Description = styled.p`
  font-size: 1.1rem;
  grid-column: 6/12;
  grid-row: 7/9;
`;
