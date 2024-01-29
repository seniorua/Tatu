import { useState } from "react";

export const Card = (props) => {
  const [amount, setAmount] = useState(0);
  const [favorite, setFavorite] = useState(props.goods.favorite);
  const minusPress = () => {
    if (amount === 0) return
    setAmount(amount - 1)
  }
  const plusPress = () => {
    setAmount(amount + 1);
    
  }
  const addPress = () => {
    
  }
  const likePress = () => {
    // Почему не работает так:
    // setFavorite(prev => return !prev)
    setFavorite(prev => {return !prev})
  }
  
  return (
      <div className="card">
        <div className="card-top">
          <div className={props.goods.new ? 'new-card1' : 'new-card1 hideNew'}>
            <div className="new-card2">Новинка</div>
          </div>
          <div className="like-card" onClick={likePress}>
            <img src={favorite ? '/public/assets/img/ico/heart_active.svg' : '/public/assets/img/ico/heart.svg'} alt="" />
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