import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          “GDS Academy” A course that teaches you how to secure and deploy capital inside your business for maximum growth.
        </p>
        <p className="mt-4">
          Before we learned how to secure capital ourselves, we did a great share of grunt work using personal capital to grow our business. 
          It worked for a the beginning portion of our business's life, but as we decided to scale up - we ran into what you are probably facing right now.
        </p>
        <p className="mt-4">
          "How do find the money to grow?"
        </p>
        <p className="mt-4">
          In “GDS Academy”, you’ll learn the systems we use for clients
          use to create find capital, without personally going into debt. Topics include:
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            'Learn the steps to take to set yourself up for success - BEFORE you apply',
            'How to increase or build business credit',
            'How to present your business online for success ',
            'Identifying the characteristics that make a business scale horizontally',
            'Business pitfalls to avoid while building your profiles',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          By the end of the course, you’ll have all the confidence you need to dig
          in and start creating the business of your dreams.
        </p>
        <p className="mt-10">
          <Link
            href="#free-chapters"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Get two free module straight to your inbox{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
