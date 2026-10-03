export interface QuickStat {
  label: string;
  value: string;
  subtext: string;
}

export interface AcademicProgram {
  id: string;
  title: string;
  grades: string;
  description: string;
  features: string[];
  image: string;
}

export interface Facility {
  id: string;
  title: string;
  category: 'Infrastructure' | 'Sports' | 'Technology' | 'Wellness';
  description: string;
  image: string;
}

export interface Achievement {
  id: string;
  year: string;
  category: 'Academic' | 'Sports' | 'STEM & Innovation' | 'Arts & Culture';
  title: string;
  description: string;
  badge: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  parentName: string;
  role: string;
  studentGrade: string;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Events' | 'Sports' | 'Labs' | 'Arts';
  image: string;
  caption: string;
}

export const SCHOOL_INFO = {
  name: "Oakridge International Academy",
  tagline: "Where Curiosity Becomes Confidence.",
  affiliation: "CBSE Affiliated | Affiliation No. 1930482",
  schoolCode: "45892",
  type: "Co-educational Senior Secondary (Pre-Nursery to Class XII)",
  address: "Oakridge Campus, Green Hills Estate, Knowledge Corridor, New Delhi - 110075",
  phone: "+91 (011) 4892-9000",
  admissionsHelpline: "+91 98765 43210",
  email: "admissions@oakridgeacademy.edu.in",
  generalEmail: "info@oakridgeacademy.edu.in",
  hours: "Monday - Saturday: 8:00 AM - 4:00 PM",
  established: "2008",
  campusSize: "15 Acres Eco-Friendly Smart Campus",
  ratio: "15:1 Student-Teacher Ratio",
};

export const QUICK_STATS: QuickStat[] = [
  { label: "CBSE Pass Percentage", value: "100%", subtext: "Consecutive 10-year streak" },
  { label: "Student-Teacher Ratio", value: "15:1", subtext: "Personalized mentorship" },
  { label: "Campus Area", value: "15 Acres", subtext: "Lush green eco-campus" },
  { label: "Clubs & Activities", value: "30+", subtext: "Holistic development" },
  { label: "College Placements", value: "98%", subtext: "Top global & Indian universities" },
];

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: "pre-primary",
    title: "Foundational Stage (Pre-Primary)",
    grades: "Pre-Nursery to Class II",
    description: "Play-based experiential learning designed to nurture early curiosity, emotional regulation, motor skills, and foundational literacy and numeracy.",
    features: ["Reggio-Emilia Inspired Spaces", "Phonics & Early Literacy", "Sensory & Nature Play", "Robotics for Tiny Tots"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "primary",
    title: "Preparatory Stage (Primary)",
    grades: "Class III to V",
    description: "Focuses on interactive discovery, activity-led enquiry, core language fluency, spatial reasoning, and collaborative group projects.",
    features: ["Activity-Based Mathematics", "Junior Science Lab", "Performing Arts Integration", "Bilingual Enrichment"],
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "middle",
    title: "Middle Stage",
    grades: "Class VI to VIII",
    description: "Cross-disciplinary learning connecting Science, Technology, Humanities, and Ethics. Prepares students for analytical reasoning and independent research.",
    features: ["AI & Coding Labs", "Design Thinking Workshop", "Inter-House Debate & MUN", "Environmental Stewardship"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "secondary",
    title: "Secondary & Senior Secondary",
    grades: "Class IX to XII",
    description: "Rigorous CBSE Board preparation paired with competitive coaching (JEE/NEET/CLAT/CUET) and global university counselling.",
    features: ["Science, Commerce & Humanities Streams", "Advanced STEM Research Lab", "Career & Global Placement Cell", "Internship Opportunities"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
  }
];

export const FACILITIES: Facility[] = [
  {
    id: "smart-classrooms",
    title: "Interactive Smart Classrooms",
    category: "Infrastructure",
    description: "Ergonomically designed classrooms equipped with 4K touch displays, acoustic panelling, and high-speed Wi-Fi.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "stem-lab",
    title: "Tinker & Robotics Lab",
    category: "Technology",
    description: "State-of-the-art STEM facility featuring 3D printers, IoT kits, drone simulation rigs, and AI workstations.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "sports-complex",
    title: "Olympic-Standard Sports Arena",
    category: "Sports",
    description: "Multi-sport turf field, 8-lane running track, indoor badminton courts, and heated all-weather swimming pool.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "library",
    title: "Knowledge Commons Library",
    category: "Infrastructure",
    description: "Over 25,000 physical volumes, digital journal access (JSTOR, EBSCO), reading pods, and silent study zones.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "art-auditorium",
    title: "Grand Performing Arts Centre",
    category: "Infrastructure",
    description: "600-seater air-conditioned auditorium with professional lighting, acoustic engineering, and backstage green rooms.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "wellness",
    title: "Infirmary & Wellness Clinic",
    category: "Wellness",
    description: "Full-time qualified medical staff, 4-bed observation room, ambulance on standby, and mental health counsellors.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-1",
    year: "2025",
    category: "Academic",
    title: "100% CBSE Class XII Board Result",
    description: "School average score of 91.4%. 42 students secured 95%+ aggregate across Science and Commerce streams.",
    badge: "Board Excellence"
  },
  {
    id: "ach-2",
    year: "2025",
    category: "STEM & Innovation",
    title: "1st Prize - National Youth Robotics Challenge",
    description: "Oakridge Robotics Squad designed an AI-powered autonomous debris sorter for smart cities.",
    badge: "National Champions"
  },
  {
    id: "ach-3",
    year: "2024",
    category: "Sports",
    title: "CBSE National Swimming Meet - Gold Medal",
    description: "Master Ananya Sharma (Class X) won Gold in 200m Freestyle and qualified for Junior Asian Games.",
    badge: "Gold Medalist"
  },
  {
    id: "ach-4",
    year: "2024",
    category: "Arts & Culture",
    title: "Best Delegation - International Model UN",
    description: "Oakridge MUN Team secured 7 Individual Outstanding Delegate awards at Harvard MUN India.",
    badge: "Global Recognition"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote: "Oakridge transformed our daughter from a hesitant speaker into a confident debate captain. The teachers genuinely care about every child's unique learning curve.",
    parentName: "Dr. Rajesh & Sunita Malhotra",
    role: "Parents of Riya (Class XI)",
    studentGrade: "Class XI Science",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test-2",
    quote: "The balance between academic rigor and co-curricular exposure is remarkable. The robotics lab and career counselling cell gave my son clear direction for his engineering dream.",
    parentName: "Vikramjit & Neha Sengupta",
    role: "Parents of Arjun (Class XII Alumnus)",
    studentGrade: "Class XII Alumnus (IIT Delhi)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test-3",
    quote: "As working parents, safety and wholesome values were our highest priorities. Oakridge delivers on every front — from tracked transport to compassionate faculty.",
    parentName: "Anita & Priyanshu Oberoi",
    role: "Parents of Kabir (Class V)",
    studentGrade: "Class V Primary",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-1",
    title: "Annual Sports Day Championship",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800",
    caption: "Students competing in 4x100m Relay at Oakridge Stadium."
  },
  {
    id: "g-2",
    title: "Robotics & Innovation Fair",
    category: "Labs",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    caption: "Senior secondary students presenting their AI projects."
  },
  {
    id: "g-3",
    title: "Annual Cultural Fest 'Tarang'",
    category: "Events",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&q=80&w=800",
    caption: "Classical dance performance by Oakridge Cultural Troupe."
  },
  {
    id: "g-4",
    title: "Eco Campus Organic Garden",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800",
    caption: "Primary students participating in organic farming workshop."
  },
  {
    id: "g-5",
    title: "Fine Arts & Pottery Workshop",
    category: "Arts",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
    caption: "Sculpting session in the Visual Arts Studio."
  },
  {
    id: "g-6",
    title: "Advanced Chemistry & Research Lab",
    category: "Labs",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
    caption: "Students conducting titration experiments under guidance."
  }
];

export const ADMISSION_STEPS = [
  {
    step: "01",
    title: "Online Enquiry / Campus Visit",
    description: "Fill out the online admission form or book an appointment for a personalized guided tour of our 15-acre campus."
  },
  {
    step: "02",
    title: "Interaction & Assessment",
    description: "For Pre-Primary: Informal parent-child interaction. For Class I to XII: Age-appropriate conceptual assessment."
  },
  {
    step: "03",
    title: "Provisional Offer & Document Submission",
    description: "Selected candidates receive an admission offer. Verification of birth certificate, previous report cards, and transfer certificate."
  },
  {
    step: "04",
    title: "Fee Payment & Onboarding",
    description: "Complete fee payment, collect uniform & book sets, and receive student ERP credentials for seamless school entry."
  }
];

export const FAQS = [
  {
    question: "What is the entry age criterion for Pre-Nursery and Nursery?",
    answer: "For Pre-Nursery, the child must be 2.5 to 3 years of age as of March 31 of the academic year. For Nursery, the child must be minimum 3+ years."
  },
  {
    question: "Does Oakridge provide school transport?",
    answer: "Yes, we operate a fleet of GPS-tracked, AC buses equipped with CCTV cameras, speed governors, and trained female attendants covering all major routes across NCR."
  },
  {
    question: "What streams are offered in Class XI and XII?",
    answer: "We offer all three CBSE streams: Science (PCM/PCB with Computer Science, Biotech, Physical Education), Commerce (Maths, Accountancy, Economics, Business Studies), and Humanities (Psychology, Political Science, Economics, History, Fine Arts)."
  },
  {
    question: "Are there integrated coaching programs for competitive exams?",
    answer: "Yes, we offer integrated foundation and advanced coaching programs for JEE, NEET, CLAT, CUET, and SAT within the regular school schedule in collaboration with top academic mentors."
  }
];
