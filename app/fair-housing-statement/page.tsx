import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fair Housing Statement',
  description:
    'Equal Housing Opportunity commitment of Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, serving Las Vegas 55+ communities.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function FairHousingStatementPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Fair Housing Statement
        </h1>

        <div className="prose prose-lg max-w-none">
          {/* Commitment */}
          <section className="mb-12">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
              <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                Equal Housing Opportunity
              </h2>
              <p className="text-blue-800 leading-relaxed">
                Dr. Jan Duffy and Berkshire Hathaway HomeServices Nevada Properties
                are committed to the letter and spirit of U.S. policy for the
                achievement of equal housing opportunity throughout the nation. We
                support and encourage an affirmative advertising and marketing program
                in which there are no barriers to obtaining housing because of race,
                color, religion, sex, handicap, familial status, or national origin.
              </p>
            </div>
          </section>

          {/* Federal protections */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              The Federal Fair Housing Act
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Fair Housing Act prohibits discrimination in the sale, rental, and
              financing of dwellings, and in other housing-related transactions, based
              on the following protected classes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Race</li>
              <li>Color</li>
              <li>National origin</li>
              <li>Religion</li>
              <li>Sex (including gender identity and sexual orientation)</li>
              <li>Familial status (households with children under 18, and pregnant persons)</li>
              <li>Disability</li>
            </ul>
          </section>

          {/* Nevada protections */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Nevada Fair Housing Protections
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nevada law (NRS Chapter 118) extends fair housing protections beyond the
              federal classes. In Nevada, it is also unlawful to discriminate in
              housing on the basis of:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Ancestry</li>
              <li>Sexual orientation</li>
              <li>Gender identity or expression</li>
            </ul>
          </section>

          {/* 55+ note */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              A Note on 55+ Active Adult Communities
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Many of the communities featured on this site are age-qualified 55+
              communities. Under the federal Housing for Older Persons Act (HOPA),
              qualifying communities are permitted to apply age restrictions and are
              exempt from the familial-status provisions of the Fair Housing Act.
              Specific eligibility requirements vary by community; we are happy to
              explain the rules of any community you are considering.
            </p>
          </section>

          {/* How to file */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Filing a Fair Housing Complaint
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you believe your fair housing rights have been violated, you may file
              a complaint with the U.S. Department of Housing and Urban Development
              (HUD) or the Nevada Equal Rights Commission.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>HUD:</strong>{' '}
                <a
                  href="https://www.hud.gov/program_offices/fair_housing_equal_opp/online-complaint"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  File a complaint online
                </a>{' '}
                or call 1-800-669-9777 (TTY 1-800-927-9275).
              </li>
              <li>
                <strong>Nevada Equal Rights Commission:</strong>{' '}
                <a
                  href="https://detr.nv.gov/Page/Nevada_Equal_Rights_Commission_(NERC)"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  detr.nv.gov
                </a>
              </li>
            </ul>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Questions?
            </h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about our commitment to fair housing, please
              reach out:
            </p>
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="mb-2">
                <strong>Dr. Jan Duffy, REALTOR®</strong>
              </p>
              <p className="mb-2">
                Berkshire Hathaway HomeServices Nevada Properties
              </p>
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

          {/* Last updated */}
          <footer className="border-t pt-6 mt-12">
            <p className="text-sm text-gray-500">
              Equal Housing Opportunity. We do business in accordance with the Federal
              Fair Housing Act.
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}
