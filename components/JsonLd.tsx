import siteInfo from '@/data/siteInfo.json'

const BASE_URL = siteInfo.url ?? 'https://physio-raise.vercel.app'

export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalBusiness',
        '@id': `${BASE_URL}/#business`,
        name: 'Physio-Raise',
        url: BASE_URL,
        logo: `${BASE_URL}/physio-logo.jpeg`,
        image: `${BASE_URL}/hero-background.jpg`,
        description: 'Expert physical therapy, sports rehabilitation, post-surgical recovery and nutrition counseling.',
        telephone: siteInfo.contact.phone,
        email: siteInfo.contact.email,
        priceRange: '$$',
        currenciesAccepted: 'EGP',
        paymentAccepted: 'Cash, Credit Card',
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteInfo.location.address,
          addressCountry: 'EG',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: siteInfo.location.lat,
          longitude: siteInfo.location.lng,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday'],
            opens: '09:00',
            closes: '20:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Saturday','Sunday'],
            opens: '10:00',
            closes: '16:00',
          },
        ],
        medicalSpecialty: 'PhysicalTherapy',
        hasMap: siteInfo.mapUrl,
        sameAs: [
          siteInfo.socials?.facebook,
          siteInfo.socials?.instagram,
          siteInfo.contact?.whatsapp,
        ].filter(Boolean),
      },
      {
        '@type': 'Physician',
        '@id': `${BASE_URL}/#doctor`,
        name: siteInfo.doctor.name,
        url: `${BASE_URL}/about`,
        image: `${BASE_URL}/${siteInfo.doctor.image}`,
        jobTitle: siteInfo.doctor.title,
        worksFor: { '@id': `${BASE_URL}/#business` },
        medicalSpecialty: 'PhysicalTherapy',
        description: siteInfo.doctor.bio,
      },
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: 'Physio-Raise | Expert Physical Therapy',
        publisher: { '@id': `${BASE_URL}/#business` },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${BASE_URL}/services?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${BASE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home',     item: BASE_URL },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
          { '@type': 'ListItem', position: 3, name: 'About',    item: `${BASE_URL}/about` },
          { '@type': 'ListItem', position: 4, name: 'Gallery',  item: `${BASE_URL}/gallery` },
          { '@type': 'ListItem', position: 5, name: 'Contact',  item: `${BASE_URL}/contact` },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}