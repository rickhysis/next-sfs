import { NextApiRequest, NextApiResponse } from 'next';
import { customInitApp } from '@/lib/firebase-admin-config';
import { auth } from 'firebase-admin';

customInitApp()

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const search : string = req.query.search as string;
		const result = await auth().getUsers([{ email: search }]);

		const users = result.users.map((userRecord) => {
			const user = userRecord.toJSON();
			return user;
		});


		res.status(200).json({ users });
	} catch (error) {
		console.error('Error looking for users:', error);
		res.status(500).json({ error: 'Email not found' });
	}
};
