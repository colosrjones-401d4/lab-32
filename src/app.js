import React from 'react';

import Wagon from './components/todo/wagon';
import Todo from './components/todo/todo';
import ItemList from '../src/components/item';
import Header from '../src/components/header';

import './components/todo/todo';

function App(props) {
  return (
    <section>
       <Header /> 
      <div>
        <Todo />
      </div>
      <div>
        <ItemList />
      </div>
      <div>
        <Wagon />
      </div>
    </section>
  );
}

export default App;