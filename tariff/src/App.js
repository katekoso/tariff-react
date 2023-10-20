import './App.css';
import Card from './assets/components/Card';
import blue from './theme-blue.css';
import green from './theme-green.css';
import red from './theme-red.css';
import black from './theme-black.css';

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
    isSelected: true
  },
  {
    price: 1000,
    speed: 200,
    id: 4, 
    theme: black
  }
]

function App() {
  return (
    <div className="Tariffs">
      <Card price="100" speed="12" key="5" theme={blue}/>
      {
        data.map((tariff) =>
            <Card price={tariff.price} speed={tariff.speed} key={tariff.id} theme={tariff.theme} isSelected={tariff.isSelected}></Card>
        )
      }
    </div>
  );
}

export default App;
