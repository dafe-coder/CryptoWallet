import React from 'react'
import PortfolioItem from '../PortfolioItem/PortfolioItem'
import Web3 from 'web3'
const PortfolioList = ({ className, data }) => {
	console.log()
	return (
		<ul className={className}>
			{data.length ? (
				data.map((item) => {
					if (item != undefined) {
						return (
							<PortfolioItem
								key={item.id}
								cryptoName={item.symbol}
								cryptoCount={
									item.market_data.balance > 0 ? item.market_data.balance : 0
								}
								cryptoPrice={item.market_data.current_price.usd}
								cryptoProfit={
									item.market_data.balance > 0
										? item.market_data.balance &&
										  (
												(item.market_data.current_price.usd /
													item.market_data.high_24h.usd) *
													100 -
												100
										  ).toFixed(3)
										: item.market_data &&
										  (
												(Number(+item.market_data.current_price.usd) /
													Number(item.market_data.high_24h.usd)) *
													100 -
												100
										  ).toFixed(3)
								}
								cryptoImg={item.logo_url || item.image.thumb}
							/>
						)
					}
				})
			) : (
				<h2>Nothing</h2>
			)}
		</ul>
	)
}

export default PortfolioList
