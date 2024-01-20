'use client';
import pic1 from '@/public/static/images/playInstantGame.png';
import pic2 from '@/public/static/images/customizeGame.png';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

// Define a custom type for routes
type Route = string;

type CardProps = {
	img: StaticImageData;
	alt: string;
	btnText: string;
	title: string;
	desc: string;
	route: Route; // Use the custom Route type for the link prop
};

export const Card: React.FC<CardProps> = ({
	img,
	alt,
	btnText,
	title,
	desc,
	route,
}) => {
	return (
		<Link
			href={route}
			className="card bg-base-200 rounded-xl boxTransform sm:w-3/4 md:w-[55%] lg:w-2/5 mb-4 sm:max-h-[40vh] md:max-h-[40vh] lg:max-h-[60vh]"
		>
			<figure>
				<Image src={img} alt={alt} />
			</figure>
			<div className="card-body text-left">
				<h2 className="card-title">{title}</h2>
				<p>{desc}</p>
				<div className="card-actions justify-center mt-4">
					<button className="btn btn-primary btn-wide text-white bg-primary hover:border-2 hover:bg-transparent hover:border-accent/40 shadow transition duration-300 ease-in-out hover:shadow-lg">
						{btnText}
					</button>
				</div>
			</div>
		</Link>
	);
};

const Cards = () => {
	//! There is to little space between the cards and the cards navbar and bottom
	//! How can we reduce the height of the cards relative to the text box? Somewhat like 70/30 maybe or 60/40
	//! Check different screen sizes
	//! Ask if button effects are good
	return (
		<div className="flex flex-wrap justify-center items-center py-6 gap-12 sm:gap-4 md:gap-6 lg:gap-12">
			<Card
				img={pic1}
				alt={'Play now!'}
				btnText={'Play now!'}
				title={'Play now!'}
				desc={
					'This game is pre-configured so all you have to do is press play!'
				}
				route={'/'}
			/>
			<Card
				img={pic2}
				alt={'Customize the game'}
				btnText={'Customize the game'}
				title={'Customize the game'}
				desc={'Here you can customize your game to your liking!'}
				route={'/steps'}
			/>
		</div>
	);
};

export default Cards;
