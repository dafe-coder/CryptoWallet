import React from 'react'
import Title from '../Title/Title'
import styles from './box-with-icon.module.css'
import Par from './../Par/Par'

const BoxWithIcon = ({ children, title, style }) => {
	return (
		<div className={styles.box} style={style}>
			{children}
			<Title>{title}</Title>
		</div>
	)
}

export default BoxWithIcon
