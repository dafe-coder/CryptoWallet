import React from 'react'
import Title from '../Title/Title'
import styles from './box-with-icon.module.css'

const BoxWithIcon = ({ children, title }) => {
	return (
		<div className={styles.box}>
			{children}
			<Title>{title}</Title>
		</div>
	)
}

export default BoxWithIcon
