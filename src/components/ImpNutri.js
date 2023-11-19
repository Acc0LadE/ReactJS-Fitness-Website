import React from 'react';

const ImpNutri = () => {
  return (
    <div>
      <div className="sponsor__logo sponsor__footer">
        <section className="program section about__page" id="program">
          <div className="container">
            <div className="about__data">
              <h1 className="about_heading imp_exc">IMPORTANCE OF DIET AND NUTRITION</h1>
              <div className="about__subtitle">WHAT IS NUTRITION?</div>
              <p className="about__description" >
                The development of human health is dependent mainly on nutrition. Improved nutrition boosts the immune system, makes pregnancies safer, increases mental alertness, and lowers the risk of chronic diseases such as diabetes, cardiovascular disease, etc.

                A nutritious diet leads to a healthy pregnancy, lowers the risk of developing chronic diseases, and helps maintain a healthy body weight.

                According to the adage, ‘You are what you eat,’ people who eat well are healthier and more productive than those who don’t. Eating inappropriate foods in your diet leads to malnutrition, which poses a serious risk to human health. Malnutrition, including being overweight and undernourished, is widespread in the modern world.

                The WHO offers specialized guidance and recommendations on malnutrition to promote health and well-being.
              </p>
            </div>

            <div className="about__titles">
                <div className="about__subtitle">WHY IS NUTRITION IMPORTANT?</div>
                <p className="about__description" >
                    For the body to function properly, grow appropriately, and keep healthy, one must consume enough macronutrients (proteins, carbs, fats, and water) and micronutrients (vitamins and minerals). As we have noticed, processed, sweet, fatty, and salted foods drain the body and cannot function properly. On the other hand, consuming fresh, whole-natural meals fuels the body by producing the necessary energy, metabolic activity, micronutrient shortages, chronic disease prevention, general health promotion, and well-being.
                Proteins, carbs, fats, vitamins, minerals, fibre, and water are the seven main types of nutrients that the healthy human body requires to survive. We need a lot of macronutrients, although we can get by with fewer micronutrients (vitamins and minerals).
              </p>
              <h4 class="about__subtitle"><em>Vitamins:</em></h4>
              <p class="about__description" >Vitamins are essential compounds that play an important role in making our body function properly. Some of them are vitamin A, vitamin B, vitamin C, vitamin D, vitamin E, vitamin K, vitamin B-6, and vitamin B-12. We receive most of these vitamins daily. Our body naturally tends to produce vitamins like D and K.
              </p>
            <h4 class="about__subtitle"><em>Minerals:</em></h4>
                            <p class="about__description" >
                            Compared to trace minerals, macrominerals are needed in greater quantities. The significant macrominerals and their roles comprise:
                            
                            Calcium: Essential for the healthy structure and operation of bones
                            Phosphorus: A component of cell membranes
                            Magnesium: Enzyme reactions
                            Sodium: Blood pressure maintenance and fluid balance
                            Chloride Promotes the production of digestive juices and maintains fluid balance
                            Potassium: Muscle contraction and the transmission of nerve impulses
                            Sulfur is a substance found in all living tissues
                            On the other hand, trace minerals are needed in tiny amounts but have several vital roles in our bodies. Some of the crucial trace minerals required by the body are selenium, iodine, iodine salts, copper, zinc, manganese, copper, and iron.</p>
                            
              {/* Continue with content for proteins, carbohydrates, fats, vitamins, and minerals */}
            </div>

            {/* The rest of your content with headings and paragraphs */}
          </div>

          <div className="about__data">
            <div className="about__titles">
              <div className="about__subtitle">CONCLUSION</div>
              <p className="about__description">A healthy diet ensures that your body receives all the vitamins, minerals, and nutrients it needs to function at its peak. Plan your meals and snacks to include nutrient-rich, low-calorie foods.</p>
            </div>
          </div>

          {/* Move the images inside the section */}
          <img src="./img/logo1.png" alt="logo image" className="logos__img" />
          <img src="./img/logo2.png" alt="logo image" className="logos__img" />
          <img src="./img/logo3.png" alt="logo image" className="logos__img" />
          <img src="./img/logo4.png" alt="logo image" className="logos__img" />
        </section>
      </div>
    </div>
  );
};

export default ImpNutri;
