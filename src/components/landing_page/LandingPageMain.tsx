import { Box } from '@chakra-ui/react';
import * as React from 'react';

import LandingPageBody from '@/components/landing_page/LandingPageBody';

const LandingPageMain = (): JSX.Element => {
	return (
		<Box>
			<Box bg="gray.50">
				<Box maxW="1442px" mx="auto" px={[4, 24]}>
					<LandingPageBody />
				</Box>
			</Box>
		</Box>
	);
};

export default LandingPageMain;
