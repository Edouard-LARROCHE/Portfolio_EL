import { useState, useEffect } from "react"

import { getGithubProfile } from "../../services/services"

import Title from "../../components/title/title"
import NavBar from "../../components/navBar/navBar"
import FooterData from "../../components/footer/footerData"
import CopyRight from "../../components/copyRight"

import ConstellationSVG from "../../assets/icons/constellation.svg?react"

import "./index.scss"

const LeftSide = () => {
	const [profile, setProfile] = useState(null)

	useEffect(() => {
		getGithubProfile().then((profile) => {
			setProfile(profile)

			console.log(profile)
		})
	}, [])

	return (
		<div className="leftPart">
			<NavBar />
			<div className="constellation">
				<ConstellationSVG />
			</div>
			<Title />
			<FooterData data={profile} />
			<CopyRight />
		</div>
	)
}

export default LeftSide

