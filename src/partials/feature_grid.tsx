import {
  ArrowUturnLeftIcon,
  ChatBubbleLeftEllipsisIcon,
  DocumentChartBarIcon,
  HeartIcon,
  InboxIcon,
  PencilSquareIcon,
  TrashIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'GDS Brands Academy',
    description: 'New to the business world? Great! We would be honored to teach you how to start - then scale your business.',
    icon: InboxIcon,
  },
  {
    name: 'Monthly Subscription Plans',
    description: 'Instead of carrying the burden of a large sum before your business even starts - we offer subscription plans to service a wide array of clients.',
    icon: UsersIcon,
  },
  {
    name: 'Our Experience',
    description: 'Greater Demand was built by a team of seasoned business creation professionals - from entertainment to hospitality!',
    icon: DocumentChartBarIcon,
  },
  {
    name: 'Our Knowledge',
    description: 'Over the years, we have perfected our knowledge of complicated business tax codes. With that knowledge we can show you how to grow your assets!',
    icon: PencilSquareIcon,
  },
  {
    name: 'Business Reporting',
    description: 'Knowing your business from top to bottom is our priority. We will help keep you on target to the goals set forth for your business.',
    icon: DocumentChartBarIcon,
  },
  {
    name: 'Rapid Communication',
    description: 'Should we see something of concern for your business - we communicate it with swift precision.',
    icon: ArrowUturnLeftIcon,
  },
  {
    name: 'Document Uploads',
    description: 'No need to mail or email anything. When documents are needed you can upload them with no wasted time.',
    icon: ChatBubbleLeftEllipsisIcon,
  },
  {
    name: 'Connect with Clients',
    description: 'The core of what we are and do comes from the compassion we feel for our clients.',
    icon: HeartIcon,
  },
]

export default function FeatureGrid() {
  return (
    <div className="bg-yellow-600">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:max-w-7xl lg:px-8 lg:py-40">
        <h2 className="text-4xl font-bold tracking-tight text-white">Business support built for efficiency.</h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white">
          Building a business does not have to be hard with Greater Demand's full arsenal of weapons at your disposal!
        </p>
        <div className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name}>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white bg-opacity-10">
                  <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold leading-8 text-white">{feature.name}</h3>
                <p className="mt-2 text-base leading-7 text-white">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
