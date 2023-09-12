import { Button } from "@hackdata/common-ui";

export default async function Index() {
  return <LandingPage />;
}

// Basic landing page, styled with TailwindCSS
async function LandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="text-center">
        <h1 className="text-4xl text-white mb-4">Hello, world!</h1>
        <p className="text-white">This is a simple page with a gradient background and centered content.</p>
        <Button>Click me!</Button>
      </div>
    </div>
  );
}
