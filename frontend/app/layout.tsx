import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import BasicLayout from './BasicLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export const Sidebar = () => {
	return (
		<div className="w-[5vw] bg-base-200 flex flex-col items-center justify-center space-y-[50%] flex-shrink-0">
			<div className="w-8 h-8 bg-gray-300 absolute top-4"></div>{' '}
			{/* Logo placeholder */}
			<div className="w-6 h-6 bg-gray-300"></div>{' '}
			{/* Icon placeholder - I need to add percentage based width's as soon as I have the icon's */}
			<div className="w-6 h-6 bg-gray-300"></div> {/* Icon placeholder */}
			<div className="w-6 h-6 bg-gray-300"></div> {/* Icon placeholder */}
			<div className="w-6 h-6 bg-gray-300"></div> {/* Icon placeholder */}
			<div className="w-6 h-6 bg-gray-300"></div> {/* Icon placeholder */}
		</div>
	);
};

const NavBar = () => {
	return <div className="h-[8vh] bg-base-200 "></div>;
};

const Content = ({ children }: any) => {
	return (
		<div className="flex mx-5 flex-1 flex-col justify-center -mt-1 -ml-1 rounded-tl-2xl bg-base-100 h-full">
			{children}
		</div>
	);
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="flex flex-col h-screen w-screen">
					<div className="flex flex-1">
						<Sidebar />
						<div className="flex flex-col w-full">
							<NavBar />
							<Content>{children}</Content>
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}
