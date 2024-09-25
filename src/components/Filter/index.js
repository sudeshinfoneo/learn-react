import React, { useState, useMemo, useEffect } from 'react';

const ItemList = ({ items, searchTerm }) => {
  const [user, setUser] = useState({})

  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter(item => 
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]); 

  const userLocal  = localStorage.getItem('name')

  useEffect(() => {
    if(userLocal) {
      setUser(JSON.parse(userLocal));
    }    
  },[userLocal])


  return (
    <div>
      <h2>Item List</h2>
      <p>user: {user?.name}</p>
      <p>user: {user?.role}</p>
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
<<<<<<< HEAD
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search items..." />
=======
      <p>name: </p>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search items..."/>
>>>>>>> 81b384965fdcd8d833b94aa6b480da94a50a0f8b
      <ItemList items={items} searchTerm={searchTerm} />
    </div>
  );
};

export default Filter;





