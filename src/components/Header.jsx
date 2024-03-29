export const Header = () => {
  return (
    <header>
      <div className="wrap1216">
        <div className="header">
          <div className="header-left">
            <div className="header-left-call">
              <img src="/public/assets/img/ico/Call.svg" alt="" />
              <div style={{paddingLeft: '8px'}}>+7 952 552-52-52</div>
            </div>
            <div className="header-left-mail">
              <img src="/public/assets/img/ico/mail.svg" alt="" />
              <div style={{paddingLeft: '8px'}}>Mr.Driskell@mail.ru</div>
            </div>
          </div>
          <div className="logo">
            <div className="logo-top">mr. driskell</div>
            <div className="logo-buttom">Tattoo shop</div>
          </div>
          <div className="heder-right">
            <div className="basket">
              <div className="basket-price">372 EUR</div>
              <div className="basket-logo">
                <img src="/public/assets/img/ico/basket.svg" alt="" />
                <div className="basket-Num">17</div>
              </div>
            </div>
              <div className="like-top"></div>
            <div className="user">
              <img src="/public/assets/img/ico/user.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}