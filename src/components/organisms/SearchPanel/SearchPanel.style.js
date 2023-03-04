import styled from 'styled-components';

export const SearchContainter = styled.div`
  display: flex;
  height: 4rem;
  width: 100vw;
  justify-content: center;
  padding-top: 15px;
  flex-flow: row wrap;

  & > input {
    width: 90vw;
    height: 2.5rem;
    font-size: 1.8rem;
    padding-left: 10px;
    border: none;
  }

  & > input:focus {
    outline: none;
  }

  & > a {
    flex-basis: 90%;
    width: 0px;
    z-index: 20;
    background-color: white;
    color: black;
    text-decoration: none;
  }
`;
