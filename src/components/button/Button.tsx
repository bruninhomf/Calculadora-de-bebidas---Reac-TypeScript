import React from 'react'
import { IInput } from '../../interfaces/DefaultInterfaces'

// type Props = {}

const Button = (props: IInput) => {
  return (
    <button 
        // onClick={props.onClick}
    >
        {props.label}
    </button>
  )
}

export default Button
