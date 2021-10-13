import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../lib/prisma';

export default async function (req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'POST') {
		return res.status(405).json({ message: 'Method not allowed' });
	}
	const postData = req.body;
	const savedPost = prisma.post.create({
		data: postData,
	});
	res.json(savedPost);
	console.log('postData', postData);
}
