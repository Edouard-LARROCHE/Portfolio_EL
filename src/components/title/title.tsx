import { useTranslation } from "react-i18next"

import "./title.scss"

const Title = () => {
	const { t, i18n } = useTranslation()

	const isFrench = i18n.language.startsWith("fr")

	return (
		<div className="containerTitle">
			{isFrench ? (
				<>
					<div className="subtitle">{t("leftSide.subtitle")}</div>
					<div className="title">{t("leftSide.title")}</div>
				</>
			) : (
				<>
					<div className="title">{t("leftSide.title")}</div>
					<div className="subtitle">{t("leftSide.subtitle")}</div>
				</>
			)}
			<div className="desc">{t("leftSide.desc")}</div>
		</div>
	)
}

export default Title

