import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: 0;
  width: 100%;
  background: #ffffff;
  height: 40px;
  font-size: 16px;
  padding: 0 16px;

  &:focus {
    outline: 4px solid #00a09f;
    outline-offset: -4px;
  }
`;

const Nav = styled.nav`
  padding: 8px 0 64px 0;
`;

class TableOfContents extends Component {
  render() {
    const { children, searchTerm, onSearchTermChange } = this.props;
    return (
      <>
        <Input
          value={searchTerm}
          placeholder="Filter by name"
          aria-label="Filter by name"
          onChange={event => onSearchTermChange(event.target.value)}
        />
        <Nav>{children}</Nav>
      </>
    );
  }
}

export default TableOfContents;
