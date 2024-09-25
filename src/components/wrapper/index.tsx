import { FC } from 'react'

type WrapperProps = {
	children: React.ReactNode
}

export const Wrapper: FC<WrapperProps> = ({ children }) => {
	return (
		<div className="container mx-auto my-0 py-4 px-2 min-h-screen">
			{children}
		</div>
	)
}
