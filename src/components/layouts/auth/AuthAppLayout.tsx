import { Box, Flex } from '@chakra-ui/react';
import { useAtomValue } from 'jotai';
import Head from 'next/head';
import * as React from 'react';

import { useDesktopMode } from '@/hooks/utils/useDesktopMode';

import Sidebar from '@/components/layouts/auth/components/Sidebar';
import TopBar from '@/components/layouts/auth/components/TopBar';

import { openSideBar } from '@/store/sidebar';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export interface AuthAppLayoutProps {
	children: React.ReactNode;
	pageTitle?: string;
}

const AuthAppLayout: React.FC<AuthAppLayoutProps> = ({
	children,
	pageTitle = ' SFS DEMO',
}) => {
	const router = useRouter()
	const session = useSession({
		required: true,
		onUnauthenticated() {
			router.push('/login');
		},
	});
	const isOpenSideBar = useAtomValue(openSideBar);
	useDesktopMode();

	return (
		<Box w="100vw" h="100vh">
			<Head>
				<title>{pageTitle}</title>
			</Head>
			<Flex h="100vh" w="100vw" overflow="auto" bg="gray.50">
				<Box w={isOpenSideBar ? '255px' : '99px'} mx="23px">
					<Sidebar />
				</Box>
				<Box
					w={`calc(100vw - 23px - ${isOpenSideBar ? '255px' : '99px'} - 17px)`}
				>
					<Box mx="17px">
						<TopBar title={pageTitle} email={session?.data?.user?.email} />
					</Box>
					<Box h="calc(100vh - 113px)" overflow="auto" ml="17px" pr="17px" mt="20px">
						{children}
					</Box>
				</Box>
			</Flex>
		</Box>
	);
};

export default AuthAppLayout;
