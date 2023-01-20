import { useState, useEffect } from 'react'

function Form({ popUp, setPopUp, patients, setPatients, patient, setPatient }) {
  const [fname, setFname] = useState('')
  const [nameErr, setNameErr] = useState(false)
  const [surname, setSurname] = useState('')
  const [surnameErr, setSurnameErr] = useState(false)
  const [email, setEmail] = useState('')
  const [emailErr, setEmailErr] = useState(false)
  const [age, setAge] = useState('')
  const [ageErr, setAgeErr] = useState(false)
  const [symptoms, setSymptoms] = useState('')
  const [symptomsErr, setSymptomsErr] = useState(false)

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setPopUp(true)
      setFname(patient.fname)
      setSurname(patient.surname)
      setEmail(patient.email)
      setAge(patient.age)
      setSymptoms(patient.symptoms)
    }
  }, [patient])

  function generateId() {
    const array = new Uint32Array(5)
    window.crypto.getRandomValues(array)
    return Array.from(array, (value) => value.toString(36)).join('')
  }

  function checkFieldName(e) {
    if (e.target.value === '') {
      setNameErr(true)
    } else {
      setNameErr(false)
      setFname(e.target.value)
    }
  }
  function checkFieldSurname(e) {
    if (e.target.value === '') {
      setSurnameErr(true)
    } else {
      setSurnameErr(false)
      setSurname(e.target.value)
    }
  }
  function checkFieldEmail(e) {
    if (e.target.value === '') {
      setEmailErr(true)
    } else {
      setEmailErr(false)
      setEmail(e.target.value)
    }
  }
  function checkFieldAge(e) {
    if (e.target.value === '') {
      setAgeErr(true)
    } else {
      setAgeErr(false)
      setAge(e.target.value)
    }
  }
  function checkFieldSymptoms(e) {
    if (e.target.value === '') {
      setSymptomsErr(true)
    } else {
      setSymptomsErr(false)
      setSymptoms(e.target.value)
    }
  }

  function handleCancel() {
    setPopUp(false)
    setNameErr(false)
    setSurnameErr(false)
    setEmailErr(false)
    setAgeErr(false)
    setSymptomsErr(false)
  }

  //Submit handless

  function handleSubmit(e) {
    e.preventDefault()

    if ([fname, surname, email, age, symptoms].includes('')) {
      if (fname === '') {
        setNameErr(true)
      }
      if (surname === '') {
        setSurnameErr(true)
      }
      if (age === '') {
        setAgeErr(true)
      }
      if (email === '') {
        setEmailErr(true)
      }
      if (symptoms === '') {
        setSymptomsErr(true)
      }

      return
    }
    const objectPatients = {
      fname,
      surname,
      email,
      age,
      symptoms,
    }

    // Filtering the patient edited

    if (patient.id) {
      objectPatients.id = patient.id
      const edited = patients.map((patientState) =>
        patientState.id === patient.id ? objectPatients : patientState
      )
      setPatients(edited)
      setPatient({})
      setPopUp(false)
      return
    } else {
      objectPatients.id = generateId()
      setPatients([objectPatients, ...patients])
    }

    setPatients([objectPatients, ...patients])
    setFname('')
    setSurname('')
    setEmail('')
    setAge('')
    setSymptoms('')
  }

  return (
    <>
      {popUp ? (
        <div className="overlay visible">
          <div className="popup visibleform">
            <h2>register a new patient</h2>

            <form action="#" className="form">
              {(onsubmit = (e) => handleSubmit(e))}
              <div className="form__field">
                <label htmlFor="name" className="form__field__label">
                  first name
                </label>

                {nameErr === true ? (
                  <>
                    <input
                      type="text"
                      id="name"
                      placeholder="write your first name"
                      className="form__field__input inputError"
                      value={fname}
                      onChange={(e) => checkFieldName(e)}
                    />

                    <p className="showError">this first name is required</p>
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      id="name"
                      placeholder="write your first name"
                      className="form__field__input"
                      value={fname}
                      onChange={(e) => checkFieldName(e)}
                    />

                    <p className="hideError"></p>
                  </>
                )}
              </div>
              <div className="form__field">
                <label htmlFor="surname" className="form__field__label">
                  surname
                </label>

                {surnameErr === true ? (
                  <>
                    <input
                      type="text"
                      id="surname"
                      placeholder="write your surname"
                      className="form__field__input inputError"
                      onChange={(e) => checkFieldSurname(e)}
                      value={surname}
                    />
                    <p className="showError">the surname is required</p>
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      id="surname"
                      placeholder="write your surname"
                      className="form__field__input"
                      onChange={(e) => checkFieldSurname(e)}
                      value={surname}
                    />
                    <p className="hideError"></p>
                  </>
                )}
              </div>
              <div className="form__field">
                <label htmlFor="email" className="form__field__label">
                  E-mail address
                </label>

                {emailErr === true ? (
                  <>
                    <input
                      type="email"
                      id="email"
                      placeholder="write your e-mail address"
                      className="form__field__input inputError"
                      autoComplete="off"
                      onChange={(e) => checkFieldEmail(e)}
                      value={email}
                    />
                    <p className="showError">the email field is required</p>
                  </>
                ) : (
                  <>
                    <input
                      type="email"
                      id="email"
                      placeholder="write your e-mail address"
                      className="form__field__input"
                      autoComplete="off"
                      onChange={(e) => checkFieldEmail(e)}
                      value={email}
                    />
                    <p className="hideError"></p>
                  </>
                )}
              </div>
              <div className="form__field">
                <label htmlFor="age" className="form__field__label">
                  Your age
                </label>

                {ageErr === true ? (
                  <>
                    <input
                      type="number"
                      id="age"
                      placeholder="write your age in numbers"
                      className="form__field__input inputError"
                      autocomplete="off"
                      min="12"
                      max="100"
                      onChange={(e) => checkFieldAge(e)}
                      value={age}
                    />
                    <p className="showError">
                      the age field is between 12yr - 100yr
                    </p>
                  </>
                ) : (
                  <>
                    <input
                      type="number"
                      id="age"
                      placeholder="write your age in numbers"
                      className="form__field__input"
                      autocomplete="off"
                      min="12"
                      max="100"
                      onChange={(e) => checkFieldAge(e)}
                      value={age}
                    />
                    <p className="hideError"></p>
                  </>
                )}
              </div>
              <div className="form__field">
                <label htmlFor="symptoms" className="form__field__label">
                  Symptoms
                </label>
                {symptomsErr === true ? (
                  <>
                    <textarea
                      rows="6"
                      id="symptoms"
                      placeholder="write the symptoms"
                      className="form__field__input inputError"
                      autocomplete="off"
                      onChange={(e) => checkFieldSymptoms(e)}
                      value={symptoms}
                    />
                    <p className="showError">the symptoms field is required</p>
                  </>
                ) : (
                  <>
                    <textarea
                      rows="6"
                      id="symptoms"
                      placeholder="write the symptoms"
                      className="form__field__input"
                      autocomplete="off"
                      onChange={(e) => checkFieldSymptoms(e)}
                      value={symptoms}
                    />
                    <p className="hideError"></p>
                  </>
                )}
              </div>

              <div className="form__button">
                <button type="submit" className="btn btn--save">
                  {patient.id ? 'Save edit' : 'save patient'}
                </button>
                <button
                  type="submit"
                  className="btn btn--cancel"
                  onClick={() => handleCancel()}
                >
                  close form
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="overlay hidden">
          <div className="popup"></div>
        </div>
      )}
    </>
  )
}

export default Form
