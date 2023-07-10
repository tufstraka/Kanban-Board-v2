'use client'

import { useState } from 'react';
import Card from './components/column';

const HomePage: React.FC = () => {
  const [columns, setColumns] = useState([]);
  

  return (
    <div>
      <h1>KanBan Board</h1>
      <Card
        title="Example Card"
        description="This is an example card using Material-UI and TypeScript."
      />
    </div>
  );
};

export default HomePage;
