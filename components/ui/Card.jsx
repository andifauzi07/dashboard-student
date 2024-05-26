import Image from 'next/image';

const Card = ({ imageSrc, imageAlt, title }) => {
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
			<Image
				className="w-full"
				src={imageSrc}
				alt={imageAlt}
				width={500}
				height={300}
				layout="responsive"
			/>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2 text-center">{title}</div>
			</div>
		</div>
	);
};

export default Card;
