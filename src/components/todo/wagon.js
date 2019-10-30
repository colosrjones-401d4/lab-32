import React from 'react';

import useForm from '../form';

const API = 'https://mongo-api-server.herokuapp.com/api/v1/todo';

function Wagon(props) {
  const [handleChange, handleSubmit] = useForm(saveFormDataToServer);
  const products = ['Cowboys', 'Boots', 'Men Shirts'];

  function saveFormDataToServer(formData) {
    let json = JSON.stringify(formData);
    fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: json,
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(console.error);
  }

  return (
    <form
      onSubmit={handleSubmit}
      method="post"
      action="https://mongo-api-server.herokuapp.com/api/v1/todo"
    >
      <label>
        <input
          onChange={handleChange}
          placeholder="Item"
          name="item"
          type="text"
        />
      </label>
      <label>
        <span>Product</span>
        <select onChange={handleChange} name="product">
          <option />
          {products.map((product, idx) => (
            <option value={product} key={idx}>
              {product}
            </option>
          ))}
        </select>
      </label>
      <label>
        <input
          onChange={handleChange}
          placeholder="Wild West Warehouse"
          name="store"
          type="text"
        />
      </label>
      <label>
        <input
          onChange={handleChange}
          name="purchased"
          type="radio"
          value="true"
        />
        Yes
      </label>
      <label>
        <input
          onChange={handleChange}
          name="purchased"
          type="radio"
          value="false"
        />
        No
      </label>
      <button>Add to the list</button>
    </form>
  );
}

export default Wagon;