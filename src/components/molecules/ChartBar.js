import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export default function ChartBar({ title, dataChart, type }) {
  const data = {
    labels: dataChart?.map((item) => item.name.substring(0, 4)),
    datasets: [
      {
        label: 'Prabayar',
        data: dataChart?.map((item) => item.vala),
        backgroundColor: 'rgba(53, 162, 235, 1)',
      },
      {
        label: 'Pascabayar',
        data: dataChart?.map((item) => item.valb),
        backgroundColor: 'rgba(255, 206, 86,1)',
      },
    ],
  };

  const options = {
    responsive: true,
    color: '#a1a1aa',
    font: {
      size: 24,
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#71717a',
          display: true,
          borderWidth: 4,
          borderColor: '#a1a1aa',
        },
        ticks: {
          min: 0,
          color: '#a1a1aa',

          // max: 1000,
          // stepSize: 200, // <----- This prop sets the stepSize
        },
      },
      x: {
        ticks: {
          color: '#a1a1aa',
        },
        grid: {
          display: false,
          borderWidth: 4,
          borderColor: '#a1a1aa',
        },
      },
    },
    plugins: {
      datalabels: {
        color: '#a1a1aa',
        anchor: 'end',
        clamp: false,
        align: 'top',
        font: {
          size: 15,
          fontWeight: 500,
        },
        offset: 5,
        opacity: function (val) {
          let value = val.dataset.data;
          return value.map((item) => {
            return item > 0 ? 1 : 0;
          });
        },
      },
      legend: {
        position: 'bottom',

        labels: {
          padding: 24,
          font: {
            size: 12,
          },
          margin: {
            top: 20,
          },
        },
      },
      title: {
        padding: {
          bottom: 32,
          top: 12,
        },
        display: true,
        text: title,
        font: {
          size: 20,
        },
      },
    },
  };

  return (
    <Bar
      height={160}
      options={options}
      plugins={[ChartDataLabels]}
      data={data}
    />
  );
}
