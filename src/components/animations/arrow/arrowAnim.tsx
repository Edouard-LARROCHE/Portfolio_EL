import "./arrowAnim.scss"

type ArrowAnimProps = {
	onClick: () => void
}

const ArrowAnim = ({ onClick }: ArrowAnimProps) => {
	return (
		<div className="arrow" onClick={onClick}>
			<span></span>
			<span></span>
			<span></span>
		</div>
	)
}

export default ArrowAnim
