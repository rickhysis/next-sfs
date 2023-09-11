import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "@/firebase";


export const authOptions = {
	// Configure one or more authentication providers
	pages: {

		signIn: '/login'
	},
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {},
			/* eslint-disable @typescript-eslint/no-explicit-any */
			async authorize(credentials): Promise<any> {
				return await signInWithEmailAndPassword(auth, (credentials as any).email || '', (credentials as any).password || '')
					.then(userCredential => {
						if (userCredential.user) {
							return userCredential.user;
						}
						return null;
					})
					/* eslint-disable no-console */
					.catch(error => (console.log(error)))
					.catch((error) => {
						/* eslint-disable no-console */
						console.log(error);
					});
			}
		})
	],
	secret: process.env.NEXTAUTH_SECRET,
}
export default NextAuth(authOptions)
