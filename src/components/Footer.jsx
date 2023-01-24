import { GridPattern } from '@/components/GridPattern'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="relative pt-5 pb-20 sm:pb-32 sm:pt-14">
      <div className="absolute inset-x-0 top-0 h-32 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
        <GridPattern x="50%" />
      </div>
      <div className="relative text-center text-sm text-slate-600">
        <p>Copyright &copy; {new Date().getFullYear()} <span><Link href="/" className="hover:text-red-800">GDS Brands Inc.</Link></span></p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  )
}