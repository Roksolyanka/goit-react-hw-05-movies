import styled from 'styled-components';

export const MoviesContainer = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MoviesForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: rgb(255, 255, 255);
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid rgba(3, 37, 65, 1);
  box-shadow: rgba(3, 37, 65, 1) 10px 10px 5px -5px;
`;

export const MoviesButton = styled.button`
  width: 48px;
  height: 48px;
  border: 0px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  cursor: pointer;
  outline: none;
  background-color: rgb(228, 228, 217);
`;

export const MoviesInput = styled.input`
  display: inline-block;
  width: 100%;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
`;
