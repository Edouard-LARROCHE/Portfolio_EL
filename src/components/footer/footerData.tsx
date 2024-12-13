import { useTranslation } from "react-i18next"

import type { FooterDataProps } from "./types"

import LoadingText from "../animations/loader/loaderText"

import "./footerData.scss"

const FooterData = ({
	data,
	repos,
	loadingData,
	loadingRepos,
}: FooterDataProps) => {
	const { t } = useTranslation()

	const items = [
		{
			title: t("workingData.totalReposTitle"),
			description: data && data.public_repos + data.total_private_repos,
			extendText: t("workingData.repositories"),
		},
		{
			title: t("workingData.repositories"),
			description: repos && repos.length,
			extendText: t("workingData.totalContributedTitle", {
				s: repos && repos.length > 0 ? "s" : "",
			}),
		},
		{
			title: t("workingData.followingTitle"),
			description: data && data.following,
		},
		{
			title: t("workingData.followersTitle"),
			description: data && data.followers,
		},
	]

	return (
		<div className="footerDataContainer">
			<div className="footerData">
				<ul>
					{items.map((item, index) => (
						<li key={index}>
							<div className="title">
								<p>{item.title}</p>
							</div>
							{loadingData || loadingRepos ? (
								<div className="containerLoader">
									<LoadingText type={["long"]} number={1} />
								</div>
							) : (
								<div className="description">
									<p>{item.description}</p>
									<p>{item.extendText}</p>
								</div>
							)}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default FooterData

