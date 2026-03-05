import { useState } from 'react'
import './App.css'
import aubLogo from './assets/AUBLOGO.png'

type MainView = 'chat' | 'videos' | 'podcasts'

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

// Type definition for video items
interface VideoItem {
  title: string
  url: string
}

// Video categories with detailed video items
const VIDEO_CATEGORIES: Record<string, VideoItem[]> = {
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
  'Corporate Information & Product Overview': [
    {
      title: 'How to Open an AUB Account',
      url: 'https://notebooklm.google.com/notebook/8b058e63-b24e-4a1b-9ad8-6750f46cf382?artifactId=1f8672bc-86a9-4df7-bdc8-b6dc6ce9a170',
    },
    {
      title: 'AUB Corporate Background',
      url: 'https://notebooklm.google.com/notebook/8b058e63-b24e-4a1b-9ad8-6750f46cf382?artifactId=86860caf-1efa-4b11-adba-7b76fc87aed3',
    },
    {
      title: 'AUB: Banking Made Simple',
      url: 'https://notebooklm.google.com/notebook/8b058e63-b24e-4a1b-9ad8-6750f46cf382?artifactId=45271985-e25f-4d63-b1c8-25ac87a4f829',
    },
    {
      title: 'AUB Trust & Investment',
      url: 'https://notebooklm.google.com/notebook/8b058e63-b24e-4a1b-9ad8-6750f46cf382?artifactId=43350705-fd83-4794-b314-5cd69056e4d8',
    },
  ],
  'Leadership, Productivity & Professional Skills': [
    {
      title: 'Mastering Business Letters',
      url: 'https://notebooklm.google.com/notebook/75f3f6b2-3b0d-45f9-86ac-b4d58240155a?artifactId=f3057dc7-0d1a-41f7-ab0c-c3366bedc3fb',
    },
    {
      title: 'Communication Skills of Leaders',
      url: 'https://notebooklm.google.com/notebook/75f3f6b2-3b0d-45f9-86ac-b4d58240155a?artifactId=9adfb8fc-dca9-4d4f-8bb5-772b42110e7d',
    },
    {
      title: 'Developing Your People',
      url: 'https://notebooklm.google.com/notebook/75f3f6b2-3b0d-45f9-86ac-b4d58240155a?artifactId=6c7aa024-4d63-4ef0-acc0-1be989b1c4df',
    },
    {
      title: 'Building Your Reputation',
      url: 'https://notebooklm.google.com/notebook/75f3f6b2-3b0d-45f9-86ac-b4d58240155a?artifactId=299d21ff-cafb-4662-878f-f19edeaf8679',
    },
    {
      title: 'Goal Setting Tips',
      url: 'https://notebooklm.google.com/notebook/75f3f6b2-3b0d-45f9-86ac-b4d58240155a?artifactId=996d24a7-2ae0-4d99-9795-3c9e0832d555',
    },
    {
      title: 'How to Delegate Properly',
      url: 'https://notebooklm.google.com/notebook/75f3f6b2-3b0d-45f9-86ac-b4d58240155a?artifactId=1c53bb8d-6c67-4a3f-835d-df07ff9cb7c1',
    },
    {
      title: 'Money Saving Tips Made Simple',
      url: 'https://notebooklm.google.com/notebook/75f3f6b2-3b0d-45f9-86ac-b4d58240155a?artifactId=c31cc5df-1067-4627-b82e-390024c1c475',
    },
  ],
}

// Type definition for podcast items
interface PodcastItem {
  title: string
  url: string
}

// Podcast categories with structured podcast items
const PODCAST_CATEGORIES: Record<string, PodcastItem[]> = {
  'Tellering, Cash Handling & Currency Knowledge': [
    {
      title: 'How to Spot Fake Philippine Peso Bills',
      url: 'https://notebooklm.google.com/notebook/4f99c986-6a77-4a3c-87b7-828e057d11cd?artifactId=0e0320ef-d434-4436-a2c5-20d38f20563d',
    },
    {
      title: 'Cash handling and Tellering',
      url: 'https://notebooklm.google.com/notebook/4f99c986-6a77-4a3c-87b7-828e057d11cd?artifactId=902bd413-78f1-4603-b1d0-ca1b1e3fb59c',
    },
    {
      title: 'International Banknote security',
      url: 'https://notebooklm.google.com/notebook/4f99c986-6a77-4a3c-87b7-828e057d11cd?artifactId=aa9e0b1c-730b-449b-9ec7-6c3ff6b5f1d9',
    },
    {
      title: 'Cash, Check and Tellering',
      url: 'https://notebooklm.google.com/notebook/4f99c986-6a77-4a3c-87b7-828e057d11cd?artifactId=81f872bd-1ba6-4f4d-b998-57fb56a1b5a4',
    },
    {
      title: 'Signature Analysis and Forgery Detection',
      url: 'https://notebooklm.google.com/notebook/4f99c986-6a77-4a3c-87b7-828e057d11cd?artifactId=a7e0231e-69e0-43d1-aea9-35a131a3ffb5',
    },
    {
      title: 'How to Determine if Your New Philippine Peso Bills are Fake or Genuine_',
      url: 'https://notebooklm.google.com/notebook/4f99c986-6a77-4a3c-87b7-828e057d11cd?artifactId=2c59c49a-9a28-41f7-873f-564c066fe803',
    },
  ],
  'AUB Products and Services': [
    {
      title: 'Auto Loan Requirements',
      url: 'https://notebooklm.google.com/notebook/aaa2fa1d-3075-435d-ad5a-4d49fd9f9b6b?artifactId=840f8d6d-833e-4d79-b892-de037b76f5bf',
    },
    {
      title: 'AUB Acceptable IDs and Salary Loan Checklist',
      url: 'https://notebooklm.google.com/notebook/aaa2fa1d-3075-435d-ad5a-4d49fd9f9b6b?artifactId=63419448-325e-4517-b94b-fbfb16209818',
    },
    {
      title: 'AUB Deposit Product',
      url: 'https://notebooklm.google.com/notebook/aaa2fa1d-3075-435d-ad5a-4d49fd9f9b6b?artifactId=8cf40ef9-6c4e-4634-ae72-908f84d5827e',
    },
    {
      title: 'AUB PayMate for Merchants and HelloMoney',
      url: 'https://notebooklm.google.com/notebook/aaa2fa1d-3075-435d-ad5a-4d49fd9f9b6b?artifactId=eb58bb14-443f-4dd2-b2fc-7d1ed604c34a',
    },
    {
      title: 'AUB UITF Management Starts at 10,000 Pesos.',
      url: 'https://notebooklm.google.com/notebook/aaa2fa1d-3075-435d-ad5a-4d49fd9f9b6b?artifactId=5f5b3d7a-f648-441c-b665-607330968f5e',
    },
    {
      title: 'AUB UITF T360 Workflow and Fund Details',
      url: 'https://notebooklm.google.com/notebook/aaa2fa1d-3075-435d-ad5a-4d49fd9f9b6b?artifactId=6e73821d-f037-414a-86f8-f70024b10ac5',
    },
    {
      title: 'UITFs Are Your Portfolio Autopilot',
      url: 'https://notebooklm.google.com/notebook/aaa2fa1d-3075-435d-ad5a-4d49fd9f9b6b?artifactId=9aad497e-5d23-4c0f-99c4-cb32144155c6',
    },
    {
      title: 'AUB UITF Trust Fees and Investment Options',
      url: 'https://notebooklm.google.com/notebook/aaa2fa1d-3075-435d-ad5a-4d49fd9f9b6b?artifactId=2a6a2c78-7b7a-48ee-b4b5-dbb4d98f89e0',
    },
    {
      title: 'Calculating AUB Preferred Savings Interest and Penalties',
      url: 'https://notebooklm.google.com/notebook/aaa2fa1d-3075-435d-ad5a-4d49fd9f9b6b?artifactId=e784044b-a765-436a-946c-23caafac03b4',
    },
  ],
  'Fees, Charges & Computation': [
    {
      title: 'Telegraphic Transfers',
      url: 'https://notebooklm.google.com/notebook/feb58c73-882b-46a6-9c23-61885c93a013?artifactId=bafe0c00-ce42-454b-a024-ee8af06b6da0',
    },
    {
      title: 'Interest Computation _ RCOCI Charges _ BP Charges',
      url: 'https://notebooklm.google.com/notebook/feb58c73-882b-46a6-9c23-61885c93a013?artifactId=e2cde51a-8eaa-4dd0-a18a-9aa97b94222a',
    },
  ],
  'Sales, Service & Branch Roles': [
    {
      title: 'Customer Service and Service Associate roles.',
      url: 'https://notebooklm.google.com/notebook/5f9f0aec-3f28-49c1-b5e1-2d109faa451e?artifactId=004d97ac-5b99-4028-91f2-90cc02b4cb11',
    },
    {
      title: 'Sales Associate and Service Associate',
      url: 'https://notebooklm.google.com/notebook/5f9f0aec-3f28-49c1-b5e1-2d109faa451e?artifactId=c9811ae0-0d88-4553-9444-228dbc16eae8',
    },
    {
      title: 'Customer Service',
      url: 'https://notebooklm.google.com/notebook/5f9f0aec-3f28-49c1-b5e1-2d109faa451e?artifactId=dd68eaf1-eb8a-4dcc-8dd7-5b9381c0da58',
    },
    {
      title: 'Duties and Responsibilities of a Sales Associate',
      url: 'https://notebooklm.google.com/notebook/5f9f0aec-3f28-49c1-b5e1-2d109faa451e?artifactId=33bb3883-6126-4a2c-a523-9261caa9f9ba',
    },
    {
      title: 'Service Associate Functions',
      url: 'https://notebooklm.google.com/notebook/5f9f0aec-3f28-49c1-b5e1-2d109faa451e?artifactId=387f28d8-21db-466c-8c88-f21f3be0ec16',
    },
  ],
  'HR, Workplace Policies & Systems': [
    {
      title: 'SMOKE-FREE WORKPLACE POLICY AND PROGRAM',
      url: 'https://notebooklm.google.com/notebook/00caec8e-9337-402b-9f28-c63cbbe83fc4?artifactId=970a4e4e-0479-4a3c-9f36-9708c414ce02',
    },
    {
      title: 'HIV/AIDS Workplace Policy and Program',
      url: 'https://notebooklm.google.com/notebook/00caec8e-9337-402b-9f28-c63cbbe83fc4?artifactId=302722a1-ecf3-4daf-9f3a-a7e64e9c5c27',
    },
    {
      title: 'Customer Service',
      url: 'https://notebooklm.google.com/notebook/5f9f0aec-3f28-49c1-b5e1-2d109faa451e?artifactId=dd68eaf1-eb8a-4dcc-8dd7-5b9381c0da58',
    },
    {
      title: 'Human Resources Integrated System (HRIS)',
      url: 'https://notebooklm.google.com/notebook/00caec8e-9337-402b-9f28-c63cbbe83fc4?artifactId=66b09f22-d43c-4457-8a53-e47eac516ad1',
    },
  ],
  'Cards and Payment Solutions': [
    {
      title: 'AUB REDI Money White-Label Payouts',
      url: 'https://notebooklm.google.com/notebook/d5ba644a-995b-4d12-822e-db0f9008a9a2?artifactId=65e8b13f-ce12-41a5-81f3-cbc7705f5d38',
    },
    {
      title: 'Revamping AUB\'s Cash Card Co-Branding Pitch',
      url: 'https://notebooklm.google.com/notebook/d5ba644a-995b-4d12-822e-db0f9008a9a2?artifactId=697dc950-d1e3-401c-8ada-e745f0b99ca9',
    },
    {
      title: 'Cash Card Co-Branding',
      url: 'https://notebooklm.google.com/notebook/d5ba644a-995b-4d12-822e-db0f9008a9a2?artifactId=582063a0-e4ec-425e-8838-d9b7e7d3a9d0',
    },
    {
      title: 'Cash Card co-branding and REDI MONEY Cash Card',
      url: 'https://notebooklm.google.com/notebook/d5ba644a-995b-4d12-822e-db0f9008a9a2?artifactId=1cde7887-1f80-40d8-85af-f6956eae85eb',
    },
    {
      title: 'Cash Card co-branding and REDI MONEY Cash Card',
      url: 'https://notebooklm.google.com/notebook/d5ba644a-995b-4d12-822e-db0f9008a9a2?artifactId=fa0a9629-149f-40ea-9c23-27ed46223541',
    },
  ],
  'All Documents': [],
  'Account, Loans, and Credit Products': [
    {
      title: 'Housing Loans & Motor Vehicle Loans',
      url: 'https://notebooklm.google.com/notebook/6f4894f1-961d-4e2e-a9c1-d148fe8b59b4?artifactId=49b5ab67-5b5f-4ea5-b751-5594f5d78f46',
    },
    {
      title: 'Account Opening',
      url: 'https://notebooklm.google.com/notebook/6f4894f1-961d-4e2e-a9c1-d148fe8b59b4?artifactId=c26290c7-3bf9-4f72-b5ae-4351289dc728',
    },
    {
      title: 'AUB Secured Credit Card Deed of Assignment',
      url: 'https://notebooklm.google.com/notebook/6f4894f1-961d-4e2e-a9c1-d148fe8b59b4?artifactId=8f32b3fc-4681-46b8-9b9a-fe4b37e2cd83',
    },
  ],
  'Cash Management & Business Services': [
      {
      title: 'AUB’s Automated Invoicing and Government Payments',
      url: 'https://notebooklm.google.com/notebook/0dfbd9f8-5706-425e-b6a0-d76bc39703b9?artifactId=501a139d-8aa6-4493-bf1c-43198fb55d4d',
    },
    {
      title: 'AUB Bizkit Automates Cash Management',
      url: 'https://notebooklm.google.com/notebook/0dfbd9f8-5706-425e-b6a0-d76bc39703b9?artifactId=51dd7ea8-0c4e-406d-8c0b-810399d024b7',
    },
    {
      title: 'AUB Bizkit Automation and ADB Penalties',
      url: 'https://notebooklm.google.com/notebook/0dfbd9f8-5706-425e-b6a0-d76bc39703b9?artifactId=2dfe5699-4cf2-420b-a37e-359c3f3938d2',
    },
  ],
  'Branches Operation': [  
    {
      title: 'Professional Communication',
      url: 'https://notebooklm.google.com/notebook/d060e698-51f2-4b18-af5c-5f19530ec824?artifactId=d617f5da-8c44-4ad3-a520-1bc9d2590ea3',
    },
    {
      title: 'Banknote security',
      url: 'https://notebooklm.google.com/notebook/d060e698-51f2-4b18-af5c-5f19530ec824?artifactId=ca8e98cc-4498-4ada-94e0-7ab156260ae3',
    },
    {
      title: 'Cash, Check and Tellering',
      url: 'https://notebooklm.google.com/notebook/d060e698-51f2-4b18-af5c-5f19530ec824?artifactId=188b11d8-19d4-463d-9ff7-c44dd4135654',
    },
    {
      title: 'Business Communication',
      url: 'https://notebooklm.google.com/notebook/d060e698-51f2-4b18-af5c-5f19530ec824?artifactId=a8d19799-b938-41c8-8d5a-affd623cc502',
    },
    {
      title: 'Customer services and Team development',
      url: 'https://notebooklm.google.com/notebook/d060e698-51f2-4b18-af5c-5f19530ec824?artifactId=d19c3a15-11bf-478f-b77b-f7307fd70d61',
    },
      {
      title: 'Sales associate',
      url: 'https://notebooklm.google.com/notebook/d060e698-51f2-4b18-af5c-5f19530ec824?artifactId=8ee75921-806a-40b7-ab4f-475e6bf73979',
    },
    {
      title: 'Workplace standard',
      url: 'https://notebooklm.google.com/notebook/d060e698-51f2-4b18-af5c-5f19530ec824?artifactId=bd93d4db-a68b-4c9b-b914-849584c2156f',
    },
    {
      title: 'Essential workplace skills and systems',
      url: 'https://notebooklm.google.com/notebook/d060e698-51f2-4b18-af5c-5f19530ec824?artifactId=58e05a28-a06b-4c07-ad2f-7ea622df3ca3',
    },
    {
      title: 'Workplace success',
      url: 'https://notebooklm.google.com/notebook/d060e698-51f2-4b18-af5c-5f19530ec824?artifactId=1c77b683-4582-4b0a-b648-1b2e956978d6',
    },
  ],
  'Corporate Information & Product Overview': [
    {
      title: 'AUB Corporate Overview and product essentials',
      url: 'https://notebooklm.google.com/notebook/8b058e63-b24e-4a1b-9ad8-6750f46cf382?artifactId=a8166119-5b4c-40d2-b8d4-662d8d8c0104',
    },
    {
      title: 'AUB Products',
      url: 'https://notebooklm.google.com/notebook/8b058e63-b24e-4a1b-9ad8-6750f46cf382?artifactId=49a791eb-65c6-40ec-afa6-f1cdd7903edc',
    },
    {
      title: 'AUBs Corporate background',
      url: 'https://notebooklm.google.com/notebook/8b058e63-b24e-4a1b-9ad8-6750f46cf382?artifactId=49e7a05d-b207-4ee7-8373-cdbda0184ecc',
    },
    {
      title: 'Trust Products',
      url: 'https://notebooklm.google.com/notebook/8b058e63-b24e-4a1b-9ad8-6750f46cf382?artifactId=a3a111fa-d5a2-4f52-9d5d-2c5cf072a6d2',
    },
    {
      title: 'AUBs RSA Security and Business Automation',
      url: 'https://notebooklm.google.com/notebook/8b058e63-b24e-4a1b-9ad8-6750f46cf382?artifactId=02671057-3e95-4cad-911f-6e351f515c1c',
    },
  ],
  'Business Product': [
    {
      title: 'Spotting Genuine Euro Yuan and Won',
      url: 'https://notebooklm.google.com/notebook/2193fe57-88f7-4095-92a0-f1af27a81932?artifactId=3074a722-8b1a-4eba-93ff-176144820e22',
    },
    {
      title: 'Business Letter',
      url: 'https://notebooklm.google.com/notebook/2193fe57-88f7-4095-92a0-f1af27a81932?artifactId=9d03a355-b352-4cf7-8a12-10242cf3a573',
    },
    {
      title: 'Communication skills of leader',
      url: 'https://notebooklm.google.com/notebook/2193fe57-88f7-4095-92a0-f1af27a81932?artifactId=c7a1f576-3d33-43ce-b9d0-391c6eab20cb',
    },
    {
      title: 'Customer Services',
      url: 'https://notebooklm.google.com/notebook/2193fe57-88f7-4095-92a0-f1af27a81932?artifactId=15d1fb20-02b6-41cd-bbbb-3bbe6406b095',
    },
    {
      title: 'Developing your people',
      url: 'https://notebooklm.google.com/notebook/2193fe57-88f7-4095-92a0-f1af27a81932?artifactId=d5fe2d9c-0de1-4893-b09e-373e8a2eb309',
    },
      {
      title: 'Duties and Responsibilities of the sales Associate',
      url: 'https://notebooklm.google.com/notebook/2193fe57-88f7-4095-92a0-f1af27a81932?artifactId=5c2f7f63-209d-484e-9a38-88ca89078c7c',
    },
    {
      title: 'Goal Settings',
      url: 'https://notebooklm.google.com/notebook/2193fe57-88f7-4095-92a0-f1af27a81932?artifactId=a583d2b9-a80c-4313-937b-2fe6aa6e70c3',
    },
    {
      title: 'HIV workplace and policy',
      url: 'https://notebooklm.google.com/notebook/2193fe57-88f7-4095-92a0-f1af27a81932?artifactId=7e888a4b-6da7-44c7-b5b8-ac5e05a9538c',
    },
    {
      title: 'Professional presence',
      url: 'https://notebooklm.google.com/notebook/2193fe57-88f7-4095-92a0-f1af27a81932?artifactId=2bcf6da2-8cc7-4a21-b9e9-b2d2447f7527',
    },
    {
      title: 'Global bank note design and security',
      url: 'https://notebooklm.google.com/notebook/2193fe57-88f7-4095-92a0-f1af27a81932?artifactId=1a8c8d18-5c54-4319-a9db-5f9d7fa2c41d',
    },
    {
      title: 'Cash, check and tillering',
      url: 'https://notebooklm.google.com/notebook/2193fe57-88f7-4095-92a0-f1af27a81932?artifactId=f8bb0cc4-1368-49ba-b7f0-cf530816bd20',
    },
  ],
  'Leadership, Productivity & Professional Skills': [
    {
      title: 'Write Business Letters With the POWER Method',
      url: 'https://notebooklm.google.com/notebook/75f3f6b2-3b0d-45f9-86ac-b4d58240155a?artifactId=401b2eab-94cf-4057-8e25-7bd900e87609',
    },
    {
      title: 'Master Your High-Stakes First Impression',
      url: 'https://notebooklm.google.com/notebook/75f3f6b2-3b0d-45f9-86ac-b4d58240155a?artifactId=b85338ce-c807-4ea0-8468-5381875df39d',
    },
    {
      title: 'Communication of leaders',
      url: 'https://notebooklm.google.com/notebook/75f3f6b2-3b0d-45f9-86ac-b4d58240155a?artifactId=98aadbfc-119b-4340-93b3-70c202341bff',
    },
    {
      title: 'Developing your people',
      url: 'https://notebooklm.google.com/notebook/75f3f6b2-3b0d-45f9-86ac-b4d58240155a?artifactId=53d88986-20ce-4828-8f4b-2c2adabe1dff',
    },
    {
      title: 'How to delegate properly',
      url: 'https://notebooklm.google.com/notebook/75f3f6b2-3b0d-45f9-86ac-b4d58240155a?artifactId=c370281e-1f71-490f-b759-611413cd3ab2',
    },
      {
      title: 'How to Reduce Stress at work',
      url: 'https://notebooklm.google.com/notebook/75f3f6b2-3b0d-45f9-86ac-b4d58240155a?artifactId=0d9185cb-4bba-4e97-9b23-6564f65571fb',
    },
    {
      title: 'How to keep your boss happy',
      url: 'https://notebooklm.google.com/notebook/75f3f6b2-3b0d-45f9-86ac-b4d58240155a?artifactId=9ff59d17-47ab-4cbe-9273-af7828ad1cbc',
    },
    {
      title: 'Improving your business writing',
      url: 'https://notebooklm.google.com/notebook/75f3f6b2-3b0d-45f9-86ac-b4d58240155a?artifactId=3daa1240-9c4d-4edb-885c-0c9feb5e6d62',
    },
    {
      title: 'Money saving tips',
      url: 'https://notebooklm.google.com/notebook/75f3f6b2-3b0d-45f9-86ac-b4d58240155a?artifactId=eb266505-5842-414c-ba4a-141b309275e6',
    },
  ],
}

const CHAT_CATEGORIES = RESOURCES.map(r => r.label)

function App() {
  const [activeView, setActiveView] = useState<MainView>('chat')
  const [selectedVideoCategory, setSelectedVideoCategory] = useState<string | null>(null)
  const [selectedPodcastCategory, setSelectedPodcastCategory] = useState<string | null>(null)

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
            className={`aub-sidebar-item ${activeView === 'podcasts' ? 'aub-sidebar-item-active' : ''}`}
            onClick={() => setActiveView('podcasts')}
          >
            Podcasts
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
          ) : activeView === 'podcasts' ? (
            <section className="aub-panel">
              <header className="aub-panel-header">
                <div>
                  <h1 className="aub-panel-title">AUB Podcasts</h1>
                  <p className="aub-panel-subtitle">
                    Click on any podcast category to explore learning content and resources.
                  </p>
                </div>
              </header>

              <div className="aub-resources-grid">
                {Object.keys(PODCAST_CATEGORIES).map((categoryName) => (
                  <button
                    key={categoryName}
                    onClick={() => setSelectedPodcastCategory(categoryName)}
                    className="aub-resource-card aub-podcast-category-btn"
                    title={categoryName}
                  >
                    <div className="aub-resource-icon">🎙️</div>
                    <div className="aub-resource-label">{categoryName}</div>
                  </button>
                ))}
              </div>

              {/* Modal for podcast category details */}
              {selectedPodcastCategory && (
                <div
                  className="aub-modal-overlay"
                  onClick={() => setSelectedPodcastCategory(null)}
                >
                  <div
                    className="aub-modal-content"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="aub-modal-header">
                      <h2 className="aub-modal-title">{selectedPodcastCategory}</h2>
                      <button
                        className="aub-modal-close"
                        onClick={() => setSelectedPodcastCategory(null)}
                        aria-label="Close modal"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="aub-modal-body">
                      <ul className="aub-video-list">
                        {PODCAST_CATEGORIES[selectedPodcastCategory as keyof typeof PODCAST_CATEGORIES]?.map((podcast, index) => (
                          <li key={index} className="aub-video-list-item">
                            <a
                              href={podcast.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="aub-video-link"
                            >
                              <span className="aub-video-link-text">{podcast.title}</span>
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
            className={`aub-sidebar-item ${activeView === 'podcasts' ? 'aub-sidebar-item-active' : ''}`}
            onClick={() => setActiveView('podcasts')}
          >
            Podcasts
          </button>
        </aside>
      </div>
    </div>
  )
}

export default App
