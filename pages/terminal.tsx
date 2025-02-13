import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Terminal from '../components/Terminal';

export default function TerminalPage() {
  return (
    <>
      <Head>
        <title>AI Terminal - BSC Analytics Platform</title>
        <meta name="description" content="Advanced BSC token analysis terminal powered by artificial intelligence" />
      </Head>

      <div className="min-h-screen bg-binance-black-dark">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 w-full bg-binance-black-dark/90 backdrop-blur-md border-b border-binance-gray/20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="text-binance-yellow text-xl font-bold">
                Ai BNB
              </Link>
              <a
                href="https://x.com/aibnbtoken"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-binance-gray hover:text-binance-yellow"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>Follow Updates</span>
              </a>
            </div>
          </div>
        </nav>

        {/* Terminal Info Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-binance-black rounded-lg border border-binance-gray/20 p-6 mb-8">
            <h1 className="text-2xl font-bold text-white mb-4">BSC Analytics Terminal</h1>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-binance-yellow font-semibold mb-2">Available Commands</h2>
                <ul className="space-y-2 text-binance-gray">
                  <li><code className="text-white">scan [address]</code> - Get token info from BSC</li>
                  <li><code className="text-white">abi [address]</code> - Get verified contract ABI</li>
                  <li><code className="text-white">source [address]</code> - Get verified contract source code</li>
                  <li><code className="text-white">creator [address]</code> - Get contract creator info</li>
                  <li><code className="text-white">about</code> - Learn more about Ai BNB</li>
                  <li><code className="text-white">help</code> - Show all available commands</li>
                </ul>
              </div>
              <div>
                <h2 className="text-binance-yellow font-semibold mb-2">Features</h2>
                <ul className="space-y-2 text-binance-gray">
                  <li>Real-time BSC data analysis</li>
                  <li>Smart contract verification</li>
                  <li>Source code retrieval</li>
                  <li>Contract creation tracking</li>
                  <li>Transaction pattern analysis</li>
                  <li>Security vulnerability scanning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal Component */}
        <div className="container mx-auto px-4 pb-8">
          <div className="bg-binance-black rounded-lg border border-binance-gray/20 overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-binance-black-dark px-4 py-2 border-b border-binance-gray/20">
              <span className="text-sm text-binance-gray">BSC Analytics Terminal</span>
            </div>
            
            {/* Terminal Component */}
            <Terminal />
          </div>
        </div>
      </div>
    </>
  );
} 