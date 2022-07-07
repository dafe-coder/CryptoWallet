import React from 'react'
import RestoreCountWordsItem from '../RestoreCountWordsItem/RestoreCountWordsItem'
import styles from './restore-count-words.module.css'

const RestoreCountWords = () => {
	return (
		<ul className={styles.list}>
			<RestoreCountWordsItem
				title='Enter a 12-word recovery phrase'
				walletKey='12'>
				If you have a recovery phrase consisting of 12 words, choose this option
			</RestoreCountWordsItem>
			<RestoreCountWordsItem
				title='Enter a 15-word recovery phrase'
				walletKey='15'>
				If you have a recovery phrase consisting of 12 words, choose this option
				to restore your wallet. If you have a recovery phrase consisting of 12
				words, choose this option to restore your wallet. If you have a recovery
				phrase consisting of 12 words, choose this option to restore your
				wallet.
			</RestoreCountWordsItem>
			<RestoreCountWordsItem
				title='Enter a 24-word recovery phrase'
				walletKey='24'>
				If you have a recovery phrase consisting of 12 words, choose this option
				to restore your wallet. If you have a recovery phrase consisting of 12
				words, choose this option to restore your wallet. If you have a recovery
				phrase consisting of 12 words, choose this option to restore your
				wallet.
			</RestoreCountWordsItem>
			<RestoreCountWordsItem title='Enter a private key' walletKey='own'>
				If you have a recovery phrase consisting of 12 words, choose this option
				to restore your wallet. If you have a recovery phrase consisting of 12
				words, choose this option to restore your wallet. If you have a recovery
				phrase consisting of 12 words, choose this option to restore your
				wallet.
			</RestoreCountWordsItem>
		</ul>
	)
}

export default RestoreCountWords
