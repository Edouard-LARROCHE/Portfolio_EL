import { useTranslation } from "react-i18next"

import { useScreenSize } from "../../context/hooks/screenSizeHooks"

import Input from "../../components/input/input"
import CopyRight from "../../components/copyRight"

import "./contact.scss"

const Contact = () => {
	const { t } = useTranslation()
	const screenSize = useScreenSize()

	return (
		<div className="containerContact">
			<div className="containerText">
				<div className="textFirst">{t("rightSide.contact.title")}</div>
				<div className="textSecond">
					{t("rightSide.contact.desc.p1")}{" "}
					<span className="highlight">
						{t("rightSide.contact.desc.p2")}
					</span>{" "}
					{t("rightSide.contact.desc.p3")}{" "}
					<span className="highlight">
						{t("rightSide.contact.desc.p4")}
					</span>{" "}
					{t("rightSide.contact.desc.p5")}
				</div>
				<div className="textSecond">
					{t("rightSide.contact.desc.p6")}{" "}
					<span className="highlight">
						{t("rightSide.contact.desc.p7")}
					</span>
					{t("rightSide.contact.desc.p8")}{" "}
					<span className="highlight">
						{t("rightSide.contact.desc.p9")}
					</span>
					.
				</div>
			</div>
			<Input />
			{screenSize !== "desktop" && <CopyRight />}
		</div>
	)
}

export default Contact

