import { Box, Stack, VStack } from '@chakra-ui/react';
import * as React from 'react';

const Menu = dynamic(
	() => import('@/components/layouts/auth/components/Menu'),
	{
		ssr: false,
	}
);

import { useAtomValue } from 'jotai';
import dynamic from 'next/dynamic';

import NeedHelp from '@/components/layouts/auth/components/NeedHelp';

import { openSideBar } from '@/store/sidebar';

import { sidebarMenus } from '@/types/menus';

export interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
	const isOpenSideBar = useAtomValue(openSideBar);

	return (
		<VStack position="relative" h="100vh">
			<Stack
				w={isOpenSideBar ? '238px' : '61px'}
				pt="22.5px"
				maxH={isOpenSideBar ? 'calc(100vh - 300px)' : 'calc(100vh - 200px)'}
				overflowY="auto"
				pb={isOpenSideBar ? '25px' : '0px'}
			>
				{sidebarMenus.map((menu, index) => (
					<Menu key={`${menu.path}-${index}`} menu={menu} deep={0} />
				))}
			</Stack>
			<Box position="absolute" bottom={6}>
				<NeedHelp />
			</Box>
		</VStack>
	);
};

export default Sidebar;
