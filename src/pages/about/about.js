import React from 'react'
import Buttons from '../../components/Buttons/Buttons'
import Title from '../../components/Title/Title'
import BoxWithIcon from './../../components/BoxWithIcon/BoxWithIcon'
import Svg from './../../svgs/Svg'
import Button from './../../components/Button/Button'
import { setCurrentPage } from '../../actions/createActions'
import { useDispatch } from 'react-redux'
const About = () => {
	const dispatch = useDispatch()
	return (
		<section className='bg-white'>
			<div className='wallet-body'>
				<div className='wallet-top'>
					<div className='wallet-header'>
						<Buttons
							onClick={() => dispatch(setCurrentPage('Settings'))}
							type='back'
						/>
						<Title>About</Title>
						<div></div>
					</div>
					<BoxWithIcon
						style={{ marginBottom: '30px' }}
						title='Polygon Wallet'
						par='Version 4.16.3'
						colorPar='dark-gray'>
						<Svg type='polygon' style={{ marginBottom: '20px' }} />
					</BoxWithIcon>
					<Button type='border-gray' text='left' mt='0'>
						Help
					</Button>
				</div>
				<div className='wallet-bottom'></div>
			</div>
		</section>
	)
}
export default About
