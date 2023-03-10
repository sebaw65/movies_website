import styled from 'styled-components';

export const Content = styled.article`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  /* grid-template-rows: repeat(20, 1fr); */
  grid-auto-rows: fit-content;
  width: 80vw;
  margin: 0 auto;
  column-gap: 14px;
  row-gap: 10px;

  & > img {
    /* box-sizing: ; */
    height: 100%;
    width: 100%;
    grid-column: 1/1;
    grid-row: 2 / 10;
    object-fit: cover;
  }

  & > h1 {
    font-size: 2.2rem;
    grid-column: 2;
    grid-row: 2;
    margin: auto 0;
  }
`;

export const Rating = styled.div`
  grid-column: 2;
  grid-row: 5;
  display: flex;
  font-size: 1.5rem;
  justify-content: baseline;
  align-items: bottom;
  & > p {
    margin-left: 5px;
  }
`;

export const Runtime = styled.h3`
  grid-column: 2;
  grid-row: 6;
  display: flex;
  font-size: 1.5rem;
  & > p {
    margin-left: 5px;
    white-space: nowrap;
  }
`;

export const ReleaseDate = styled.h3`
  font-size: 1.2rem;
  grid-column: 2;
  grid-row: 4;
  border: 2px solid #fff;
  height: fit-content;
  width: fit-content;
  padding: 5px;
  border-radius: 18px;
`;

export const Categories = styled.div`
  grid-column: 2;
  grid-row: 7;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  & > p {
    font-size: 1.2rem;
    border: 2px solid #fff;
    height: fit-content;
    width: fit-content;
    border-radius: 3px;
    margin-right: 14px;
    margin-bottom: 10px;
    padding: 5px;
    white-space: nowrap;
    /* overflow-x: hidden; */
  }
`;

export const Description = styled.p`
  font-size: 1.1rem;
  grid-column: 2;
  grid-row: 9/10;
`;
