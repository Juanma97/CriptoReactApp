import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import Coins from './components/Coins'
import getCoins from './services/CriptoService'

function App() {

  const [coins, setCoins] = useState([])

  const updateCriptoCoins = (value) => {
    console.log("Update...")
    console.log(value)
  }

  useEffect(async () => {
    const response = await getCoins()

    setCoins(response.data)
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
