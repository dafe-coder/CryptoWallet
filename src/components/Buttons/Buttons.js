import React from 'react'
import cn from 'classnames'
import styles from './buttons.module.css'
import Svg from '../../svgs/Svg'

const Buttons = ({ type, children, className = '' }) => {
	switch (type) {
		case 'lock':
			return (
				<button className={cn(styles.btn, styles.btn_lock, className)}>
					<Svg type='lock' />
					{children}
				</button>
			)
		case 'back':
			return (
				<button className={cn(styles.btn, styles.btn_header, className)}>
					<Svg type='arr-long' />
					{children}
				</button>
			)
		case 'sm-primary':
			return (
				<button className={cn(styles.sm_primary, styles.btn, className)}>
					{children}
				</button>
			)
		case 'notification':
			return (
				<button className={cn(styles.btn, styles.btn_header, className)}>
					<Svg type='bell' />
					{children}
				</button>
			)
		case 'settings':
			return (
				<button className={cn(styles.btn, styles.btn_header, className)}>
					<Svg type='settings' />
					{children}
				</button>
			)
		case 'close':
			return (
				<button className={cn(styles.btn, styles.btn_header, className)}>
					<Svg type='close' />
					{children}
				</button>
			)
		default:
			return <></>
	}
}
export default Buttons
