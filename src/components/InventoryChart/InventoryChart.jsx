import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Doughnut} from 'react-chartjs-2';
import { inventoryChartColors } from './InventoryChartColors';

function InventoryChart(props) {
    const [heading, setHeading] = useState('InventoryChart Display');
    const dispatch = useDispatch();
    const masterChartData = useSelector((store) => store.chartData);

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
        labels: [],
        datasets: [
        {
            data: [],
            backgroundColor: inventoryChartColors,
            hoverBackgroundColor: inventoryChartColors
        }
        ]
    };

    useEffect(() => {
        dispatch({ type: 'GET_CHART_DATA' });
        {props.masterChartData? 
            props.masterChartData.forEach(datamap => {
            data.labels.push(datamap.type_name);
            data.datasets[0].data.push(parseInt(datamap.total_types));
        }) : 
            masterChartData.forEach(datamap => {
            data.labels.push(datamap.type_name);
            data.datasets[0].data.push(parseInt(datamap.total_types));
        })}
        
        }, [dispatch]);

    return (
        <div>
        <h2>{heading}</h2>
        <Doughnut data={data} options={options} />
        </div>
    );
}

export default InventoryChart;