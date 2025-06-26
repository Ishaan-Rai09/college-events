# College Events - Modern Event Listing Website

A luxurious, modern college event listing website with cyberpunk + Apple aesthetic, featuring smooth animations, glassmorphism effects, and secure authentication.

## 🚀 Features

### 🎨 Modern Design
- **Cyberpunk + Apple Aesthetic**: Sleek, minimal design with neon accents
- **Glassmorphism Effects**: Beautiful blur and transparency effects
- **Smooth Animations**: Framer Motion powered transitions and interactions
- **Responsive Design**: Mobile-first approach with desktop optimization
- **Dark Mode**: Native dark mode support with theme toggle

### 🔐 Authentication
- **Clerk Integration**: Secure authentication with college email restriction
- **Domain-Restricted Login**: Only `@yourcollege.edu` emails allowed
- **User Management**: Profile management and sign-out functionality

### 📱 User Experience
- **Hero Section**: Visually stunning landing with animated elements
- **Category Filters**: Easy navigation between Technical, Non-Technical, and Sports
- **Event Cards**: Modern card layouts with hover animations
- **Search Functionality**: Find events by name, club, or date
- **Event Details**: Comprehensive event information with registration links
- **Floating Action Button**: Quick scroll-to-top functionality

### ⚡ Event Management
- **Dynamic Categories**: Three main categories with subcategories
- **Club Listings**: Organized club profiles with event management
- **Event Badges**: "Hot", "New", "Registration Closing Soon" indicators
- **Registration Links**: Direct integration with Google Forms
- **Event Countdown**: Time-sensitive event highlighting

## 🛠 Tech Stack

- **Frontend**: Next.js 15 + TypeScript
- **Styling**: Tailwind CSS + Shadcn UI
- **Animations**: Framer Motion
- **Authentication**: Clerk
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📦 Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Clerk Auth Keys (Get these from https://clerk.com)
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
   CLERK_SECRET_KEY=your_clerk_secret_key_here

   # Clerk URLs
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

   # Domain restriction for college email
   NEXT_PUBLIC_COLLEGE_DOMAIN=yourcollege.edu
   ```

3. **Configure Clerk Authentication**
   - Sign up at [Clerk.com](https://clerk.com)
   - Create a new application
   - Configure email restrictions in Clerk dashboard
   - Copy your keys to the `.env.local` file

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Customization

### Update College Information
1. **Domain Configuration**: Update `NEXT_PUBLIC_COLLEGE_DOMAIN` in `.env.local`
2. **Event Data**: Modify `src/data/events.ts` to add your college's clubs and events
3. **Branding**: Update colors and styling in `src/app/globals.css`

### Add New Events
1. Update the `sampleEvents` array in `src/data/events.ts`
2. Add new clubs to the `clubs` array
3. Ensure proper category assignment (`technical`, `non-technical`, `sports`)

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub/GitLab/Bitbucket
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

---

**Built with ❤️ for your college community**
