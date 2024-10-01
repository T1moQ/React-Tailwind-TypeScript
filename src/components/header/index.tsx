import { FC } from 'react'
import { NavItem } from '../navitem'
import { Logo } from '../../icons/logo'
import { COMPANY, FEATURES } from '../../utils/consts'

export const Header: FC = () => {
	return (
		<header className="flex">
			{/* <img src="../src/img/logo.svg" alt="" /> */}
			<Logo />
			<nav className="flex space-x-6 ml-8 items-center">
				<NavItem text="Features" children={FEATURES} />
				<NavItem text="Company" children={COMPANY} />
				<NavItem text="Careers" />
				<NavItem text="About" />
			</nav>
		</header>
	)
}
