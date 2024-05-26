import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Partam Studio',
	description: 'Generated by create next app',
};

export default function Layout({ children }) {
	return (
		<html data-theme="light">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
