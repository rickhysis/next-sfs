import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth/next';
import * as React from 'react';

import LandingPageMain from '@/components/landing_page/LandingPageMain';

import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { NextPageWithLayout } from '@/pages/page';
import UnauthedAppLayout from '@/components/layouts/public/UnauthedAppLayout';

const IndexPage: NextPageWithLayout = () => {
	return <LandingPageMain />;
};

IndexPage.getLayout = (page) => {
	return <>{page}</>;
};

export default IndexPage;
