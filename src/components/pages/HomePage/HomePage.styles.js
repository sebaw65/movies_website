import styled from 'styled-components';

const WHITE = '#fff';

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  width: 90vw;
`;

export const StyledMoviesList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 5px;
`;

export const MovieContainer = styled.article`
  position: relative;
`;

export const PosterImg = styled.img`
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`;

export const TitleAndYear = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const MovieTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: ${WHITE};
  margin: 0 0 8px 12px;
`;

export const MovieProdYear = styled.p`
  font-size: 0.8rem;
  width: fit-content;
  padding: 4px;
  margin: 0 0 12px 12px;
  border: 2px solid ${WHITE};
  border-radius: 12px;
  color: ${WHITE};
`;

export const MovieRating = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px;
`;
