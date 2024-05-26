'use client';

import EditContact from '@/components/EditContact';
import DeleteProduct from '@/components/DeleteContact';

const TableUsers = ({ data }) => {
	return (
		<div className="mt-6 flow-root">
			<div className="inline-block min-w-full align-middle">
				<div className="rounded-lg bg-gray-50 p-2 md:pt-0">
					<div className="md:hidden">
						{data?.map((user) => (
							<div
								key={user.id}
								className="mb-2 w-full rounded-md bg-white p-4">
								<div className="flex items-center justify-between border-b pb-4">
									<div>
										<div className="mb-2 flex items-center">
											<p>{user.nama}</p>
										</div>
										<p className="text-sm text-gray-500">{user.jurusan}</p>
									</div>
								</div>
								<div className="flex w-full items-center justify-between pt-4">
									<div>
										<p className="text-xl font-medium">{user.nim}</p>
										<p>{user.angkatan}</p>
									</div>
									<div className="flex justify-end gap-2">
										<EditContact {...user} />
										<DeleteProduct {...user} />
									</div>
								</div>
							</div>
						))}
					</div>
					<table className="hidden min-w-full text-gray-900 md:table">
						<thead className="rounded-lg text-left text-sm font-normal">
							<tr>
								<th
									scope="col"
									className="px-4 py-5 font-medium sm:pl-6">
									Nama
								</th>
								<th
									scope="col"
									className="px-3 py-5 font-medium">
									Jurusan
								</th>
								<th
									scope="col"
									className="px-3 py-5 font-medium">
									Nim
								</th>
								<th
									scope="col"
									className="px-3 py-5 font-medium">
									Angkatan
								</th>
								<th
									scope="col"
									className="relative py-3 pl-6 pr-3">
									<span className="sr-only">Action</span>
								</th>
							</tr>
						</thead>
						<tbody className="bg-white w-full">
							{data?.map((user, i) => (
								<tr
									key={user.id}
									className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
									<td className="whitespace-nowrap py-3 pl-6 pr-3">
										<div className="flex items-center gap-3">
											<p>{user.nama}</p>
										</div>
									</td>
									<td className="whitespace-nowrap px-3 py-3">{user.jurusan}</td>
									<td className="whitespace-nowrap px-3 py-3">{user.nim}</td>
									<td className="whitespace-nowrap px-3 py-3">{user.angkatan}</td>
									<td className="whitespace-nowrap py-3 pl-6 pr-3">
										<div className="flex justify-end gap-3">
											<EditContact {...user} />
											<DeleteProduct {...user} />
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default TableUsers;
