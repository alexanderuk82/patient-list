function Card({ user, setPatient, deletePatient }) {
  function handleDelete() {
    const answer = confirm(
      `Are you sure you want to delete this patient ${user.fname}`
    )

    if (answer) {
      deletePatient(user.id)
    }
  }
  return (
    <div className="main__cards__card">
      <div className="main__cards__card__top">
        <div className="main__cards__card__top--years">
          <p className="tag">years</p>
          <h3>
            {user.age}
            <span>years old</span>
          </h3>
        </div>
        <div className="main__cards__card__top__action">
          <button className="btnAction" onClick={() => setPatient(user)}>
            <img src="../img/mode-edit.svg" alt="edit" />
          </button>
          <button className="btnAction" onClick={() => handleDelete()}>
            <img src="../img/Delete.svg" alt="edit" />
          </button>
        </div>
      </div>
      <div className="main__cards__card__info">
        <p className="main__cards__card__info--title">symptoms</p>
        <p className="main__cards__card__info--text">{user.symptoms}</p>
      </div>
      <div className="main__cards__card__footer">
        <img src="../img/user.svg" alt="user" />
        <div className="main__cards__card__footer__info">
          <p className="main__cards__card__footer__info--title">patient name</p>
          <p className="main__cards__card__footer__info--name">
            {user.fname} {user.surname}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
