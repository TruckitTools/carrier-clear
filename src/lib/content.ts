export const SITE = {
  name: "Carrier Clear",
  tagline: "Dedicated Carrier Compliance",
  person: "Ashley LaGreca",
  role: "Carrier compliance",
  phone: "(804) 567-0265",
  phoneHref: "tel:+18045670265",
  email: "apolichette1368@gmail.com",
  emailHref: "mailto:apolichette1368@gmail.com",
  years: 10,
  region: "Virginia",
} as const;

export const NAV = [
  { href: "#work", label: "Services" },
  { href: "#cases", label: "Cases" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    num: "01",
    title: "Authority And Identity",
    body: "Confirm the MC and DOT are active today, the phone and email match FMCSA records, and the company is who they say they are.",
  },
  {
    num: "02",
    title: "Insurance On File",
    body: "Compare the certificate in the packet to what FMCSA actually has on file, including lapses, cancellations, and cargo coverage.",
  },
  {
    num: "03",
    title: "Safety Record",
    body: "Review CSA scores, out-of-service orders, safety ratings, crash history, and whether they inspect in the states they claim to run.",
  },
  {
    num: "04",
    title: "Fraud Checks",
    body: "Look for double-brokering, stolen identities, brand-new authorities used to steal loads, and dispatch that does not match the MC.",
  },
] as const;

export const STEPS = [
  {
    num: "1",
    title: "Send The MC Number",
    body: "One carrier, a packet, or a list. Brokers, shippers, and agents use the same process.",
  },
  {
    num: "2",
    title: "We Review The Records",
    body: "Authority, insurance, identity, related companies, and the red flags a quick onboarding misses.",
  },
  {
    num: "3",
    title: "You Get A Clear Answer",
    body: "Book, wait, or do not book — written and dated, so you have a file if someone asks later.",
  },
] as const;

export const STATS = [
  {
    value: "$725M",
    label: "in cargo theft reported in 2025",
    source: "Verisk CargoNet",
  },
  {
    value: "9–0",
    label: "Supreme Court: brokers can be sued for the carriers they hire",
    source: "Montgomery v. Caribe, May 2026",
  },
  {
    value: "$455M",
    label: "in freight fraud reported in 2024",
    source: "Truckstop Freight Fraud Report",
  },
] as const;

export type CaseKind = "doj" | "oig" | "press" | "court" | "industry";

export type CaseFile = {
  id: string;
  kind: CaseKind;
  stamp: string;
  date: string;
  title: string;
  kicker: string;
  body: string;
  flag: string;
  sourceLabel: string;
  sourceUrl: string;
};

export const CASES: CaseFile[] = [
  {
    id: "ZG-26",
    kind: "doj",
    stamp: "Sentenced",
    date: "May 2026",
    title: "Man Sentenced For Stealing $10.1 Million In Freight",
    kicker: "U.S. Attorney, Northern District of Illinois",
    body: "Aivaras Zigmantas was sentenced to five years in federal prison after posing as real and fake carriers and brokers to steal more than $10.1 million in loads, including liquor and copper. Prosecutors said the group tried to take $14.6 million. He was ordered to repay 24 companies.",
    flag: "Watch for: load-board names that do not match SAFER, dispatch emails that do not match the MC, and a carrier that exists only on paper.",
    sourceLabel: "U.S. Attorney’s Office, N.D. Illinois",
    sourceUrl:
      "https://www.justice.gov/usao-ndil/pr/suburban-chicago-man-sentenced-five-years-prison-stealing-more-10-million-interstate",
  },
  {
    id: "SG-25",
    kind: "oig",
    stamp: "Charged",
    date: "January 2025",
    title: "Federal Charges In An Armenia-Based Double-Broker Ring",
    kicker: "DOT Office of Inspector General",
    body: "Serj Gevorgyan was charged with conspiracy after allegedly filing fake FMCSA registrations, using straw owners and mailbox addresses, and running double-brokering from call centers in Armenia. Loads were accepted, handed off cheaper to real carriers, and often never paid. When complaints piled up, new companies were created.",
    flag: "Watch for: brand-new related authorities, virtual offices, owners who do not answer, and dispatch that does not sit with the MC on file.",
    sourceLabel: "U.S. DOT Office of Inspector General",
    sourceUrl: "https://www.oig.dot.gov/library-item/46746",
  },
  {
    id: "NY-26",
    kind: "press",
    stamp: "Indicted",
    date: "June 2026",
    title: "$4.49 Million Stolen By Impersonating Real Carriers",
    kicker: "Manhattan D.A. · New Jersey, Pennsylvania, Virginia",
    body: "Eight men were indicted in a scheme prosecutors say stole about $4.49 million in lamb, cheese, beef, copper, and cigarettes. From late 2025 into 2026, the group allegedly used real carrier names, MC numbers, and DOT numbers at docks, then drove the freight away. The gap was at pickup, not in the packet.",
    flag: "Watch for: who actually takes the freight at the dock. The MC you booked has to be the MC that picks up.",
    sourceLabel: "FreightWaves, citing Manhattan D.A.",
    sourceUrl:
      "https://www.freightwaves.com/news/eight-indicted-in-alleged-carrier-impersonation-scheme-prosecutors-allege-4-49-million-in-cargo-losses",
  },
  {
    id: "SC-26",
    kind: "court",
    stamp: "9–0",
    date: "May 14, 2026",
    title: "Supreme Court: Brokers Can Be Sued For Who They Hire",
    kicker: "Montgomery v. Caribe Transport II",
    body: "The Court ruled 9–0 that freight brokers can face state lawsuits for negligently hiring a carrier. Shawn Montgomery was badly hurt after a carrier arranged by a national broker hit his truck. Brokers can no longer use federal preemption to get these cases thrown out. A jury can now ask what you checked before you booked them.",
    flag: "What it means: a screenshot from last quarter is not enough. You need a dated check from when you booked the load.",
    sourceLabel: "SCOTUSblog",
    sourceUrl: "https://www.scotusblog.com/cases/montgomery-v-caribe-transport-ii-llc/",
  },
  {
    id: "DC-25",
    kind: "industry",
    stamp: "Arrested",
    date: "November 21, 2025",
    title: "Federal Agents Arrest A Carrier Owner At His Deposition",
    kicker: "Lebanon, Ohio · MC990377 / MC1173011",
    body: "Dumitru “Dave” Ciudin, listed with Indiana authorities Select Corporation (MC990377) and Select Transportation (MC1173011), was arrested by Homeland Security Investigations and ICE while appearing for a court-ordered deposition. Carrier411 had documented a Moldova-linked operation and turned evidence over to federal agents. Bond was later denied. The FMCSA authority was in Indiana. Reporting said dispatch was not.",
    flag: "Watch for: where dispatch actually sits, paperwork updates the listed owner could not have filed, and an MC that keeps running after that person is in custody.",
    sourceLabel: "Carrier411 on X",
    sourceUrl: "https://x.com/realcarrier411/status/1993330585243468171",
  },
];
