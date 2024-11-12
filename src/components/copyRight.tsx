import { useLocation } from "react-router-dom"

import Copyright from "../assets/icons/copyright.svg?react"

import "./copyRight.scss"

const CopyRight = () => {
	const location = useLocation()

	const currentYear = new Date().getFullYear()

	return (
		<div
			className={`containerCopyRight ${location.pathname === "/home/contact" ? "customPosition" : ""}`}
		>
			<Copyright />
			<div className="text">
				{currentYear} Portfolio - Created by Edouard Lrc
			</div>
		</div>
	)
}

export default CopyRight

