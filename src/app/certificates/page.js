import CertificatesList from "../_components/certificates/CertificatesList";

export const revalidate = 3600

export async function generateMetadata() {
  const title = "Certificates | الشهادات — Gaber Usef | جابر يوسف"
  const description = "Professional certificates and achievements. شهادات وإنجازات مهنية."
  const path = `/certificates`
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      url: `https://gaberuseff.com${path}`,
      title,
      description,
      images: [{ url: '/me.jpg', width: 1200, height: 630, alt: 'Certificates' }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/me.jpg']
    }
  }
}

async function page() {
  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-3xl font-bold mb-4">Certificates</h1>
        <p className="p-small">A curated collection of my certificates and accomplishments.</p>
      </div>

      <CertificatesList />
    </section>
  );
}

export default page