export default function CTAGetStarted() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-6 md:py-16 lg:px-8 lg:py-20">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-red-800">Start your new business today.</span>
          </h2>
          <div className="mt-8 flex">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-800 px-5 py-3 text-base font-medium text-white hover:bg-yellow-700"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex">
              <a
                href="/services/consulting"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-100 px-5 py-3 text-base font-medium text-black hover:bg-yellow-600"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  