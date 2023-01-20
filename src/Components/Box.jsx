function Box({ Img, text, register }) {
  return (
    <div className="header__boxes__information__box">
      <img src={`../img/${Img}.svg`} alt="information" />
      <div className="header__boxes__information__box__details">
        <h2>{register}</h2>
        <p>
          new
          <br />
          {text}
        </p>
      </div>
    </div>
  )
}

export default Box
