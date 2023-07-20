import React from 'react'

function Objects() {

    const zuko = {
        firstName: 'zuko',
        age: 3,
        email: 'me@somewhere.com'
    }

    return Object.keys(zuko).map((key, index)=>{
        return(
            <h2>
                {key} : {zuko[key]}
            </h2>
        )
    })

}

export default Objects