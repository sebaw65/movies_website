import styled, { css } from 'styled-components';

const WHITE = '#fff';

const SELECTED = {
  true: css`
    filter: brightness(0.4);
    transform: scale(1.1);
  `,
};

export const MovieContainer = styled.article`
  position: relative;
  overflow: hidden;
  border-radius: 3px;
  cursor: pointer;
`;

export const PosterImg = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.25s, visibility 0.25s ease-in;

  ${({ isHovered }) => isHovered && SELECTED.true}
`;

export const MovieDetails = styled.div`
  box-shadow: inset 0px 0px 75px 1px rgba(66, 68, 90, 1);
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
  margin: 0 0 18px 12px;
  border: 2px solid ${WHITE};
  border-radius: 12px;
  color: ${WHITE};
`;

export const MovieRating = styled.div`
  color: ${WHITE};
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px;
  font-size: 1.2rem;
  gap: 5px;
`;
