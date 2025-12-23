export default function Gallery() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Gallery
        </h1>

        {/* Gallery Section */}
        <section>
          <p className="text-center text-gray-700 dark:text-gray-300 mb-12 text-lg">
            Explore memorable moments from Agneepath events
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gallery Item 1 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition">
              <div className="aspect-video bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center">
                <span className="text-white text-4xl">🏆</span>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition p-4 flex items-end">
                <p className="text-white opacity-0 group-hover:opacity-100 transition font-semibold">
                  Championship Match
                </p>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition">
              <div className="aspect-video bg-gradient-to-br from-green-300 to-green-500 flex items-center justify-center">
                <span className="text-white text-4xl">⚽</span>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition p-4 flex items-end">
                <p className="text-white opacity-0 group-hover:opacity-100 transition font-semibold">
                  Football Tournament
                </p>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition">
              <div className="aspect-video bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center">
                <span className="text-white text-4xl">🏀</span>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition p-4 flex items-end">
                <p className="text-white opacity-0 group-hover:opacity-100 transition font-semibold">
                  Basketball Competition
                </p>
              </div>
            </div>

            {/* Gallery Item 4 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition">
              <div className="aspect-video bg-gradient-to-br from-red-300 to-red-500 flex items-center justify-center">
                <span className="text-white text-4xl">🎾</span>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition p-4 flex items-end">
                <p className="text-white opacity-0 group-hover:opacity-100 transition font-semibold">
                  Tennis Events
                </p>
              </div>
            </div>

            {/* Gallery Item 5 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition">
              <div className="aspect-video bg-gradient-to-br from-purple-300 to-purple-500 flex items-center justify-center">
                <span className="text-white text-4xl">🏐</span>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition p-4 flex items-end">
                <p className="text-white opacity-0 group-hover:opacity-100 transition font-semibold">
                  Volleyball Championship
                </p>
              </div>
            </div>

            {/* Gallery Item 6 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition">
              <div className="aspect-video bg-gradient-to-br from-pink-300 to-pink-500 flex items-center justify-center">
                <span className="text-white text-4xl">🏅</span>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition p-4 flex items-end">
                <p className="text-white opacity-0 group-hover:opacity-100 transition font-semibold">
                  Award Ceremony
                </p>
              </div>
            </div>

            {/* Gallery Item 7 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition">
              <div className="aspect-video bg-gradient-to-br from-teal-300 to-teal-500 flex items-center justify-center">
                <span className="text-white text-4xl">👥</span>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition p-4 flex items-end">
                <p className="text-white opacity-0 group-hover:opacity-100 transition font-semibold">
                  Team Photos
                </p>
              </div>
            </div>

            {/* Gallery Item 8 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition">
              <div className="aspect-video bg-gradient-to-br from-indigo-300 to-indigo-500 flex items-center justify-center">
                <span className="text-white text-4xl">🎊</span>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition p-4 flex items-end">
                <p className="text-white opacity-0 group-hover:opacity-100 transition font-semibold">
                  Event Highlights
                </p>
              </div>
            </div>

            {/* Gallery Item 9 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition">
              <div className="aspect-video bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center">
                <span className="text-white text-4xl">📸</span>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition p-4 flex items-end">
                <p className="text-white opacity-0 group-hover:opacity-100 transition font-semibold">
                  Behind the Scenes
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Want to share your photos from Agneepath?
            </p>
            <a
              href="#"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              Upload Your Photos
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
