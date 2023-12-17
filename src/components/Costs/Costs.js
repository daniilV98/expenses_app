import React, {useState} from 'react';
import './Costs.css'
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

const Costs = (props) => {

    const [selectedYear, setSelectedYear] = useState('2023')

    const yearChangeHandler = (year) => {
        setSelectedYear(year)
    }

    const filteredCosts = props.costs.filter(d => d.date.getFullYear().toString() === selectedYear)

    return (
        <div>
            <Card className='costs' >
                <CostsFilter
                    onChangeYear={yearChangeHandler}
                    year={selectedYear}
                />
                <CostsDiagram costs={filteredCosts}/>
                <CostList costs={filteredCosts}/>
            </Card>
        </div>
    );
};

export default Costs;