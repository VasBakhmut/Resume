import React from 'react'
import Link from 'next/link'
import ToggleSwitch from '../utils/ToggleSwitch/ToggleSwitch'

import MenuSvg from '../../../../public/Svg/icons8-menu.svg'

function Header() {
	return (
		<header className='flex justify-center items-center gap-24 lg:gap-40 absolute  z-50 my-6 w-full'>
			<ToggleSwitch />
			<h2 className='text-2xl font-bold mr-10'>VasBakhmut</h2>
			<button className='md:hidden'>
				<MenuSvg />
			</button>

			<nav className='hidden md:block'>
				<ul className=' flex gap-6'>
					<li>
						<Link href={'/#'}>About</Link>
					</li>
					<li>
						<Link href={'/#'}>Skills</Link>
					</li>
					<li>
						<Link href={'/#'}>Education & Experiences</Link>
					</li>
					<li>
						<Link href={'/#'}>Portfolio</Link>
					</li>
					<li>
						<Link href={'/#'}>Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
