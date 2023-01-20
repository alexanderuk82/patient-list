import FormatDate from '../Functions/FormatDate'
import Box from '../Components/Box'

function Header({patientsQty}) {
  return (
    <header className="header">
      <div className="header__top">
        <h2>patients list</h2>
        <div className="header__date">
          <img src="../img/Calendar.svg" alt="date" />
          <p className="dateText">
            <FormatDate />
          </p>
        </div>
        <button className="header__top__button">
          <img src="../img/plus-icon.svg" alt="add" />
          add patient
        </button>
      </div>

      <div className="header__boxes">
        <div className="header__boxes__welcome">
          <img src="../img/home_work.svg" alt="welcome" />
          <h3>welcome guess</h3>
          <p>
            welcome to our app!
            <br />
            we hope you have a great experience
          </p>
        </div>

        <div className="header__boxes__information">
          <Box 
          Img="user" 
          text= 'patients'
          register = {patientsQty}
          />
          <Box 
          Img="booking" 
          text= 'bookings'
          register = {2}
          />
        </div>

        <div className="header__boxes__date">
          <div className="header__date">
            <img src="../img/Calendar.svg" alt="date" />
            <p className="dateText">
              <FormatDate />
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
