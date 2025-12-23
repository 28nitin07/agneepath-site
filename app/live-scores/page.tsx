export default function LiveScores() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Live Scores
        </h1>

        {/* Live Scores Section */}
        <section className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Current Matches
          </h2>
          
          <div className="space-y-6">
            {/* Match Card 1 */}
            <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex justify-between items-center mb-4">
                <div className="text-center flex-1">
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">Team A</p>
                </div>
                <div className="text-center px-6">
                  <p className="text-3xl font-bold text-blue-600">2</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">vs</p>
                  <p className="text-3xl font-bold text-blue-600">1</p>
                </div>
                <div className="text-center flex-1">
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">Team B</p>
                </div>
              </div>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">Live - 2nd Half</p>
            </div>

            {/* Match Card 2 */}
            <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex justify-between items-center mb-4">
                <div className="text-center flex-1">
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">Team C</p>
                </div>
                <div className="text-center px-6">
                  <p className="text-3xl font-bold text-blue-600">3</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">vs</p>
                  <p className="text-3xl font-bold text-blue-600">3</p>
                </div>
                <div className="text-center flex-1">
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">Team D</p>
                </div>
              </div>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">Live - 1st Half</p>
            </div>

            {/* Match Card 3 */}
            <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex justify-between items-center mb-4">
                <div className="text-center flex-1">
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">Team E</p>
                </div>
                <div className="text-center px-6">
                  <p className="text-3xl font-bold text-gray-600 dark:text-gray-300">-</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">upcoming</p>
                  <p className="text-3xl font-bold text-gray-600 dark:text-gray-300">-</p>
                </div>
                <div className="text-center flex-1">
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">Team F</p>
                </div>
              </div>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">Scheduled for 3:00 PM</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Scores update automatically. Refresh for the latest updates.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
