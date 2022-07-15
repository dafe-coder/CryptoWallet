import React from 'react'
import cn from 'classnames'
import styles from './seeed-phrase.module.css'
import Buttons from './../Buttons/Buttons'

const SeedPhraseBox = ({ show }) => {
	return (
		<div
			className={cn(styles.body, {
				[styles.show]: show == true,
			})}>
			<label className={styles.label}>Your seed phrase</label>
			<div className={styles.phrase}>
				scan actual quantum slow miracle raise cash twelve nominee ship oppose
				media
			</div>
			<Buttons className={styles.btn} type='copy' />
		</div>
	)
}
export default SeedPhraseBox
