import React from 'react'
import Par from '../Par/Par'
import styles from './confirm-info.module.css'

const ConfirmInfo = ({ children, id }) => {
	return (
		<div className={styles.wrap}>
			<input type='checkbox' id={id} />
			<label htmlFor={id}>
				<Par>{children}</Par>
			</label>
		</div>
	)
}

export default ConfirmInfo
