import React from "react"

import Title from "../../components/title/title"
import NavBar from "../../components/navBar/navBar"
import CopyRight from "../../components/copyRight"

import "./index.scss"

const LeftSide = () => {
	return (
		<div className="leftPart">
			<NavBar />
			<Title />
			<CopyRight />
		</div>
	)
}

export default LeftSide

