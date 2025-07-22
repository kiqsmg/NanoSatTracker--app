# Firebase Setup Guide

This guide will help you set up Firebase Authentication for your NanoSatTracker app.

## 🔥 Step 1: Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter project name: `nanosattracker` (or your preferred name)
4. Enable Google Analytics (optional)
5. Wait for project creation to complete

## 🔑 Step 2: Enable Authentication

1. In your Firebase project dashboard, click on "Authentication" in the left sidebar
2. Click "Get started"
3. Go to the "Sign-in method" tab
4. Enable "Email/Password" authentication:
   - Click on "Email/Password"
   - Toggle "Enable" to ON
   - Click "Save"

## 📱 Step 3: Add Your App to Firebase

1. Click the "Project Overview" gear icon → "Project settings"
2. Scroll down to "Your apps" section
3. Click the "Add app" button and select the platform icon for your app
4. Register your app:
   - **iOS**: Bundle ID: `com.spacelab.nanosattracker`
   - **Android**: Package name: `com.spacelab.nanosattracker`
   - App nickname: `NanoSatTracker`
5. Download the config file (we'll use the web config instead)

## ⚙️ Step 4: Get Your Firebase Configuration

1. In Project Settings, scroll down to "Your apps"
2. Find your web app or create one if you don't have it
3. Click the config icon (</>) next to your app
4. Copy the `firebaseConfig` object

It should look like this:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyD...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};
```

## 🔧 Step 5: Update Your App Configuration

⚠️ **SECURITY WARNING**: Your Firebase configuration contains sensitive API keys and should NEVER be committed to Git!

1. **Copy the template file**:
   ```bash
   cp config/firebase.example.ts config/firebase.ts
   ```

2. **Update the configuration**:
   Open `config/firebase.ts` in your project and replace the placeholder values with your actual values:

   ```typescript
   const firebaseConfig = {
     apiKey: "YOUR_ACTUAL_API_KEY",
     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT_ID.appspot.com",
     messagingSenderId: "YOUR_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

3. **Verify Git Protection**:
   The `config/firebase.ts` file is automatically ignored by Git via `.gitignore`. This protects your credentials from being accidentally committed to your repository.

## 🚀 Step 6: Test Your Setup

1. Save the `config/firebase.ts` file
2. Start your development server:
   ```bash
   npx expo start --clear
   ```
3. Open your app and test the authentication:
   - Go to the landing page
   - Click "Get Started"
   - Try creating a new account
   - Test signing in with your account

## 🔒 Step 7: Security Rules (Optional)

For additional security, you can set up Firestore security rules:

1. Go to "Firestore Database" in Firebase Console
2. Click "Rules" tab
3. Update rules as needed for your app

## 📱 Step 8: Test on Different Platforms

Test the authentication flow on:
- ✅ Web browser
- ✅ iOS simulator/device
- ✅ Android emulator/device

## 🐛 Troubleshooting

### Common Issues:

**1. "Firebase not configured" error:**
- Check that your `firebaseConfig` values are correct
- Ensure no placeholder values remain

**2. "Auth domain not authorized" error:**
- In Firebase Console → Authentication → Settings → Authorized domains
- Add your domain (usually `localhost` for development)

**3. "Network request failed" error:**
- Check your internet connection
- Verify Firebase project is active and billing is set up (if required)

**4. App crashes on startup:**
- Clear Expo cache: `npx expo start --clear`
- Check console for specific error messages

**5. "Cannot find config/firebase.ts" error:**
- Make sure you copied the template: `cp config/firebase.example.ts config/firebase.ts`
- Verify the file exists and has your actual Firebase credentials

**6. Firebase credentials accidentally committed to Git:**
- Remove the file from Git: `git rm --cached config/firebase.ts`
- Commit the removal: `git commit -m "Remove Firebase config from tracking"`
- Recreate the file with your credentials (it will be ignored going forward)

### Debug Tips:

1. Check the console for error messages
2. Ensure Firebase project is in the correct region
3. Verify your bundle ID/package name matches exactly
4. Test with a simple email like `test@example.com`

## 🎉 Success!

Once configured, your app will have:
- ✅ Beautiful landing page with authentication
- ✅ Sign-in and sign-up functionality
- ✅ Protected tab navigation for authenticated users
- ✅ Persistent user sessions
- ✅ Secure logout functionality

Your NanoSatTracker app is now ready with Firebase Authentication! 🛰️

## 📞 Support

If you encounter issues:
1. Check the [Firebase Documentation](https://firebase.google.com/docs)
2. Review the [Expo Firebase Guide](https://docs.expo.dev/guides/using-firebase/)
3. Check your Firebase Console for error logs 