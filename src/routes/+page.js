import createClient from '$lib/prismicio'

export async function load({ fetch, request }) {
	const UID = '1';
	const client = createClient({ fetch, request });
	const document = await client.getByUID('mijndata', UID);

  console.log(document);

	if (document) {
		return { document };
	}

	error(404, 'Not found');
}