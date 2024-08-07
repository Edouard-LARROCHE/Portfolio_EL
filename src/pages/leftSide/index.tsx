import Title from "../../components/title/title"
import NavBar from "../../components/navBar/navBar"
import CopyRight from "../../components/copyRight"

import ConstellationSVG from "../../assets/icons/constellation.svg?react"

import "./index.scss"

const LeftSide = () => {
	return (
		<div className="leftPart">
			<NavBar />
			<div className="constellation">
				<ConstellationSVG />
			</div>
			<Title />
			<CopyRight />
		</div>
	)
}

export default LeftSide

