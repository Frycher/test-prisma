import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import prisma from '../../../lib/prisma';

export default NextAuth({
	providers: [
		Providers.Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		// Providers.Credentials({})
	],
	session: {
		maxAge: undefined,
	},
	adapter: PrismaAdapter(prisma),
	// pages: {
	// 	error: '/signin',
	// },
	// debug: true,
});
