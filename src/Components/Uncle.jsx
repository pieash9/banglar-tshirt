import React, { useContext } from "react";
import Cousin from "./Cousin";
import { MoneyContext } from "./Grandpa";

const Uncle = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div className="border border-blue-500 rounded">
      uncle
      <p>Grandpa Money: {money}</p>
      <button onClick={() => setMoney(money + 1000)} className="btn btn-sm">
        Send 1000 taka
      </button>
      <div className="p-5 flex gap-3">
        <Cousin>Nabil</Cousin>
        <Cousin>Nabila</Cousin>
      </div>
    </div>
  );
};

export default Uncle;
