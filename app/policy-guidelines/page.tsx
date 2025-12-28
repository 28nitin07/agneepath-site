export default function PolicyGuidelinesPage() {
  return (
    <main className="min-h-screen px-6 py-12 md:px-16">
      {/* Header */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Policies & Guidelines</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Please go through the following guidelines, rules, and documents
          carefully before participating.
        </p>
      </section>

      {/* General Guidelines */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">General Guidelines</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Participants must carry a valid college ID.</li>
          <li>All events will follow the given schedule strictly.</li>
          <li>Respect fellow participants, volunteers, and officials.</li>
          <li>Misconduct of any kind will lead to disqualification.</li>
        </ul>
      </section>

      {/* Code of Conduct */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Code of Conduct (CoC)</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Maintain discipline and professionalism at all venues.</li>
          <li>Alcohol, drugs, or prohibited substances are strictly banned.</li>
          <li>Any damage to property will be penalized.</li>
          <li>Decisions taken by the organizing committee are final.</li>
        </ul>
      </section>

      {/* Sports Guidelines */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Sports-Specific Guidelines / Brochure
        </h2>
        <p className="text-gray-600 mb-4">
          Detailed sport-wise rules and guidelines are available in the brochure.
        </p>

        <a
          href="/docs/sports-guidelines.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-xl bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition"
        >
          View Sports Guidelines
        </a>
      </section>

      {/* Rulebook */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Rulebook</h2>
        <p className="text-gray-600 mb-4">
          The complete rulebook for all events can be accessed below.
        </p>

        <a
          href="/docs/rulebook.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-xl bg-black px-6 py-3 text-white font-medium hover:bg-gray-800 transition"
        >
          Open Rulebook
        </a>
      </section>

      {/* Terms & Conditions */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Terms & Conditions</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Registration fees are non-refundable.</li>
          <li>Participants are responsible for their personal belongings.</li>
          <li>The organizers reserve the right to make changes if required.</li>
        </ul>
      </section>

      {/* FAQs */}
      <section className="rounded-2xl border bg-gray-50 p-6">
        <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
        <ul className="space-y-3 text-gray-700">
          <li>
            <strong>Q:</strong> Is accommodation provided?
            <br />
            <strong>A:</strong> Yes, accommodation details are available on the Accommodation page.
          </li>
          <li>
            <strong>Q:</strong> Can rules change?
            <br />
            <strong>A:</strong> Yes, organizers may update rules if necessary.
          </li>
        </ul>
      </section>
    </main>
  );
}
