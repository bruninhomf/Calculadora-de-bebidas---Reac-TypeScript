import React from 'react'
import { IInput } from '../../interfaces/DefaultInterfaces'

const Input = (props: IInput) => {
    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <input type="text" id={props.name} name={props.name} value={props.value} onChange={props.onChange}/>
        </>
    )
}

const InputSelect = (props: IInput) => {
const getvalueOptions = props.valueOptions

    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <select name={props.id} className={props.id} onChange={props.onChange} value={props.valueSelect} itemType={props.valueSelect}>
                <option value={props.vaule} >{props.msgOption}</option>
                {getvalueOptions &&
                    getvalueOptions.map((valueOptions: string, i: number) => (
                        <option key={i} value={valueOptions}>{valueOptions}</option>
                    ))
                }
            </select>
        </>
    )
}

export { Input, InputSelect }
