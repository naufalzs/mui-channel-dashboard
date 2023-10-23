import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  LineController,
  Title,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  LineController,
  Title,
  Tooltip,
  Filler
);

import { faker } from "@faker-js/faker";

/** @type {import("chart.js").ChartOptions} */
export const mainChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      position: "right",
      ticks: {
        maxTicksLimit: 6,
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        maxTicksLimit: 3,
        align: "inner",
      },
    },
  },
  point: false,
  elements: {
    point: {
      pointStyle: false,
    },
    line: {
      borderColor: "rgb(95, 158, 199)",
      fill: true,
      borderWidth: 1.5,
    },
  },
};

const days = [
  "Jan 19, 2023",
  "Jan 20, 2023",
  "Jan 21, 2023",
  "Jan 22, 2023",
  "Jan 23, 2023",
  "Jan 24, 2023",
  "Jan 25, 2023",
  "Jan 26, 2023",
  "Jan 27, 2023",
  "Jan 28, 2023",
  "Jan 29, 2023",
  "Jan 30, 2023",
  "Jan 31, 2023",
  "Feb 1, 2023",
  "Feb 2, 2023",
  "Feb 3, 2023",
  "Feb 4, 2023",
  "Feb 5, 2023",
  "Feb 6, 2023",
  "Feb 7, 2023",
  "Feb 8, 2023",
  "Feb 9, 2023",
  "Feb 10, 2023",
  "Feb 11, 2023",
  "Feb 12, 2023",
  "Feb 13, 2023",
  "Feb 14, 2023",
  "Feb 15, 2023",
];

/** @type {import("chart.js").ChartData} */
export const getMainChartData = () => {
  return {
    labels: days,
    datasets: [
      {
        label: "Values",
        data: days.map(() => faker.number.int({ min: 600, max: 1000 })),
        backgroundColor: "rgba(161, 207, 237, 0.5)",
        animation: false,
      },
    ],
  };
};
