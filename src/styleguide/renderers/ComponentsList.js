import React, { Component } from 'react';
import styled from 'styled-components';

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  padding-left: 16px;
`;

const ListItem = styled.li`
  font-weight: ${props => (props.isParent ? 600 : 400)};
  margin-top: ${props => (props.isParent ? '8px' : 0)};
  overflow: hidden;
`;

const Link = styled.a`
  display: inline-block;
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    color: #46d9d8;
  }

  &:focus {
    background: rgba(0, 160, 160, 0.5);
    outline: 2px solid rgba(0, 160, 160, 0.5);
    outline-offset: 0;
  }

  transition: 150ms color ease-out;
`;

class ComponentsList extends Component {
  render() {
    const { items } = this.props;

    const itemsVisible = items.filter(item => item.visibleName);

    if (!items.length) {
      return null;
    }

    return (
      <List>
        {itemsVisible.map(item => {
          const { visibleName, href, content, external, callback } = item;
          return (
            <ListItem key={href} isParent={!!content || visibleName === 'Introduction'}>
              <Link href={href} target={external ? '_blank' : undefined} onClick={callback}>
                {visibleName}
              </Link>
              {content}
            </ListItem>
          );
        })}
      </List>
    );
  }
}

export default ComponentsList;
