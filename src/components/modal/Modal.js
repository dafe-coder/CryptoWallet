import React from 'react'
import cn from 'classnames'
import styles from './modal.module.css'

const Modal = ({ id, children, openQr }) => {
	return (
		<div
			className={cn(styles.modal, {
				[styles.active]: openQr == true,
			})}
			id={id}>
			<div className={styles.body}>{children}</div>
		</div>
	)
}

export default Modal
