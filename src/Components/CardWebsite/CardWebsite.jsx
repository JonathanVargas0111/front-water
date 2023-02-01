import React from 'react'

const CardWebsite = ({nameWeb,imageWeb,description}) => {
  return (
    <div>
        <div><img src={imageWeb} alt="" /></div>
        <h3>{nameWeb}</h3>
        <p>{description}</p>
        <button>See to more</button>
    </div>
  )
}

export {CardWebsite}