import React from 'react'
import Buttons from '../../components/Buttons/Buttons'
import Title from '../../components/Title/Title'
import cn from 'classnames'
import styles from './about.module.css'
import BoxWithIcon from './../../components/BoxWithIcon/BoxWithIcon'
import Svg from './../../svgs/Svg'
import Par from './../../components/Par/Par'
import Button from './../../components/Button/Button'

const About = () => {
	return (
		<section className='bg-white'>
			<div className='wallet-body'>
				<div className='wallet-top'>
					<div className='wallet-header'>
						<Buttons type='back' />
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
