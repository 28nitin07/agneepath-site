export default function Accommodation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Accommodations & Travel
        </h1>

        {/* Accommodations Section */}
        <section className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Accommodations
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            We provide comfortable accommodation options for all visiting teams and participants.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Hotel Option 1 */}
            <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Hotel Premium
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">₹2000 per night</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Luxury rooms with all amenities, complimentary breakfast included.
              </p>
            </div>

            {/* Hotel Option 2 */}
            <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Hotel Standard
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">₹1200 per night</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Comfortable rooms with basic amenities, breakfast available.
              </p>
            </div>

            {/* Hotel Option 3 */}
            <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Hostel
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">₹600 per night</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Budget-friendly shared accommodation with essential facilities.
              </p>
            </div>

            {/* Campus Stay */}
            <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                On-Campus Stay
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Complimentary</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Available for registered teams at Ashoka University campus.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <a
              href="#"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
            >
              Book Accommodation
            </a>
          </div>
        </section>

        {/* Travel Schedules Section */}
        <section className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Travel Schedules
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                By Air
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-1">
                <strong>Airport:</strong> Delhi Indira Gandhi International Airport (IGI)
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Distance from Ashoka:</strong> ~60 km (approximately 1.5-2 hours by cab)
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                By Train
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-1">
                <strong>Major Stations:</strong> New Delhi, Delhi Junction
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Transport from Station:</strong> Pre-arranged shuttle service available
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                By Road
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-1">
                <strong>Highway:</strong> NH-44 (Delhi-Agra Highway)
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Parking:</strong> Available at Ashoka University campus
              </p>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 dark:bg-slate-700 p-4 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Note:</strong> Complimentary shuttle service will be arranged from major transportation hubs during the event dates.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
