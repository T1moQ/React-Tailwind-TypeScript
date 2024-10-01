import { FC } from 'react'

type NavMenuProps = {
	items: string[]
}

export const NavMenu: FC<NavMenuProps> = ({ items }) => {
	return (
		<>
			{items.map((item) => (
				<span>{item}</span>
			))}
		</>
	)
}
