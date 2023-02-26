import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  width: 90vw;
`;

export const StyledMoviesList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 5px;
  row-gap: 5px;
`;
