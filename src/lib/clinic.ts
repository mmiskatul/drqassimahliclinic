/**
 * EDITABLE CONTENT SOURCE OF TRUTH
 * ---------------------------------
 * Only verified information is filled in below. Fields marked `null` or
 * flagged with `placeholder: true` are intentionally left empty because the
 * information has not been verified. Replace them with real clinic data.
 */

export const clinic = {
  name: "Dr. Qassim Ahli Clinic",
  shortName: "Dr. Qassim Ahli",
  tagline: "Personalized Healthcare, Designed Around You.",
  address: {
    line1: "Villa No 399A, Jumeira St",
    line2: "Jumeirah, Jumeira Second",
    city: "Dubai",
    country: "United Arab Emirates",
  },
  addressOneLine:
    "Villa No 399A, Jumeira St, Jumeirah, Jumeira Second, Dubai, United Arab Emirates",
  instagram: "https://www.instagram.com/drqassimahliclinic/",
  instagramHandle: "@drqassimahliclinic",
  maps: "https://maps.app.goo.gl/5dNp1W36amcb6aNU6",
  mapsEmbed:
    "https://www.google.com/maps?q=Villa%20399A%20Jumeira%20St%2C%20Jumeirah%2C%20Dubai&output=embed",
  // Not verified — leave null rather than inventing.
  phone: null as string | null,
  email: null as string | null,
  openingHours: null as string[] | null,
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  overview: string;
  expectations: string[];
  benefits: string[];
  consultation: string;
  faqs: { q: string; a: string }[];
  /** Placeholder content — replace with the clinic's actual service list. */
  placeholder: boolean;
};

const sharedConsultation =
  "Consultations are arranged by appointment. Our team will discuss availability, expected duration and any preparation with you when your request is confirmed.";

export const services: Service[] = [
  {
    slug: "primary-care",
    title: "Primary Care",
    summary:
      "Day-to-day medical care for common health concerns, with continuity and unhurried consultations.",
    overview:
      "Primary care covers the everyday health questions and concerns that benefit from a familiar clinician who knows your history. Appointments are unhurried, so there is time to talk through symptoms, review past records and agree on next steps together.",
    expectations: [
      "A conversation about your current concern and relevant medical history",
      "A clinical examination where appropriate",
      "A clear explanation of findings in plain language",
      "An agreed plan, including any referrals or follow-up",
    ],
    benefits: [
      "Individuals looking for a regular clinician in Jumeirah",
      "Patients managing an ongoing, non-urgent health concern",
      "Families who prefer continuity of care in one place",
    ],
    consultation: sharedConsultation,
    faqs: [
      {
        q: "Do I need to bring previous medical records?",
        a: "If you have recent reports, test results or a list of current medications, bringing them helps make the consultation more useful.",
      },
      {
        q: "How long does a consultation take?",
        a: "Duration depends on the reason for your visit. Our team will confirm the expected length when your appointment is arranged.",
      },
    ],
    placeholder: true,
  },
  {
    slug: "medical-consultation",
    title: "Medical Consultation",
    summary:
      "A focused discussion of your symptoms, history and options, with clear next steps you understand.",
    overview:
      "A medical consultation is a dedicated appointment to review a specific concern. The emphasis is on listening first: understanding what you are experiencing, what matters to you, and what has already been tried before discussing options.",
    expectations: [
      "Time to describe your concern in your own words",
      "Review of any prior investigations you bring with you",
      "Discussion of possible next steps and their trade-offs",
      "Written or verbal summary of what was agreed",
    ],
    benefits: [
      "Anyone seeking a considered opinion on a health concern",
      "Patients who want their options explained clearly",
      "People preparing for a decision about further investigation",
    ],
    consultation: sharedConsultation,
    faqs: [
      {
        q: "Can I bring a family member with me?",
        a: "Yes. Many patients find it helpful to have someone with them during a consultation.",
      },
      {
        q: "Will I receive a diagnosis on the day?",
        a: "That depends on the concern. Some questions can be answered during the visit; others require further investigation before anything can be concluded.",
      },
    ],
    placeholder: true,
  },
  {
    slug: "preventive-healthcare",
    title: "Preventive Healthcare",
    summary:
      "Proactive health reviews and lifestyle guidance shaped around your personal circumstances.",
    overview:
      "Preventive healthcare focuses on staying well rather than only responding to illness. A review looks at your background, day-to-day habits and any relevant family history, and translates that into practical, individualised guidance.",
    expectations: [
      "A structured review of your general health and lifestyle",
      "Discussion of any relevant personal or family history",
      "Guidance tailored to your circumstances, not generic advice",
      "A suggested schedule for future reviews where appropriate",
    ],
    benefits: [
      "People who want a considered view of their general health",
      "Patients interested in long-term wellbeing planning",
      "Anyone wishing to establish a baseline before future reviews",
    ],
    consultation: sharedConsultation,
    faqs: [
      {
        q: "Is any preparation needed?",
        a: "Any preparation will be explained to you in advance when your appointment is confirmed.",
      },
      {
        q: "How often should a review take place?",
        a: "This is individual and is discussed with you based on your circumstances.",
      },
    ],
    placeholder: true,
  },
  {
    slug: "specialized-consultation",
    title: "Specialized Consultation",
    summary:
      "In-depth appointments for concerns that need additional time, review or onward referral.",
    overview:
      "Some concerns need more than a standard appointment. A specialized consultation allows additional time to review records in detail, consider investigations and, where appropriate, coordinate an onward referral within Dubai.",
    expectations: [
      "Extended appointment time for a detailed review",
      "Careful review of prior investigations and correspondence",
      "Discussion of whether further tests or referral would help",
      "Coordination of next steps with you",
    ],
    benefits: [
      "Patients with a complex or long-standing concern",
      "People who have already had investigations and want them reviewed",
      "Anyone needing help navigating onward care",
    ],
    consultation: sharedConsultation,
    faqs: [
      {
        q: "Can you refer me to another specialist?",
        a: "Where onward care is appropriate, our team will discuss suitable options with you.",
      },
      {
        q: "Should I send my records in advance?",
        a: "If you have documents to share, please mention this when requesting your appointment and our team will advise.",
      },
    ],
    placeholder: true,
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const journey = [
  {
    step: "01",
    title: "Book",
    body: "Schedule your appointment online or get in touch with our team.",
  },
  {
    step: "02",
    title: "Consult",
    body: "Meet with the medical team and discuss your needs without feeling rushed.",
  },
  {
    step: "03",
    title: "Personalized Care",
    body: "Receive care shaped around your individual circumstances and preferences.",
  },
  {
    step: "04",
    title: "Follow-Up",
    body: "Continue your healthcare journey with appropriate follow-up and support.",
  },
];

export const MEDICAL_DISCLAIMER =
  "Medical information provided on this website is for general informational purposes and does not replace professional medical advice.";
