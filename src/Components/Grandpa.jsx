import React, { createContext, useState } from "react";
import Father from "./Father";
import Uncle from "./Uncle";
import Aunty from "./Aunty";

export const RingContext = createContext("gold");
export const MoneyContext = createContext(0);

const Grandpa = () => {
  const ring = "diamond";
  const [money, setMoney] = useState(0);

  return (
    <div className="text-center border border-blue-500 rounded w-fit mx-auto p-10">
      <h3 className="text-2xl font-bold">Grandpa</h3>
      <p>Has Money: {money}</p>
      <MoneyContext.Provider value={[money,setMoney]}>
        <RingContext.Provider value="golden Ring">
          <section className="flex gap-5 justify-center mt-5">
            <Father ring={ring} />
            <Uncle />
            <Aunty ring={ring} />
          </section>
        </RingContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;

/* 
1. Create a context & export
2. Create a provider and pass a value
3. use context to receive the value
*/
