import React from 'react'
import style from './Search.css'

const Search = ({updateCriptoCoins}) => {

    const handleValue = (e) => {
        const criptoName = e.target.value.toUpperCase()
        updateCriptoCoins(criptoName)
    }

    return (
        <div className="search-container">
            <input className="search" type="text" onChange={handleValue}/>
        </div>
    )
}

export default Search