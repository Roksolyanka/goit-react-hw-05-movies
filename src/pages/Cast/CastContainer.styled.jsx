import styled from 'styled-components';

export const CastContainer = styled.div`
  padding: 15px;
`;

export const CastList = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const CastLink = styled.li`
  width: 150px;
  height: 200px;
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

export const CastPhoto = styled.img`
  border-radius: 5px;
  max-width: 100%;
`;

export const CastInfo = styled.div`
  position: absolute;
  bottom: 0;
  padding-left: 12px;
  padding-right: 12px;
`;

export const CastName = styled.p`
  margin: 0;
  color: #fff;
  font-size: 12px;
`;

export const CastCharacter = styled.p`
  margin-top: 0;
  color: #fff;
  font-size: 10px;
`;
