import { Card } from "./Card";
import { goods } from "./Goods";

export const Main = () => {
  return (
    <main>
        <h1>Товары:</h1>
      <div className="cards">
        {
          goods.map(item => {
            return <Card key={item.id} goods={item}></Card>
          })
        }
      </div>
    </main>
  );
};
