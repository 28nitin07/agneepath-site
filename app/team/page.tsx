export default function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Meet the Team
        </h1>

        {/* Leadership Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-white text-6xl font-bold">👤</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  John Doe
                </h3>
                <p className="text-blue-600 font-medium mb-3">Event Director</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Leading the organization with extensive experience in sports management.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-white text-6xl font-bold">👤</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  Jane Smith
                </h3>
                <p className="text-blue-600 font-medium mb-3">Co-Organizer</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Ensuring smooth operations and coordination across all sports.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <span className="text-white text-6xl font-bold">👤</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  Mike Johnson
                </h3>
                <p className="text-blue-600 font-medium mb-3">Technical Lead</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Managing technical aspects and live score updates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Our Sponsors
          </h2>
          <p className="text-center text-gray-700 dark:text-gray-300 mb-8">
            We are grateful for the support of our sponsors who make this event possible.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sponsor 1 */}
            <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6 flex items-center justify-center min-h-32 hover:bg-gray-50 dark:hover:bg-slate-700 transition">
              <p className="text-gray-600 dark:text-gray-400 font-semibold text-center">Sponsor Logo 1</p>
            </div>

            {/* Sponsor 2 */}
            <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6 flex items-center justify-center min-h-32 hover:bg-gray-50 dark:hover:bg-slate-700 transition">
              <p className="text-gray-600 dark:text-gray-400 font-semibold text-center">Sponsor Logo 2</p>
            </div>

            {/* Sponsor 3 */}
            <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6 flex items-center justify-center min-h-32 hover:bg-gray-50 dark:hover:bg-slate-700 transition">
              <p className="text-gray-600 dark:text-gray-400 font-semibold text-center">Sponsor Logo 3</p>
            </div>

            {/* Sponsor 4 */}
            <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6 flex items-center justify-center min-h-32 hover:bg-gray-50 dark:hover:bg-slate-700 transition">
              <p className="text-gray-600 dark:text-gray-400 font-semibold text-center">Sponsor Logo 4</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Interested in sponsoring Agneepath?
            </p>
            <a
              href="#"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
            >
              Become a Sponsor
            </a>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="bg-gray-100 dark:bg-slate-700 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Contact the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                General Inquiries
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-1">info@agneepath.com</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">+91 XXXX XXXX XX</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Registration Support
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-1">register@agneepath.com</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">+91 XXXX XXXX XX</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Technical Support
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-1">tech@agneepath.com</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">+91 XXXX XXXX XX</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
