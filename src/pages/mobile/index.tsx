import LeftSide from "../leftSide/index"
import RightSide from "../rightSide/index"

import "./scss/index.scss"

const LayoutMobile = () => {
	return (
		<div className="layout">
			<LeftSide />
			{/* <RightSide /> */}
		</div>
	)
}

export default LayoutMobile

