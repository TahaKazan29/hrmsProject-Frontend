import { useField } from 'formik'
import React from 'react'

export default function TKTextInput({label,...props}) {

    const [field,meta] = useField(props)

    return (
        <>
            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                {label}
            </label>
            <textarea  {...field} {...props} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"></textarea>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
                ) : null}
        </>
    )
}
