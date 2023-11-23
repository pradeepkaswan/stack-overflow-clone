import { ModeToggle } from '@/components/mode-toggle';

export default function Home() {
	return (
		<div>
			<h1>Next.js 13</h1>

			<div className='outline'>
				<ModeToggle />
			</div>
		</div>
	);
}
