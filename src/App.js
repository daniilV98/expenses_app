import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import {useState} from "react";

const INITIAL_COSTS = [
    {
        id: 'c1',
        date: new Date(2021, 2, 11),
        description: 'Fridge',
        amount: 1000
    },
    {
        id: 'c2',
        date: new Date(2022, 4, 21),
        description: 'TV',
        amount: 1200
    },
    {
        id: 'c3',
        date: new Date(2023, 11, 14),
        description: 'MacBook',
        amount: 1500
    },
    {
        id: 'c4',
        date: new Date(2023, 3, 13),
        description: 'Iphone',
        amount: 1300
    }
];

const App = () => {

    const [costs, setCosts] = useState(INITIAL_COSTS)

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
        return [cost, ...prevCosts] // добавляем новый элемент в массив, и через ...prevCosts получаем предыдущую версию состояния массива
    })
  }

  return (
      <div>
        <NewCost onAddCost={addCostHandler}/>
        <Costs costs={costs}/>
      </div>
  );
}

export default App;