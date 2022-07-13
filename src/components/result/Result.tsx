import React from 'react'
import { IInput } from '../../interfaces/DefaultInterfaces'

const Result = (props: IInput) => {
    
  return (
    <div id={props.id}>{props.description}</div>
  )
}

export default Result