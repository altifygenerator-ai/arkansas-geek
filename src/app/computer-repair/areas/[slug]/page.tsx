import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoDetailPage from "@/components/SeoDetailPage";
import type { SeoPage } from "@/data/seo-content";
import { serviceAreaPages } from "@/data/seo-content";
import { siteName, siteUrl } from "@/lib/site";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return serviceAreaPages.map((area) => ({ slug: area.slug }));
}

function makePage(city: string, state: string, slug: string): SeoPage {
  return {
    slug,
    title: "Computer Repair in " + city + ", " + state,
    shortTitle: city + " Computer Repair",
    metaDescription:
      "Computer repair requests for " +
      city +
      ", " +
      state +
      " through Arkansas Geek, including hardware troubleshooting, upgrades, builds, and practical repair questions.",
    eyebrow: city + ", " + state + " Service Area",
    heading:
      "Computer repair for " +
      city +
      " starts with the problem, not a sales pitch.",
    intro:
      "Arkansas Geek accepts computer repair requests from the " +
      city +
      " area for hardware-focused troubleshooting, repair questions, upgrades, builds, and related computer problems. Start with the details so the issue and logistics can be reviewed before anything is scheduled.",
    image: "/images/pc-1.jpg",
    highlights: [
      city + " area repair requests",
      "Hardware-focused computer help",
      "$55/hr typical labor",
    ],
    sections: [
      {
        title: "Computer repair requests from " + city + " can start online.",
        text:
          "Send the computer type, symptoms, when the problem started, and anything that changed recently. Arkansas Geek can review the request before deciding whether the next step is a quick follow-up, remote guidance, or an in-person repair.",
      },
      {
        title: "The service is broader than one kind of broken computer.",
        text:
          "Arkansas Geek handles practical hardware issues, troubleshooting, upgrades, replacement-part questions, builds, and general repair questions. The work begins by narrowing down what is actually going wrong.",
        points: [
          "Hardware repair questions",
          "Troubleshooting",
          "Computer upgrades",
          "Build-related help",
          "Replacement-part questions",
        ],
      },
      {
        title: "Location and job details are reviewed before scheduling.",
        text:
          "Arkansas Geek does not advertise a storefront in " +
          city +
          ". Availability depends on the job, the equipment, and the location, so the repair request is the right place to start before making travel plans or assuming a service appointment.",
      },
    ],
  };
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = serviceAreaPages.find((item) => item.slug === slug);
  if (!area) return {};
  const page = makePage(area.city, area.state, area.slug);
  const path = "/computer-repair/areas/" + area.slug;

  return {
    title: page.title,
    description: page.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      title: page.title + " | " + siteName,
      description: page.metaDescription,
      images: [{ url: "/images/pc-1.jpg", alt: page.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title + " | " + siteName,
      description: page.metaDescription,
      images: ["/images/pc-1.jpg"],
    },
  };
}

export default async function ComputerRepairAreaPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const area = serviceAreaPages.find((item) => item.slug === slug);
  if (!area) notFound();

  const page = makePage(area.city, area.state, area.slug);
  const path = "/computer-repair/areas/" + area.slug;
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
      areaServed: {
        "@type": "City",
        name: area.city + ", Arkansas",
      },
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
          name: "Service Areas",
          item: siteUrl + "/service-areas",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: area.city + " Computer Repair",
          item: url,
        },
      ],
    },
  ];

  const relatedLinks = serviceAreaPages
    .filter((item) => item.slug !== area.slug)
    .slice(0, 4)
    .map((item) => ({
      href: "/computer-repair/areas/" + item.slug,
      label: item.city + " Computer Repair",
    }));

  relatedLinks.push(
    { href: "/computer-repair", label: "Computer Repair Overview" },
    { href: "/repair-request", label: "Start a Repair Request" },
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
