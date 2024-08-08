import React from "react"

import type { FooterDataProps } from "./types"

import "./footerData.scss"

const FooterData = ({ data }: FooterDataProps) => {
	return (
		<div className="footerDataContainer">
			<div className="footerData">
				<ul>
					<li>Github</li>
					<li>Twitter</li>
					<li>Linkedin</li>
					<li>Instagram</li>
				</ul>
			</div>
		</div>
	)
}

export default FooterData

