import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import React from 'react';
import { ThemeProvider } from '@/contexts/theme-provider';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

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
		<ClerkProvider>
			<html lang='en'>
				<body className={inter.className}>
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
