import React, { useEffect, useState } from "react"

type DraggablePopProps = {
	children: React.ReactNode
}

export default function DraggablePop({ children }: DraggablePopProps) {
	const [x, setX] = useState(100)
	const [y, setY] = useState(window.innerHeight - 425)

	const [offsetX, setOffsetX] = useState<number | null>(null)
	const [offsetY, setOffsetY] = useState<number | null>(null)

	const [dragging, setDragging] = useState(false)

	useEffect(() => {
		const triggeredDrag = (event: MouseEvent | TouchEvent) => {
			if ("clientX" in event && "clientY" in event) {
				if (event.clientX <= 0 || event.clientY <= 0) {
					return false
				}

				setTimeout(() => {
					if (offsetX !== null && offsetY !== null) {
						setY(event.pageY - offsetY)
						setX(event.pageX - offsetX)
					}
				}, 50)
			}
		}

		if (dragging) {
			window.addEventListener("dragover", triggeredDrag as EventListener)
			window.addEventListener("touchmove", triggeredDrag as EventListener)
		}

		return () => {
			window.removeEventListener(
				"dragover",
				triggeredDrag as EventListener,
			)
			window.removeEventListener(
				"touchmove",
				triggeredDrag as EventListener,
			)
		}
	}, [dragging, offsetX, offsetY])

	function getDragImage(): HTMLImageElement {
		const img = new Image()
		img.src = ""
		return img
	}

	function onPanStart(
		e: React.DragEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
	) {
		const rect = (e.target as HTMLElement).getBoundingClientRect()

		if ("pageX" in e && "pageY" in e) {
			setOffsetX(e.pageX - rect.x)
			setOffsetY(e.pageY - rect.y)

			if (e.type === "dragstart") {
				e.dataTransfer.setDragImage(getDragImage(), 0, 0)
			}
		}
		setDragging(true)
	}

	function onPanEnd() {
		setOffsetY(null)
		setOffsetX(null)
		setDragging(false)
	}

	return (
		<div
			draggable
			style={{
				display: "block",
				position: "fixed",
				zIndex: 99999,
				left: x + "px",
				top: y + "px",
			}}
			onDragStart={(e) => onPanStart(e)}
			onTouchStart={(e) => onPanStart(e)}
			onDragEnd={() => onPanEnd()}
			onTouchEnd={() => onPanEnd()}
		>
			{children}
		</div>
	)
}
