import React from 'react';
import './CostList.css'
import CostItem from "./CostItem";

const CostList = (props) => {

    if (!props.costs.length) {
        return <h2 className='cost-list__fallback'>Costs did not find!</h2>
    }

    return (
        <ul className='cost-list'>
            {props.costs.map(cost =>
                <CostItem
                    key={cost.id}
                    date={cost.date}
                    description={cost.description}
                    amount={cost.amount}
                />
            )}
        </ul>
    );
};

export default CostList;