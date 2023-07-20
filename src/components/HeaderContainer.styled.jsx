import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(3, 37, 65, 1);
  z-index: 10;
  transition: top 0.2s linear;
`;

export const HeaderList = styled.ul`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  padding-left: 60px;
  color: #fff;
`;

export const Link = styled(NavLink)`
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
  color: #fff;
  text-decoration: none;
  border-radius: 30px;
  border: 1px solid #fff;
  border-spacing: 0;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;

  &.active {
    color: rgba(3, 37, 65, 1);
    background-color: #fff;
  }
`;
