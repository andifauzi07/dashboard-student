import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/components/fonts';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
	return (
		<main className="flex min-h-screen flex-col p-6">
			<div className="flex h-20 shrink-0 items-center rounded-lg bg-blue-500 p-4 md:h-52">
				<Image
					src="/icon.png"
					className="items-center"
					width={200}
					height={200}
					alt="Partam Studio"></Image>
			</div>
			<div className="mt-4 flex grow flex-col gap-4 md:flex-row">
				<div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
					<div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />
					<p className={`${lusitana} text-xl text-gray-800 antialiased md:text-3xl md:leading-normal`}>
						<strong>Welcome to Partam Studio.</strong> This is the example for the{' '}
						<a
							href="https://partam-studio.vercel.app/"
							className="text-blue-500">
							Partam Studio, Web App
						</a>
						, brought to you by Our Founder.
					</p>
					<Link
						href="/login"
						className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base">
						<span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
					</Link>
				</div>
				<div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
					<Image
						src="/hero.svg"
						width={1000}
						height={760}
						className="hidden md:block"
						alt="Screenshots of the dashboard project showing desktop version"
					/>
					<Image
						src="/hero-mobile.png"
						width={560}
						height={620}
						className="block md:hidden"
						alt=""
					/>
				</div>
			</div>
		</main>
	);
}
