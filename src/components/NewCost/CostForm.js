import React, {useState} from 'react';
import './CostForm.css'

const CostForm = (props) => {

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    const nameChangeHandler = (event) => {
        setName(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault() // позволяет не перезагружать страницу заново при нажатии на submit

        const costData = {
            description: name,
            amount: amount,
            date: new Date(date)
        }

        props.onSaveCostData(costData) // способ коммуникации от наследника к родителю(по иерархии вверх)

        setName('') // сохраняем новое значения в поля инпутов после нажатия на submit
        setAmount('')
        setDate('')
    }

    const cancelHandler = () => {
        props.isVisible(false)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-cost__controls'>
                <div className='new-cost__control'>
                    <label>Label</label>
                    <input
                        type="text"
                        onChange={nameChangeHandler}
                        value={name} // переустанавливаем новое значение в инпуте, двустороннее связывание
                    />
                </div>
                <div className='new-cost__control'>
                    <label>Sum</label>
                    <input
                        type="number"
                        min='0.01'
                        step='0.01'
                        onChange={amountChangeHandler}
                        value={amount}
                    />
                </div>
                <div className='new-cost__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        onChange={dateChangeHandler}
                        value={date}
                    />
                </div>
                <div className='new-cost__actions'>
                    <button type='submit'>Add expenses</button>
                </div>
                <div className='new-cost__actions'>
                    <button onClick={cancelHandler} type='button'>Cancel</button>
                </div>
            </div>
        </form>
    );
};

export default CostForm;