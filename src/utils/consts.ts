import { FC } from 'react'
import { Todo } from '../icons/todo'
import { Calendar } from '../icons/calendar'
import { Reminders } from '../icons/reminders'
import { Planing } from '../icons/planing'

export type FeaturesProp = {
	id: number
	text: string
	icon?: FC
}

export type CompanyProp = {
	text: string
}

export const FEATURES: Array<FeaturesProp> = [
	{ id: 1, text: 'Todo List', icon: Todo },
	{ id: 2, text: 'Calendar', icon: Calendar },
	{ id: 3, text: 'Reminders', icon: Reminders },
	{ id: 4, text: 'Planning', icon: Planing },
]

export const COMPANY: Array<CompanyProp> = [
	{ text: 'History' },
	{ text: 'Our team' },
	{ text: 'Blog' },
]
