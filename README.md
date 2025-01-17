# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## Setting up Drizzle and Supabase

To integrate Drizzle and Supabase into your project, follow these steps:

1. Install the required packages:

   ```bash
   npm install @supabase/supabase-js drizzle-orm
   ```

2. Create a `.env` file in the root of your project and add the following environment variables:

   ```env
   SUPABASE_URL=your-supabase-url
   SUPABASE_KEY=your-supabase-key
   DRIZZLE_CONFIG=your-drizzle-config
   ```

3. Create a `lib/supabaseClient.ts` file and add the following code:

   ```typescript
   import { createClient } from '@supabase/supabase-js';

   const supabaseUrl = process.env.SUPABASE_URL;
   const supabaseKey = process.env.SUPABASE_KEY;
   const supabase = createClient(supabaseUrl, supabaseKey);

   export default supabase;
   ```

4. Create a `lib/drizzleClient.ts` file and add the following code:

   ```typescript
   import { createClient } from 'drizzle-orm';

   const drizzleConfig = process.env.DRIZZLE_CONFIG;
   const drizzle = createClient(drizzleConfig);

   export default drizzle;
   ```

5. Ensure that your `.gitignore` file includes the `.env` file to prevent sensitive information from being committed to your repository:

   ```gitignore
   .env
   ```

6. You can now use the Supabase and Drizzle clients in your project by importing them where needed.
