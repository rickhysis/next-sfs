import { NextApiRequest, NextApiResponse } from 'next';
import { customInitApp } from '@/lib/firebase-admin-config';
import { auth } from 'firebase-admin';

customInitApp()

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const {
			email,
			phoneNumber,
			displayName,
		} = req.body;
		const userRecord = await auth().createUser({
			emailVerified: true,
			email,
			phoneNumber,
			displayName,
		});

		const user = userRecord.toJSON();

		res.status(200).json({ sucess: true, user });
	} catch (error) {
		console.error('Error create users:', error);
		res.status(500).json({ success: false, error: error });
	}
};
