import React from 'react'
import cn from 'classnames'
import styles from './title.module.css'

const Title = ({ type = 'md', children }) => {
	return (
		<h2
			className={cn(styles.title, {
				[styles.sm]: type == 'sm',
				[styles.md]: type == 'md',
				[styles.subtitle]: type == 'subtitle',
				[styles.success]: type == 'success',
				[styles.error]: type == 'error',
				[styles.error_sm]: type == 'error-sm',
			})}>
			{children}
		</h2>
	)
}

export default Title
