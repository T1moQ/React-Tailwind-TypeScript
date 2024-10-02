import { FC } from 'react'

type NavMenuProps = {
	items: string[]
}

export const NavMenu: FC<NavMenuProps> = ({ items }) => {
	return (
		<div className="flex flex-col px-2 py-3">
			{items.map((item) => (
				<span>{item}</span>
			))}
		</div>
	)
}
