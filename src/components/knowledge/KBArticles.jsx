import { FiChevronRight, FiClock, FiEye, FiStar } from 'react-icons/fi'

const articles = [
  {
    tone: 'blue',
    title: 'How to Create Your First Support Ticket',
    desc: 'Learn the basics of submitting a support request and tracking its progress through our system.',
    views: '2,845',
    rating: '4.8',
    readTime: '5 min read',
    date: '2 days ago',
  },
  {
    tone: 'purple',
    title: 'Setting Up Your Account Preferences',
    desc: 'Customize your account settings, notifications, and personal information for a better experience.',
    views: '1,923',
    rating: '4.6',
    readTime: '8 min read',
    date: '5 days ago',
  },
  {
    tone: 'green',
    title: 'Integrating Third-Party Applications',
    desc: 'Connect your favorite tools and services to streamline your workflow and boost productivity.',
    views: '3,156',
    rating: '4.9',
    readTime: '12 min read',
    date: '1 week ago',
  },
  {
    tone: 'yellow',
    title: 'Understanding Security Best Practices',
    desc: 'Protect your account and data with these essential security tips and two-factor authentication.',
    views: '2,234',
    rating: '4.7',
    readTime: '6 min read',
    date: '2 weeks ago',
  },
  {
    tone: 'red',
    title: 'Using the Mobile App Effectively',
    desc: 'Get the most out of our mobile application with these tips and tricks for on-the-go support.',
    views: '1,678',
    rating: '4.5',
    readTime: '7 min read',
    date: '3 weeks ago',
  },
]

function KBArticles() {
  return (
    <section className="kb-articles-card">
      <div className="kb-articles-head">
        <h3>Getting Started Articles</h3>
        <button type="button" className="kb-articles-sort">Most Recent</button>
      </div>

      <div className="kb-articles-list">
        {articles.map((article) => (
          <article key={article.title} className="kb-article-item">
            <span className={`kb-article-icon ${article.tone}`}>
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 7h10v10H7z" />
              </svg>
            </span>

            <div className="kb-article-copy">
              <h4>{article.title}</h4>
              <p>{article.desc}</p>

              <div className="kb-article-meta">
                <span><FiEye size={11} /> {article.views} views</span>
                <span><FiStar size={11} /> {article.rating}</span>
                <span><FiClock size={11} /> {article.readTime}</span>
                <span>{article.date}</span>
              </div>
            </div>

            <button type="button" className="kb-article-arrow" aria-label="Open article">
              <FiChevronRight size={14} />
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default KBArticles
