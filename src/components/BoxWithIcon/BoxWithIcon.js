import React from 'react'
import Title from '../Title/Title'
import styles from './box-with-icon.module.css'
import Par from './../Par/Par'

const BoxWithIcon = ({ children, title, style, par, colorPar }) => {
	return (
		<div className={styles.box} style={style}>
			{children}
			<Title mb='0'>{title}</Title>
			{par ? <Par color={colorPar}>Version 4.16.3</Par> : <></>}
		</div>
	)
}

export default BoxWithIcon
