import { useEffect, useState } from 'react'
import Header from './section/Header'
import Main from './section/Main'
import Footer from './section/Footer'
import Form from './Components/Form'

function App() {
  const [popUp, setPopUp] = useState(false)
  const [patients, setPatients] = useState(
    JSON.parse(localStorage.getItem('patients')) ?? []
  )
  const patientsQty = patients.length
  const [patient, setPatient] = useState({})

  function deletePatient(id) {
    const newList = patients.filter((patient) => patient.id !== id)
    setPatients(newList)
  }

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])
  return (
    <div className="container">
      <Header patientsQty={patientsQty} />
      <Main
        setPopUp={setPopUp}
        patientsQty={patientsQty}
        patients={patients}
        setPatient={setPatient}
        patient={patient}
        deletePatient={deletePatient}
      />
      <Footer />
      <Form
        popUp={popUp}
        setPopUp={setPopUp}
        patients={patients}
        setPatients={setPatients}
        patient={patient}
        setPatient={setPatient}
      />
    </div>
  )
}

export default App
