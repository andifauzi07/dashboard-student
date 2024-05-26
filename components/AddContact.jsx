'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/utils/supabase/client';

const AddContact = () => {
	const [contact, setContact] = useState({
		nama: '',
		jurusan: '',
		nim: '',
		angkatan: '',
	});
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const { data, error } = await supabase
				.from('contact')
				.insert({
					nama: contact.nama,
					jurusan: contact.jurusan,
					nim: contact.nim,
					angkatan: contact.angkatan,
				})
				.select();
			if (error) {
				throw new Error('Gagal mengirim data', error.message);
			}
			console.log(data);
		} catch (error) {
			console.error('Terjadi kesalahan', error.message);
		} finally {
			setIsLoading(false);
			setContact({
				nama: '',
				jurusan: '',
				nim: '',
				angkatan: '',
			});
			router.refresh();
			setIsOpen(false);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setContact((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};
	const handleModal = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<button
				className="btn bg-blue-700 text-white"
				onClick={handleModal}>
				Tambahkan
			</button>

			<div className={isOpen ? 'modal modal-open' : 'modal'}>
				<div className="modal-box">
					<h3 className="font-bold text-lg">Tambahkan Contact Mahasiswa</h3>
					<form onSubmit={handleSubmit}>
						<div className="form-control w-full">
							<label className="label font-bold">Nama</label>
							<input
								type="text"
								value={contact.nama}
								name="nama"
								onChange={handleChange}
								className="input input-bordered"
								placeholder="Nama"
								required
							/>
						</div>
						<div className="form-control w-full">
							<label className="label font-bold">Jurusan</label>
							<input
								type="text"
								name="jurusan"
								value={contact.jurusan}
								onChange={handleChange}
								className="input input-bordered"
								placeholder="Jurusan"
								required
							/>
						</div>
						<div className="form-control w-full">
							<label className="label font-bold">Nim</label>
							<input
								type="text"
								name="nim"
								value={contact.nim}
								onChange={handleChange}
								className="input input-bordered"
								placeholder="Nim"
								required
							/>
						</div>
						<div className="form-control w-full">
							<label className="label font-bold">Angkatan</label>
							<input
								type="text"
								name="angkatan"
								value={contact.angkatan}
								onChange={handleChange}
								className="input input-bordered"
								placeholder="Angkatan"
								required
							/>
						</div>
						<div className="modal-action w-full overflow-hidden">
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
};

export default AddContact;
