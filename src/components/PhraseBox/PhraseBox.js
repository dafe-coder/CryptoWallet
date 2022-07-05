import React, { useEffect } from 'react'
import styles from './phrase-box.module.css'
import cn from 'classnames'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import SvgPhrase from './SvgPhrase'

const PhraseBox = ({
	btns = true,
	select = false,
	setOpenQr = Function.prototype,
}) => {
	const { phraseArr } = useSelector((state) => state)
	const [copied, setCopied] = useState(false)

	const onCopy = () => {
		alert(phrase)
		if (phrase !== '') {
			setCopied(true)

			var copyHelper = document.createElement('input')
			copyHelper.className = 'copyhelper'
			document.body.appendChild(copyHelper)
			copyHelper.value = phrase
			copyHelper.select()
			document.execCommand('copy')
			setTimeout(() => {
				setCopied(false)
				document.body.removeChild(copyHelper)
			}, 1000)
		}
	}
	return (
		<div className={cn(styles.phrase)}>
			{select ? (
				<ul
					className={cn(styles.list, styles.choose_list, 'choose-word1', {
						[styles.list_ver]: btns == false,
					})}>
					{phraseArr.map((item, i) => {
						return <li key={i}>{item}</li>
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
						onClick={onCopy}
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
