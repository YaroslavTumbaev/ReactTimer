import React, { useState } from 'react'
const Plus = ( { data, setData } ) => {
    
return (
    <>
    <p onClick={() => {data < 60 ? setData(data + 1) : ''}}>+</p>
        <p>{data}</p>
    <p onClick={() => {data > 0 ? setData(data - 1) : ''}}>-</p>
    </>
)
}
export default Plus