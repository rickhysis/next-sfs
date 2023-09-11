import { NextApiRequest, NextApiResponse } from 'next';
import { customInitApp } from '@/lib/firebase-admin-config';
import { auth } from 'firebase-admin';

customInitApp()

const DeleteUser = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { uid } = req.query;
		await auth().deleteUser(uid as string);

		res.status(200).json({ sucess: true});
	} catch (error) {
		console.error('Error delete users:', error);
		res.status(500).json({ success: false, error: error });
	}
};

export default DeleteUser
