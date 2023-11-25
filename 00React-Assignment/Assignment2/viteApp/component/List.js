import React from 'react';

const List = ({ layout, items }) => {
  let listItems;

  // Render the list based on the layout prop
  switch (layout) {
    case 'experience':
      listItems = items.map((item, index) => <li key={index}>{item}</li>);
      return <ol>{listItems}</ol>;

    case 'education':
      listItems = items.map((item, index) => (
        <li key={index}>{`${String.fromCharCode(65 + index)}. ${item.year} - ${item.degree} at ${item.institution}`}</li>
      ));
      return <ol>{listItems}</ol>;

    case 'skills':
      listItems = items.map((item, index) => <li key={index}>{item}</li>);
      return <ul>{listItems}</ul>;

    default:
      return null;
  }
};

export default List;


