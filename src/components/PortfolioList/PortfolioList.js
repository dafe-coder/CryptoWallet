import React from 'react'
import PortfolioItem from '../PortfolioItem/PortfolioItem'
import Web3 from 'web3'
const PortfolioList = ({ className, data }) => {
	return (
		<ul className={className}>
			{data ? (
				data.map((item) => {
					return (
						<PortfolioItem
							key={item.contract_name}
							cryptoName={item.contract_ticker_symbol}
							cryptoCount={Number(
								Web3.utils.fromWei(String(item.balance), 'ether')
							).toFixed(3)}
							cryptoPrice={item.quote_rate}
							cryptoProfit={(
								(item.quote_rate / item.quote_rate_24h) * 100 -
								100
							).toFixed(3)}
							cryptoImg={item.logo_url}
						/>
					)
				})
			) : (
				<h2>Nothing</h2>
			)}
		</ul>
	)
}

export default PortfolioList
