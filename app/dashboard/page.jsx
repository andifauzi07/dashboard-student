import Hero from '@/components/Hero';
import AddContact from '@/components/AddContact';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import Search from '@/components/Search';

export default async function Home({ searchParams }) {
	const supabase = createClient();

	const { data, error } = await supabase.auth.getUser();
	if (error || !data?.user) {
		redirect('/login');
	}
	const user = await supabase.from('contact').select('*');
	const query = searchParams?.query || '';

	return (
		<main className="h-screen">
			<div className="bg-pink-100 mx-10 my-6 text-black">
				<div className="mx-10 py-6">
					<h1 className="text-2xl font-bold mb-4 text-center">Mahasiswa Fakultas Teknik UNM</h1>
					<div className="border-b-2 border-gray-400 my-4"></div>
					{/* <AddContact /> */}
					<div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
						<Search placeholder="Cari Mahasiswa..." />
						<AddContact />
					</div>
					<div className="border-b-2 border-gray-400 my-4"></div>
					<div>
						<Hero
							query={query}
							contact={user.data}
						/>
					</div>
				</div>
			</div>
		</main>
	);
}
