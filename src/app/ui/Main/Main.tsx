import React from 'react'
import Hero from '../Sections/Hero/Hero'
import About from '../Sections/About/About'
import Portfolio from '../Sections/Portfolio/Portfolio'
import Skills from '../Sections/Skills/Skills'
import Contact from '../Sections/Contact/Contact'
import EducationExperience from '../Sections/EducationExperience/EducationExperience'

function Main() {
	return (
		<main>
			<Hero />
			<About />
			<Skills />
			<EducationExperience />
			<Portfolio />
			<Contact />
		</main>
	)
}

export default Main
