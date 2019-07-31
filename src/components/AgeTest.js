import React from 'react'
import { isPatternLike } from '@babel/types';

const AgeTest = function(props) {
    const name = props.name
    const age = props.age || 0
    const gender = props.gender
    let result = ''
    let color = ''

    if(age >= 18){
        result = 'you can drink alcohol!'
    } else {
        result = 'you should not drink alcohol!'
    }
    // if(gender==="male"){
    //     color = "blue"
    // } else if(gender==="female"){
    //     color = "pink"
    // }

    return (
        <div> {name}, {result}</div>
    )
}

export default AgeTest