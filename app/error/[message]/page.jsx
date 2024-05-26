import Link from 'next/link';

export default function ErrorPage({ params }) {
	const message = decodeURI(params.message);
	return (
		<div className="bg-gray-50 flex justify-center items-center flex-col h-screen gap-2">
			<h2 className="text-3xl">{message}</h2>
			<Link href="/login">
				<button className="btn btn-primary w-full">Relogin</button>
			</Link>
		</div>
	);
}
