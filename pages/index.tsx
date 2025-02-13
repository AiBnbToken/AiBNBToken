import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Ai BNB - AI-Powered Real Estate Platform</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Ai BNB - The future of real estate powered by artificial intelligence"
        />
      </Head>

      <div className="relative min-h-screen bg-gradient-to-b from-binance-black-dark via-binance-black to-binance-black-dark">
        {/* Navigation */}
        <header className="sticky top-0 z-50 w-full bg-binance-black-dark shadow-lg">
          <nav className="container mx-auto px-4">
            <div className="relative flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <span className="text-binance-yellow text-xl font-bold">Ai BNB</span>
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="flex md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md p-2 text-binance-gray hover:text-binance-yellow"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    {isMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    )}
                  </svg>
                </button>
              </div>

              {/* Desktop menu */}
              <div className="hidden md:flex md:items-center md:space-x-8">
                <Link href="/terminal" className="nav-link">Terminal</Link>
                <Link href="#features" className="nav-link">Features</Link>
                <Link href="#about" className="nav-link">About</Link>
                <Link href="#contact" className="nav-link">Contact</Link>
                <a
                  href="https://x.com/aibnbtoken"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link flex items-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span className="hidden lg:inline">Follow on X</span>
                </a>
              </div>
            </div>

            {/* Mobile menu */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute left-0 right-0 bg-binance-black-dark border-t border-binance-gray/20 shadow-lg`}>
              <div className="space-y-1 px-4 pb-3 pt-2">
                <Link
                  href="/terminal"
                  className="block rounded-md px-3 py-2 text-base font-medium text-binance-gray hover:text-binance-yellow"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Terminal
                </Link>
                <Link
                  href="#features"
                  className="block rounded-md px-3 py-2 text-base font-medium text-binance-gray hover:text-binance-yellow"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="#about"
                  className="block rounded-md px-3 py-2 text-base font-medium text-binance-gray hover:text-binance-yellow"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className="block rounded-md px-3 py-2 text-base font-medium text-binance-gray hover:text-binance-yellow"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <a
                  href="https://x.com/aibnbtoken"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md px-3 py-2 text-base font-medium text-binance-gray hover:text-binance-yellow"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    <span>Follow on X</span>
                  </div>
                </a>
              </div>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-binance-yellow bg-clip-text text-transparent leading-tight">
              Intelligent BSC Analytics
            </h1>
            <p className="text-binance-gray text-lg md:text-xl mb-12 max-w-3xl mx-auto">
              Advanced AI-powered platform for comprehensive BSC token analysis. 
              Leverage real-time data and intelligent insights for informed decision-making on the Binance Smart Chain.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-6 bg-binance-black-dark/50">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-white to-binance-yellow bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="text-binance-yellow mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-binance-gray">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-white to-binance-yellow bg-clip-text text-transparent">
                About Ai BNB
              </span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-binance-gray text-lg mb-12 text-center">
                AiBNB leverages the Binance Smart Chain's robust infrastructure to analyze valuable BSC tokens, 
                often referred to as "digital real estate" due to their inherent value and growth potential. 
                Our platform integrates directly with BSCScan's API to provide comprehensive analytics, 
                security audits, and market insights, enabling informed decision-making for both new and 
                established tokens on the BSC network.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-card text-center">
                    <div className="text-4xl font-bold text-binance-yellow mb-2">{stat.value}</div>
                    <div className="text-binance-gray">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-16">
              <span className="bg-gradient-to-r from-white to-binance-yellow bg-clip-text text-transparent">
                Contact Us
              </span>
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-binance-gray text-lg mb-8">
                Have questions about our BSC analytics platform? Get in touch with our team.
              </p>
              <a 
                href="mailto:aibnbtoken@outlook.com"
                className="text-binance-yellow hover:text-binance-yellow-light text-lg font-medium"
              >
                aibnbtoken@outlook.com
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-binance-gray py-12">
          <div className="container mx-auto px-6">
            <div className="text-center text-binance-gray">
              <div className="text-2xl font-bold text-binance-yellow mb-4">Ai BNB</div>
              <p className="mb-4">© {new Date().getFullYear()} Ai BNB. All rights reserved.</p>
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-binance-gray hover:text-binance-yellow">Twitter</a>
                <a href="#" className="text-binance-gray hover:text-binance-yellow">Discord</a>
                <a href="#" className="text-binance-gray hover:text-binance-yellow">GitHub</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

const features = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 13h18v8H3v-8zm0-10h18v8H3V3zm16 6H5V5h14v4zM5 15v4h14v-4H5z"/>
      </svg>
    ),
    title: "Contract Analysis",
    description: "In-depth smart contract verification and source code analysis using BSCScan's API."
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-7-2h2v-4h4v-2h-4V7h-2v4H8v2h4z"/>
      </svg>
    ),
    title: "Transaction Analytics",
    description: "Real-time monitoring of BSC transactions, wallet interactions, and token transfers."
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12z"/>
      </svg>
    ),
    title: "Wallet Analysis",
    description: "Detailed analysis of wallet behaviors, transaction patterns, and token holdings."
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
      </svg>
    ),
    title: "Security Verification",
    description: "Automated security checks and verification of contract source code authenticity."
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
      </svg>
    ),
    title: "Market Data Analysis",
    description: "Comprehensive BSC token metrics, volume analysis, and historical data tracking."
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
    ),
    title: "Contract Verification",
    description: "Source code verification against BSCScan's verified contracts database."
  }
];

const stats = [
  {
    value: "Live",
    label: "BSC Integration"
  },
  {
    value: "24/7",
    label: "Market Data"
  },
  {
    value: "Real-time",
    label: "Token Analytics"
  }
]; 