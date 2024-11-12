import Reviews from "../pages/reviews/reviews"

import LogoMM from "../assets/projects/img/maison-morin.png"
import LogoLe11 from "../assets/projects/img/logo-tampon-le11.png"

const reviews = [
	{
		picture: LogoLe11,
		rating: 5,
		text: "Working with Edouard was a fantastic experience! He created a stunning website for our rental apartment in Marseille that beautifully showcases the space with high-quality photos and detailed information. The site is visually appealing, easy to navigate, and perfectly tailored to attract potential guests. Edouard's professionalism and attention to detail made the entire process smooth and enjoyable. Highly recommended for anyone looking to create a standout online presence!",
		date: "25 Sep 2024",
		clientName: "Xavier",
		website: "https://www.le11amarseille.fr/",
	},
	{
		picture: LogoMM,
		rating: 5,
		text: "A huge thank you to Edouard for creating our stunning showcase website! Thanks to him, our boutique now has an elegant and professional online presence. The site perfectly captures our brand’s identity with beautiful visuals and intuitive navigation, giving our customers an immersive preview of our products and services. Edouard was attentive to our needs, offering creative and effective solutions at every step. His expertise made all the difference. I highly recommend him to any business looking to stand out online!",
		date: "06 Feb 2021",
		clientName: "Victorien Morin",
		website: "https://www.maison-morin.com/",
	},
]

const ReviewData = () => (
	<div style={{ display: "flex", flexWrap: "wrap", marginTop: "3rem" }}>
		{reviews.map((review, index) => (
			<div className="reviewWrapper" key={index}>
				<Reviews key={index} review={review} />
				<p className="reviewDate">
					<div className="tils horizontal" />
					<div className="date">{review.date}</div>
				</p>
			</div>
		))}
	</div>
)

export default ReviewData

