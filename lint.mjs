#!/usr/bin/env node

import { execSync } from 'child_process';

try {
  execSync('eslint --fix', { stdio: 'inherit' });
} catch (error) {
  if (error.status === 1) {
    console.error('❌ ESLint found some issues that need to be fixed.');
    process.exit(1);
  }
  console.error('❌ An error occurred while running ESLint:', error);
  process.exit(1);
} 