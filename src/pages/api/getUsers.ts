import { NextApiRequest, NextApiResponse } from 'next';
import { customInitApp } from '@/lib/firebase-admin-config';
import { auth } from 'firebase-admin';

interface ParamUsersType {
	limit?: string;
	nextPageToken?: string | undefined;
}

customInitApp()

const GetUsers = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { nextPageToken, limit }: ParamUsersType = req.query
		const limitValue = parseInt(limit as string, 10);
		let result;

		if (nextPageToken !== 'null' && nextPageToken !== 'undefined') {
			result = await auth().listUsers(limitValue, nextPageToken);
		} else {
			result = await auth().listUsers(limitValue);
		}
		const users = result.users.map((userRecord) => {
			const user = userRecord.toJSON();
			return user;
		});

		// Return the next page token if more users are available
		const nextPageTokenResponse = result.pageToken;

		res.status(200).json({ users, nextPageToken: nextPageTokenResponse });
	} catch (error) {
		console.error('Error listing users:', error);
		res.status(500).json({ error: 'Error listing users' });
	}
};

export default GetUsers
