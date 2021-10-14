import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../lib/prisma';

export default async function (req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'DELETE') {
		return res.status(405).json({ message: 'Method not allowed' });
	}
	const postID = JSON.parse(req.body);
	const savedPost = await prisma.post.delete({
		where: {
			id: postID,
		},
	});
	res.json(savedPost);
}
