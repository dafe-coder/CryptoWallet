import React from 'react'
import cn from 'classnames'

import classes from './lang.module.css'

const Lang = () => {
	return (
		<button className={cn(classes.btn, 'btn')}>
			English
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='5'
				height='4'
				viewBox='0 0 5 4'
				fill='white'>
				<path d='M4.8917 1.12069L2.7342 3.25278C2.66323 3.32732 2.57807 3.35714 2.5071 3.35714C2.42193 3.35714 2.33677 3.32732 2.2658 3.26768L0.1083 1.12069C-0.0336408 0.986502 -0.0336408 0.762857 0.0941058 0.61376C0.221852 0.464663 0.434763 0.464663 0.576704 0.59885L2.5071 2.50729L4.4233 0.59885C4.56524 0.464663 4.77815 0.464663 4.90589 0.61376C5.03364 0.762857 5.03364 0.986502 4.8917 1.12069Z'></path>
			</svg>
		</button>
	)
}

export default Lang
