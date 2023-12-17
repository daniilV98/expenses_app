import React, {useState} from 'react';
import './NewCost.css'
import CostForm from "./CostForm";

const NewCost = (props) => {

    const [isFormVisible, setIsFormVisible] = useState(false)

    const saveCostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData, //копия объекта которую получаем через данный параметр, извлекаем все пары ключей и значений
            id: Math.random().toString() // также добавляем к объекту новоое значение id
        }

        props.onAddCost(costData)
        setIsFormVisible(false)
    }

    const inputCostDataHandler = (value) => {
        setIsFormVisible(value)
    }

    return (
        <div className='new-cost'>
            {!isFormVisible
                ? <button onClick={inputCostDataHandler}>Add new expenses</button>
            /*название может быть любым, мы назовем onSaveCostData */
                :
                <CostForm
                    isVisible={inputCostDataHandler}
                    onSaveCostData={saveCostDataHandler}/>
            }
        </div>
    );
};

export default NewCost;