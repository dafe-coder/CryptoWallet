import React from 'react'
import styles from './assets-list.module.css'
import AssetsItem from './../AssetsItem/AssetsItem'
import btcImg from './btc.png'
import ethImg from './eth.png'

const AssetsList = ({ dataTokens, value }) => {
	return (
		<ul className={styles.list}>
			{dataTokens.length ? (
				dataTokens.filter((item) =>
					item.coin == value ? (
						<AssetsItem cryptoImg={btcImg} cryptoName={item.coin} />
					) : (
						<></>
					)
				)
			) : (
				<h2>Nothing</h2>
			)}
		</ul>
	)
}

export default AssetsList
