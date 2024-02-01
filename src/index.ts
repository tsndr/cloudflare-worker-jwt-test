import { sign } from '@tsndr/cloudflare-worker-jwt'

export type Env = {}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		try {
			const payload = { sub: 'user-id' }
			const secret = 'super_secret_secret'

			const token = await sign(payload, secret)

			return Response.json({ token })
		} catch(err) {
			return new Response((err as Error).stack, { status: 500 })
		}
	}
}
