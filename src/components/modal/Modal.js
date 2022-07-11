import React from 'react'
import cn from 'classnames'
import styles from './modal.module.css'
import { useDispatch } from 'react-redux'
import Buttons from './../Buttons/Buttons'

const Modal = ({ id, children, open, openFunc, padding = '30' }) => {
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
			<div
				className={cn(styles.body, {
					[styles.padding30]: padding == 30,
					[styles.padding20]: padding == 20,
				})}>
				<Buttons type='close' className={styles.close}></Buttons>
				{children}
			</div>
		</div>
	)
}

export default Modal
