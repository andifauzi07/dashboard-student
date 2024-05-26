'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/utils/supabase/client';

export default function Register() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		// Tambahkan logika autentikasi di sini

		if (password == confirmPassword) {
			// Contoh: panggil API untuk login

			let { data, error } = await supabase.auth.signUp({
				email: email,
				password: password,
			});

			if (error) return console.log('Gagal melakukan register', error);
			console.log(data);
			// Misal login berhasil, arahkan ke halaman lain
			router.push('/login');
		} else {
			return alert('Password tidak sesuai');
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
				<h2 className="text-2xl font-bold text-center">Login</h2>
				<form
					className="space-y-6"
					onSubmit={handleSubmit}>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Email</span>
						</label>
						<input
							type="email"
							className="input input-bordered w-full"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
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
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Confirm Password</span>
						</label>
						<input
							type="password"
							className="input input-bordered w-full"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
						/>
					</div>
					<button
						type="submit"
						className="btn btn-primary w-full">
						Register
					</button>
				</form>
			</div>
		</div>
	);
}
