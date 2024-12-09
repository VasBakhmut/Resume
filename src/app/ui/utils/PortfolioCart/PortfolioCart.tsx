import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import CardPhoto from '../../../../../public/Img/card6.jpg'

interface IProp {
	card: ICard
}

interface ICard {
	title: string
	description: string
	live: boolean
	skills: string[]
}

function PortfolioCart({ card }: IProp) {
	return (
		<div className='w-[280px]  bg-slate-700 rounded-xl '>
			<Image
				src={CardPhoto}
				alt='CartPhoto'
				width={340}
				className='rounded-t-xl'
			/>
			<div className='p-2'>
				<h2 className='font-bold text-lg m-0 mx-auto text-center  '>
					{card.title}
				</h2>
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
				<p className='m-2 text-sm'>{card.description}</p>
				<div className='my-2 flex justify-center gap-4 flex-col'>
					{card.live ? (
						<Link
							href={'/s'}
							className='bg-green-500 px-3 py-1 rounded-full bg-opacity-65'
						>
							Live
						</Link>
					) : (
						<Link
							href={'/s'}
							className='bg-amber-500 px-3 py-1 rounded-full bg-opacity-65'
						>
							GitHub Repository
						</Link>
					)}

					<Link
						href={'/s'}
						className='bg-slate-400 px-3 py-1 rounded-full bg-opacity-65'
					>
						More....
					</Link>
				</div>
			</div>
		</div>
	)
}

export default PortfolioCart
