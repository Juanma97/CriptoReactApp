import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import Coins from './components/Coins/Coins'
import Footer from './components/Footer/Footer'
import getCoins from './services/CriptoService'

function App() {

  const [coins, setCoins] = useState([])
  const [coinsCopy, setCoinsCopy] = useState([])

  const updateCriptoCoins = (value) => {

    console.log("VALUE: ", value)

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
      [entry[0], entry[1].USD, entry[1].EUR]
    )))

    setCoinsCopy(...coinsCopy, Object.entries(response.data).map((entry) => (
      [entry[0], entry[1].USD, entry[1].EUR]
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
      <Footer />
    </div>
  );
}

export default App;
