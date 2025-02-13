import React, { useState } from 'react';
import styles from '../styles/Terminal.module.css';

interface TerminalLine {
  command: string;
  output: string[];
}

export default function Terminal() {
  const [lines] = useState<TerminalLine[]>([{
    command: '',
    output: [
      'COMING SOON',
      '',
      'The terminal is currently under maintenance.',
      'Please check back later.',
      '',
      'Follow @aibnbtoken for updates.'
    ]
  }]);

  return (
    <div className="relative w-full h-[600px] bg-black rounded-lg border border-binance-gray/20 overflow-hidden">
      <div className="p-4 h-full overflow-y-auto">
        {lines.map((line, i) => (
          <div key={i} className="text-center">
            {line.output.map((output, j) => (
              <div key={j} className={`${styles.outputLine} ${j === 0 ? 'text-2xl text-binance-yellow font-bold' : 'text-binance-gray'}`}>
                {output}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
} 