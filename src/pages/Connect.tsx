import { useState } from 'react';
import ConnectShader from '../components/ConnectShader';

export default function Connect() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Implement form submission logic
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen pt-24 pb-16 px-6 relative">
      <ConnectShader />
      <section className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="font-display-2xl text-display-2xl text-primary tracking-tighter text-glow mb-4">
            Let's Connect
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display-lg text-display-lg text-primary mb-4">Get in Touch</h2>
              <div className="space-y-4">
                <a href="mailto:sudenurmeydan01@gmail.com" className="block text-on-surface hover:text-primary transition-colors">
                  sudenurmeydan01@gmail.com
                </a>
                <div className="flex gap-4 pt-4">
                  <a href="https://github.com/SMeydan" target="_blank" rel="noopener noreferrer" 
                     className="text-on-surface-variant hover:text-primary transition-colors">
                    GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/sudenur-meydan/" target="_blank" rel="noopener noreferrer"
                     className="text-on-surface-variant hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer"
                     className="text-on-surface-variant hover:text-primary transition-colors">
                    Twitter
                  </a>
                  <a href="https://www.medium.com/@sudenurmeydan01" target="_blank" rel="noopener noreferrer"
                     className="text-on-surface-variant hover:text-primary transition-colors">
                    Medium
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-display-lg text-display-lg text-primary mb-4">Location</h2>
              <p className="text-on-surface-variant">
                Istanbul, Turkey<br />
                Available for remote work worldwide
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-on-surface mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-surface border border-outline-variant rounded-lg 
                         text-on-surface focus:outline-none focus:ring-2 focus:ring-primary 
                         focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-on-surface mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-surface border border-outline-variant rounded-lg 
                         text-on-surface focus:outline-none focus:ring-2 focus:ring-primary 
                         focus:border-transparent transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-on-surface mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-surface border border-outline-variant rounded-lg 
                         text-on-surface focus:outline-none focus:ring-2 focus:ring-primary 
                         focus:border-transparent transition-all resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-on-primary font-medium rounded-lg 
                       hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary 
                       focus:ring-offset-2 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
