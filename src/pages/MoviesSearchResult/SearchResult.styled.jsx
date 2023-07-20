import styled from 'styled-components';

export const SearchResultContainer = styled.div`
  padding: 15px;
`;

export const SearchResultList = styled.ul`
  display: flex;
  list-style: none;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SearchResultLink = styled.li`
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
