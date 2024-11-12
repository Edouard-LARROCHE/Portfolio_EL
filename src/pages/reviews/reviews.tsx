import { useState } from "react"

import { Card, Rate, Button } from "antd"
import { ReviewProps } from "./types"

import Link from "../../assets/icons/link.svg?react"

import "./reviews.scss"

const ReviewCard = ({ review }: { review: ReviewProps }) => {
	const [expanded, setExpanded] = useState(false)

	const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		window.open(e.currentTarget.href, "_blank")
	}

	return (
		<div className="reviewCard">
			<Card className="cardReview">
				<div className="reviewTop">
					<img className="img" alt="img" src={review.picture} />
					<Rate disabled defaultValue={review.rating} />
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
									<p className="reviewButtonText">
										{expanded ? "Show Less" : "Read More"}
									</p>
								)}
							</Button>
							{review.website && (
								<p className="reviewWebsiteLink">
									Website link
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
								By {review.clientName}
							</p>
						</div>
					}
				/>
			</Card>
		</div>
	)
}

export default ReviewCard

