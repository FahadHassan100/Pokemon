import React from "react";
import { CategoryScale, Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";

const Modal = ({ data, modalStatus }: any) => {
  const getData = data && data;

  const statsLabels = getData.stats.map((item: any) => {
    const response = item.stat.name;
    return response;
  });

  const statsData = getData.stats.map((item: any) => {
    const response = item.base_stat;
    return response;
  });

  // Data for the graph
  //   const labels = [
  //     "January",
  //     "February",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //   ];

  const labels = statsLabels;

  const graphData = {
    labels,
    datasets: [
      {
        label: "Stat",
        data: statsData,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Statuses",
      },
    },
  };

  //Chart.register(CategoryScale);
  Chart.register(...registerables);

  const handleFClick = () => {
    modalStatus(false);
    //console.log(pokemonsData);
    // const checkLabels = getData.stats;
    // checkLabels.map((item: any) => {
    //   console.log(item.stat.name);
    // });
  };

  return (
    <div>
      <div className="backdrop"></div>
      <div className="PDmodal">
        <div className="modalHeader">
          <button onClick={handleFClick}>X</button>
        </div>
        <div className="modalContent">
          {/* <div className="pimg"></div>
            {getData.name} */}
          <img src={getData.sprites.front_default} alt="Sample" />

          <div className="pokemonAbilities">
            <h3>Abilities:</h3>
            <ul>
              {getData.abilities.map((ability: any, index: number) => (
                <li key={index}>{ability.ability.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <Bar data={graphData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
