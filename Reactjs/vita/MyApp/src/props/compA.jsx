import React from 'react'
import CompB from './compB'

const CompA = ({value}) => {
  return (
    <div>
        <h1>{value.name1}</h1>
        <h1>{value.name2}</h1>
      <CompB value={value}/>
    </div>
  )
}

export default CompA
