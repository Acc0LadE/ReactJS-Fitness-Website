import React from 'react'

const About = () => {
  return (
    <div>
      <section className="program section about__page" id="program">
        <div className="container">
            <div className="about__data">
            <h1 className="about_heading">ABOUT</h1>
            <p className="about__title">
                {" "}
                <em>AUTHOR :</em>
                <em>PRANAV G K</em> <br />
                <em>NITHIN R</em>
                <br />
                <em>PAVAN R</em>
            </p>
            <div className="about__titles">
                <h3 className="about__subtitle">INTRODUCTION</h3>
                <br />
                <p className="about__description">
                We provide you Fitness and Nutrition plans.
                <br /> your daily routine for the better using our free to use website
                by signing up now.
                </p>
            </div>
            </div>
            <div className="about__data">
            <div className="about__titles">
                <h3 className="about__subtitle">FITNESS</h3>
                <br />
                <p className="about__description">
                We design WORKOUT plans for you according to your desired goal.
                <br />
                Change your daily routine for the better using our free to use website
                by signing up now.
                </p>
            </div>
            </div>
            <div className="about__data">
            <div className="about__titles">
                <h3 className="about__subtitle">DIET</h3>
                <br />
                <p className="about__description diet__description">
                We design DIET plans for you according to your desired goal.
                <br />
                Change your daily routine for the better using our free to use website
                by signing up now.
                </p>
            </div>
            </div>
        </div>
        </section>

    </div>
  )
}

export default About
