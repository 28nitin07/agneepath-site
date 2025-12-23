export default function Policy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Policies & Guidelines
        </h1>

        {/* General Guidelines Section */}
        <section className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            General Guidelines
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            All participants must adhere to the general guidelines set forth by the organizing committee.
            Please ensure compliance with all rules and regulations to maintain a fair and safe environment for everyone.
          </p>
        </section>

        {/* Code of Conduct Section */}
        <section className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Code of Conduct
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Participants are expected to maintain the highest standards of sportsmanship and respect.
            Any form of misconduct, including violence, harassment, or cheating, will result in immediate disqualification.
          </p>
        </section>

        {/* Sports Specific Guidelines Section */}
        <section className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Sports Specific Guidelines & Brochure
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Each sport has specific guidelines and rules that must be followed.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
          >
            Download Brochure
          </a>
        </section>

        {/* Rulebook Section */}
        <section className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Rulebook
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The complete rulebook for Agneepath is available for download.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
          >
            View Rulebook
          </a>
        </section>

        {/* Terms and Conditions Section */}
        <section className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Terms & Conditions
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            By participating in Agneepath, all teams and participants agree to the terms and conditions set by the organizing committee.
            These terms govern registration, participation, and dispute resolution.
          </p>
        </section>

        {/* FAQs Section */}
        <section className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                What is the registration deadline?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Registration closes on [Date]. Please register early to secure your team's spot.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                What are the entry fees?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Entry fees vary by sport. Please check the sport-specific guidelines for details.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                How are disputes resolved?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Disputes will be resolved by the sports committee following the established rulebook.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
