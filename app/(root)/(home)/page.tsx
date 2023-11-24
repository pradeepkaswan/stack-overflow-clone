import { ModeToggle } from '@/components/mode-toggle';
import { UserButton } from '@clerk/nextjs';

const Home = () => {
	return (
		<div>
			<ModeToggle />
			<UserButton afterSignOutUrl='/' />
		</div>
	);
};

export default Home;
