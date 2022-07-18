import React, { useState } from 'react'
import cn from 'classnames'
import styles from './dropdown.module.css'
import Svg from '../../svgs/Svg'
import { logTimer } from './../../pages/Func.wallet/logTimer'
import { setChooseTimeOut } from '../../actions/wallet'
import { useDispatch } from 'react-redux'
const Dropdown = ({ dataDropdown, active, type }) => {
	let dispatch = useDispatch()
	const [open, setOpen] = useState(false)
	const setLoginTimeOut = (value) => {
		chrome.storage.sync.remove(['logTimeOut'])
		chrome.storage.sync.set({ logTimeOut: value })
	}
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
		if (type == 'log-time-out') {
			setLoginTimeOut(target.innerText)
			logTimer(target.innerText)
			dispatch(setChooseTimeOut(target.innerText))
		}
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
