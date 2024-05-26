import { lusitana } from '@/components/fonts';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function Logo() {
	const supabase = createClient();

	const { data, error } = await supabase.auth.getUser();
	if (error || !data?.user) {
		redirect('/login');
	}
	return (
		<div>
			<h3>Welcome</h3>
			<div className={`${lusitana.className} flex flex-row items-center leading-none text-white`}>
				{/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
				<p className="text-[16px]">{data.user.email}</p>
			</div>
		</div>
	);
}
