#!/usr/bin/env node

import { execSync } from 'child_process';

try {
  execSync('prettier --write "**/*.{js,jsx,ts,tsx,json,md,yml,yaml,css,scss}"', {
    stdio: 'inherit',
  });
} catch (error) {
  console.error('❌ An error occurred while running Prettier:', error);
  process.exit(1);
} 