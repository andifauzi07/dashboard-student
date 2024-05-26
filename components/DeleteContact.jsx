'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/utils/supabase/client';

export default function DeleteProduct(user) {
	const [modal, setModal] = useState(false);
	const [isMutating, setIsMutating] = useState(false);

	const router = useRouter();

	async function handleDelete() {
		setIsMutating(true);

		await supabase.from('contact').delete().eq('id', user.id);

		setIsMutating(false);

		router.refresh();
		setModal(false);
	}

	function handleChange() {
		setModal(!modal);
	}

	return (
		<div>
			<button
				className="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
				onClick={handleChange}>
				Delete
			</button>

			<input
				type="checkbox"
				checked={modal}
				onChange={handleChange}
				className="modal-toggle"
			/>

			<div className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg">Are sure to delete {user.nama} ?</h3>
					<div className="modal-action w-full overflow-hidden">
						<button
							type="button"
							className="btn"
							onClick={handleChange}>
							Close
						</button>
						{!isMutating ? (
							<button
								type="button"
								onClick={() => handleDelete()}
								className="btn btn-primary">
								Delete
							</button>
						) : (
							<button
								type="button"
								className="btn loading">
								Deleting...
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
