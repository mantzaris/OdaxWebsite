// app/sitemap.ts
import type { MetadataRoute } from 'next'
import { allProducts, allServices } from 'contentlayer/generated'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://odaxtech.com'
  const staticRoutes = ['', '/products', '/services', '/blog', '/contact'].map(p => ({
    url: `${base}${p}`, lastModified: new Date(),
  }))
  const products = allProducts.map(p => ({ url: `${base}${p.url}`, lastModified: new Date() }))
  const services = allServices.map(s => ({ url: `${base}${s.url}`, lastModified: new Date() }))
  return [...staticRoutes, ...products, ...services]
}
