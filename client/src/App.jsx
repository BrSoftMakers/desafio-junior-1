import React, { useState, useEffect, createContext } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Axios from "axios"

import NewPet from "./pages/NewPet"
import Home from "./pages/Home"

import Menu from "./components/Menu"
import Footer from "./components/Footer"


import "./App.css"

export const Context = createContext()

function App() {
  const [pets, setPets] = useState()
  const [values, setValues] = useState()  

  const [togle, setTogle] = useState(true)

  useEffect(() => {
    Axios.get("http://localhost:3001/pets").then(resp => {
      setPets(resp.data)
    })
  }, [togle])



  const handleChangePost = e => {
    setValues(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }

  const [updateValues, setUpdateValues] = useState()
  const handleGetUpdateValues = (values) => setUpdateValues(values) 

  const handleChangeUpdate = (e) => {
    setUpdateValues(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  } 

  const handlePost = () => {
    Axios.post("http://localhost:3001/pets", {
      name: values.name,
      age: values.age,
      type: values.type,
      race: values.race,
      owner: values.owner,
      address: values.address,
    }).then(response => {
      console.log(response)
      setTogle(!togle)
    })
  }

  const handleUpdate = () => {
    Axios.put('http://localhost:3001/pets', {
      id: updateValues.id,
      name: updateValues.name,
      age: updateValues.age,
      type: updateValues.type,
      race: updateValues.race,
      owner: updateValues.owner,
      address: updateValues.address,
    })
    .then(response => {
      console.log(response)
      setTogle(!togle)
    })

  }

  const handleDelete = (pet) => {
    console.log(pet)

    Axios.delete(`http://localhost:3001/pets/${pet.id}`)
    .then(response => {
      console.log(response)
      setTogle(!togle)
    })
  }


  const contextObj = {
    handleChangePost: handleChangePost, 
    handleChangeUpdate: handleChangeUpdate,
    handlePost: handlePost,
    pets: pets,
    handleGetUpdateValues: handleGetUpdateValues,
    handleUpdate: handleUpdate,
    handleDelete: handleDelete
  }

  return (
    <Context.Provider value={contextObj}>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={ <Home /> }
          />
          <Route path="/newpet" element={ <NewPet /> } />
        </Routes>
        <Footer />
      </Router>
    </Context.Provider>
  )
}

export default App
