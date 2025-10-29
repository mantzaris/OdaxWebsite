// contentlayer.config.ts  (or .js with ESM `export default`)
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export const Product = defineDocumentType(() => ({
  name: 'Product',
  filePathPattern: 'products/**/*.mdx',
  contentType: 'mdx',
  fields: {
    name: { type: 'string', required: true },
    shortDescription: { type: 'string', required: true },
    hero: { type: 'string' },
    status: { type: 'enum', options: ['alpha','beta','ga'], default: 'ga' },
    features: { type: 'list', of: { type: 'string' } },
    order: { type: 'number' },
    published: { type: 'boolean', default: true },
  },
  computedFields: {
    slug: { type: 'string', resolve: (d) => d._raw.flattenedPath.replace(/^products\//, '') },
    url:  { type: 'string', resolve: (d) => `/products/${d._raw.flattenedPath.replace(/^products\//, '')}` },
  },
}))

export const Service = defineDocumentType(() => ({
  name: 'Service',
  filePathPattern: 'services/**/*.mdx',
  contentType: 'mdx',
  fields: {
    name: { type: 'string', required: true },
    shortDescription: { type: 'string', required: true },
    icon: { type: 'string' },
    order: { type: 'number' },
    published: { type: 'boolean', default: true },
  },
  computedFields: {
    slug: { type: 'string', resolve: (d) => d._raw.flattenedPath.replace(/^services\//, '') },
    url:  { type: 'string', resolve: (d) => `/services/${d._raw.flattenedPath.replace(/^services\//, '')}` },
  },
}))



export const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: 'posts/**/*.mdx',
  fields: {
    title: { type: 'string', required: true },
    date:  { type: 'date',   required: true },
    description: { type: 'string' },
    published: { type: 'boolean', default: true },
    tags: { type: 'list', of: { type: 'string' }, default: [] },
    pinned: { type: 'boolean', default: false },
  },
  computedFields: {
    // make cards link to /blog/... to match your site nav
    slug:          { type: 'string', resolve: d => d._raw.flattenedPath.replace(/^posts\//, '') },
    slugAsParams:  { type: 'string', resolve: d => d._raw.flattenedPath.replace(/^posts\//, '') },
    url:           { type: 'string', resolve: d => `/posts/${d._raw.flattenedPath.replace(/^posts\//, '')}` },
  },
}))


// Optional: capture content/pages/about.mdx to remove the warning
export const Page = defineDocumentType(() => ({
  name: 'Page',
  contentType: 'mdx',
  filePathPattern: 'pages/**/*.mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string' },
    published: { type: 'boolean', default: true },
  },
  computedFields: {
    slug: { type: 'string', resolve: (d) => d._raw.flattenedPath.replace(/^pages\//, '') },
    slugAsParams: { type: 'string', resolve: d => d._raw.flattenedPath.replace(/^pages\//, '') },
    url:  { type: 'string', resolve: (d) => `/${d._raw.flattenedPath.replace(/^pages\//, '')}` },
  },
}))


export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Page, Post, Product, Service],
  mdx: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]] },
})
