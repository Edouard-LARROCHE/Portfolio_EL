import Copyright from "../assets/icons/copyright.svg?react"

import "./copyRight.scss"

const CopyRight = () => {
	const currentYear = new Date().getFullYear()

	return (
		<div className="containerCopyRight">
			<Copyright />
			<div className="text">
				{currentYear} Portfolio - Created by Edouard Lrc
			</div>
		</div>
	)
}

export default CopyRight

