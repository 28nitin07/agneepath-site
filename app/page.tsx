export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Title Section */}
        <section className="py-20 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Agneepath
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            College Sports Event
          </p>
        </section>

        {/* About Us Section */}
        <section className="py-16 bg-white dark:bg-slate-800 rounded-lg shadow-lg mb-12 px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Agneepath is a premier college sports event bringing together athletes from across institutions. 
            We celebrate excellence in sports, fostering competition, teamwork, and camaraderie among students.
          </p>
        </section>

        {/* Registration Portal Section */}
        <section className="py-12 text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Registration
          </h2>
          <a
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            Open Registration Portal
          </a>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-white dark:bg-slate-800 rounded-lg shadow-lg mb-12 px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Venue - Ashoka University
          </h2>
          <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <p className="text-gray-600 dark:text-gray-400">Map of Ashoka University to be embedded here</p>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="py-16 bg-gray-100 dark:bg-slate-700 rounded-lg shadow-lg px-8 mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Email
              </h3>
              <p className="text-gray-700 dark:text-gray-300">contact@agneepath.com</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Phone
              </h3>
              <p className="text-gray-700 dark:text-gray-300">+91 XXXX XXXX XX</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Location
              </h3>
              <p className="text-gray-700 dark:text-gray-300">Ashoka University</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
