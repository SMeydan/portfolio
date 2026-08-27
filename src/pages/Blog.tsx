import { useState } from 'react';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React and TypeScript',
      excerpt: 'A comprehensive guide to setting up your first React project with TypeScript. Learn about best practices, tooling, and common pitfalls to avoid.',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Development'
    },
    {
      id: 2,
      title: 'Building Scalable Backend Systems',
      excerpt: 'Lessons learned from building production-grade backend services. Topics include architecture patterns, database design, and API best practices.',
      date: '2024-01-10',
      readTime: '8 min read',
      category: 'Backend'
    },
    {
      id: 3,
      title: 'Exploring AI in Modern Software Development',
      excerpt: 'How artificial intelligence is changing the way we write and think about code. From code completion to automated testing, discover the possibilities.',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'AI'
    },
    {
      id: 4,
      title: 'The Art of Clean Code',
      excerpt: 'Writing code that is not only functional but also maintainable and readable. Tips and techniques for improving your code quality.',
      date: '2023-12-28',
      readTime: '4 min read',
      category: 'Best Practices'
    },
    {
      id: 5,
      title: 'Microservices vs Monolith: Making the Right Choice',
      excerpt: 'A deep dive into the trade-offs between microservices and monolithic architectures. When to use each and how to transition effectively.',
      date: '2023-12-20',
      readTime: '7 min read',
      category: 'Architecture'
    },
    {
      id: 6,
      title: 'Optimizing Database Performance',
      excerpt: 'Strategies and techniques for improving database query performance. Indexing, caching, and query optimization essentials.',
      date: '2023-12-15',
      readTime: '6 min read',
      category: 'Database'
    }
  ];

  const categories = ['All', 'Development', 'Backend', 'AI', 'Best Practices', 'Architecture', 'Database'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <section className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-display-2xl text-display-2xl text-primary tracking-tighter text-glow mb-4">
            Blog
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about software development, AI, and technology.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                ${selectedCategory === category 
                  ? 'bg-primary text-on-primary' 
                  : 'bg-surface text-on-surface-variant hover:bg-surface-variant'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <article 
              key={post.id}
              className="bg-surface rounded-lg overflow-hidden border border-outline-variant 
                       hover:border-primary/50 transition-all cursor-pointer group"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-on-surface-variant">
                    {post.readTime}
                  </span>
                </div>
                
                <h2 className="font-display-lg text-display-lg text-on-surface mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-on-surface-variant text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <time className="text-xs text-on-surface-variant">
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                  <span className="text-primary text-sm font-medium group-hover:underline">
                    Read more →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-on-surface-variant">No posts found in this category.</p>
          </div>
        )}
      </section>
    </main>
  );
}
