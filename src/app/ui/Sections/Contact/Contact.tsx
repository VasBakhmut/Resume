import React from 'react'
import AddressCard from '../../utils/AddressCard/AddressCard'
import Link from 'next/link'

import FBSvg from '../../../../../public/Svg/FBIcon.svg'
import GitSvg from '../../../../../public/Svg/GitIcon.svg'

function Contact() {
	return (
		<section className='py-32 px-5 bg-[url("/Img/bgcontact7.png")] bg-no-repeat bg-cover '>
			<h3 className='text-center mb-11 text-3xl font-bold'>Contact Me</h3>
			<div className='flex flex-col-reverse md:flex-row justify-center items-center  gap-10'>
				<div className='flex flex-col gap-6 w-full max-w-[510px]'>
					<AddressCard title='Phone' text='+61425401444' />
					<AddressCard title='Email' text='mizaracnc@gmail.com' />
					<AddressCard title='Address' text='Highett, VIC, 3190' />
				</div>
				<form
					action='submit'
					className='flex flex-col gap-6 w-full max-w-[538px]'
				>
					<input
						type='text'
						placeholder='Name'
						className='bg-transparent border border-gray-400 rounded-lg py-3 px-5'
					/>
					<input
						type='email'
						placeholder='Email'
						className='bg-transparent border border-gray-400 rounded-lg py-3 px-5'
					/>
					<input
						type='tel'
						placeholder='Phone'
						className='bg-transparent border border-gray-400 rounded-lg py-3 px-5'
					/>
					<textarea
						name=''
						id=''
						placeholder='Message'
						className='bg-transparent border border-gray-400 rounded-lg py-3 px-5 h-[126px]'
					></textarea>
					<button className='bg-cyan-400 rounded-full py-2'>
						Send Message
					</button>
				</form>
			</div>
			<div className='flex justify-center items-center mt-12 gap-9 '>
				<Link
					href={'/d'}
					className='border border-cyan-400 p-3 rounded-2xl w-14 h-14 flex justify-center items-center'
				>
					<FBSvg />
				</Link>
				<Link
					href={'/d'}
					className='border border-cyan-400 p-3 rounded-2xl w-14 h-14 flex justify-center items-center'
				>
					<GitSvg />
				</Link>
			</div>
		</section>
	)
}

export default Contact
