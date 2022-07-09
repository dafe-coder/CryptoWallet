import React from 'react'
import styles from './assets-list.module.css'
import AssetsItem from './../AssetsItem/AssetsItem'
import btcImg from './btc.png'
import ethImg from './eth.png'

const AssetsList = () => {
	return (
		<ul className={styles.list}>
			<AssetsItem cryptoImg={btcImg} cryptoName='BTC' />
			<AssetsItem cryptoImg={ethImg} cryptoName='ETH' check={true} />
		</ul>
	)
}

export default AssetsList
