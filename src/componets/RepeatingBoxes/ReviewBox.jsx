import React from 'react'

const ReviewBox = ({review, img, imgAlt, name, position}) => {
  return (
    <>
    <div className="review-info">
      <div className="rating">
          ★ ★ ★ ★ ★
      </div>                    
      <div><p>{review}</p></div>
      <div className="review">
          <div><img src={img} alt={imgAlt}/></div>
          <div>
              <h5>{name}</h5>
              <p>{position}</p>
          </div>
      </div>
    </div>
    </>
  )
}

export default ReviewBox