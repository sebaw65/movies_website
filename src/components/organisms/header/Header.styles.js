import styled from 'styled-components';
import { BsCameraReels } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  display: block;

  & > nav {
    display: block;
    margin: 0 auto;
  }

  & h1 {
    font-size: 3rem;
    font-family: 'Smokum';
    margin-left: 15px;
  }
`;

export const Logo = styled(BsCameraReels)`
  height: 50px;
  width: auto;
`;

export const HomePageLink = styled(Link)`
  display: flex;
  margin: 25px 0 25px 50%;
  text-align: center;
  text-decoration: none;
  transform: translateX(-25%);
  color: #fff;

  &:visited {
    color: #fff !important;
  }
`;
