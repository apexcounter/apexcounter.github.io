/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: `${process.env.NEXT_PUBLIC_BASE_PATH || 'http://localhost:3000'}/`
  },
}
