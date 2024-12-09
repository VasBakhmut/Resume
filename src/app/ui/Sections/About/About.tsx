'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Roboto_Mono } from 'next/font/google'

import Photo from '../../../../../public/Img/About.png'
import DWSvg from '../../../../../public/Svg/dvnloadIcon.svg'

const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: ['400'] })

const skills: string[] = [
	'html',
	'css',
	'javascript',
	'typescript',
	'react',
	'next',
	'node',
	'express',
	'mongoDB',
	'tailwind',
	'git',
]

function About() {
	const [textOpen, setTextOpen] = useState<boolean>(false)

	const textHandle = () => {
		setTextOpen(state => !state)
	}

	const handleOpenPdf = () => {
		const pdfUrl = '/VasBakhmutResumeUpd.pdf'
		window.open(pdfUrl, '_blank')
	}

	return (
		<section className='flex  items-center justify-center gap-12 py-24 px-10 '>
			<div className='w-full max-w-[335px] lg:max-w-[498px] flex flex-col items-center md:block'>
				<h2 className='text-3xl font-bold mb-7'>About Me</h2>

				<div
					className={`w-full max-w-[498px] rounded-lg ${robotoMono.className}`}
				>
					<p>
						I'm a motivated junior Full Stack Developer with a background in
						construction management, which speaks to my adaptability and
						commitment to continuous learning. My journey into tech
						{!textOpen && <span>.....</span>}
						{!textOpen && (
							<button className='text-cyan-400' onClick={textHandle}>
								Read More...
							</button>
						)}
					</p>
					<div
						className={`transition-all duration-500 ease-in-out max-h-0 overflow-hidden ${
							textOpen
								? 'opacity-100 max-h-screen visible'
								: 'opacity-0 max-h-0 invisible'
						}`}
					>
						<p>
							{` began in 2021 when health challenges led me to rethink my career  path, ultimately finding a renewed sense of purpose in web development. Since then, I've built expertise in modern technologies like React, Node.js, and MongoDB, complemented by diplomas in Front-End and Full-Stack Development. Passionate about problem-solving and eager to contribute to innovative projects.`}
						</p>
						<button className='text-cyan-400' onClick={textHandle}>
							Less
						</button>
					</div>
				</div>

				<div className='flex items-center flex-wrap gap-3 mt-8'>
					{skills.map((skill, index) => (
						<p
							className='px-2 py-1 border border-cyan-400 rounded-md'
							key={index}
						>
							{skill}
						</p>
					))}
				</div>
				<button
					onClick={handleOpenPdf}
					className='px-7 py-3 bg-cyan-400 rounded-[20px] flex items-center justify-center gap-3 mt-8'
				>
					Download CV <DWSvg />
				</button>
			</div>
			<Image src={Photo} alt='Vas Bakhmut' className='hidden md:block' />
		</section>
	)
}

export default About
