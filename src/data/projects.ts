export type ProjectCategory = "Tea" | "Chips" | "Rice" | "Atta";

export type PackagingProject = {
  id: string;
  title: string;
  category: ProjectCategory;
  format: string;
  image: string;
  description: string;
  downloadable?: boolean;
};

export const projects: PackagingProject[] = [
  {
    id: "misty-leaf",
    title: "Misty Leaf",
    category: "Tea",
    format: "Stand-up pouch",
    image: "/images/tea.png",
    description: "Premium Assam tea positioned through deep colour, landscape storytelling and copper detailing.",
  },
  {
    id: "crisp-rush",
    title: "Crisp Rush",
    category: "Chips",
    format: "Centre-seal pouch",
    image: "/images/chips.png",
    description: "A bold snack identity engineered to read quickly and confidently on a crowded retail shelf.",
  },
  {
    id: "grain-crown",
    title: "Grain Crown",
    category: "Rice",
    format: "5 kg gusset pouch",
    image: "/images/rice.png",
    description: "Heritage cues and quiet premium detail create a credible, export-ready basmati identity.",
    downloadable: true,
  },
  {
    id: "ghar-bhara",
    title: "Ghar Bhara",
    category: "Atta",
    format: "Wheat flour pouch",
    image: "/images/atta.png",
    description: "An accessible family-first system with clear nutrition cues and strong category recognition.",
  },
];

export const categories = ["All", "Tea", "Chips", "Rice", "Atta"] as const;
