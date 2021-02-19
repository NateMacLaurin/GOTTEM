import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Doughnut} from 'react-chartjs-2';
import { inventoryChartColors } from './InventoryChartColors';

function InventoryChart(props) {
    
    const store = useSelector((store) => store);
    const [heading, setHeading] = useState('InventoryChart Display');
    const dispatch = useDispatch();

    const options = {
        legend: {
        display: false,
        position: "right"
        },
        elements: {
        arc: {
            borderWidth: 0
        }
        }
    };

    const data = {
        maintainAspectRatio: false,
        responsive: false,
        labels: ["a", "b", "c", "d"],
        datasets: [
        {
            data: [300, 50, 100, 50],
            backgroundColor: inventoryChartColors,
            hoverBackgroundColor: inventoryChartColors
        }
        ]
    };
    /*useEffect(() => {
        dispatch({type: 'GET_CHART_DATA'});
    }, [])*/

    return (
        <div>
        <h2>{heading}</h2>
        <Doughnut data={data} options={options} />
        </div>
    );
}

export default InventoryChart;