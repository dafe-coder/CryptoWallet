import React from 'react'
import styles from './alert.module.css'
import Par from '../Par/Par'
import Title from './../Title/Title'
import cn from 'classnames'

const Alert = ({ children, danger = false }) => {
	return (
		<div
			className={cn(styles.alert, {
				[styles.danger]: danger == true,
			})}>
			<Title type='error'>Keep Mnemonic Phrase Safe!</Title>
			<Par type='sm'>{children}</Par>
		</div>
	)
}

export default Alert
