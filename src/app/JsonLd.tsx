const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "IMDEV",
  url: "https://imdev.studio",
  description:
    "IMDEV builds polished web products, modern front-end systems, app builds, and AI-enhanced digital experiences with real product thinking.",
  image: "https://imdev.studio/opengraph-image",
  areaServed: "Worldwide",
  serviceType: [
    "Web Development",
    "App Development",
    "AI Integration",
    "Technical Consulting",
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema),
      }}
    />
  );
}
