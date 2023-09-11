import { Box, Center, Link, Text, useToast } from '@chakra-ui/react';
import * as React from 'react';

import LoginForm from '@/components/login/LoginForm';
import { LoginSchema, loginSchema } from '@/components/login/LoginSchema';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase'
import { signIn } from 'next-auth/react';

export interface LoginMainProps { }

const LoginMain: React.FC<LoginMainProps> = () => {
	const toast = useToast();

	const handleLoginSubmit = (values: LoginSchema) => {
		signInWithEmailAndPassword(auth, values.email, values.password).then((userCredential) => {
			/* eslint-disable no-console */
			console.log(userCredential)
			toast({
				title: 'You have successfully logged in',
				position: 'top',
				isClosable: true,
			})
			signIn('credentials', {email: values.email, password: values.password, redirect: true, callbackUrl: '/users'})
		}).catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			if (errorCode == 'auth/wrong-password') {
				toast({
					title: 'Wrong password',
					position: 'top',
					isClosable: true,
				})
			} else if (errorCode == 'auth/user-not-found') {
				toast({
					title: 'User not found/registered',
					position: 'top',
					isClosable: true,
				})
			} else {
				toast({
					title: errorMessage,
					position: 'top',
					isClosable: true,
				})
			}
		});
	};

	return (
		<>
			<Box
				bg="white"
				h="full"
				w="full"
				display="flex"
				alignItems="center"
				flexDirection="column"
				mt="6"
				p="4"
			>
				<Box w="md" p={{ base: 8, md: 10 }}>
					<Text fontSize={28} align="center" color="green.600" fontWeight={900}>Sign In</Text>
					<Text fontSize={14} align="center" fontWeight={700}>Input your email and password to sign in</Text>
					<LoginForm
						schema={loginSchema}
						onSubmit={handleLoginSubmit}
						defaultValues={{
							email: '',
							password: '',
						}}
						props={{
							email: {
								label: 'Email',
								inputProps: { placeholder: 'Input your email address' },
							},
							password: {
								label: 'Password',
								inputProps: { placeholder: 'Input your password' },
							},
						}}
					/>
					<Center py={5}>
						<span style={{ marginRight: '0.5rem' }}>Don't have account?</span>
						<Link color="green.600" href="/register" fontWeight={700}>
							Sign up
						</Link>
					</Center>
				</Box>
			</Box>
		</>
	);
};

export default LoginMain;
