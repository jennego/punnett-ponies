import React from "react"

const HorseItem = ({ index, horse }) => {
  return (
    <div key={index} style={{ display: "flex" }}>
      {horse.image ? (
        <img src={`${horse.image}`} width="150px" />
      ) : (
        <h1> ? </h1>
      )}
      <div>
        <h2>
          {horse.Ag} {horse.Ex}
        </h2>
        <h3>{horse.baseColor}</h3>
      </div>
    </div>
  )
}

export default HorseItem
