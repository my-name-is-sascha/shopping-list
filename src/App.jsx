import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import Form from '../Form';
import Items from './Items';

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

// alternative one-liner to the getLocalStorageFunction
//const defaultList = JSON.parse(localStorage.getItem('list') || '[]');

const getLocalStorage = () => {
  let list = localStorage.getItem('list');

  if (list) {
    list = JSON.parse(localStorage.getItem('list'));
  } else {
    list = [];
  }

  return list;
};

const App = () => {
  const [items, setItems] = useState(getLocalStorage());

  const addItem = (itemName) => {
    const newItem = {
      id: nanoid(),
      name: itemName,
      completed: false,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success(`${newItem.name} added to the list`);
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item removed successfully');
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };

        return newItem;
      }

      return item;
    });

    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
};

export default App;
