import React from 'react'
import Image from 'next/image'

import HTMLIcon from '../../../../../public/Img/html.png'
import CSSIcon from '../../../../../public/Img/css-3.png'
import JSIcon from '../../../../../public/Img/js.png'
import TPSIcon from '../../../../../public/Img/typescript.png'
import ReactIcon from '../../../../../public/Img/react.png'
import NextIcon from '../../../../../public/Img/nextjs-icon.png'
import NodeIcon from '../../../../../public/Img/node.png'
import ExpressIcon from '../../../../../public/Img/express-js.png'
import MongoIcon from '../../../../../public/Img/mongodb.png'
import GitIcon from '../../../../../public/Img/gitSocial.png'
import MaterialIcon from '../../../../../public/Img/material-ui.png'
import TailwindIcon from '../../../../../public/Img/tailwind.png'
import AntIcon from '../../../../../public/Img/design-ant.png'
import BootIcon from '../../../../../public/Img/bootstrap.png'

interface IProp {
	prop: ISkills
}

interface ISkills {
	title: string
	progress: string
}

function ProgressBar({ prop }: IProp) {
	const getIcon = () => {
		switch (prop.title) {
			case 'HTML':
				return HTMLIcon
			case 'CSS':
				return CSSIcon
			case 'JavaScript':
				return JSIcon
			case 'TypeScript':
				return TPSIcon
			case 'React':
				return ReactIcon
			case 'Next':
				return NextIcon
			case 'Node':
				return NodeIcon
			case 'Express':
				return ExpressIcon
			case 'MongoDB':
				return MongoIcon
			case 'Git':
				return GitIcon
			case 'Tailwind':
				return TailwindIcon
			case 'AntDesign':
				return AntIcon
			case 'Bootstrap':
				return BootIcon
			case 'MaterialUI':
				return MaterialIcon
			default:
				return MaterialIcon
		}
	}
	return (
		<div className='space-y-4 w-full max-w-[200px]'>
			<div className='relative pt-1 '>
				<div className='flex gap-3'>
					<Image src={getIcon()} alt='icon' width={20} />
					<span className='text-sm font-semibold'>{prop.title}</span>
				</div>

				<div className='flex mb-2'>
					<div className='relative flex w-full items-center gap-4'>
						<div className='flex-1 h-2  bg-gray-800 rounded-full'>
							<div
								className='h-2 bg-cyan-400 rounded-full'
								style={{ width: `${prop.progress}` }}
							/>
						</div>
						<span>{prop.progress}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProgressBar
