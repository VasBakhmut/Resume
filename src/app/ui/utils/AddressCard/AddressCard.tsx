import React from 'react'
import Image from 'next/image'

import phonePhoto from '../../../../../public/Img/call.png'
import emailPhoto from '../../../../../public/Img/envelope.png'
import homePhoto from '../../../../../public/Img/home-button.png'

interface ICard {
	title: string
	text: string
}

function AddressCard({ title, text }: ICard) {
	const getImg = () => {
		switch (title) {
			case 'Phone':
				return phonePhoto
			case 'Email':
				return emailPhoto
			case 'Address':
				return homePhoto

			default:
				return phonePhoto
		}
	}
	return (
		<div className='flex w-full max-w-[510px] bg-[#202026] bg-opacity-70 mb-5 rounded-lg px-5 py-5  gap-6'>
			<Image src={getImg()} alt='icon' width={70} />
			<div className=' '>
				<h4 className='font-bold text-2xl mb-4'>{title}</h4>
				<p className='text-gray-400'>{text}</p>
			</div>
		</div>
	)
}

export default AddressCard
