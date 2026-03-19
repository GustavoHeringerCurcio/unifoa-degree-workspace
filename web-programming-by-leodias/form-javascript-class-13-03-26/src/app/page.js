// This page is my playground for Open Graph Protocol
// Open Graph is used for social media sharing and SEO
// TIP: Update the URL below to your actual Cloudflare tunnel URL!

export const metadata = {
  title: "Open Graph Hello World - Learning OG Protocol",
  description: "A simple hello world example to learn Open Graph Protocol for social media sharing. Check it out!",
  
  // Open Graph Basic Meta Tags
  openGraph: {
    title: "👋 Hello World - Open Graph Protocol Learning",
    description: "I'm learning Open Graph Protocol! This is how your content looks when shared on social media. The title, description, and image all come from OG meta tags!",
    url: "https://calendar-flow-craig-hub.trycloudflare.com",  // 👈 UPDATE THIS TO YOUR CLOUDFLARE TUNNEL URL
    type: "website",
    locale: "pt_BR",
    
    // Image is important for social sharing (1200x630px recommended)
    images: [
      {
        url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Open Graph Protocol Learning",
        type: "image/jpeg",
      },
    ],
    
    // Site name appears in social sharing
    siteName: "OG Protocol Playground",
  },
  
  // Twitter Card Meta Tags (for Twitter/X sharing)
  twitter: {
    card: "summary_large_image",
    title: "👋 Hello World - Open Graph Protocol Learning",
    description: "I'm learning Open Graph Protocol! See how this page is shared on social media.",
    images: ["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=630&fit=crop"],
    creator: "@LearnOGProtocol",
  },
  
  // Additional Meta Tags for SEO
  keywords: "Open Graph, OG Protocol, Meta Tags, Social Media, SEO, Next.js, cloudflare",
  author: "Learning OG Protocol",
  viewport: "width=device-width, initial-scale=1",
};

export default function OGPlayground() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Cloudflare Tunnel Banner */}
        <div className="bg-linear-to-r from-orange-500 to-red-500 text-white rounded-xl p-6 mb-8 shadow-lg">
          <h3 className="font-bold text-lg mb-2">🌐 Testing with Cloudflare Tunnel</h3>
          <p className="text-sm mb-3">
            Your tunnel URL: <code className="bg-white/20 px-2 py-1 rounded">https://calendar-flow-craig-hub.trycloudflare.com</code>
          </p>
          <p className="text-sm mb-3">
            <strong>To test OG tags:</strong> Copy your tunnel URL and paste it in:
          </p>
          <ul className="text-sm space-y-1 ml-4">
            <li>✓ Facebook, Twitter, LinkedIn, WhatsApp (paste URL and watch preview)</li>
            <li>✓ <a href="https://developers.facebook.com/tools/debug/og/" target="_blank" rel="noopener" className="underline hover:opacity-80">Facebook OG Debugger</a> (best tool!)</li>
            <li>✓ <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener" className="underline hover:opacity-80">LinkedIn Feed</a> (paste URL)</li>
          </ul>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            👋 Hello World - Open Graph Protocol
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Learning how OG meta tags work for social media sharing
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            What is Open Graph Protocol?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Open Graph is a protocol that allows you to control how your content appears when shared on social media platforms like Facebook, Twitter, LinkedIn, etc.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            When someone shares your link, social platforms read the OG meta tags from the HTML head and use them to display a rich preview with title, description, and image.
          </p>
        </div>

        {/* OG Tags Example */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            📋 OG Meta Tags Used in This Page:
          </h2>
          
          <div className="space-y-4">
            {/* og:title */}
            <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 rounded">
              <code className="text-sm font-mono text-blue-900 dark:text-blue-200">
                &lt;meta property="og:title" content="Hello World 👋 - Open Graph Protocol" /&gt;
              </code>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                The title that appears when your content is shared
              </p>
            </div>

            {/* og:description */}
            <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 p-4 rounded">
              <code className="text-sm font-mono text-green-900 dark:text-green-200">
                &lt;meta property="og:description" content="Learning how to implement..." /&gt;
              </code>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Describes your content (usually shown below the title)
              </p>
            </div>

            {/* og:image */}
            <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 p-4 rounded">
              <code className="text-sm font-mono text-purple-900 dark:text-purple-200">
                &lt;meta property="og:image" content="https://..." /&gt;
              </code>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                The image displayed when sharing (recommended: 1200x630px)
              </p>
            </div>

            {/* og:url */}
            <div className="bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-500 p-4 rounded">
              <code className="text-sm font-mono text-indigo-900 dark:text-indigo-200">
                &lt;meta property="og:url" content="https://yoursite.com" /&gt;
              </code>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                The canonical URL of your page
              </p>
            </div>

            {/* og:type */}
            <div className="bg-orange-50 dark:bg-orange-900/30 border-l-4 border-orange-500 p-4 rounded">
              <code className="text-sm font-mono text-orange-900 dark:text-orange-200">
                &lt;meta property="og:type" content="website" /&gt;
              </code>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                The type of content (website, article, video, etc.)
              </p>
            </div>
          </div>
        </div>

        {/* How to Test */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            🧪 How to Test OG Tags with Cloudflare Tunnel:
          </h2>
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-2">Method 1: Facebook OG Debugger (BEST)</h3>
              <ol className="text-sm text-blue-800 dark:text-blue-300 space-y-1 ml-4">
                <li>1. Go to: <a href="https://developers.facebook.com/tools/debug/og/" target="_blank" rel="noopener" className="underline">developers.facebook.com/tools/debug/og/</a></li>
                <li>2. Paste your tunnel URL: <code className="bg-white dark:bg-gray-700 px-2 rounded">https://calendar-flow-craig-hub.trycloudflare.com</code></li>
                <li>3. See the OG data and preview image in real-time!</li>
              </ol>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
              <h3 className="font-bold text-green-900 dark:text-green-200 mb-2">Method 2: Share on Social Media</h3>
              <ol className="text-sm text-green-800 dark:text-green-300 space-y-1 ml-4">
                <li>1. Copy your Cloudflare URL</li>
                <li>2. Open Facebook/Twitter/LinkedIn/WhatsApp</li>
                <li>3. Paste the URL in a message</li>
                <li>4. Watch the preview appear with your OG title, description & image!</li>
              </ol>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
              <h3 className="font-bold text-purple-900 dark:text-purple-200 mb-2">Method 3: View HTML Source</h3>
              <ol className="text-sm text-purple-800 dark:text-purple-300 space-y-1 ml-4">
                <li>1. Visit: <code className="bg-white dark:bg-gray-700 px-2 rounded">https://calendar-flow-craig-hub.trycloudflare.com</code></li>
                <li>2. Right-click → View Page Source (or Ctrl+U)</li>
                <li>3. Search for "og:" to see all Open Graph meta tags in the &lt;head&gt;</li>
              </ol>
            </div>
          </div>
        </div>

        {/* In Next.js */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            ⚙️ In Next.js 13+:
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Simply export a <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">metadata</code> object in your page or layout file:
          </p>
          <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm text-gray-800 dark:text-gray-200 font-mono">
{`export const metadata = {
  title: "Hello World",
  openGraph: {
    title: "My Page Title",
    description: "Page description",
    images: [{ url: "image.png" }]
  }
};`}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-600 dark:text-gray-400">
          <p>Check the HTML source (Ctrl+U) to see all meta tags in the &lt;head&gt; section!</p>
        </div>
      </div>
    </div>
  );
}
