import { useState } from "react"
import { useAppSelector } from "../../types/store.types"
import { useTranslation } from "react-i18next"

import { Card, Rate, Button } from "antd"
import { ReviewProps } from "./types"

import Link from "../../assets/icons/link.svg?react"

import "./reviews.scss"

const ReviewCard = ({ review }: { review: ReviewProps }) => {
	const { t } = useTranslation()

	const [expanded, setExpanded] = useState(false)

	const customColor = useAppSelector((state) => state.custom)

	const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		window.open(e.currentTarget.href, "_blank")
	}

	return (
		<div className="reviewCard">
			<Card className="cardReview">
				<div className="reviewTop">
					{review.picture && (
						<img className="img" alt="img" src={review.picture} />
					)}
					<Rate
						disabled
						allowHalf
						defaultValue={review.rating}
						style={{ color: customColor.primaryColor }}
					/>
				</div>
				<Card.Meta
					description={
						<div>
							<p className="reviewText">
								{expanded || review.text.length < 150
									? review.text
									: `${review.text.substring(0, 150)}...`}
							</p>
							<Button
								type="link"
								onClick={() => setExpanded(!expanded)}
							>
								{review.text.length > 150 && (
									<p
										className="reviewButtonText"
										style={{
											color: customColor.buttonColor,
										}}
									>
										{expanded
											? t(
													"rightSide.review.button.showLess",
												)
											: t(
													"rightSide.review.button.readMore",
												)}
									</p>
								)}
							</Button>
							{review.website && (
								<p className="reviewWebsiteLink">
									{t("rightSide.review.websiteLink")}
									<a
										href={review.website}
										target="_blank"
										rel="noreferrer"
										onClick={handleLinkClick}
									>
										<Link className="link" />
									</a>
								</p>
							)}
							<p className="reviewTextName">
								{t("rightSide.review.by")} {review.clientName}
							</p>
						</div>
					}
				/>
			</Card>
		</div>
	)
}

export default ReviewCard
