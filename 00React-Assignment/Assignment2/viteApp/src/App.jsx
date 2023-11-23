import React from 'react';
import List from './List';  

const App = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <List layout="numbered" items={items} />
      <List layout="alpha" items={items} />
      <List layout="bullet" items={items} />
    </div>
  );
};

export default App;

