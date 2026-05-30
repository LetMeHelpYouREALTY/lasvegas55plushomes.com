import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Dr. Jan Duffy and Berkshire Hathaway HomeServices Nevada Properties collect, use, and protect your information on this website.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy explains how Dr. Jan Duffy, REALTOR® with Berkshire
              Hathaway HomeServices Nevada Properties (&quot;we,&quot; &quot;us,&quot;
              or &quot;our&quot;), collects, uses, and protects information when you
              use this website. By using this site, you agree to the practices
              described below.
            </p>
          </section>

          {/* Information we collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Information We Collect
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Information you provide:</strong> name, email, phone number,
                property preferences, and any message you submit when you request
                information, schedule a consultation, or save a property search.
              </li>
              <li>
                <strong>Automatically collected:</strong> IP address, browser type,
                device information, pages viewed, and referring URLs, collected through
                cookies and analytics tools.
              </li>
              <li>
                <strong>Property search activity:</strong> searches, saved listings,
                and favorites you create through our home-search tools.
              </li>
            </ul>
          </section>

          {/* How we use */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>To respond to your inquiries and provide real estate services</li>
              <li>To send property matches, market updates, and information you request</li>
              <li>To improve our website, content, and user experience</li>
              <li>To comply with legal and regulatory obligations</li>
            </ul>
          </section>

          {/* Third parties */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Third-Party Services
            </h2>
            <p className="text-gray-700 mb-4">
              We use trusted third-party providers to operate this site and serve our
              clients. Each maintains its own privacy practices:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>RealScout:</strong> property search and MLS/IDX listing data
              </li>
              <li>
                <strong>Follow Up Boss:</strong> client relationship management
              </li>
              <li>
                <strong>Calendly:</strong> appointment scheduling
              </li>
              <li>
                <strong>Google Analytics:</strong> website usage analytics
              </li>
              <li>
                <strong>Vercel &amp; Cloudflare:</strong> hosting, security, and content delivery
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              We do not sell your personal information.
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Cookies &amp; Tracking
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar technologies to remember your preferences,
              understand how the site is used, and improve performance. You can control
              cookies through your browser settings; disabling them may affect some
              features.
            </p>
          </section>

          {/* Your rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Your Privacy Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have the right to access, correct, or
              delete your personal information, or to opt out of certain uses. Residents
              of California (CCPA) and individuals in the EU/EEA (GDPR) have additional
              rights. To exercise any of these rights, contact us using the information
              below.
            </p>
          </section>

          {/* Data security */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We use industry-standard safeguards including encrypted (HTTPS)
              connections, access controls, and reputable service providers to protect
              your information. No method of transmission over the internet is 100%
              secure, but we work to protect your data and review our practices
              regularly. For more detail, see our{' '}
              <Link href="/security-policy" className="text-blue-600 underline">
                Security Policy
              </Link>
              .
            </p>
          </section>

          {/* Children */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Children&apos;s Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This website is not directed to children under 13, and we do not knowingly
              collect personal information from children.
            </p>
          </section>

          {/* Changes */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Updates will be
              posted on this page with a revised effective date.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="mb-2">
                <strong>Dr. Jan Duffy, REALTOR®</strong>
              </p>
              <p className="mb-2">Berkshire Hathaway HomeServices Nevada Properties</p>
              <p className="mb-2">License S.0197614.LLC</p>
              <p className="mb-2">
                Phone:{' '}
                <a href="tel:+17025001942" className="text-blue-600 underline">
                  (702) 500-1942
                </a>
              </p>
              <p>
                <Link href="/contact" className="text-blue-600 underline">
                  Contact Dr. Jan Duffy
                </Link>
              </p>
            </div>
          </section>

          <footer className="border-t pt-6 mt-12">
            <p className="text-sm text-gray-500">
              Equal Housing Opportunity. This policy is reviewed and updated regularly.
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}
