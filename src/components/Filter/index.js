import React, { useState, useMemo } from 'react';

const ItemList = ({ items, searchTerm }) => {

  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter(item => 
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]); 

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Filter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items] = useState(['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']);

  return (
    <div>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search items..."/>
      <ItemList items={items} searchTerm={searchTerm} />
    </div>
  );
};

export default Filter;





