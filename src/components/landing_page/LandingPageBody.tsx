import { Box, Code, Image, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import * as React from 'react';

const LandingPageBody = () => {
	return (
		<VStack spacing={2} align="center" mb={6}>

			<Text fontSize={{ base: '', md: '24px' }} color="gray.600">
				Welcome to application
			</Text>
			<Text fontSize={{ base: '1.5rem', md: '40px' }} textAlign="left" fontWeight="bold">
				Getting Started
			</Text>
			<Box width="50%" p={4}>
				<p>This source code available at <Link href="https://github.com/rickhysis/next-sfs"><Code colorScheme='green'>https://github.com/rickhysis/next-sfs</Code></Link> </p>
				<p>Clone this aplication in <Code colorScheme='gray'>git clone add origin git@github.com:rickhysis/next-sfs.git</Code></p>
				<p>First, run the development server:</p>
				<Code colorScheme='gray'>npm run dev</Code>
				<p>or</p>
				<Code colorScheme='gray'>yarn dev</Code>
				<p>or</p>
				<Code colorScheme='gray'>pnpm dev</Code>
			</Box>

			<Text fontSize={{ base: '1.5rem', md: '40px' }} fontWeight="bold">
				How To use
			</Text>
			<Text color="gray.500" pt={[2, 6]} fontSize={14}>
				First register your account at <Link href="/register"><Code colorScheme='green'>/register</Code></Link> and input all data thats required
			</Text>
			<Image
				src="/images/register.png"
				alt="Login page"
				minWidth="400px"
				h="full"
				objectFit="cover"
			/>
			<Text color="gray.500" pt={[2, 6]} fontSize={14}>
				After that, you can enter login to appplication at <Link href="/login"><Code colorScheme='green' >/login</Code></Link> with data was your input
			</Text>
			<Image
				src="/images/login.png"
				alt="Login page"
				minWidth="400px"
				h="full"
				objectFit="cover"
			/>
			<Text color="gray.500" pt={[2, 6]} fontSize={14}>
				After you login, you can enter to users page to handle contact/user existing
			</Text>
			<Image
				src="/images/user.png"
				alt="Login page"
				minWidth="400px"
				h="full"
				objectFit="cover"
			/>
			<Text color="gray.500" pt={[2, 6]} fontSize={14}>
				You can create and update each user using button that available then showing form to filled
			</Text>
			<Image
				src="/images/form.png"
				alt="Login page"
				minWidth="400px"
				h="full"
				objectFit="cover"
			/>
			<Text color="gray.500" pt={[2, 6]} fontSize={14}>
				And for last you can delete user and make sure you really understand about that
			</Text>
			<Image
				src="/images/delete.png"
				alt="Login page"
				minWidth="400px"
				h="full"
				objectFit="cover"
			/>
		</VStack>
	);
};

export default LandingPageBody;
