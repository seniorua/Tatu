import { useState } from "react";
import { useContext } from "react";
import { StoreContext } from "../App";

export const Card = (props) => {
  const data = useContext(StoreContext);
  const [amount, setAmount] = useState(0);
  // const [numGoods, setNumGoods] = useState(0);
  // const addedGoods = [];
  // //const [favorite, setFavorite] = useState(props.goods.favorite);
  const minusPress = () => {
    if (!amount) return
    setAmount(amount - 1)

  }
  const plusPress = () => {
    setAmount(amount + 1);
    
  }
  const addPress = () => {
    props.setBasket(prev => {
      return {
        amounts: prev.amounts + amount * props.goods.price,
        total: prev.total + amount,
      }
    })
    setAmount(0)
  }
  const likePress = () => {
    props.setGoods(prev => {
      const temp = [...prev];
      temp.forEach(item => {
        if(props.goods.id === item.id){
          item.favorite = !item.favorite;
        }
      })
      return temp;
    });
  }
  
  return (
      <div className="card">
        <div className="card-top">
          <div className={props.goods.new ? 'new-card1' : 'new-card1 hide'}>
            <div className="new-card2">Новинка</div>
          </div>
          <div className="like-card" onClick={likePress}>
            <img src={props.goods.favorite ? '/public/assets/img/ico/heart_active.svg' : '/public/assets/img/ico/heart.svg'} alt="" />
          </div>
        </div>
        <div className="goods-img">
          <img src={`/public/assets/img/${props.goods.pic}`} alt="" />
        </div>
        <div className="card-middle">
          <p>{props.goods.description}</p>
          <h3 className="price">{props.goods.price} EUR</h3>
        </div>
        <div className="card-buttons">
          <div className="total">{amount ? `Заказ на: ${amount * props.goods.price} EUR` : ''}</div>
          <div className="card-add-wrap">
            <div className="card-add-wrap1">
              <button className="card-add" onClick={addPress}>В корзину</button>
            </div>
          </div>
          <div className="card-counter">
            <button className="minus" onClick={minusPress}>-</button>
            <div className="amount">{amount}</div>
            <button className="plus" onClick={plusPress}>+</button>
          </div>
        </div>
      </div>
  );
};