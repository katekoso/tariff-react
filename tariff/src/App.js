import {useState} from 'react';
import './App.css';
import Card from './assets/components/Card';
import blue from './theme-blue.module.css';
import green from './theme-green.module.css';
import red from './theme-red.module.css';
import black from './theme-black.module.css';

const data = [
  {
    price: 300,
    speed: 10,
    id: 1,
    theme: blue
  },
  {
    price: 450,
    speed: 50,
    id: 2,
    theme: green
  },
  {
    price: 550,
    speed: 100,
    id: 3, 
    theme: red,
  },
  {
    price: 1000,
    speed: 200,
    id: 4, 
    theme: black
  }
]

function App() {
  const [selectedCardId, setSelectedCardId] = useState(null);

  const handleCardClick = (id) => {
    setSelectedCardId(id);
  }
  return (
    <div className="Tariffs">
      {
        data.map((tariff) =>
            <Card price={tariff.price} speed={tariff.speed} key={tariff.id} theme={tariff.theme} isSelected={tariff.id === selectedCardId} onClick={() => handleCardClick(tariff.id)}/>
        )
      }
    </div>
  );
}

export default App;
