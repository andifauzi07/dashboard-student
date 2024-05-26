import { createClient } from '@/utils/supabase/server';
import { login, signup } from './action';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
export default async function Login() {
	const supabase = createClient();

	const { data, error } = await supabase.auth.getUser();
	if (error || !data?.user) {
		revalidatePath('/dashboard');
	} else if (data || !error) {
		redirect('/dashboard');
	}

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
				<h2 className="text-2xl font-bold text-center">Login</h2>
				<form className="space-y-6">
					<div className="form-control">
						<label
							className="label"
							htmlFor="email">
							<span className="label-text">Email:</span>
						</label>
						<input
							type="email"
							className="input input-bordered w-full"
							id="email"
							name="email"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Password</span>
						</label>
						<input
							type="password"
							className="input input-bordered w-full"
							name="password"
							id="password"
							required
						/>
					</div>
					<button
						formAction={login}
						className="btn btn-primary w-full">
						Login
					</button>
					<button
						formAction={signup}
						className="btn btn-primary w-full">
						register
					</button>
				</form>
			</div>
		</div>
	);
}
