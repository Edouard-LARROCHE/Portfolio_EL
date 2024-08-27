import Input from "../../components/input/input"

import "./contact.scss"

const Contact = () => {
	return (
		<div className="containerContact">
			<div className="containerText">
				<div className="textFirst">Feel free to reach out!</div>
				<div className="textSecond">
					Whether you have a{" "}
					<span className="highlight">project</span> in mind, need
					assistance with your existing application, or{" "}
					<span className="highlight">symply</span> want to connect,
					I'm here to help.
				</div>
				<div className="textSecond">
					Please describe your needs or{" "}
					<span className="highlight">ideas</span>, and I’ll get back
					to you as soon as{" "}
					<span className="highlight">possible</span>.
				</div>
			</div>
			<Input />
		</div>
	)
}

export default Contact

