'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/utils/supabase/client';

export default function EditContact(user) {
	const [nama, setNama] = useState(user.nama);
	const [jurusan, setJurusan] = useState(user.jurusan);
	const [nim, setNim] = useState(user.nim);
	const [angkatan, setAngkatan] = useState(user.angkatan);
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const { data, error } = await supabase
				.from('contact')
				.update({
					nama: nama,
					jurusan: jurusan,
					nim: nim,
					angkatan: angkatan,
				})
				.eq('id', user.id)
				.select();
			if (error) return console.log('Gagal memperbarui data', error);
			console.log(data);
		} catch (error) {
			console.error('Terjadi kesalahan', error.message);
		} finally {
			setIsLoading(false);
			router.refresh();
			setIsOpen(false);
		}
	};

	const handleModal = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<button
				className="btn bg-blue-500 hover:bg-blue-700 text-white px-6 rounded"
				onClick={handleModal}>
				Edit
			</button>

			<div className={isOpen ? 'modal modal-open' : 'modal'}>
				<div className="modal-box">
					<h3 className="font-bold text-lg">Tambahkan Contact Mahasiswa</h3>
					<form onSubmit={handleSubmit}>
						<div className="form-control w-full">
							<label className="label font-bold">Nama</label>
							<input
								type="text"
								value={nama}
								name="nama"
								onChange={(e) => setNama(e.target.value)}
								className="input input-bordered"
								placeholder={user.nama}
							/>
						</div>
						<div className="form-control w-full">
							<label className="label font-bold">Jurusan</label>
							<input
								type="text"
								name="jurusan"
								value={jurusan}
								onChange={(e) => setJurusan(e.target.value)}
								className="input input-bordered"
								placeholder={user.jurusan}
							/>
						</div>
						<div className="form-control w-full">
							<label className="label font-bold">Nim</label>
							<input
								type="text"
								name="nim"
								value={nim}
								onChange={(e) => setNim(e.target.value)}
								className="input input-bordered"
								placeholder={user.nim}
							/>
						</div>
						<div className="form-control w-full">
							<label className="label font-bold">Angkatan</label>
							<input
								type="text"
								name="angkatan"
								value={angkatan}
								onChange={(e) => setAngkatan(e.target.value)}
								className="input input-bordered"
								placeholder={user.angkatan}
							/>
						</div>
						<div className="modal-action">
							<button
								type="button"
								className="btn"
								onClick={handleModal}>
								Close
							</button>
							{!isLoading ? (
								<button
									type="submit"
									className="btn btn-primary">
									Tambahkan
								</button>
							) : (
								<button
									type="button"
									className="btn loading">
									Menambahkan...
								</button>
							)}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
