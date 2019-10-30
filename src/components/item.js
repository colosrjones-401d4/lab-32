import React, {useState, useEffect} from 'react';
import useQ from './q.js';

function ItemList(props) {

  const [items,setItems] = useState([]);
  const [subscribe] = useQ('database');

  const handleNewItem = (payload) => {
    setItems( (items) => [...items, payload.record] );
  };

  useEffect( () => {
    subscribe('create', (message) => handleNewItem(message));

    fetch(process.env.REACT_APP_API)
      .then( results => results.json() )
      .then( data => setItems(data.results) )
      .catch( console.error );

  }, []);


  return (
    <ul>
      {
        items.map( (item,idx) => <li key={item._id}>{item.text}</li>)
      }
    </ul>
  );
}

export default ItemList;