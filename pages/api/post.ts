import { NextApiRequest, NextApiResponse } from 'next';
import { ICreatePost } from '..';
import prisma from '../../lib/prisma';

export default async function (req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'POST') {
		return res.status(405).json({ message: 'Method not allowed' });
	}
	const postData: ICreatePost = req.body;
	if (!postData.title || !postData.description) {
		return res.status(400).json({ message: 'invalid' });
	}
	const savedPost = await prisma.post.create({
		data: {
			title: postData.title,
			description: postData.description,
		},
	});
	res.json(savedPost);
	console.log('postData', postData);
}
