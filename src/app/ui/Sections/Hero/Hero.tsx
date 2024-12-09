import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Photo from '../../../../../public/Img/VasBakhmut.jpeg'

import MailSvg from '../../../../../public/Svg/MailIcon.svg'
import PhoneSvg from '../../../../../public/Svg/PhoneIcon.svg'
import PinSvg from '../../../../../public/Svg/PinIcon.svg'
import FBSvg from '../../../../../public/Svg/FBIcon.svg'
import GitSvg from '../../../../../public/Svg/GitIcon.svg'

function Hero() {
	return (
		<section className='relative flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-44 py-24 lg:py-52 bg-[url("/Img/bg1.jpg")] px-4'>
			<div className='relative w-[360px] h-[360px] rounded-full border-[20px] border-black shadow-[0_0_10px_rgba(0,0,0,0.3)]'>
				<div className='absolute inset-0 rounded-full border-[12px] border-[rgba(19,19,19,0.3)]'></div>
				<Image
					src={Photo}
					alt='Vasyl Bakhmut'
					className='w-full h-full rounded-full'
				/>
			</div>
			<div>
				<p className='px-7 py-4 bg-cyan-400 rounded-tl-[20px] rounded-tr-[20px]  rounded-br-[20px]  rounded-bl-0 text-base font-bold max-w-[123px] mb-7'>
					Hello I'm
				</p>
				<h2 className='text-6xl font-semibold mb-4'>Vasyl Bakhmut</h2>
				<p className=' text-2xl mb-8'>Trainee/Junior FullStack Developer</p>
				<Link href={'/ss'} className='flex items-center gap-4 mb-3 '>
					<MailSvg />
					mizaracnc@gmail.com
				</Link>
				<Link href={'/ss'} className='flex items-center gap-4 mb-3 '>
					<PhoneSvg />
					+614 25 401 444
				</Link>
				<Link href={'/ss'} className='flex items-center gap-4 mb-3 '>
					<PinSvg />
					Highett, VIC, 3190
				</Link>
				<div className='flex items-center mt-8 gap-9'>
					<Link href={'/d'}>
						<FBSvg />
					</Link>
					<Link href={'/d'}>
						<GitSvg />
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Hero
