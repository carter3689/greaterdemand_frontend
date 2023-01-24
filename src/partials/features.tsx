import { AcademicCapIcon } from '@heroicons/react/20/solid'
import { BoltIcon, BriefcaseIcon, CreditCardIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Tax & Book Keeping Services',
    description:
      "Let us help your find success in the small details! Scaling a business requires swift decisions and even faster action at times. Don't make the mistake of doing all of that alone!",
    icon: ScaleIcon,
  },
  {
    name: 'GDS Brands Academy',
    description:
      'A course that teaches you how to secure and deploy capital inside your business for maximum growth.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Business Tradeline Educational Program',
    description:
      'Getting access to funding to grow or scale your business and skip all of the hard grunt work that comes with it!',
    icon: CreditCardIcon,
  },
  {
    name: 'Business Entity Set up',
    description:
      'Getting your business set up the right way, from the beginning saves your time and gives your peace of mind to build your empire.',
    icon: BriefcaseIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-red-800">The GDS Difference</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better way to build a business</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Being a business owner can sometimes feel like a lonely journey. 
            Along that journey, you will undoubtablly have questions. However, with GreaterDemand you can rest in knowing that we have your back.
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500 text-white sm:shrink-0">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                  <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
