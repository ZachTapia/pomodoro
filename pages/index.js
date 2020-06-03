import Head from 'next/head';

import Layout from '../components/Layout';
import Focus from '../components/Focus';


const Index = () => {
	return (
		<React.Fragment>
			<Head>
				<title>Pomodoro Timer</title>
			</Head>
			<Layout>
				<Focus />
			</Layout>
		</React.Fragment>
	);
};

export default Index;