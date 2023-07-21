import styled from 'styled-components';

export const ButtonLoadMore = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  background-color: rgba(3, 37, 65, 1);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  width: 180px;
  margin: 0 auto;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background: linear-gradient(
      to bottom,
      rgba(3, 37, 65, 1),
      #e4e4d9,
      rgba(3, 37, 65, 1)
    );
    color: rgba(3, 37, 65, 1);
    border: 1px solid rgba(3, 37, 65, 1);
    box-shadow: 10px 10px 5px -5px rgba(3, 37, 65, 1);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justifycontent: center;
  margin: 20px 0;
`;
