import { useAppSelector } from "../../types/store.types"
import { useTranslation } from "react-i18next"

import "./title.scss"

const Title = () => {
	const { t, i18n } = useTranslation()

	const customAppPrimaryColor = useAppSelector(
		(state) => state.custom.primaryColor,
	)
	const customAppfont = useAppSelector((state) => state.custom.font)

	const isFrench = i18n.language.startsWith("fr")

	return (
		<div className="containerTitle">
			{isFrench ? (
				<>
					<div
						className="subtitle"
						style={{ fontFamily: customAppfont }}
					>
						{t("leftSide.subtitle")}
					</div>
					<div
						className="title"
						style={{
							color: customAppPrimaryColor,
							fontFamily: customAppfont,
						}}
					>
						{t("leftSide.title")}
					</div>
				</>
			) : (
				<>
					<div
						className="title"
						style={{
							color: customAppPrimaryColor,
							fontFamily: customAppfont,
						}}
					>
						{t("leftSide.title")}
					</div>
					<div
						className="subtitle"
						style={{ fontFamily: customAppfont }}
					>
						{t("leftSide.subtitle")}
					</div>
				</>
			)}
			<div className="desc" style={{ fontFamily: customAppfont }}>
				{t("leftSide.desc")}
			</div>
		</div>
	)
}

export default Title

