import React from 'react'
import cn from 'classnames'
import styles from './modal.module.css'
import { useDispatch } from 'react-redux'

const Modal = ({ id, children, open, openFunc }) => {
	const dispatch = useDispatch()

	const close = (e) => {
		let target = e.target

		if (target && !target.closest('.' + styles.body)) {
			console.log(1)
			dispatch(openFunc((state) => !state))
		}
	}
	return (
		<div
			onClick={(e) => close(e)}
			className={cn(styles.modal, {
				[styles.active]: open == true,
			})}
			id={id}>
			<div className={styles.body}>{children}</div>
		</div>
	)
}

export default Modal
