import { Link } from 'react-router-dom';
import type { BlogPostSummary } from '../types';

interface Props {
  post: BlogPostSummary;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogCard({ post }: Props) {
  return (
    <article className="blog-card">
      <span className="blog-category">{post.category}</span>
      <h3>
        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className="blog-excerpt">{post.excerpt}</p>
      <div className="blog-meta">
        <time>{formatDate(post.published_at)}</time>
        <span>{post.read_time_minutes} dk okuma</span>
      </div>
      <div className="tech-tags">
        {post.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </article>
  );
}
