import React from 'react';

export default ({ children, current }) => {
  return children.map((child, index) => {
    if (index === current) {
      return child;
    }
  })
}