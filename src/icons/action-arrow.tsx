import { FC } from 'react'

type ActionArrowProps = {
	className?: string
}

export const ActionArrow: FC<ActionArrowProps> = ({ className }) => {
	return (
		<svg
			className={className}
			width="10"
			height="6"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4" />
		</svg>
	)
}
