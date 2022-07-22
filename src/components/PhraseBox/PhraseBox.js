import React from 'react'
import styles from './phrase-box.module.css'
import cn from 'classnames'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import SvgPhrase from './SvgPhrase'
import { useDispatch } from 'react-redux'
import copyText from '../../pages/Func.wallet/copy'
const PhraseBox = ({
	btns = true,
	select = false,
	setOpenQr = Function.prototype,
	setWord,
}) => {
	const { phraseArr, phrase, phraseArrScattered } = useSelector(
		(state) => state.create
	)
	const [copied, setCopied] = useState(false)
	const dispatch = useDispatch()

	const chooseWord = (e, word) => {
		console.log(e.target)
		e.target
			.closest('ul')
			.querySelectorAll('li')
			.forEach((item) => {
				item.classList.remove('active')
			})
		e.target.classList.add('active')
		dispatch(setWord(word))
	}

	return (
		<div className={cn(styles.phrase)}>
			{select ? (
				<ul
					className={cn(styles.list, styles.choose_list, 'choose-word', {
						[styles.list_ver]: btns == false,
					})}>
					{phraseArrScattered.map((item, i) => {
						return (
							<li key={i} onClick={(e) => chooseWord(e, item)}>
								{item}
							</li>
						)
					})}
				</ul>
			) : (
				<ul
					className={cn(styles.list, {
						[styles.list_ver]: btns == false,
					})}>
					{phraseArr.map((item, i) => {
						return <li key={i}>{item}</li>
					})}
				</ul>
			)}
			{btns == true ? (
				<div className={styles.buttons}>
					<button
						onClick={() => copyText(phrase, setCopied)}
						id='copy-phrase'
						className={cn({
							[styles.success]: copied == true,
						})}>
						{copied == true ? (
							<>
								<SvgPhrase type='check' />
								<span>Copied</span>
							</>
						) : (
							<>
								<SvgPhrase type='copy' />
								<span>Copy</span>
							</>
						)}
					</button>
					<button id='create-qr-btn' onClick={() => setOpenQr(true)}>
						<SvgPhrase type='qrCode' />
						QR Code
					</button>
				</div>
			) : (
				<></>
			)}
		</div>
	)
}
export default PhraseBox
