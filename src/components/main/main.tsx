import { FC } from 'react'
import Hero from '../../img/image-hero-desktop.png'
import HeroMobile from '../../img/image-hero-mobile.png'
import { Audiophile } from '../../icons/audiophile'
import { Maker } from '../../icons/maker'
import { Databiz } from '../../icons/databiz'
import { Meet } from '../../icons/meet'
import { Button } from '../button'

export const Main: FC = () => {
	return (
		<main className="w-full flex flex-col items-center xl:flex-row mb-6 h-screen justify-between">
			<section className="relative w-2/4 text-center xl:text-left mt-12 order-2 xl:order-1 xl:mt-60">
				<h1 className="font-black text-3xl xl:text-8xl mt-6 xl:whitespace-pre-line">
					{'Make\n remote work'}
				</h1>
				<p className="text-medium-grey text-lg my-12">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse ab
					assumenda quam itaque qui adipisci, reprehenderit rem quos magnam
					facere quaerat doloremque ex, earum vitae dicta quibusdam, dignissimos
					omnis velit.
				</p>
				<Button children="Learn more" isFilled={true} hasBorder={false} />
				<div className="flex justify-between bottom-2 xl:absolute w-full mt-20">
					<Audiophile />
					<Maker />
					<Databiz />
					<Meet />
				</div>
			</section>
			<section className="hidden xl:flex w-2/4 mt-20 xl:order-2">
				<img src={Hero} alt="Hero" />
			</section>
			<section className="flex xl:hidden mt-20 justify-center w-full mb-8 order-1">
				<img src={HeroMobile} alt="Hero" />
			</section>
		</main>
	)
}
