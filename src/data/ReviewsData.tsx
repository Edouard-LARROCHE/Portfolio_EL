import { useTranslation } from "react-i18next"

import Reviews from "../pages/reviews/reviews"
// import RatingStars from "../components/rating/ratingStar"

import LogoMM from "../assets/projects/img/maison-morin.png"
import LogoLe11 from "../assets/projects/img/logo-tampon-le11.png"

function renderReviewData() {
	const { t } = useTranslation()

	const reviews = [
		{
			picture: LogoLe11,
			rating: 5,
			text: t("rightSide.review.review1"),
			date: "25 Sep 2024",
			clientName: "Xavier",
			website: "https://www.le11amarseille.fr/",
		},
		{
			rating: 4.5,
			text: t("rightSide.review.review3"),
			date: "14 Jun 2023",
			clientName: "Boris Leroyan",
		},
		{
			picture: LogoMM,
			rating: 5,
			text: t("rightSide.review.review2"),
			date: "06 Feb 2021",
			clientName: "Victorien Morin",
			website: "https://www.maison-morin.com/",
		},
	]

	return reviews
}

const ReviewData = () => (
	<>
		{/* <RatingStars /> */}
		<div style={{ display: "flex", flexWrap: "wrap", marginTop: "3rem" }}>
			{renderReviewData().map((review, index) => (
				<div className="reviewWrapper" key={index}>
					<Reviews key={index} review={review} />
					<p className="reviewDate">
						<div className="tils horizontal" />
						<div className="date">{review.date}</div>
					</p>
				</div>
			))}
		</div>
	</>
)

export default ReviewData

