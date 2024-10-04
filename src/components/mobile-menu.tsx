import { FC } from 'react'
import { NavItem } from './header/navitem'
import { COMPANY, FEATURES } from '../utils/consts'
import { Button } from './button'

type MobileMenuProps = {
	isOpen?: boolean | undefined
}

export const MobileMenu: FC<MobileMenuProps> = ({ isOpen = false }) => {
	return (
		<>
			<div
				className={`absolute top-0 left-0 right-0 bg-almost-black opacity-50 z-10 min-h-[150vh] ${
					isOpen ? 'flex' : 'hidden'
				}`}
			></div>
			<div
				className={`absolute top-0 right-0 bg-almost-white w-1/2 z-20 min-h-[150vh] justify-center ${
					isOpen ? 'flex' : 'hidden'
				}`}
			>
				<nav className="my-20 mx-5 space-y-5 text-lg w-full">
					<NavItem text="Features" children={FEATURES} />
					<NavItem text="Company" children={COMPANY} />
					<NavItem text="Careers" />
					<NavItem text="About" />
					<div className="flex flex-col space-y-5">
						<Button children="Login" isFilled={false} hasBorder={true} />
						<Button children="Register" isFilled={false} hasBorder={false} />
					</div>
				</nav>
			</div>
		</>
	)
}
