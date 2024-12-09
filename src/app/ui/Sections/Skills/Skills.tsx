import React from 'react'
import ProgressBar from '../../utils/ProgressBar/ProgressBar'
import Image from 'next/image'

import { Roboto_Mono } from 'next/font/google'

const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: ['400'] })

import { skills } from '@/app/data/skills'
import check from '../../../../../public/Img/check.png'

const softSkills: string[] = [
	'Management Skills',
	'Problem-solving',
	'Attention to detail',
	'Ability to multitask',
	'Self-motivated',
	'Critical Thinking',
	'Leadership',
	'Eager and willing to learn',
]

function Skills() {
	return (
		<section className="bg-[url('/Img/bgSkils.png')] bg-no-repeat bg-cover px-4 py-24">
			<div className='mb-20'>
				<h3 className='text-center mb-10 text-3xl font-bold'>
					Technical Skills
				</h3>
				<div className='flex flex-wrap gap-10 justify-center items-center w-full max-w-[1200px] m-0 mx-auto'>
					{skills &&
						skills.map((skill, index) => (
							<ProgressBar key={index} prop={skill} />
						))}
				</div>
			</div>
			<div>
				<h3 className='text-center mb-10 text-3xl font-bold '>
					Professional Skills
				</h3>
				<div className='flex flex-wrap gap-10 justify-center items-center w-full max-w-[1200px] m-0 mx-auto'>
					{softSkills.map((skill, index) => (
						<div
							key={index}
							className='flex items-center gap-3 border border-cyan-400 px-5 py-1 rounded-full'
						>
							<Image src={check} alt='check' width={20} />
							<p className={` ${robotoMono.className} text-sm`}>{skill}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Skills
