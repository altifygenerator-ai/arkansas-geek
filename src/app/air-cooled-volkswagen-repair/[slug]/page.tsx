import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoDetailPage from "@/components/SeoDetailPage";
import { vwServicePages } from "@/data/seo-content";
import { siteName, siteUrl } from "@/lib/site";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return vwServicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = vwServicePages.find((item) => item.slug === slug);
  if (!page) return {};
  const path = "/air-cooled-volkswagen-repair/" + page.slug;

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

export default async function VwDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const page = vwServicePages.find((item) => item.slug === slug);
  if (!page) notFound();

  const path = "/air-cooled-volkswagen-repair/" + page.slug;
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
          name: "Air-Cooled Volkswagen Repair",
          item: siteUrl + "/air-cooled-volkswagen-repair",
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

  const relatedLinks = vwServicePages
    .filter((item) => item.slug !== page.slug)
    .map((item) => ({
      href: "/air-cooled-volkswagen-repair/" + item.slug,
      label: item.shortTitle,
    }));

  relatedLinks.push(
    { href: "/air-cooled-volkswagen-repair", label: "VW Repair Overview" },
    { href: "/repair-request", label: "Start a VW Repair Request" },
  );

  return (
    <SeoDetailPage
      page={page}
      theme="vw"
      schema={schema}
      relatedLinks={relatedLinks}
    />
  );
}
