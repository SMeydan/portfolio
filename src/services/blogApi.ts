import type { BlogPost, BlogPostSummary, Category } from '../types';

const BLOG_API = 'http://localhost:8000/api';

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

export const blogApi = {
  getPosts: (category?: string) => {
    const params = category ? `?category=${encodeURIComponent(category)}` : '';
    return fetchJson<BlogPostSummary[]>(`${BLOG_API}/posts${params}`);
  },
  getPost: (slug: string) => fetchJson<BlogPost>(`${BLOG_API}/posts/${slug}`),
  getCategories: () => fetchJson<Category[]>(`${BLOG_API}/categories`),
};
