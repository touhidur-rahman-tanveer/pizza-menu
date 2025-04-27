import React, { useEffect, useState } from "react";
import Data from "../data";
import Pizza from "./Pizza";

const Pizzas = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    setDatas(Data);
  }, []);

  return (
    <div>
      <h3>--- PIZZA MENU ---</h3>
      <div className="menu">
        {datas.map((data, idx) => (
          <Pizza data={data} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Pizzas;
