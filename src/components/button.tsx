import { FC } from 'react'

type ButtonProps = {
	children: string
	hasBorder: boolean
	isFilled: boolean
}

export const Button: FC<ButtonProps> = ({
	children = '',
	hasBorder = false,
	isFilled = false,
}) => {
	return (
		<button
			className={` py-2 px-5 ${
				hasBorder ? 'border-2 border-almost-black rounded-lg' : ''
			} ${
				isFilled
					? 'bg-almost-black text-almost-white rounded-lg font-bold py-4 px-6 mx-0 hover:bg-almost-white hover:text-almost-black border-2 border-almost-black'
					: ''
			}`}
		>
			{children}
		</button>
	)
}
