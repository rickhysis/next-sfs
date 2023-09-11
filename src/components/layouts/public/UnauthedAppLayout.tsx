import { Box, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import * as React from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export interface AppLayoutProps {
	children: React.ReactNode;
	pageTitle?: string;
	overridePageTitle?: boolean;
	filename?: string;
}

const UnauthedAppLayout: React.FC<AppLayoutProps> = ({
	children,
	pageTitle = ' SFS DEMO',
}) => {
	const router = useRouter()
	const { status } = useSession();

	if(status === "authenticated") {
		router.push('/users');
	}

	return (
		<Box h="100vh" w="full">
			<Head>
				<title>{pageTitle}</title>
			</Head>
			<main>
					<Flex direction="column" h="100vh">
						<Flex flex="1">
							<Box width={{ base: 'full', md: '100%' }}>{children}</Box>
						</Flex>
					</Flex>
			</main>
		</Box>
	);
};

export default UnauthedAppLayout;
