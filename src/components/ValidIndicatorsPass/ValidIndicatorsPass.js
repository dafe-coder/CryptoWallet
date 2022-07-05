import React from 'react'
import SvgInput from './SvgValid'
import styles from './valid-indicators.module.css'

const ValidIndicatorsPass = ({
	numberValid,
	uppercaseValid,
	specCharValid,
	lengthValid,
}) => {
	return (
		<ul className={styles.validate}>
			<li>
				{uppercaseValid == true ? (
					<SvgInput type='circle-filled' />
				) : (
					<SvgInput type='circle' />
				)}
				Uppercase
			</li>
			<li className='check-special-char'>
				{specCharValid ? (
					<SvgInput type='circle-filled' />
				) : (
					<SvgInput type='circle' />
				)}
				Special Chars
			</li>
			<li className='check-number'>
				{numberValid ? (
					<SvgInput type='circle-filled' />
				) : (
					<SvgInput type='circle' />
				)}
				Number
			</li>
			<li className='check-length'>
				{lengthValid ? (
					<SvgInput type='circle-filled' />
				) : (
					<SvgInput type='circle' />
				)}
				Min 8 Symbols
			</li>
		</ul>
	)
}

export default ValidIndicatorsPass
