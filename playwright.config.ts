import { defineConfig, devices } from '@playwright/test';
import path from 'path';
import dotenv from 'dotenv';
//read from defined .env file (local/dev/test)
if (process.env.test_env){
  dotenv.config({ path: `.env.${process.env.test_env}`,
override: true, });
} else {
dotenv.config({ path: '.env.prod', override: true, });
}
export const STORAGE_STATE = path.join(__dirname, 'playwright/.auth/user.json');
export default defineConfig({
  reporter: 'html',
  use:{
baseURL: process.env.BASE_URL || 'https://www.saucedemo.com',
  },
  projects: [
    {
      name: 'setup',
      use: { ...devices['Desktop Chrome'], },
      testMatch: '**/*.setup.ts',
    },

    {
      name: 'e2e tests',
      use: { ...devices['Desktop Chrome'],
    storageState: STORAGE_STATE, },
      dependencies: ['setup'],
    },
    
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
