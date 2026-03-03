import { useState } from 'react'
import './App.css'
import aubLogo from './assets/AUBLOGO.png'

type MainView = 'chat' | 'videos' | 'resources'

const RESOURCES = [
  {
    label: 'Tellering, Cash Handling & Currency Knowledge',
    url: 'https://notebooklm.google.com/notebook/4f99c986-6a77-4a3c-87b7-828e057d11cd?authuser=4',
    icon: '💼',
  },
  {
    label: 'AUB Products and Services',
    url: 'https://notebooklm.google.com/notebook/aaa2fa1d-3075-435d-ad5a-4d49fd9f9b6b?authuser=4',
    icon: '🏦',
  },
  {
    label: 'Fees, Charges & Computation',
    url: 'https://notebooklm.google.com/notebook/feb58c73-882b-46a6-9c23-61885c93a013?authuser=4',
    icon: '💰',
  },
  {
    label: 'Sales, Service & Branch Roles',
    url: 'https://notebooklm.google.com/notebook/5f9f0aec-3f28-49c1-b5e1-2d109faa451e?authuser=4',
    icon: '👥',
  },
  {
    label: 'HR, Workplace Policies & Systems',
    url: 'https://notebooklm.google.com/notebook/00caec8e-9337-402b-9f28-c63cbbe83fc4?authuser=4',
    icon: '👔',
  },
  {
    label: 'Cards and Payment Solutions',
    url: 'https://notebooklm.google.com/notebook/d5ba644a-995b-4d12-822e-db0f9008a9a2?authuser=4',
    icon: '💳',
  },
  {
    label: 'All Documents',
    url: 'https://notebooklm.google.com/notebook/afe539aa-c413-486d-96be-5096c3a4e8ba?authuser=4',
    icon: '📄',
  },
  {
    label: 'Account, Loans, and Credit Products',
    url: 'https://notebooklm.google.com/notebook/6f4894f1-961d-4e2e-a9c1-d148fe8b59b4?authuser=4',
    icon: '📋',
  },
  {
    label: 'Cash Management & Business Services',
    url: 'https://notebooklm.google.com/notebook/0dfbd9f8-5706-425e-b6a0-d76bc39703b9?authuser=4',
    icon: '💳',
  },
  {
    label: 'Branches Operation',
    url: 'https://notebooklm.google.com/notebook/d060e698-51f2-4b18-af5c-5f19530ec824?authuser=4',
    icon: '🏢',
  },
  {
    label: 'Corporate Information & Product Overview',
    url: 'https://notebooklm.google.com/notebook/8b058e63-b24e-4a1b-9ad8-6750f46cf382?authuser=4',
    icon: '📊',
  },
  {
    label: 'Business Product',
    url: 'https://notebooklm.google.com/notebook/2193fe57-88f7-4095-92a0-f1af27a81932?authuser=4',
    icon: '🎯',
  },
  {
    label: 'Leadership, Productivity & Professional Skills',
    url: 'https://notebooklm.google.com/notebook/75f3f6b2-3b0d-45f9-86ac-b4d58240155a?authuser=4',
    icon: '⭐',
  },
]

// Helper function to get NotebookLM URL by category label
const getCategoryUrl = (categoryLabel: string): string | null => {
  const resource = RESOURCES.find(r => r.label === categoryLabel)
  return resource?.url || null
}

// Video categories with detailed video items
const VIDEO_CATEGORIES = {
  'Cards and Payment Solutions': [
    {
      title: 'Cash Card Co-Branding',
      url: 'https://notebooklm.google.com/notebook/d5ba644a-995b-4d12-822e-db0f9008a9a2?artifactId=bc3d460a-ed5e-4f83-aa7c-c6ec5ceedc23',
    },
    {
      title: 'The AUB REDI MONEY Card',
      url: 'https://notebooklm.google.com/notebook/d5ba644a-995b-4d12-822e-db0f9008a9a2?artifactId=e182fa2f-70a8-4995-9fba-92609c368e63',
    },
  ],
  'AUB Products and Services': [
    {
      title: 'AUB Savings Account Overview',
      url: 'https://notebooklm.google.com/notebook/aaa2fa1d-3075-435d-ad5a-4d49fd9f9b6b?authuser=4',
    },
    {
      title: 'Loan Products Guide',
      url: 'https://notebooklm.google.com/notebook/aaa2fa1d-3075-435d-ad5a-4d49fd9f9b6b?authuser=4',
    },
  ],
  'Onboarding & Training': [
    {
      title: 'First Day at AUB',
      url: 'https://notebooklm.google.com/notebook/00caec8e-9337-402b-9f28-c63cbbe83fc4?authuser=4',
    },
    {
      title: 'Branch Operations Essentials',
      url: 'https://notebooklm.google.com/notebook/d060e698-51f2-4b18-af5c-5f19530ec824?authuser=4',
    },
  ],
}

const CHAT_CATEGORIES = RESOURCES.map(r => r.label)

function App() {
  const [activeView, setActiveView] = useState<MainView>('chat')
  const [selectedVideoCategory, setSelectedVideoCategory] = useState<string | null>(null)

  return (
    <div className="aub-app">
      {/* Top header / navbar */}
      <header className="aub-header">
        <div className="aub-header-top">
          <div className="aub-header-left">
            <img src={aubLogo} alt="AUB Logo" className="aub-header-logo" />
          </div>
          <nav className="aub-nav">
            <a href="#" className="aub-nav-link aub-nav-link-active">
              Home
            </a>
          </nav>
          <div className="aub-header-right">
            <div className="aub-header-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* Page layout with dual sidebars */}
      <div className="aub-layout">
        <aside className="aub-sidebar aub-sidebar-left">
          <div className="aub-sidebar-section-title">Navigation</div>
          <button
            className={`aub-sidebar-item ${activeView === 'chat' ? 'aub-sidebar-item-active' : ''}`}
            onClick={() => setActiveView('chat')}
          >
            Chat
          </button>
          <button
            className={`aub-sidebar-item ${activeView === 'videos' ? 'aub-sidebar-item-active' : ''}`}
            onClick={() => setActiveView('videos')}
          >
            Videos
          </button>
          <button
            className={`aub-sidebar-item ${activeView === 'resources' ? 'aub-sidebar-item-active' : ''}`}
            onClick={() => setActiveView('resources')}
          >
            Resources
          </button>
        </aside>

        <main className="aub-main">
          {activeView === 'chat' ? (
            <section className="aub-panel">
              <header className="aub-panel-header">
                <div>
                  <h1 className="aub-panel-title">RediMoney to go digital</h1>
                  <p className="aub-panel-subtitle">
                    Engage with AUB resources, documents, and knowledge through chat categories.
                  </p>
                </div>
                <button className="aub-panel-cta">Learn more</button>
              </header>

              <div className="aub-panel-body">
                <div className="aub-chat">
                  <div className="aub-chat-messages">
                    <div className="aub-chat-message aub-chat-message-incoming">
                      <div className="aub-chat-bubble">
                        Welcome to AUB. Select a category on the right to explore training content,
                        product information, and resources.
                      </div>
                      <span className="aub-chat-meta">just now</span>
                    </div>
                  </div>
                  <form
                    className="aub-chat-input-row"
                    onSubmit={(e) => {
                      e.preventDefault()
                    }}
                  >
                    <input
                      className="aub-chat-input"
                      placeholder="Type a message (demo only)..."
                    />
                    <button type="submit" className="aub-chat-send">
                      Send
                    </button>
                  </form>
                </div>

                <div className="aub-category-panel">
                  <h2 className="aub-category-title">Knowledge Categories</h2>
                  <p className="aub-category-subtitle">
                    Choose a category to open detailed resources in NotebookLM.
                  </p>
                  <div className="aub-category-grid">
                    {CHAT_CATEGORIES.map((category) => {
                      const url = getCategoryUrl(category)
                      return (
                        <a
                          key={category}
                          href={url || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="aub-category-card"
                          title={category}
                        >
                          <span className="aub-category-card-label">{category}</span>
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </section>
          ) : activeView === 'videos' ? (
            <section className="aub-panel">
              <header className="aub-panel-header">
                <div>
                  <h1 className="aub-panel-title">AUB Learning Videos</h1>
                  <p className="aub-panel-subtitle">
                    Click on any video category to explore training content and resources.
                  </p>
                </div>
              </header>

              <div className="aub-resources-grid">
                {Object.keys(VIDEO_CATEGORIES).map((categoryName) => (
                  <button
                    key={categoryName}
                    onClick={() => setSelectedVideoCategory(categoryName)}
                    className="aub-resource-card aub-video-category-btn"
                    title={categoryName}
                  >
                    <div className="aub-resource-icon">🎥</div>
                    <div className="aub-resource-label">{categoryName}</div>
                  </button>
                ))}
              </div>

              {/* Modal for video category details */}
              {selectedVideoCategory && (
                <div
                  className="aub-modal-overlay"
                  onClick={() => setSelectedVideoCategory(null)}
                >
                  <div
                    className="aub-modal-content"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="aub-modal-header">
                      <h2 className="aub-modal-title">{selectedVideoCategory}</h2>
                      <button
                        className="aub-modal-close"
                        onClick={() => setSelectedVideoCategory(null)}
                        aria-label="Close modal"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="aub-modal-body">
                      <ul className="aub-video-list">
                        {VIDEO_CATEGORIES[selectedVideoCategory as keyof typeof VIDEO_CATEGORIES]?.map((video, index) => (
                          <li key={index} className="aub-video-list-item">
                            <a
                              href={video.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="aub-video-link"
                            >
                              <span className="aub-video-link-text">{video.title}</span>
                              <span className="aub-video-link-icon">→</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </section>
          ) : (
            <section className="aub-panel">
              <header className="aub-panel-header">
                <div>
                  <h1 className="aub-panel-title">NotebookLM Resources</h1>
                  <p className="aub-panel-subtitle">
                    Click on any resource to open it in NotebookLM for detailed exploration and learning.
                  </p>
                </div>
              </header>

              <div className="aub-resources-grid">
                {RESOURCES.map((resource) => (
                  <a
                    key={resource.label}
                    href={resource.url}
                    target="_blank"
                    rel="noreferrer"
                    className="aub-resource-card"
                    title={resource.label}
                  >
                    <div className="aub-resource-icon">{resource.icon}</div>
                    <div className="aub-resource-label">{resource.label}</div>
                  </a>
                ))}
              </div>
            </section>
          )}
        </main>

        <aside className="aub-sidebar aub-sidebar-right">
          <div className="aub-sidebar-section-title">Quick Actions</div>
          <button
            className={`aub-sidebar-item ${activeView === 'chat' ? 'aub-sidebar-item-active' : ''}`}
            onClick={() => setActiveView('chat')}
          >
            Chat
          </button>
          <button
            className={`aub-sidebar-item ${activeView === 'videos' ? 'aub-sidebar-item-active' : ''}`}
            onClick={() => setActiveView('videos')}
          >
            Videos
          </button>
          <button
            className={`aub-sidebar-item ${activeView === 'resources' ? 'aub-sidebar-item-active' : ''}`}
            onClick={() => setActiveView('resources')}
          >
            Resources
          </button>
        </aside>
      </div>
    </div>
  )
}

export default App
