'use client';

import { supabase } from '@/utils/supabase/client';
import TableUsers from '@/components/TableUsers';
import { useState, useEffect } from 'react';

export default function Hero({ query, contact }) {
	const [data, setData] = useState(contact);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			let user = supabase.from('contact').select('*');

			if (query) {
				user = user.ilike('nama', `%${query}%`);
			}

			const { data, error } = await user;

			if (error) {
				console.error('Error fetching data:', error);
			} else {
				setData(data);
			}
			setLoading(false);
		};

		fetchData();

		const channel = supabase
			.channel('realtime:public:contact')
			.on('postgres_changes', { event: '*', schema: 'public', table: 'contact' }, (payload) => {
				setData((prevData) => {
					if (payload.eventType === 'INSERT') {
						return [...prevData, payload.new];
					}
					if (payload.eventType === 'UPDATE') {
						return prevData.map((item) => (item.id === payload.new.id ? payload.new : item));
					}
					if (payload.eventType === 'DELETE') {
						return prevData.filter((item) => item.id !== payload.old.id);
					}
					return prevData;
				});
			})
			.subscribe();

		return () => {
			supabase.removeChannel(channel);
		};
	}, [query, contact]);

	return (
		<div className="w-full my-4">
			<div className="container mx-auto max-w-full">
				<TableUsers
					data={data}
					loading={loading}
				/>
			</div>
		</div>
	);
}
