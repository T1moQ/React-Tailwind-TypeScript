import { FC } from 'react'
import { NavItem } from './navitem'
import { Logo } from '../../icons/logo'
import { COMPANY, FEATURES } from '../../utils/consts'
import { Button } from '../button'
import { Menu } from '../../icons/menu'

export const Header: FC = () => {
	return (
		<header className="flex items-center">
			<Logo />
			<nav className="hidden xl:flex space-x-6 ml-8 items-center">
				<NavItem text="Features" children={FEATURES} />
				<NavItem text="Company" children={COMPANY} />
				<NavItem text="Careers" />
				<NavItem text="About" />
			</nav>
			<div className="hidden xl:flex ml-auto space-x-5">
				<Button children="Login" isFilled={false} hasBorder={true} />
				<Button children="Register" isFilled={false} hasBorder={false} />
			</div>
			<div className="flex ml-auto cursor-pointer z-30 xl:hidden">
				<Menu />
			</div>
		</header>
	)
}
