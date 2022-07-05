import React from 'react'
import { useState } from 'react'
import InputPass from './InputPass'
import InputName from './InputName'
import InputPassCheck from './InputPassCheck'

const Input = ({ id, label, errorPar, type = 'normal' }) => {
	const [pass, setPass] = useState('')
	const [passCheck, setPassCheck] = useState('')
	const [passCheckValid, setPassCheckValid] = useState(null)
	const checkPassValid = () => {
		console.log(passCheck == pass)
		if (pass == passCheck) {
			setPassCheckValid(true)
		} else {
			setPassCheckValid(false)
		}
	}
	switch (type) {
		case 'normal':
			return <InputName id={id} label={label} errorPar={errorPar} />
		case 'password':
			return (
				<InputPass
					id={id}
					label={label}
					pass={pass}
					setPass={setPass}
					checkPassValid={checkPassValid}
				/>
			)
		case 'password-check':
			return (
				<InputPassCheck
					id={id}
					label={label}
					errorPar={errorPar}
					passCheck={passCheck}
					checkPassValid={checkPassValid}
					setPassCheck={setPassCheck}
					passCheckValid={passCheckValid}
				/>
			)
	}
}

export default Input
