import React, { useState, useEffect } from 'react'
import styles from './account-card.module.css'
import Buttons from '../Buttons/Buttons'
import cn from 'classnames'
import { setRestoreAddress } from '../../actions/restoreActions'
import { setWalletChoose } from '../../actions/wallet'
import { useDispatch } from 'react-redux'
const AccountCard = ({ title, children, copy = true, one = false }) => {
	const dispatch = useDispatch()
	const [active, setActive] = useState(false)
	const onChooseWallet = (e) => {
		chrome.storage.local.set({ WalletChoose: title })
		e.target
			.closest('ul')
			.querySelectorAll('li')
			.forEach((item) => {
				item.classList.remove('active-wallet')
			})
		e.target.closest('li').classList.add('active-wallet')
		chrome.storage.local.get(['WalletChoose'], (result) => {
			if (result.WalletChoose) {
				chrome.storage.local.get(['userData'], function (res) {
					res.userData.forEach((item) => {
						if (item.name == result.WalletChoose) {
							dispatch(setWalletChoose(result.WalletChoose))
							dispatch(setRestoreAddress(item.restoreAddress))
						}
					})
				})
			}
		})
	}
	useEffect(() => {
		chrome.storage.local.get(['WalletChoose'], (result) => {
			if (result.WalletChoose == title) {
				setActive(true)
			} else {
				setActive(false)
			}
		})
	}, [])
	switch (one) {
		case true:
			return (
				<div className={styles.card}>
					<Buttons className={styles.btn_copy} type='copy'></Buttons>
					<h4 className={styles.title}>{title}</h4>
					<p className={cn(styles.address, styles.address_copy)}>{children}</p>
				</div>
			)
		case false:
			return (
				<li
					className={cn(styles.card, {
						['active-wallet']: active == true,
					})}
					onClick={(e) => onChooseWallet(e)}>
					<h4 className={styles.title}>{title}</h4>
					<p className={styles.address}>{children}</p>
				</li>
			)
		default:
			return <></>
	}
}
export default AccountCard
