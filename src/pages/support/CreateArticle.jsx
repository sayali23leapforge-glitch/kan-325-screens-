import {
  FiAlignCenter,
  FiAlignLeft,
  FiAlignRight,
  FiBold,
  FiCalendar,
  FiChevronDown,
  FiEye,
  FiImage,
  FiItalic,
  FiLink2,
  FiList,
  FiPlus,
  FiSave,
} from 'react-icons/fi'
import SupportSidebar from '../../components/support/SupportSidebar'
import './all-tickets.css'
import './create-article.css'

const relatedArticles = ['Password Reset Guide', 'Account Security Tips']

const checklistItems = [
  'Add descriptive title',
  'Set appropriate category',
  'Write comprehensive content',
  'Add relevant tags',
  'Review and proofread',
]

function CreateArticle() {
  return (
    <div className="ca-layout">
      <SupportSidebar />

      <main className="ca-main">
        <header className="ca-header">
          <div>
            <h1>Create New Article</h1>
            <nav className="ca-breadcrumb" aria-label="Breadcrumb">
              <span>Home</span>
              <span>&gt;</span>
              <span>Knowledge Base</span>
              <span>&gt;</span>
              <span>Create Article</span>
            </nav>
          </div>

          <div className="ca-header-actions">
            <button type="button" className="ca-preview-btn">
              <FiEye size={13} />
              Preview
            </button>
            <button type="button" className="ca-save-btn">
              <FiSave size={13} />
              Save Article
            </button>
          </div>
        </header>

        <section className="ca-content">
          <div className="ca-grid">
            <section className="ca-left-column">
              <article className="ca-card">
                <h2>Article Details</h2>

                <label className="ca-field">
                  <span>Article Title</span>
                  <input type="text" placeholder="Enter a clear, descriptive title..." />
                </label>

                <div className="ca-field">
                  <span>Article URL Slug</span>
                  <div className="ca-slug-row">
                    <span>helpdesk.com/kb/</span>
                    <input type="text" placeholder="article-url-slug" />
                  </div>
                </div>

                <label className="ca-field">
                  <span>Short Description</span>
                  <textarea rows={3} placeholder="Brief summary that appears in search results and article lists..." />
                </label>

                <div className="ca-field-row">
                  <label className="ca-field">
                    <span>Category</span>
                    <button type="button" className="ca-select">
                      Select category...
                      <FiChevronDown size={12} />
                    </button>
                  </label>

                  <label className="ca-field">
                    <span>Priority Level</span>
                    <button type="button" className="ca-select">
                      Normal
                      <FiChevronDown size={12} />
                    </button>
                  </label>
                </div>

                <label className="ca-field">
                  <span>Tags</span>
                  <input type="text" placeholder="password, security, login" />
                  <small>Type keywords separated by commas for better search</small>
                </label>
              </article>

              <article className="ca-card">
                <div className="ca-content-head">
                  <h2>Article Content</h2>
                  <div className="ca-editor-tools" aria-label="Editor tools">
                    <button type="button" aria-label="Bold"><FiBold size={12} /></button>
                    <button type="button" aria-label="Italic"><FiItalic size={12} /></button>
                    <button type="button" aria-label="List"><FiList size={12} /></button>
                    <button type="button" aria-label="Align left"><FiAlignLeft size={12} /></button>
                    <button type="button" aria-label="Align center"><FiAlignCenter size={12} /></button>
                    <button type="button" aria-label="Align right"><FiAlignRight size={12} /></button>
                    <button type="button" aria-label="Add link"><FiLink2 size={12} /></button>
                    <button type="button" aria-label="Add image"><FiImage size={12} /></button>
                  </div>
                </div>

                <textarea
                  className="ca-editor"
                  rows={13}
                  placeholder="Write your article content here... Use the formatting tools above to style your text."
                />

                <aside className="ca-tips-box">
                  <strong>Writing Tips</strong>
                  <ul>
                    <li>Use descriptive headings to organize your content</li>
                    <li>Include step-by-step instructions where applicable</li>
                    <li>Add screenshots or images to illustrate complex steps</li>
                    <li>Keep paragraphs short and easy to scan</li>
                  </ul>
                </aside>
              </article>

              <article className="ca-card">
                <h2>Article Settings</h2>

                <div className="ca-toggle-row">
                  <div>
                    <p>Publish Article</p>
                    <span>Make this article visible to users</span>
                  </div>
                  <label className="ca-switch" aria-label="Publish Article">
                    <input type="checkbox" defaultChecked />
                    <span />
                  </label>
                </div>

                <div className="ca-toggle-row">
                  <div>
                    <p>Featured Article</p>
                    <span>Show in featured articles section</span>
                  </div>
                  <label className="ca-switch" aria-label="Featured Article">
                    <input type="checkbox" />
                    <span />
                  </label>
                </div>

                <div className="ca-toggle-row">
                  <div>
                    <p>Allow Comments</p>
                    <span>Let users comment on this article</span>
                  </div>
                  <label className="ca-switch" aria-label="Allow Comments">
                    <input type="checkbox" defaultChecked />
                    <span />
                  </label>
                </div>

                <label className="ca-field ca-date-field">
                  <span>Scheduled Publish Date</span>
                  <div className="ca-date-input">
                    <input type="text" placeholder="dd-mm-yyyy" />
                    <FiCalendar size={13} />
                  </div>
                  <small>Leave empty to publish immediately</small>
                </label>
              </article>
            </section>

            <aside className="ca-right-column">
              <article className="ca-panel">
                <h3>Publication Status</h3>

                <div className="ca-status-row">
                  <span>Status</span>
                  <em>Draft</em>
                </div>

                <div className="ca-status-row">
                  <span>Author</span>
                  <strong>
                    <img src="https://i.pravatar.cc/24?img=12" alt="Alex Morgan" />
                    Alex Morgan
                  </strong>
                </div>

                <div className="ca-status-row">
                  <span>Created</span>
                  <p>Today, 2:30 PM</p>
                </div>

                <div className="ca-status-row">
                  <span>Last Modified</span>
                  <p>Just now</p>
                </div>

                <div className="ca-status-row">
                  <span>Word Count</span>
                  <p>0 words</p>
                </div>
              </article>

              <article className="ca-panel">
                <h3>SEO Settings</h3>

                <label className="ca-field">
                  <span>Meta Title</span>
                  <input type="text" placeholder="SEO-optimized title..." />
                  <small>60 characters recommended</small>
                </label>

                <label className="ca-field">
                  <span>Meta Description</span>
                  <textarea rows={3} placeholder="Brief description for search engines..." />
                  <small>160 characters recommended</small>
                </label>

                <label className="ca-field">
                  <span>Focus Keyword</span>
                  <input type="text" placeholder="Primary keyword..." />
                </label>
              </article>

              <article className="ca-panel">
                <h3>Related Articles</h3>

                <div className="ca-related-list">
                  {relatedArticles.map((item) => (
                    <button key={item} type="button" className="ca-related-item">
                      <span>{item}</span>
                      <FiChevronDown size={10} />
                    </button>
                  ))}
                </div>

                <button type="button" className="ca-add-related-btn">
                  <FiPlus size={12} />
                  Add Related Article
                </button>
              </article>

              <article className="ca-checklist-panel">
                <h3>Publishing Checklist</h3>
                <ul>
                  {checklistItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </aside>
          </div>

          <footer className="ca-footer">
            <p>© 2024 HelpDesk Pro. All rights reserved.</p>
            <div>
              <button type="button">Privacy Policy</button>
              <button type="button">Terms of Service</button>
              <button type="button">Contact</button>
            </div>
          </footer>
        </section>
      </main>
    </div>
  )
}

export default CreateArticle
