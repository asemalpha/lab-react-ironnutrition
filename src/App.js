import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './FoodBox.js';
import AddFoodForm from './AddFoodFrom';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [input, setInput] = useState('');
  const [showForm, setShowForm] = useState('');

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <label>Search by Food Name: </label>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <hr />
      {showForm && (
        <AddFoodForm foodList={foodList} setFoodList={setFoodList} />
      )}
      <div>
        <button onClick={toggleForm}>
          {showForm ? 'Hide Form' : 'Add New Food'}
        </button>
      </div>

      <hr />
      {foodList
        .filter((foodItem) => {
          return foodItem.name
            .toLocaleLowerCase()
            .includes(input.toLocaleLowerCase());
        })
        .map((foodItem) => {
          return (
            <div key={foodItem.name}>
              <FoodBox food={foodItem} setFoodList={setFoodList} />
            </div>
          );
        })}
    </div>
  );
}

export default App;
