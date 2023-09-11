import { Box, useToast } from '@chakra-ui/react';
import * as React from 'react';

import RegisterForm from '@/components/register/RegisterForm';
import {
	registerSchema,
	RegisterSchemaType,
} from '@/components/register/RegisterSchema';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';
import { useRouter } from 'next/router';

export interface RegisterMainProps { }

const RegisterMain: React.FC<RegisterMainProps> = () => {
	const router = useRouter()
	const toast = useToast()
	const handleLoginSubmit = (values: RegisterSchemaType) => {
		createUserWithEmailAndPassword(auth, values.email, values.password).then((userCredential) => {
			/* eslint-disable no-console */
			console.log(userCredential)
			toast({
				title: 'Successfull registration user',
				position: 'top',
				isClosable: true,
			})
			router.push('/login');
		}).catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			if (errorCode == 'auth/weak-password') {
				toast({
					title: 'The password is too weak.',
					position: 'top',
					isClosable: true,
				})
			} else if (errorCode == 'auth/email-already-in-use') {
				toast({
					title: 'Email already use',
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
			<Box width={{ base: '90%', md: '30%', sm: '90%' }}>
				<RegisterForm
					schema={registerSchema}
					onSubmit={handleLoginSubmit}
					defaultValues={{
						email: '',
						password: '',
						confirmation_password: '',
					}}
					props={{
						email: {
							label: 'Email',
							inputProps: { placeholder: 'Input your email adsdress' },
						},
						password: {
							label: 'Password',
							inputProps: { placeholder: 'Input your password' },
						},
						confirmation_password: {
							label: 'Confirmation Password',
							inputProps: { placeholder: 'Input confirmation password' },
						},
					}}
				/>
			</Box>
		</Box>
	);
};

export default RegisterMain;
