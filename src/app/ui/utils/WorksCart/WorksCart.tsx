import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import CardPhoto from '../../../../../public/Img/ScreenBakery.png'
import CardPhoto1 from '../../../../../public/Img/ScreenBeautyZone.png'
import CardPhoto2 from '../../../../../public/Img/ScreenDogClub.png'

interface IProp {
	card: ICard
}

interface ICard {
	title: string
	description: string
	live: boolean
	skills: string[]
	opPhoto: string
	link: string
}

const getPhoto = (card: ICard) => {
	switch (card.opPhoto) {
		case 'CardPhoto':
			return CardPhoto
		case 'CardPhoto1':
			return CardPhoto1
		case 'CardPhoto2':
			return CardPhoto2

		default:
			return CardPhoto
	}
}

function WorksCart({ card }: IProp) {
	return (
		<div className='card glass w-96'>
			<figure>
				<Image src={getPhoto(card)} alt='cardPhoto' />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{card.title}</h2>
				<div className='flex gap-2 flex-wrap mx-2 my-6'>
					{card.skills &&
						card.skills.map((skill, index) => (
							<p
								key={index}
								className='rounded px-2 py-1 border border-teal-400 text-xs'
							>
								{skill}
							</p>
						))}
				</div>
				<p>{card.description}</p>

				<div className='my-2 flex justify-center gap-4 flex-col'>
					{card.live ? (
						<Link
							href={card.link}
							className='bg-green-500 px-3 py-1 rounded-full bg-opacity-65 text-center'
						>
							Live
						</Link>
					) : (
						<Link
							href={card.link}
							className='bg-amber-500 px-3 py-1 rounded-full bg-opacity-65 text-center'
						>
							GitHub Repository
						</Link>
					)}

					<Link href={'/s'} className='btn btn-primary'>
						More....
					</Link>
				</div>
			</div>
		</div>
	)
}

export default WorksCart
