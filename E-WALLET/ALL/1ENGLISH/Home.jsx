import React from 'react'

const Home = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12">
        <table className='table table-hover'>
        <thead>
          <tr>
            <th>NUMBER</th>
            <th>NAME</th>
            <th>SYMBOL</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>BITCOIN</td>
            <td><img src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579' width="50px"/></td>
            <td>$21459</td>
          </tr>
          <tr>
            <td>2</td>
            <td>ETHEREUM</td>
            <td><img src='https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880' width="50px"/></td>
            <td>$1238.49</td>
          </tr>
          <tr>
            <td>3</td>
            <td>TETHER</td>
            <td><img src='https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707' width="50px"/></td>
            <td>$1</td>
          </tr>
          <tr>
            <td>4</td>
            <td>USD COIN</td>
            <td><img src='https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389' width="50px"/></td>
            <td>$1.001</td>
          </tr>
          <tr>
            <td>5</td>
            <td>BNB</td>
            <td><img src='https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850' width="50px"/></td>
            <td>$239.43</td>
          </tr>
          <tr>
            <td>6</td>
            <td>XRP</td>
            <td><img src='https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731' width="50px"/></td>
            <td>$0.367999</td>
          </tr>
          <tr>
            <td>7</td>
            <td>BINANCE USD</td>
            <td><img src='https://assets.coingecko.com/coins/images/9576/large/BUSD.png?1568947766' width="50px"/></td>
            <td>$1.002</td>
          </tr>
          <tr>
            <td>8</td>
            <td>CARDANO</td>
            <td><img src='https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860' width="50px"/></td>
            <td>$0.504266</td>
          </tr>
          <tr>
            <td>9</td>
            <td>SOLANA</td>
            <td><img src='https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422' width="50px"/></td>
            <td>$41.17</td>
          </tr>
          <tr>
            <td>10</td>
            <td>POLKADOT</td>
            <td><img src='https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1639712644' width="50px"/></td>
            <td>$8.1</td>
          </tr>
        </tbody>
      </table>
        </div>
      </div>
    </div>
  )
}

export default Home