/**
 * Case studies. Keep every claim factual: add numbers to `results` only when
 * they are real and shareable. Empty `results` simply isn't rendered.
 */
export type CaseStudy = {
  slug: string
  title: string
  company: string
  companyUrl: string
  role: string
  /** One sentence used on cards, meta description and llms.txt */
  summary: string
  /** Hard outcomes, e.g. { value: '3×', label: 'activation' } */
  results: Array<{ value: string; label: string }>
  sections: Array<{ heading: string; paragraphs: Array<string> }>
  links: Array<{ label: string; url: string }>
  tags: Array<string>
  /** ISO date the page was published, for Article structured data */
  published: string
}

export const caseStudies: Array<CaseStudy> = [
  {
    slug: 'uizard-autodesigner',
    title: 'Shipping Autodesigner at Uizard',
    company: 'Uizard',
    companyUrl: 'https://uizard.io/',
    role: 'Full-stack engineer → Growth Tech Lead',
    summary:
      'Joining Uizard as the 6th engineer, growing into Growth Tech Lead, and shipping Autodesigner — the AI feature that turns text prompts into UI designs — on the road to the Miro acquisition.',
    results: [],
    sections: [
      {
        heading: 'Context',
        paragraphs: [
          'Uizard was an early-stage design startup making UI design accessible to non-designers. I joined as the sixth engineer, when the team was small enough that every engineer touched product, infrastructure and growth.',
        ],
      },
      {
        heading: 'What I did',
        paragraphs: [
          'I started as a full-stack engineer and grew into the Growth Tech Lead role. I lived through the whole startup arc: the pivots, the pressure, and the wins.',
          'One of the biggest projects was shipping Autodesigner, an AI feature that turns a plain-text prompt into editable, multi-screen UI designs. It meant putting generative AI into the core of the product, not bolting it on the side.',
        ],
      },
      {
        heading: 'Outcome',
        paragraphs: [
          'Autodesigner launched on Product Hunt, took off, and became one of the defining moments of the company. Not long after, Uizard was acquired by Miro.',
        ],
      },
    ],
    links: [
      {
        label: 'Autodesigner on Product Hunt',
        url: 'https://www.producthunt.com/products/uizard/launches/uizard-autodesigner',
      },
      { label: 'Uizard', url: 'https://uizard.io/' },
    ],
    tags: ['AI product', 'Growth engineering', 'Acquisition by Miro'],
    published: '2026-10-10',
  },
  {
    slug: 'materia-labs-instapharm',
    title: 'Leading InstaPharm at Materia Labs',
    company: 'Materia Labs',
    companyUrl: 'https://materiatechnica.com/',
    role: 'Led InstaPharm',
    summary:
      'Leading InstaPharm, an AI product built to improve how pharmacies operate and how people with long-term health conditions manage their care.',
    results: [],
    sections: [
      {
        heading: 'Context',
        paragraphs: [
          'Pharmacies are often the most frequent touchpoint for people living with long-term health conditions, yet much of the day-to-day work around them is manual. Materia Labs set out to change that with InstaPharm.',
        ],
      },
      {
        heading: 'What I did',
        paragraphs: [
          'I led InstaPharm, working across product, engineering and AI to shape what the product should do for pharmacies and for the people they serve.',
        ],
      },
      {
        heading: 'Outcome',
        paragraphs: [
          'InstaPharm is an AI product that helps pharmacies run more smoothly and helps people with long-term conditions stay on top of their care.',
        ],
      },
    ],
    links: [{ label: 'InstaPharm', url: 'https://materiatechnica.com/en/instapharm' }],
    tags: ['AI product', 'Healthcare', 'Product leadership'],
    published: '2026-10-10',
  },
  {
    slug: 'workable-ats',
    title: 'Rebuilding the core ATS at Workable',
    company: 'Workable',
    companyUrl: 'https://www.workable.com/',
    role: 'Software engineer',
    summary:
      'Owning and rebuilding the core applicant tracking experience at Workable — the part of the product thousands of recruiters use every day.',
    results: [],
    sections: [
      {
        heading: 'Context',
        paragraphs: [
          'Workable is one of the most widely used recruiting platforms. Its core applicant tracking system (ATS) is where recruiters spend their working day, so small details there compound into hours saved or lost.',
        ],
      },
      {
        heading: 'What I did',
        paragraphs: [
          'I owned and rebuilt the core ATS experience. It was my first move from banking and consulting into a product company, and the place where I learned to fight for the details users actually notice.',
        ],
      },
      {
        heading: 'Outcome',
        paragraphs: [
          'A rebuilt core experience used daily by thousands of recruiters — and the product instincts I have brought to every team since.',
        ],
      },
    ],
    links: [{ label: 'Workable', url: 'https://www.workable.com/' }],
    tags: ['Core product', 'SaaS', 'Product craft'],
    published: '2026-10-10',
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug)
}
