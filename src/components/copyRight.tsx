import React from "react"

import Copyright from "../assets/icons/copyright.svg?react"

import "./copyRight.scss"

const CopyRight = () => {
	return (
		<div className="containerCopyRight">
			<Copyright />
			<div className="text">2024 Portfolio - Created by Edouard Lrc</div>
		</div>
	)
}

export default CopyRight

