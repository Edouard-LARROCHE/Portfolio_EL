import { useState, useEffect, useRef } from "react"

import { toast } from "sonner"
import { validateEmail } from "../../utils/utils"

import emailjs from "emailjs-com"

import "./input.scss"

const Input = () => {
	const form = useRef<HTMLFormElement>(null)
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")
	const [isEmailValid, setIsEmailValid] = useState(true)
	const [error, setError] = useState("")

	useEffect(() => {
		if (email.length === 0) {
			setError("")
			setIsEmailValid(true)
		}
	}, [email])

	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()

		if (validateEmail(email)) {
			if (form.current) {
				toast.promise(
					emailjs.sendForm(
						import.meta.env.VITE_API_EMAILJS_SERVICES,
						import.meta.env.VITE_API_EMAILJS_TEMPLATES,
						form.current,
						import.meta.env.VITE_API_EMAILJS_USERID,
					),
					{
						loading: "Sending...",
						success: "Email sent!",
						error: "Something went wrong...",
					},
				)
				setEmail("")
				setMessage("")
			}
		}
	}

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const emailValue = e.target.value
		setEmail(emailValue)
		setIsEmailValid(validateEmail(emailValue))

		if (!validateEmail(emailValue)) {
			setError("Please enter a valid email address")
		} else {
			setError("")
		}
	}

	const handleEmailClick = () => {
		const subject = encodeURIComponent("Subject of the Email")
		const body = encodeURIComponent("Hy Edouard,")
		const mailtoLink = `mailto:${import.meta.env.VITE_API_MY_EMAIL}?subject=${subject}&body=${body}`

		window.location.href = mailtoLink
	}

	const disabled =
		email.length === 0 || message.length === 0 || isEmailValid === false

	return (
		<div className="containerInput">
			<form ref={form}>
				<input
					name="from_name"
					onChange={handleEmailChange}
					value={email}
					autoFocus
					className={`input ${!isEmailValid ? "invalid" : ""}`}
					type="text"
					placeholder="Email address"
				/>
				<div className="errorMessage">{error}</div>
				<div className="inputDivider">
					<textarea
						name="message"
						onChange={(e) => setMessage(e.target.value)}
						value={message}
						className="textarea"
						placeholder="Your message"
					/>
					<button
						className="button"
						onClick={handleSubmit}
						disabled={disabled}
					>
						Send
					</button>
					<div className="myEmailClient">
						<span onClick={() => handleEmailClick()}>
							Or send it with{" "}
							<span className="highlight">my email client</span>
						</span>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Input

