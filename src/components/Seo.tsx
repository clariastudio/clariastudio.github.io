import { Helmet } from "react-helmet-async";
import { SITE } from "@/data/studio";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  type?: "website" | "article";
};

const Seo = ({
  title,
  description,
  path = "/",
  jsonLd,
  type = "website",
}: SeoProps) => {
  const url = `${SITE.url}${path}`;
  const fullTitle =
    title.includes(SITE.name) ? title : `${title} — ${SITE.name}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default Seo;