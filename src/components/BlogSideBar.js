import Link from 'next/link'
import { useRouter } from 'next/router'

const BlogSideBar = () => {
  const router = useRouter()
  return (
    <>
      <div className="service-side-menu-bar">
        <h3>Blogs Categories</h3>
        <div className="service-side-menu-bar-inside">
          <Link
            href="/pages/services/tax-preparation-services-tampa-fl"
            className={`${
              router.pathname ===
              '/pages/services/tax-preparation-services-tampa-fl'
                ? 'service-active'
                : 'false'
            }`}
          >
            Accounting Firm
          </Link>
          <Link
            href="/pages/services/accounting-services-tampa-fl"
            className={`${
              router.pathname === '/pages/services/accounting-services-tampa-fl'
                ? 'service-active'
                : 'false'
            }`}
          >
            Accounting Services
          </Link>
          <Link
            href="/pages/services/notary-services-tampa-fl"
            className={`${
              router.pathname === '/pages/services/notary-services-tampa-fl'
                ? 'service-active'
                : 'false'
            }`}
          >
            Bookkeeping
          </Link>
          <Link
            href="/pages/services/tax-resolution-services-tampa-fl"
            className={`${
              router.pathname ===
              '/pages/services/tax-resolution-services-tampa-fl'
                ? 'service-active'
                : 'false'
            }`}
          >
            Corporate Tax Preparation
          </Link>
          <Link
            href="/pages/services/tax-planning-services-tampa-fl"
            className={`${
              router.pathname ===
              '/pages/services/tax-planning-services-tampa-fl'
                ? 'service-active'
                : 'false'
            }`}
          >
            Credit Repair
          </Link>
          <Link
            href="/pages/services/credit-repair-counseling-services-tampa-fl"
            className={`${
              router.pathname ===
              '/pages/services/credit-repair-counseling-services-tampa-fl'
                ? 'service-active'
                : 'false'
            }`}
          >
            Health Insurance
          </Link>
          <Link
            href="/pages/services/insurance-services-tampa-fl"
            className={`${
              router.pathname === '/pages/services/insurance-services-tampa-fl'
                ? 'service-active'
                : 'false'
            }`}
          >
            Life Insurance
          </Link>
        </div>
      </div>

      <div className="service-side-menu-contact">
        <div className="contact-background-out">
          <div className="contact-background">
            <div className="contact-background-inside">
              <h3>
                Need <br />
                Consultacy Help?
              </h3>
              <p>We are here to give you 24/7 hours services.</p>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogSideBar
