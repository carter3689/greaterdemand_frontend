import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    CogIcon,
    LockClosedIcon,
    ServerIcon,
    ShieldCheckIcon,
    BriefcaseIcon,
    DocumentCheckIcon,
    AcademicCapIcon
    
  } from '@heroicons/react/24/outline'
  
  const features = [
    {
      name: 'Consulting',
      description: "Let us help your find success in the small details! Scaling a business requires swift decisions and even faster action at times. Don't make the mistake of doing all of that alone!",
      icon: BriefcaseIcon,
    },
    {
      name: 'Payroll Services',
      description: 'Keep your business moving and your employees happy without having to manage all of the headache that comes with it!',
      icon: LockClosedIcon,
    },
    {
      name: 'Monthly Subscription Plans',
      description: 'A more affordable way to scale your business. That way you can keep the capital you need inside of your business.',
      icon: ArrowPathIcon,
    },
    {
      name: 'Bookkeeping & Business Tax Education',
      description: 'Put your mind at ease with our team by your side',
      icon: ShieldCheckIcon,
    },
    {
      name: 'GDS Brands Academy',
      description: 'A course that teaches you how to secure and deploy capital inside your business for maximum growth.',
      icon: AcademicCapIcon,
    },
    {
      name: 'Business Entity Set-Up',
      description: 'Set yourself and your business up for success by creating the legal entity quick and easy!',
      icon: DocumentCheckIcon,
    },
  ]
  
  export default function ServicesGrid() {
    return (
      <div className="relative bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <h2 className="text-lg font-semibold text-red-800">Build faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to build your business
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            Having seen a pattern of business owners not taking advantage of the benefits, opportunities and areas of leverage we decided to change that for good.
            Our services are built to help you where ever you currently are in business. Whether just starting, or looking to scale - we can craft the perfect solution for 
            your business.
          </p>
          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-xl bg-yellow-600 p-3 shadow-lg">
                          <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-base leading-7 text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  