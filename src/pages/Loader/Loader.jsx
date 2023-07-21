import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import { LoaderContainer } from './LoaderContainer.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="rgba(3, 37, 65, 1);"
      />
    </LoaderContainer>
  );
};
