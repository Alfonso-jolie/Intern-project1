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
  'AUB Products and Services': [
    {
      title: 'AUB Savings Explained',
      url: 'https://notebooklm.google.com/notebook/aaa2fa1d-3075-435d-ad5a-4d49fd9f9b6b?artifactId=0f7ac469-c757-4238-af69-72b8a96cf996',
    },
    {
      title: 'AUB Deposit Accounts Explained',
      url: 'https://notebooklm.google.com/notebook/aaa2fa1d-3075-435d-ad5a-4d49fd9f9b6b?artifactId=73c22890-44d9-439a-afca-bdfe01971653',
    },
    {
      title: 'AUB UITF: A Beginner\'s Guide part 5',
      url: 'https://notebooklm.google.com/notebook/aaa2fa1d-3075-435d-ad5a-4d49fd9f9b6b?artifactId=d43a0495-9467-4c76-834f-d683db0125a2',
    },
    {
      title: 'AUB UITFs: A Beginner\'s Guide part 4',
      url: 'https://notebooklm.google.com/notebook/aaa2fa1d-3075-435d-ad5a-4d49fd9f9b6b?artifactId=7575f5e1-fcad-416f-afdd-413f77043bf9',
    },
    {
      title: 'AUB\'s Digital Toolbox part 3',
      url: 'https://notebooklm.google.com/notebook/aaa2fa1d-3075-435d-ad5a-4d49fd9f9b6b?artifactId=6673bbae-d693-4d1a-bc16-fc83e5926a09',
    },
    {
      title: 'Demystifying Bank Loans part 2',
      url: 'https://notebooklm.google.com/notebook/aaa2fa1d-3075-435d-ad5a-4d49fd9f9b6b?artifactId=5df652ac-cec2-4e7d-ad54-7f8b31fbbc42',
    },
    {
      title: 'Your Guide to AUB Banking part 1',
      url: 'https://notebooklm.google.com/notebook/aaa2fa1d-3075-435d-ad5a-4d49fd9f9b6b?artifactId=72bc3eca-2495-453b-bde4-abf260034ba4',
    },
  ],
  'Fees, Charges & Computation': [
    {
      title: 'RCOCI Charges, and BP Fees',
      url: 'https://notebooklm.google.com/notebook/feb58c73-882b-46a6-9c23-61885c93a013?artifactId=987d49b1-22ac-4f4c-a7cd-d529366edfe4',
    },
    {
      title: 'Telegraphic Transfers',
      url: 'https://notebooklm.google.com/notebook/feb58c73-882b-46a6-9c23-61885c93a013?artifactId=00344615-479d-4503-a1c1-d7e0c39f1899',
    },
  ],
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
  'HR, Workplace Policies & Systems': [
    {
      title: 'Smoke-Free Workplace Policy and Program.',
      url: 'https://notebooklm.google.com/notebook/00caec8e-9337-402b-9f28-c63cbbe83fc4?artifactId=947677ac-a99b-439e-8abb-4bac29447731',
    },
    {
      title: 'HIV & AIDS Workplace Policy',
      url: 'https://notebooklm.google.com/notebook/00caec8e-9337-402b-9f28-c63cbbe83fc4?artifactId=ac0cd602-236f-4c13-989a-28085b5263e8',
    },
    {
      title: 'Demystifying the HRIS',
      url: 'https://notebooklm.google.com/notebook/00caec8e-9337-402b-9f28-c63cbbe83fc4?artifactId=997d3cb9-9697-46bf-ae4f-be28eb06fa7d',
    },
  ],
  'Account, Loans, and Credit Products': [
    {
      title: 'Account Opening',
      url: 'https://notebooklm.google.com/notebook/6f4894f1-961d-4e2e-a9c1-d148fe8b59b4?artifactId=9811af39-7050-43cf-ae48-0ab714800e71',
    },
    {
      title: 'Demystifying Bank Accounts',
      url: 'https://notebooklm.google.com/notebook/6f4894f1-961d-4e2e-a9c1-d148fe8b59b4?artifactId=953f4a8d-1c4e-40c7-9197-d361bd39e12b',
    },
    {
      title: 'Housing Loan',
      url: 'https://notebooklm.google.com/notebook/6f4894f1-961d-4e2e-a9c1-d148fe8b59b4?artifactId=538d153f-37f0-4582-b4c9-24c56325292f',
    },
    {
      title: 'Applying for a Car Loan',
      url: 'https://notebooklm.google.com/notebook/6f4894f1-961d-4e2e-a9c1-d148fe8b59b4?artifactId=4da343f1-2d20-4fbb-b7ee-3526943c4c5a',
    },
    {
      title: 'AUB Secured Card & The Deed',
      url: 'https://notebooklm.google.com/notebook/6f4894f1-961d-4e2e-a9c1-d148fe8b59b4?artifactId=0b978486-d925-45fa-9195-6573487f9bed',
    },
  ],
  'Sales, Service & Branch Roles': [
    {
      title: 'Service Associate Functions',
      url: 'https://notebooklm.google.com/notebook/5f9f0aec-3f28-49c1-b5e1-2d109faa451e?artifactId=812f1058-2e09-47a4-b545-931de8f98aba',
    },
    {
      title: 'Service Associate\'s Blueprint',
      url: 'https://notebooklm.google.com/notebook/5f9f0aec-3f28-49c1-b5e1-2d109faa451e?artifactId=2f9f583c-7210-4482-bcb1-5d5f47a3deab',
    },
    {
      title: 'A Sales Associate\'s Duties',
      url: 'https://notebooklm.google.com/notebook/5f9f0aec-3f28-49c1-b5e1-2d109faa451e?artifactId=65a691c5-572a-4838-acfb-7ff6c12e6560',
    },
  ],
  'Cash Management & Business Services': [
    {
      title: 'AUB Bizkit & Cash Mgmt',
      url: 'https://notebooklm.google.com/notebook/0dfbd9f8-5706-425e-b6a0-d76bc39703b9?artifactId=2eb42e62-e259-4b92-9c7f-352590728596',
    },
    {
      title: 'Your Guide to eGov',
      url: 'https://notebooklm.google.com/notebook/0dfbd9f8-5706-425e-b6a0-d76bc39703b9?artifactId=93327d0b-8e88-4046-a9db-00d569092be9',
    },
    {
      title: 'A Beginner\'s Guide to eIPP',
      url: 'https://notebooklm.google.com/notebook/0dfbd9f8-5706-425e-b6a0-d76bc39703b9?artifactId=7f8d42fa-73a2-43e6-b17b-c4514ba20bfc',
    },
    {
      title: 'AUB Cash Management Guide',
      url: 'https://notebooklm.google.com/notebook/0dfbd9f8-5706-425e-b6a0-d76bc39703b9?artifactId=2ddd22e1-5fd5-4dbc-88c2-a20c6ee3bcc7',
    },
  ],
  'Branches Operation': [
    {
      title: 'Guide to Yen & Yuan',
      url: 'https://notebooklm.google.com/notebook/d060e698-51f2-4b18-af5c-5f19530ec824?artifactId=83370ee2-2ffb-4855-a91d-388b41e657e0',
    },
    {
      title: 'Guide Euro & Yuan',
      url: 'https://notebooklm.google.com/notebook/d060e698-51f2-4b18-af5c-5f19530ec824?artifactId=a06b2974-aad9-40ea-967c-f66dbb5f5f6c',
    },
    {
      title: 'Mastering the Business Letter',
      url: 'https://notebooklm.google.com/notebook/d060e698-51f2-4b18-af5c-5f19530ec824?artifactId=5fca076e-f5db-42a0-bc11-022473a039be',
    },
    {
      title: 'The Leader\'s Guide',
      url: 'https://notebooklm.google.com/notebook/d060e698-51f2-4b18-af5c-5f19530ec824?artifactId=6c6b8c16-5915-4779-8135-d536475faaf7',
    },
    {
      title: 'AUB Tellering Operations',
      url: 'https://notebooklm.google.com/notebook/d060e698-51f2-4b18-af5c-5f19530ec824?artifactId=44456cd8-d1c1-4fe4-884f-febc71409858',
    },
    {
      title: 'Banking Sales Associate',
      url: 'https://notebooklm.google.com/notebook/d060e698-51f2-4b18-af5c-5f19530ec824?artifactId=75074040-92e0-45f3-8321-6199b4e337d1',
    },
    {
      title: 'Developing People, Defining Goals',
      url: 'https://notebooklm.google.com/notebook/d060e698-51f2-4b18-af5c-5f19530ec824?artifactId=6f3db9fe-4a52-4dd0-acc8-d2d0fe901da7',
    },
    {
      title: 'Workplace HIV/AIDS Policy',
      url: 'https://notebooklm.google.com/notebook/d060e698-51f2-4b18-af5c-5f19530ec824?artifactId=9c3b93d1-10cb-4abb-be74-a8950537b244',
    },
    {
      title: 'Building Your Career',
      url: 'https://notebooklm.google.com/notebook/d060e698-51f2-4b18-af5c-5f19530ec824?artifactId=8c5c57a7-dd6f-4e06-889b-edc55da7ee9f',
    },
    {
      title: 'HR Integrated System',
      url: 'https://notebooklm.google.com/notebook/d060e698-51f2-4b18-af5c-5f19530ec824?artifactId=9a991b8b-f434-40aa-adc6-ea02d7a19d56',
    },
    {
      title: 'How to Reduce Stress at Work',
      url: 'https://notebooklm.google.com/notebook/d060e698-51f2-4b18-af5c-5f19530ec824?artifactId=0dcbf2eb-ab01-492e-ab24-badd461c6d9e',
    },
    {
      title: 'Mastering Your Money',
      url: 'https://notebooklm.google.com/notebook/d060e698-51f2-4b18-af5c-5f19530ec824?artifactId=85c8a8a0-4b07-409a-adc2-13a13eae8179',
    },
    {
      title: 'Improving Business Writing',
      url: 'https://notebooklm.google.com/notebook/d060e698-51f2-4b18-af5c-5f19530ec824?artifactId=d0a18cfd-feb3-4285-a9e6-2a5b069374f9',
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
