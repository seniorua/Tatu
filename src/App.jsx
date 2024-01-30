import { useState } from "react";
import { createContext } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { goods } from "./components/Goods";

export const StoreContext = createContext('');

export const App = () => {
  const [goods_, setGoods_] = useState(goods);
  const [basket, setBasket] = useState(0);
  const ctxObj = {
    goods_,
    setGoods_,
    basket,
    setBasket,
  }
  return (
    <div>
      <StoreContext.Provider value={ctxObj}>
        <Header>Header</Header>
        <div className="wrap1216">
          <Main>Main</Main>
        </div>
        <Footer>Footer</Footer>
      </StoreContext.Provider>
    </div>
  );
};