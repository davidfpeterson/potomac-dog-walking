export default function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-green-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center">
          Schedule a Free Meet &amp; Greet
        </h2>
        <p className="text-gray-600 text-center mb-8 max-w-xl mx-auto">
          Contact us to meet your dog, discuss your needs, and find the perfect walking plan.
          No obligation — we want to make sure we are the right fit for your family.
        </p>
        <form className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                placeholder="Jane Smith"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                placeholder="(301) 555-0123"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
              placeholder="jane@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Tell Us About Your Dog
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none resize-none"
              placeholder="Breed, age, any special needs or questions..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-800 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
          >
            Request Meet &amp; Greet
          </button>
          <p className="text-xs text-gray-500 text-center">
            We typically respond within a few hours during business days.
          </p>
        </form>
      </div>
    </section>
  );
}
