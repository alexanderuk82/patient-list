import Card from '../Components/Card'

function Main({
  setPopUp,
  patientsQty,
  patients,
  patient,
  setPatient,
  deletePatient,
}) {
  return (
    <main className="main">
      <div className="main__cards">
        {patientsQty > 0 ? (
          <>
            {patients.map((user) => {
              return (
                <Card
                  user={user}
                  patient={patient}
                  setPatient={setPatient}
                  key={user.id}
                  deletePatient={deletePatient}
                />
              )
            })}
          </>
        ) : (
          <div className="empty">
            <h4>There are no patients registered at this time</h4>
            <p>Start by registering one</p>

            <img src="../img/register.svg" alt="register" />
          </div>
        )}
      </div>
      <div className="btn-float">
        <button onClick={() => setPopUp(true)}>
          <img src="../img/plus-icon.svg" alt="" />
        </button>
      </div>
    </main>
  )
}

export default Main
