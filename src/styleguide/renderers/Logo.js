import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #222;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

class Logo extends Component {
  render() {
    return (
      <Wrapper>
        <Image src="styleguide-logo.svg" alt="The Store Styleguide by Buildit" />
      </Wrapper>
    );
  }
}

export default Logo;
