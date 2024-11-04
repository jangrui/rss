import useReflare from 'reflare';

const handleRequest = async (
  request: Request,
): Promise<Response> => {
  const reflare = await useReflare();

  reflare.push({
    path: '/*',
    upstream: {
      domain: 'rsshub.app',
      protocol: 'https',
    },
    cors: {
      origin: '*',
    },
  });

  return reflare.handle(request);
};

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});
