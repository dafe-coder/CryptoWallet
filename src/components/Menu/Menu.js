import React, { useState } from 'react'
import cn from 'classnames'
import styles from './menu.module.css'
import SvgMenu from './Menu-icon'

const Menu = () => {
	const [activeMenu, setActiveMenu] = useState('first')
	const goFirst = () => {
		setActiveMenu('first')
	}
	const goSecond = () => {
		setActiveMenu('second')
	}
	const goThird = () => {
		setActiveMenu('third')
	}
	const goFourth = () => {
		setActiveMenu('fourth')
	}
	return (
		<ul className={styles.menu}>
			<li
				onClick={goFirst}
				className={cn({
					[styles.active]: activeMenu == 'first',
				})}>
				<SvgMenu
					className={cn({
						[styles.disabled]: activeMenu != 'first',
					})}
					type='message'
				/>
			</li>
			<li
				onClick={goSecond}
				className={cn({
					[styles.active]: activeMenu == 'second',
				})}>
				<SvgMenu
					className={cn({
						[styles.disabled]: activeMenu != 'second',
					})}
					type='swap'
				/>
			</li>
			<li
				onClick={goThird}
				className={cn({
					[styles.active]: activeMenu == 'third',
				})}>
				<SvgMenu
					className={cn({
						[styles.disabled]: activeMenu != 'third',
					})}
					type='buy'
				/>
			</li>
			<li
				onClick={goFourth}
				className={cn({
					[styles.active]: activeMenu == 'fourth',
				})}>
				<SvgMenu
					className={cn({
						[styles.disabled]: activeMenu != 'fourth',
					})}
					type='cog'
				/>
			</li>
		</ul>
	)
}
export default Menu
