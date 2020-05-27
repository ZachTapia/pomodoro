import Head from 'next/head';

import Layout from '../components/Layout';
import Focus from '../components/Focus';


const Index = () => {
	return (
		<Layout>
			<Head>
				<title>Pomodoro Timer</title>
			</Head>
			<Focus />
		</Layout>

	);
};

export default Index;