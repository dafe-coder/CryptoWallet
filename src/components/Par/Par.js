import React from 'react'
import cn from 'classnames'
import styles from './par.module.css'

const Par = ({ type = 'md', children }) => {
	return (
		<p
			className={cn(styles.title, {
				[styles.sm]: type == 'sm',
				[styles.md]: type == 'md',
				[styles.error]: type == 'error',
			})}>
			{children}
		</p>
	)
}

export default Par
