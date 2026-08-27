import { useState } from 'react';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with Neural Networks',
      excerpt: 'A beginner-friendly guide to understanding and implementing neural networks. Learn the basics of layers, activation functions, and training models.',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI',
      imageUrl: '/gradient.jpg',
      link: '/blog/neural-networks.html'
    },
    {
      id: 2,
      title: 'Building Scalable Backend Systems',
      excerpt: 'Lessons learned from building production-grade backend services. Topics include architecture patterns, database design, and API best practices.',
      date: '2024-01-10',
      readTime: '8 min read',
      category: 'Backend',
      imageUrl: '/gradient.jpg',
      link: '/blog/scalable-backend'
    },
    {
      id: 3,
      title: 'Exploring AI in Modern Software Development',
      excerpt: 'How artificial intelligence is changing the way we write and think about code. From code completion to automated testing, discover the possibilities.',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'AI',
      imageUrl: '/gradient.jpg',
      link: '/blog/ai-software-development'
    },
    {
      id: 4,
      title: 'The Art of Clean Code',
      excerpt: 'Writing code that is not only functional but also maintainable and readable. Tips and techniques for improving your code quality.',
      date: '2023-12-28',
      readTime: '4 min read',
      category: 'Best Practices',
      imageUrl: '/gradient.jpg',
      link: '/blog/clean-code'
    },
    {
      id: 5,
      title: 'Microservices vs Monolith: Making the Right Choice',
      excerpt: 'A deep dive into the trade-offs between microservices and monolithic architectures. When to use each and how to transition effectively.',
      date: '2023-12-20',
      readTime: '7 min read',
      category: 'Architecture',
      imageUrl: '/gradient.jpg',
      link: '/blog/microservices-vs-monolith'
    },
    {
      id: 6,
      title: 'Optimizing Database Performance',
      excerpt: 'Strategies and techniques for improving database query performance. Indexing, caching, and query optimization essentials.',
      date: '2023-12-15',
      readTime: '6 min read',
      category: 'Database',
      imageUrl: '/gradient.jpg',
      link: '/blog/database-performance'
    }
  ];

  const categories = ['All', 'Development', 'Backend', 'AI', 'Best Practices', 'Architecture', 'Database'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <section className="max-w-[1440px] mx-auto">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[280px]">
          {filteredPosts.map((post, i) => {
            const isLarge = i === 0 || i === 3 || i === 4;

            return (
              <div
                key={post.id}
                className={`glass-card rounded-xl overflow-hidden group relative cursor-hover ${
                  isLarge ? 'md:col-span-2' : 'md:col-span-1'
                }`}
              >
                {post.imageUrl ? (
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-90 transition-opacity"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl border border-secondary/40 flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined text-[28px]">
                        article
                      </span>
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8 w-full flex items-end justify-between">
                  <div>
                    <div className="font-label-mono text-label-mono text-secondary-fixed-dim mb-2 uppercase tracking-widest">
                      {post.category} · {post.readTime}
                    </div>

                    <h3 className="font-display-lg-mobile text-display-lg-mobile text-primary">
                      {post.title}
                    </h3>
                  </div>

                  {i === 0 && (
                    <div className="w-10 h-10 rounded-full border border-surface-variant flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-background transition-colors">
                      <a href={post.link} target="_blank" rel="noopener noreferrer">
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_outward
                      </span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
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
