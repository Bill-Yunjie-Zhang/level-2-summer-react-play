import React from 'react'

const Bye = function(props) {
    const name = props.name
    const lang = props.language
    let bye = ''

    if (lang === "en") {
        bye = "Bye,"
    } else if (lang === "zh"){
        bye = "再见"
    }

    return (
        <div> {bye} {name}</div>
    )
}

export default Bye