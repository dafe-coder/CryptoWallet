import React from 'react'
import PortfolioItem from '../PortfolioItem/PortfolioItem'
import btcImg from './btc.png'
import ethImg from './eth.png'
import polImg from './polygon.png'

const PortfolioList = ({ className }) => {
	return (
		<ul className={className}>
			<PortfolioItem
				cryptoName='BTC'
				cryptoCount='1'
				cryptoPrice='50.213.33'
				cryptoProfit='300.3%'
				cryptoImg={btcImg}
			/>
			<PortfolioItem
				cryptoName='ETH'
				cryptoCount='22.2'
				cryptoPrice='8.213.33'
				cryptoProfit='300.3%'
				cryptoImg={ethImg}
			/>
			<PortfolioItem
				cryptoName='POLYGON'
				cryptoCount='202.000.000'
				cryptoPrice='213.33'
				cryptoProfit='300.3%'
				cryptoImg={polImg}
			/>
		</ul>
	)
}

export default PortfolioList
