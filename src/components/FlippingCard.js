
import React from 'react';
import './FlippingCard.css';

function FlippingCard() {
  const cardImage1 =
    'https://d1aeya7jd2fyco.cloudfront.net/home/Students_Trust_College_Vidya_for_Unbiased_Counselling.svg';
  const cardImage2 =
    'https://d1aeya7jd2fyco.cloudfront.net/home/Online_and_Distance_Education_Colleges__Universities_Listed_on_College_Vidya.svg';
  const cardImage3 =
    'https://d1aeya7jd2fyco.cloudfront.net/home/Guidance_by_Our_Certified_Counselors.svg';
  const cardImage4 =
    'https://d1aeya7jd2fyco.cloudfront.net/home/Till_You_Complete_Your_Degree.svg';

  return (
    <div className="container" >
      <div className="left-side-text">
        <h1 style={{ marginLeft: '50px' , fontSize: '50px'}}>
          What Makes<br/> Us Stand 
          <span style={{ color: 'blue' }}> Apart </span>
        </h1>
      </div>

      <div className="right-side-cards">
        {/* First Line of Cards */}
        <div className="card-container">
          {/* First Card */}
          <div className="card">
            <div className="card-inner">
              <div className="card-front" style={{"border-left": "3px solid #0000FF"}}>
                <img src={cardImage1} alt="card1" className="top-left-image" />
                <p>
                  <b>5 Million +</b>
                  <br />
                  <br />
                  Students Trust
                  <br />
                  College vidya for unbiased counsellings
                </p>
              </div>
              <div className="card-back">
          {/* <p>Back Side</p> */}
        </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="card">
            <div className="card-inner">
              <div className="card-front" style={{"border-left": "3px solid #2E8BC0"}}>
                <img src={cardImage2} alt="card2" className="top-left-image" />
                <p>
                  <b>100 Approved (only UGC - DAB)</b>
                  <br />
                  <br />
                  Online and Distance Education Colleges
                  <br /> Universities Listed on College Vidya
                </p>
              </div>
              <div className="card-back">
                {/* <p>This is the backside content of the second card.</p> */}
              </div>
            </div>
          </div>
        </div>

        {/* Second Line of Cards */}
        <div className="card-container">
          {/* Third Card */}
          <div className="card">
            <div className="card-inner">
              <div className="card-front" style={{"border-left": "3px solid #24B3A8"}}>
                <img src={cardImage3}  alt="card3" className="top-left-image" />
                <p>
                  <b>Unbiased Experts</b>
                  <br />
                  <br />
                  Guidance by our certified counselors
                </p>
              </div>
              <div className="card-back">
                {/* <p>This is the backside content of the third card.</p> */}
              </div>
            </div>
          </div>

          {/* Fourth Card */}
          <div className="card">
            <div className="card-inner">
              <div className="card-front" style={{"border-left": "3px solid orange"}}>
                <img src={cardImage4} alt="card4" className="top-left-image" />
                <p>
                  <b>Complete assistance</b>
                  <br />
                  <br />
                  Till you complete your degree
                </p>
              </div>
              <div className="card-back">
                {/* <p>This is the backside content of the fourth card.</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlippingCard;