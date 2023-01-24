const stats = [
    { label: 'Founded', value: '2016' },
    { label: 'Employees', value: '5' },
    { label: 'Clients Served', value: '100+' },
    { label: 'ROI Generated', value: '16%+' },
  ]
  
  export default function Team() {
    return (
      <div className="relative bg-white py-16 sm:py-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
          <div className="relative sm:py-16 lg:py-0">
            <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
              <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
              {/* Testimonial card*/}
              <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
                <img
                  className="absolute inset-0 h-full w-full cover"
                  src="https://res.cloudinary.com/drra3biar/image/upload/v1674075689/gds_logo_guchjo.svg"
                  alt=""
                />
                <div className="absolute inset-0 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-600 via-yellow-600 opacity-50" />
                <div className="relative px-8">
                  <blockquote className="mt-8">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                      <p className="relative">
                      To focus on your dream takes hard work and dedication and a will to succeed
                      </p>
                    </div>
  
                    <footer className="mt-4">
                      <p className="text-base font-semibold text-white">Tasha Robinson, CEO</p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
  
          <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                On a mission to empower business owners
              </h2>
              <div className="mt-6 space-y-6 text-gray-500">
                <p className="text-lg">
                  In 2016 the quest to find and correct the pain points of business owners suffering in silence began.
                  Understanding the complicated business world as a consultant in the corporate sector, Tasha decided to set out on this vision.
                </p>
                <p className="text-base leading-7">
                  With this same mission in mind, GDS has now helped over 100 businesses find and secure funding, increase revenue, understand their tax benefits and MUCH more.
                  As the business grows, GDS brands will continue to strive toward educational excellence for new and seasoned business owners.
                </p>
                <p className="text-base leading-7">
                  Our mission is simple. Help build a strong foundation for business owners for an easier more profitable path to success.
                </p>
              </div>
            </div>
  
            {/* Stats section */}
            <div className="mt-10">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
                    <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
                    <dd className="text-3xl font-bold tracking-tight text-gray-900">{stat.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <a href="#" className="text-base font-medium text-indigo-600">
                  Learn more about how we're changing the world
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  