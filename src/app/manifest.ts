import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Topvan - Transporte Executivo',
    short_name: 'Topvan',
    description: 'Transporte universitário, escolar e executivo na rota Piedade - Sorocaba.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#d4af37',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/topvan.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      }
    ],
  };
}
