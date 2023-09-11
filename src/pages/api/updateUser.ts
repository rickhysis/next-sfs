import { NextApiRequest, NextApiResponse } from 'next';
import { customInitApp } from '@/lib/firebase-admin-config';
import { auth } from 'firebase-admin';

customInitApp()

const UpdateUser = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const {
			uid,
			email,
			phoneNumber,
			displayName,
		} = req.body;
		const userRecord = await auth().updateUser(uid, {
			email,
			phoneNumber,
			displayName,
		});

		const user = userRecord.toJSON();

		res.status(200).json({ sucess: true, user });
	} catch (error) {
		console.error('Error update users:', error);
		res.status(500).json({ success: false, error: error });
	}
};

export default UpdateUser
