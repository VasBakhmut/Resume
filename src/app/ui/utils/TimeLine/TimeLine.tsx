'use client'

import React, { useState } from 'react'
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa'

const timelineData = [
	{
		id: 3,
		date: '2023-Curr..',
		title: 'Full-Stack Developer, Personal Projects  ',
		description: 'Monitoring App for Chronic Fatigue Syndrome',
		icon: FaBriefcase,
		color: 'bg-green-500',
	},
	{
		id: 2,
		date: '2023-2024',
		title: 'Diploma of Full Stack Development',
		description: 'Genius Space',
		icon: FaGraduationCap,
		color: 'bg-sky-500',
	},
	{
		id: 1,
		date: '2017-2019',
		title: 'Manager Director, Mizara Design & Construction ',
		description: 'Led building and renovation projects',
		icon: FaBriefcase,
		color: 'bg-green-500',
	},

	{
		id: 4,
		date: '2022-2023',
		title: 'Diploma of Front End Development',
		description: 'Meta/Coursera',
		icon: FaGraduationCap,
		color: 'bg-sky-500',
	},

	{
		id: 5,
		date: '2016-2019',
		title: 'Founder, Photo Light Studio',
		description:
			'Managed product design, costs, production, marketing and sales',
		icon: FaBriefcase,
		color: 'bg-green-500',
	},
	{
		id: 6,
		date: '2014-2016',
		title: 'Diploma of Building and Construction',
		description: 'ParkerBrent',
		icon: FaGraduationCap,
		color: 'bg-sky-500',
	},
	{
		id: 7,
		date: '2009-2017',
		title: 'Construction Supervisor',
		description: 'Led building and renovation projects',
		icon: FaBriefcase,
		color: 'bg-green-500',
	},
]

function TimeLine() {
	const [selectedMilestone, setSelectedMilestone] = useState(null)

	const handleMilestoneClick = (milestone: any) => {
		setSelectedMilestone(milestone)
	}

	return (
		<div className='container mx-auto md:px-4 py-8'>
			<h2 className='text-3xl font-bold mb-8 text-center'>
				Education & Experience
			</h2>
			<div className='relative wrap overflow-hidden md:p-10 h-full'>
				<div className='border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2'></div>
				{timelineData.map((milestone, index) => (
					<div
						key={milestone.id}
						className={`mb-8 flex items-center justify-center gap-10 w-full flex-col  ${
							milestone.id % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
						}`}
					>
						<div className='order-1 w-3/12 hidden md:block'></div>
						<div className='z-20 flex items-center order-1 bg-gray-600 shadow-xl w-8 h-8 rounded-full min-w-fit p-2 mx-2 '>
							<h1 className='mx-auto font-semibold text-lg text-white p-2 '>
								{milestone.date}
							</h1>
						</div>
						<button
							onClick={() => handleMilestoneClick(milestone)}
							className={`order-1 w-3/12 px-6 py-2 rounded-3xl shadow-xl shadow-slate-800  ${
								milestone.color
							} text-white cursor-pointer transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${
								milestone.color.split('-')[1]
							}-400`}
						>
							<h3 className='mb-3 font-bold text-base'>{milestone.title}</h3>
							<p className='mb-2'>{milestone.description}</p>
							<milestone.icon className='text-4xl mb-3 inline-block' />
							<p className='text-sm leading-snug tracking-wide text-opacity-100'>
								Click for more details
							</p>
						</button>
					</div>
				))}
			</div>
		</div>
	)
}

export default TimeLine
