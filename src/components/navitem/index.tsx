import { FC, useState } from 'react'
import { ActionArrow } from '../../icons/action-arrow'
import { CompanyProp, FeaturesProp } from '../../utils/consts'

type NavItemProps = {
	text?: string
	children?: FeaturesProp[] | CompanyProp[]
}

export const NavItem: FC<NavItemProps> = ({ text = '', children }) => {
	const [isOpen, setIsOpen] = useState('')

	return (
		<div className="relative">
			<div className="flex space-x-2 cursor-pointer">
				<span
					className="text-medium-grey hover:text-almost-black"
					onClick={() => children && setIsOpen(text !== isOpen ? text : '')}
				>
					{text}
				</span>
				{children && isOpen === text ? (
					<ActionArrow className="rotate-180" />
				) : (
					<ActionArrow />
				)}
			</div>
			{/* Преобразуем массив объектов children в JSX */}
			{isOpen && children && (
				<div className="absolute mt-2 bg-white shadow-lg rounded-lg">
					<ul>
						{children.map((child) => (
							<li
								key={child.id}
								className="flex items-center space-x-2 p-2 hover:bg-gray-100"
							>
								{child.icon && <child.icon />} {/* Отображаем иконку */}
								<span>{child.text}</span> {/* Отображаем текст */}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}
