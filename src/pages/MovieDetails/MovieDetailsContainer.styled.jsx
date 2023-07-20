import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieDetailsContainer = styled.div`
  padding-top: 100px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
`;

export const LinkGoBack = styled(NavLink)`
  color: rgba(3, 37, 65, 1);
  font-weight: bold;
  font-size: 25px;
`;

export const MovieDetailsWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

export const BackgroundMovie = styled.div`
  position: relative;
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.6),
      rgba(46, 47, 66, 0.6)
    ),
    url(${props => props.backgroundurl});
  background-size: cover;
  background-position: center;
  height: 850px;
`;

export const MovieDetailsImage = styled.img`
  padding-left: 20px;
  padding-top: 20px;
`;

export const MovieDetailsTitle = styled.h1`
  text-align: center;
  color: #fff;
`;

export const UserScore = styled.p`
  color: #fff;
`;

export const OverviewTitle = styled.h2`
  color: #fff;
`;

export const Overview = styled.p`
  color: #fff;
`;

export const GenresTitle = styled.h2`
  color: #fff;
`;

export const Genres = styled.p`
  color: #fff;
`;

export const AdditionalInformation = styled.h3`
  color: #fff;
`;

export const AdditionalInfoList = styled.ul`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  padding-left: 60px;
  color: #fff;
`;

export const AdditionalInfoLink = styled(NavLink)`
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
