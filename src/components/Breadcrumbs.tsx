import Link from "next/link";

export interface Crumb {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
}

const SITE = "https://www.potomacdogwalking.com";

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const trail: Crumb[] = [{ name: "Home", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE}${c.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 text-sm text-gray-600">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-1">
        {trail.map((c, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-1">
              {isLast ? (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {c.name}
                </span>
              ) : (
                <>
                  <Link href={c.href} className="hover:text-gray-900 hover:underline">
                    {c.name}
                  </Link>
                  <span className="text-gray-400" aria-hidden="true">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
