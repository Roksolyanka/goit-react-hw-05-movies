import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  padding-top: 60px;
  padding-left: 60px;
`;

export const ReviewsList = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const ReviewsLink = styled.li`
  width: 100%;
  border-radius: 6px;
  padding: 12px 20px;
  border: 1px solid rgba(227, 227, 227, 1);
  box-sizing: border-box;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const ReviewsAuthor = styled.h3`
  color: rgba(3, 37, 65, 1);
`;

export const ReviewsContent = styled.p`
  color: rgba(3, 37, 65, 1);
`;

export const CastCharacter = styled.p`
  margin-top: 0;
  color: #fff;
  font-size: 10px;
`;
