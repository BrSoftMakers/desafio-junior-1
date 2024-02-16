import React, { useContext } from "react"
import {Link, Outlet} from 'react-router-dom'

import { Context } from '../App'

function NewPet() {
  const {handleChangePost, handlePost} = useContext(Context)

  return (
    <div className="form-spacing">
      <div className="form-wrapper">
        <section className="form-container">
            <h1 style={{display: 'block'}}>Add Pet</h1>
            <div className="form">
              <div>
                <input
                  type="text"
                  required
                  name="name"
                  placeholder="Pet's name"
                  onChange={e => handleChangePost(e)}
                />
              </div>
              <div>
                <input
                  type="number"
                  required
                  name="age"
                  placeholder="Pet's age"
                  onChange={e => handleChangePost(e)}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="type"
                  placeholder="Specie"
                  onChange={e => handleChangePost(e)}
                />
              </div>
              <div>

                <input
                  type="text"
                  name="race"
                  placeholder="Race"
                  onChange={e => handleChangePost(e)}
                />
              </div>

              <div>

                <input
                  type="text"
                  name="owner"
                  placeholder="Owner's name"
                  onChange={e => handleChangePost(e)}
                />
              </div>

              <div>

                <input
                  type="text"
                  name="address"
                  placeholder="Owner's address"
                  onChange={e => handleChangePost(e)}
                />
              </div>

              <div className="button-container">
                <Link to="/">
                  <button>
                    Cancel
                  </button>
                </Link>

                <Link to="/">
                  <button onClick={handlePost}>Send</button>
                </Link>
              </div>

              <Outlet />
            </div>
        </section>
      </div>
    </div>
  )
}

export default NewPet
