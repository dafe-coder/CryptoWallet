import React from 'react'
import cn from 'classnames'
import styles from './select-token.module.css'
import Svg from '../../svgs/Svg'

const SelectToken = () => {
	return (
		<div className={styles.body}>
			<label className={styles.label}>Asset Name</label>
			<button className={styles.select}>
				Select a token <Svg type='arr-sm-right' />
			</button>
		</div>
	)
}
export default SelectToken
