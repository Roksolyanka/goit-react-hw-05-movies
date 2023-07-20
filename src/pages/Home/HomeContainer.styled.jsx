import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding-top: 60px;
  padding-left: 60px;
`;

export const HomeTitle = styled.h1`
  color: rgba(3, 37, 65, 1);
`;

export const HomeList = styled.ul`
  display: flex;
  list-style: none;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const HomeLink = styled.li`
  width: 224px;
  height: 325px;
  cursor: pointer;
  border-radius: 5px;
  position: relative;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #0000 63.48%, #000000e6 92.16%);
    border-radius: 5px;
    position: absolute;
  }
`;

export const Image = styled.img`
  border-radius: 5px;
  max-width: 100%;
`;

export const MovieTitle = styled.p`
  position: absolute;
  bottom: 0;
  padding-left: 12px;
  padding-right: 12px;
  color: #fff;
`;
