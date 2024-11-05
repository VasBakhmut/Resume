import React from 'react'
import { portfolioCards } from '@/app/data/porfolos'
import WorksCart from '../../utils/WorksCart/WorksCart'

function Portfolio() {
	return (
		<section className='py-40 bg-[url("/Img/bg1.jpg")] bg-no-repeat bg-cover'>
			<h2 className='text-3xl font-bold mb-8 text-center'>Portfolio</h2>
			<div className='flex gap-7 justify-center'>
				{portfolioCards.map((card, index) => (
					<WorksCart card={card} key={index} />
				))}
			</div>
		</section>
	)
}

export default Portfolio
