'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import classes from './ToggleSwitch.module.css'

import MoonPng from '../../../../../public/Img/ToggleSwitch/Group.png'
import SunPng from '../../../../../public/Img/ToggleSwitch/icons8-light-mode-78.png'

function ToggleSwitch() {
	const [isDarkMode, setIsDarkMode] = useState(false)

	const toggleMode = () => {
		setIsDarkMode(!isDarkMode)
		document.body.className = isDarkMode ? 'light' : 'dark'
	}

	return (
		<div
			className={isDarkMode ? classes.toggleSwitch : classes.toggleSwitchLight}
			onClick={toggleMode}
		>
			<div
				className={`${
					isDarkMode ? classes.toggleCircleDark : classes.toggleCircle
				} relative`}
			>
				{isDarkMode ? (
					<Image src={MoonPng} alt='moon' height={30} className='mr-4' />
				) : (
					<Image src={SunPng} alt='moon' height={30} />
				)}
			</div>
		</div>
	)
}

export default ToggleSwitch
