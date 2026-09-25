import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[75vh] pt-32">
        <section className="container-custom py-20">
          <div className="surface diagnostic-grid p-8 sm:p-12">
            <div className="eyebrow">404</div>
            <h1 className="display-title mt-6">That page is not in the shop.</h1>
            <p className="lead mt-7">
              The link may be old or the page may have moved. Head back to the
              main site, computer repair, or the repair request.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/" className="btn-primary">
                Back to Arkansas Geek
                <FaArrowRight />
              </Link>
              <Link href="/repair-request" className="btn-secondary">
                Start a Repair Request
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
