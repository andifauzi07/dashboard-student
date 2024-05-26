import React from 'react';
import andifauzi from '@/public/andifauzi.jpeg';
import nopal from '@/public/nopal.jpeg';
import amar from '@/public/amar.jpeg';
import beluntas from '@/public/beluntas.jpeg';
import rey from '@/public/rey.jpeg';
import Card from '@/components/ui/Card';

const Page = () => {
	return (
		<div className="container p-4 bg-pink-100 mx-auto my-6 text-black">
			<h1 className="text-4xl font-bold text-center mb-8">Our Team</h1>
			<div className="flex flex-wrap justify-center">
				<Card
					title="Andi Asmul Fauzi"
					imageSrc={andifauzi}
					imageAlt="andi fauzi"
				/>
				<Card
					title="Muh Naufal Mazini"
					imageSrc={nopal}
					imageAlt="Muh Naufal Mazini"
				/>
				<Card
					title="Andi Fadly Wardhana"
					imageSrc={beluntas}
					imageAlt="Andi Fadly Wardhana"
				/>
				<Card
					title="Muhammad Amar Amri Asnur"
					imageSrc={amar}
					imageAlt="Muhammad Amar Amri Asnur"
				/>
				<Card
					title="⁠Reyhand Alqadri Ramli"
					imageSrc={rey}
					imageAlt="⁠Reyhand Alqadri Ramli"
				/>
			</div>
		</div>
	);
};

export default Page;
