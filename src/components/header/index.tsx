import { FC } from 'react'
import { NavItem } from '../navitem'
import { Logo } from '../../icons/logo'

export const Header: FC = () => {
	return (
		<header className="flex">
			{/* <img src="../src/img/logo.svg" alt="" /> */}
			<Logo />
			<nav>
				<NavItem />
				<NavItem />
				<NavItem />
			</nav>
		</header>
	)
}
