import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import '../styles/globals.css';
import React from 'react';
import { ThemeProvider } from '@/contexts/theme-provider';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-spaceGrotesk',
});

export const metadata: Metadata = {
	title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
	description:
		'Stack Overflow is the largest, most trusted online community for developers to learn, share​ ​their programming ​knowledge, and build their careers.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider
			appearance={{
				elements: {
					formButtonPrimary: 'bg-black',
					footerActionLink: 'text-black',
				},
			}}
		>
			<html lang='en'>
				<body className={`${inter.variable} ${spaceGrotesk.variable}`}>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
					>
						{children}
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
