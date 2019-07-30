import React from 'react'

const Hello = function(props) {
    console.log(props)
    const name = props.name
    console.log(name)
    const lang = props.language
    let hello = ''

    if (lang === "en") {
        hello = "Hello,"
    } else if (lang === "zh") {
        hello = "你好"
    }



    return (
        <div> {hello} {name}</div>
    )
}

export default Hello