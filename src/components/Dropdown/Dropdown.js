import React, { useState } from 'react'
import cn from 'classnames'
import styles from './dropdown.module.css'
import Svg from '../../svgs/Svg'
const Dropdown = ({ dataDropdown, active }) => {
	const [open, setOpen] = useState(false)
	const onChoose = (e) => {
		const target = e.target
		target
			.closest('ul')
			.querySelectorAll('li')
			.forEach((item) => {
				item.classList.remove('active-time')
			})
		target.classList.add('active-time')
		target
			.closest('.' + styles.dropdown)
			.querySelector('button span').innerText = target.innerText
		setOpen(false)
	}
	return (
		<div className={styles.dropdown}>
			<button className={styles.btn} onClick={() => setOpen(!open)}>
				<span>{active}</span>
				<Svg type='arr-sm-right' />
			</button>
			<ul
				className={cn(styles.list, {
					[styles.open]: open == true,
				})}>
				{dataDropdown.length ? (
					dataDropdown.map((item, i) => (
						<li
							key={i}
							onClick={(e) => onChoose(e)}
							className={item === active ? 'active-time' : ''}>
							{item}
						</li>
					))
				) : (
					<></>
				)}
			</ul>
		</div>
	)
}
export default Dropdown
