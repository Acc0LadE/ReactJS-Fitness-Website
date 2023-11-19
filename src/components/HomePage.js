import React from 'react'
import '../styles/HomeStyle.css'
import trial from "./img/gym_bg1.jpg"
import { useNavigate } from 'react-router-dom'
const HomePage = () => {
  const nav=useNavigate()
  return (
    <div className='overall'>
      <main className="main">
      <div className="container">
        <img
          src={trial}
          className="imagebg"
          style={{ width: "100%" }}
        />
        <div className="centered">
          <section className="home section" id="home">
            <div className="home__container container grid">
              <div className="home__data">
                <h2 className="home__subtitle">IMPROVE YOUR HEALTH</h2>
                <h1 className="home__title">MAKE PROGRESS</h1>
                <p className="home__description">
                  START WHERE YOU ARE . USE WHAT YOU HAVE . DO WHAT YOU CAN
                </p>
                <a href="signup.html" className="button button__flex">
                  Get Started <i className="ri-arrow-right-line" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <br />
      <br />
      {/*==============features==========*/}
      <section className="program section" id="program">
        <div className="container">
          <div className="section__data">
            <h2 className="section__subtitle">FEATURES</h2>
            <div className="section__titles">
              <h1 className="section__title-border">MAINTAIN</h1>
              <h1 className="section__title">A HEALTHY LIFESTYLE</h1>
            </div>
          </div>
          <div className="program__container grid" >
            <article className="program__card" onClick={()=>{
                  nav("/workoutPlanner")
                }}>
              <div className="program__shape">
                <img
                  src=".\img\program1.png"
                  alt="program image"
                  className="program__img"
                />
              </div>
              <h3 className="program__title">WORKOUT PLANNER</h3>
              <p className="program__description">
                Generate Workout plans specifically designed to meet your desired
                goal.
              </p>
              {/* <a href=".\wktpln.html" className="program__button"> */}
                <i className="ri-arrow-right-line"  />
              {/* </a> */}
            </article>
            <article className="program__card">
              <div className="program__shape">
                <img
                  src=".\img\program2.png"
                  alt="program image"
                  className="program__img"
                />
              </div>
              <h3 className="program__title">DIET PLANNER</h3>
              <p className="program__description">
                Generate Diet schedules specifically to meet your desired goal.
              </p>
              <a href="./dietpln.html" className="program__button">
                <i className="ri-arrow-right-line" />
              </a>
            </article>
          </div>
        </div>
      </section>
    </main>

    </div>
  )
}

export default HomePage