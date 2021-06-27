import React from 'react'
import { useField,Field } from 'formik'

export default function TkSelect({label,options,defaultValue,...props}) {

    const [field,meta] = useField(props)

    const selectList = options ? (
        options.map((option) => (
        <option key={option.id} value={option.id}>{option.name}</option>
         ))) 
    : null

    return (
        <>
            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                {label}
            </label>
            <Field as='select' {...field} {...props} 
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                <option value="">{defaultValue}</option>
                {selectList}
            </Field>
        </>
    )
}
