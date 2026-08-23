// app/sitemap.ts
import type { MetadataRoute } from 'next'
import { allPosts, allProducts, allServices } from 'contentlayer/generated'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.odaxtechnologies.com'
  const staticRoutes = ['', '/products', '/services', '/posts', '/contact'].map(p => ({
    url: `${base}${p}`, lastModified: new Date(),
  }))
  const products = allProducts
    .filter(p => p.published !== false)
    .map(p => ({ url: `${base}${p.url}`, lastModified: new Date() }))
  const services = allServices
    .filter(s => s.published !== false)
    .map(s => ({ url: `${base}${s.url}`, lastModified: new Date() }))
  const posts = allPosts
    .filter(p => p.published !== false)
    .map(p => ({ url: `${base}${p.url}`, lastModified: new Date(p.date) }))
  return [...staticRoutes, ...products, ...services, ...posts]
}
