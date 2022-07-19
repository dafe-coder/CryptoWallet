import React, { useEffect, useState } from 'react'
import styles from './assets-list.module.css'
import AssetsItem from './../AssetsItem/AssetsItem'
import btcImg from './btc.png'
import ethImg from './eth.png'

const AssetsList = ({ dataTokens, value }) => {
	const [dataTokensFiltered, setDataTokensFiltered] = useState([])
	const [dataChooseTokens, setDataChooseTokens] = useState([])

	useEffect(() => {
		if (value != '' && dataTokens.data) {
			setDataTokensFiltered(
				dataTokens.data.filter(
					(item) => item.name.toLowerCase().indexOf(value.toLowerCase()) != -1
				)
			)
		}
	}, [value])

	const onChooseAssets = (itemId) => {
		let dataElem = dataTokens.data.filter((item) => itemId == item.id)
		dataElem[0].currentActive = true
		setDataChooseTokens([...dataChooseTokens, dataElem])
	}
	const onRemoveAssets = (itemId) => {
		console.log(itemId)
		let dataElem = dataChooseTokens.filter((item) => itemId !== item[0].id)
		dataElem.currentActive = false
		setDataChooseTokens(dataElem)
	}

	return (
		<ul className={styles.list}>
			{value.length && dataTokensFiltered.length
				? dataTokensFiltered.map((item) => (
						<AssetsItem
							id={item.id}
							onChooseAssets={onChooseAssets}
							key={item.id}
							cryptoImg={item.image.thumb}
							cryptoName={item.name}
							currentActive={item.currentActive}
						/>
				  ))
				: dataChooseTokens.map((item) => (
						<AssetsItem
							id={item[0].id}
							onChooseAssets={onRemoveAssets}
							key={item[0].id}
							cryptoImg={item[0].image.thumb}
							cryptoName={item[0].name}
							currentActive={item[0].currentActive}
						/>
				  ))}
		</ul>
	)
}

export default AssetsList
