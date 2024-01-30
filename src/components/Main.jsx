import { Card } from "./Card";
import { useContext } from "react";
import { StoreContext } from "../App";

export const Main = () => {
  const { goods_, setGoods_, setBasket} = useContext(StoreContext);
  return (
    <main>
      <h1>Товары:</h1>
      <div className="cards">
        {goods_.map((item) => {
          return (
            <Card
              key={item.id}
              goods={item}
              setGoods={setGoods_}
              setBasket={setBasket}
            ></Card>
          );
        })}
      </div>
    </main>
  );
};
