import React from 'react'
import styles from './switch-button.module.css'

const SwitchButton = ({ fucn, check = false }) => {
	return (
		<label className={styles.switch}>
			<input
				className={styles.input}
				type='checkbox'
				checked={check}
				onChange={fucn}
			/>
			<span className={styles.slider}></span>
		</label>
	)
}

export default SwitchButton
