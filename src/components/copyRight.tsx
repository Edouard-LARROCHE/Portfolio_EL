import { useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"

import Copyright from "../assets/icons/copyright.svg?react"

import "./copyRight.scss"

const CopyRight = () => {
	const { t } = useTranslation()
	const location = useLocation()

	const currentYear = new Date().getFullYear()

	return (
		<div
			className={`containerCopyRight ${location.pathname === "/home/contact" ? "customPosition" : ""}`}
		>
			<Copyright />
			<div className="text">
				{currentYear} Portfolio - {t("copyRight.createBy")} Edouard Lrc
			</div>
		</div>
	)
}

export default CopyRight
