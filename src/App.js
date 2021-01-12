import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import Coins from './components/Coins'
import getCoins from './services/CriptoService'

function App() {

  const [coins, setCoins] = useState([])
  const [coinsCopy, setCoinsCopy] = useState([])

  const updateCriptoCoins = (value) => {

    if(value == '') {
      setCoins(coinsCopy)
    }else{
      setCoins(coinsCopy.filter((coin) => (
        coin[0].includes(value)
      )))
    }
  }

  useEffect(async () => {
    const response = await getCoins()

    setCoins(...coins, Object.entries(response.data).map((entry) => (
      [entry[0], entry[1].USD]
    )))

    setCoinsCopy(...coinsCopy, Object.entries(response.data).map((entry) => (
      [entry[0], entry[1].USD]
    )))
  }, [])

  return (
    <div className="App">
      <Header />
      <Search 
        updateCriptoCoins={updateCriptoCoins}
      />
      <Coins
        coins={coins}
      />
    </div>
  );
}

export default App;
