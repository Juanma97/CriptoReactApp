import { computeHeadingLevel } from '@testing-library/react'
import React from 'react'
import style from './Search.css'

const Search = ({updateCriptoCoins}) => {

    const handleValue = (e) => {
        const criptoName = e.target.value
        console.log("Handle value...")
        updateCriptoCoins(criptoName)
    }

    return (
        <div className="search-container">
            <input className="search" type="text" onChange={handleValue}/>
        </div>
    )
}

export default Search