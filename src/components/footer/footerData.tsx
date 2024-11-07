import type { FooterDataProps } from "./types"

import LoadingText from "../animations/loader/loaderText"

import "./footerData.scss"

const FooterData = ({
	data,
	repos,
	loadingData,
	loadingRepos,
}: FooterDataProps) => {
	const items = [
		{
			title: "Totaling repos",
			description: data && data.public_repos + data.total_private_repos,
			extendText: "Repositories",
		},
		{
			title: "Repositories",
			description: repos && repos.length,
			extendText: "Contributed",
		},
		{ title: "Following", description: data && data.following },
		{ title: "Followers", description: data && data.followers },
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

