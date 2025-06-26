import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen pt-16">
      <div className="w-full max-w-md p-8">
        <SignIn 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "glass-dark border border-white/20",
              headerTitle: "text-white",
              headerSubtitle: "text-gray-300",
              socialButtonsBlockButton: "border border-white/20 hover:bg-white/10",
              formButtonPrimary: "bg-gradient-to-r from-cyan-400 to-violet-600 hover:from-cyan-500 hover:to-violet-700",
              formFieldInput: "bg-white/10 border-white/20 text-white placeholder:text-gray-400",
              footerActionLink: "text-cyan-400 hover:text-cyan-300",
            }
          }}
        />
      </div>
    </div>
  );
}
