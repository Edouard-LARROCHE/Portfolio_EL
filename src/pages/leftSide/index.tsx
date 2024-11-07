import { useState, useEffect } from "react"
import { useScreenSize } from "../../context/hooks/customHooks"

import { getGithubProfile, getGithubRepos } from "../../services/services"

import Title from "../../components/title/title"
import NavBar from "../../components/navBar/navBar"
import FooterData from "../../components/footer/footerData"
import CopyRight from "../../components/copyRight"

import ConstellationSVG from "../../assets/icons/constellation.svg?react"

import "./index.scss"

const LeftSide = () => {
	const screenSize = useScreenSize()

	const [profile, setProfile] = useState(null)
	const [repos, setRepos] = useState(null)
	const [loadingData, setLoadingData] = useState(true)
	const [loadingRepos, setLoadingRepos] = useState(true)

	useEffect(() => {
		getGithubProfile().then((profile) => {
			setProfile(profile)
			setLoadingData(false)
		})

		getGithubRepos().then((repos) => {
			setRepos(repos)
			setLoadingRepos(false)
		})
	}, [])

	return (
		<div className="leftPart">
			{screenSize === "desktop" && <NavBar />}
			<div className="constellation">
				<ConstellationSVG />
			</div>
			<Title />
			<FooterData
				data={profile}
				loadingData={loadingData}
				loadingRepos={loadingRepos}
				repos={repos}
			/>
			<CopyRight />
		</div>
	)
}

export default LeftSide

