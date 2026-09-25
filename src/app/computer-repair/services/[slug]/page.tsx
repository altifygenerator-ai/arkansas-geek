import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoDetailPage from "@/components/SeoDetailPage";
import { computerServicePages } from "@/data/seo-content";
import { siteName, siteUrl } from "@/lib/site";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return computerServicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = computerServicePages.find((item) => item.slug === slug);
  if (!page) return {};

  const path = "/computer-repair/services/" + page.slug;

  return {
    title: page.title,
    description: page.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      title: page.title + " | " + siteName,
      description: page.metaDescription,
      images: [{ url: page.image, alt: page.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title + " | " + siteName,
      description: page.metaDescription,
      images: [page.image],
    },
  };
}

export default async function ComputerServicePage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const page = computerServicePages.find((item) => item.slug === slug);
  if (!page) notFound();

  const path = "/computer-repair/services/" + page.slug;
  const url = siteUrl + path;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": url + "#service",
      name: page.title,
      url,
      description: page.metaDescription,
      provider: { "@id": siteUrl + "/#business" },
      areaServed: { "@type": "State", name: "Arkansas" },
      offers: {
        "@type": "Offer",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: 55,
          priceCurrency: "USD",
          unitText: "HOUR",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        {
          "@type": "ListItem",
          position: 2,
          name: "Computer Repair",
          item: siteUrl + "/computer-repair",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: page.shortTitle,
          item: url,
        },
      ],
    },
  ];

  const relatedLinks = computerServicePages
    .filter((item) => item.slug !== page.slug)
    .slice(0, 3)
    .map((item) => ({
      href: "/computer-repair/services/" + item.slug,
      label: item.shortTitle,
    }));

  relatedLinks.push(
    { href: "/service-areas", label: "Computer Repair Service Areas" },
    { href: "/faq", label: "Repair FAQ" },
  );

  return (
    <SeoDetailPage
      page={page}
      theme="pc"
      schema={schema}
      relatedLinks={relatedLinks}
    />
  );
}
