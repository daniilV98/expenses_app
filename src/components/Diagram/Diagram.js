import React from 'react';
import './Diagram.css'
import DiagramBar from "./DiagramBar";

const Diagram = (props) => {

    const dataSetsValues = props.dataSets.map(data => data.value)

    const maxMonthCosts = Math.max(...dataSetsValues) // извлекаем из массива значения перечисляя их через запятую с помощью оператора спред

    return (
        <div className='diagram'>
            {props.dataSets.map(data =>
                <DiagramBar
                    key={data.label}
                    value={data.value}
                    maxValue={maxMonthCosts}
                    label={data.label}
                />
            )}
        </div>
    );
};

export default Diagram;