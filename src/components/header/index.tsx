import { FC } from 'react'
import { NavItem } from './navitem'
import { Logo } from '../../icons/logo'
import { COMPANY, FEATURES } from '../../utils/consts'
import { Button } from '../button'

export const Header: FC = () => {
	return (
		<header className="flex items-center">
			<Logo />
			<nav className="flex space-x-6 ml-8 items-center">
				<NavItem text="Features" children={FEATURES} />
				<NavItem text="Company" children={COMPANY} />
				<NavItem text="Careers" />
				<NavItem text="About" />
			</nav>
			<div className="ml-auto flex space-x-5"></div>
			<Button children="Login" isFilled={false} hasBorder={true} />
			<Button children="Register" isFilled={false} hasBorder={false} />
		</header>
	)
}
