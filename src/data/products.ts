export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  price: string;
  moq: string;
  fabric: string;
  sizes: string;
  colors: string[];
  image: string;
  imageHover?: string;
  badge?: string;
}

export interface Category {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    slug: "shirt",
    name: "Shirt",
    tagline: "Formal · Casual · Party Wear",
    description:
      "Premium quality men's shirts in formal, casual, and party wear styles. Available in all sizes with a wide range of colors, patterns, and fabrics.",
    heroImage: "/cat-shirt.png",
    products: [
      {
        id: "shirt-001",
        name: "Premium Cotton Formal Shirt",
        category: "Shirt",
        categorySlug: "shirt",
        price: "₹320–₹450",
        moq: "50 pcs",
        fabric: "100% Cotton",
        sizes: "S, M, L, XL, XXL",
        colors: ["#FFFFFF", "#87CEEB", "#FFC0CB", "#E6E6FA"],
        image: "/shirts.png",
        badge: "Bestseller",
      },
      {
        id: "shirt-002",
        name: "Slim Fit Casual Shirt",
        category: "Shirt",
        categorySlug: "shirt",
        price: "₹280–₹380",
        moq: "50 pcs",
        fabric: "Cotton Blend",
        sizes: "M, L, XL, XXL",
        colors: ["#4169E1", "#228B22", "#DC143C"],
        image: "/shirts.png",
      },
      {
        id: "shirt-003",
        name: "Printed Party Wear Shirt",
        category: "Shirt",
        categorySlug: "shirt",
        price: "₹350–₹500",
        moq: "30 pcs",
        fabric: "Polyester Satin",
        sizes: "M, L, XL, XXL",
        colors: ["#0a0a0a", "#191970", "#800020"],
        image: "/shirts.png",
        badge: "New Arrival",
      },
      {
        id: "shirt-004",
        name: "Double Pocket Cargo Shirt",
        category: "Shirt",
        categorySlug: "shirt",
        price: "₹340–₹460",
        moq: "50 pcs",
        fabric: "Twill Cotton",
        sizes: "M, L, XL, XXL",
        colors: ["#C2B280", "#556B2F", "#0a0a0a"],
        image: "/shirts.png",
      },
      {
        id: "shirt-005",
        name: "Linen Casual Shirt",
        category: "Shirt",
        categorySlug: "shirt",
        price: "₹400–₹550",
        moq: "30 pcs",
        fabric: "Pure Linen",
        sizes: "S, M, L, XL",
        colors: ["#FFFFFF", "#F5F5DC", "#87CEEB"],
        image: "/shirts.png",
        badge: "Premium",
      },
      {
        id: "shirt-006",
        name: "Check Pattern Shirt",
        category: "Shirt",
        categorySlug: "shirt",
        price: "₹260–₹350",
        moq: "100 pcs",
        fabric: "Cotton",
        sizes: "M, L, XL, XXL",
        colors: ["#4169E1", "#DC143C", "#228B22"],
        image: "/shirts.png",
      },
    ],
  },
  {
    slug: "t-shirt",
    name: "T shirt",
    tagline: "Round Neck · Polo · Printed",
    description:
      "Comfortable and stylish t-shirts in round neck, polo, and printed styles. Perfect for daily wear and casual outings.",
    heroImage: "/cat-tshirt.png",
    products: [
      {
        id: "tshirt-001",
        name: "Premium Black Graphic Tee",
        category: "T shirt",
        categorySlug: "t-shirt",
        price: "₹180–₹260",
        moq: "100 pcs",
        fabric: "100% Cotton",
        sizes: "S, M, L, XL, XXL",
        colors: ["#0a0a0a"],
        image: "/T1.png.jpeg",
        imageHover: "/T2.png.jpeg",
        badge: "Bestseller",
      },
      {
        id: "tshirt-002",
        name: "Olive Green Sports Tee",
        category: "T shirt",
        categorySlug: "t-shirt",
        price: "₹180–₹260",
        moq: "100 pcs",
        fabric: "Cotton Pique",
        sizes: "M, L, XL, XXL",
        colors: ["#556B2F"],
        image: "/T2.png.jpeg",
        imageHover: "/T3.png.jpeg",
      },
      {
        id: "tshirt-003",
        name: "Classic Red Printed Tee",
        category: "T shirt",
        categorySlug: "t-shirt",
        price: "₹180–₹260",
        moq: "100 pcs",
        fabric: "Cotton Blend",
        sizes: "S, M, L, XL, XXL",
        colors: ["#DC143C"],
        image: "/T3.png.jpeg",
        imageHover: "/T4.png.jpeg",
        badge: "Trending",
      },
      {
        id: "tshirt-004",
        name: "Earth Brown Casual Tee",
        category: "T shirt",
        categorySlug: "t-shirt",
        price: "₹180–₹260",
        moq: "50 pcs",
        fabric: "Heavy Cotton 220 GSM",
        sizes: "M, L, XL, XXL",
        colors: ["#5C4033"],
        image: "/T4.png.jpeg",
        imageHover: "/T6.png.jpeg",
        badge: "New Arrival",
      },
      {
        id: "tshirt-005",
        name: "Mist Grey Minimalist Tee",
        category: "T shirt",
        categorySlug: "t-shirt",
        price: "₹180–₹260",
        moq: "100 pcs",
        fabric: "Cotton Lycra",
        sizes: "S, M, L, XL",
        colors: ["#808080"],
        image: "/T6.png.jpeg",
        imageHover: "/T7.png.jpeg",
      },
    ],
  },
  {
    slug: "lower",
    name: "Lower",
    tagline: "Track · Jogger · Pajama",
    description:
      "Comfortable lowers, track pants, and joggers for daily wear, sports, and lounge. Available in multiple styles and fabrics.",
    heroImage: "/cat-lower.png",
    products: [
      {
        id: "lower-001",
        name: "Millionaire Edition Black Shorts",
        category: "Lower",
        categorySlug: "lower",
        price: "₹220–₹320",
        moq: "50 pcs",
        fabric: "Premium Terry Cotton",
        sizes: "M, L, XL, XXL",
        colors: ["#0a0a0a"],
        image: "/T7.png.jpeg",
        badge: "Limited Edition",
      },
      {
        id: "lower-002",
        name: "Dry-Fit Track Pants",
        category: "Lower",
        categorySlug: "lower",
        price: "₹220–₹320",
        moq: "50 pcs",
        fabric: "Polyester Dry-Fit",
        sizes: "M, L, XL, XXL",
        colors: ["#0a0a0a", "#191970", "#808080"],
        image: "/lowers.png",
        badge: "Bestseller",
      },
      {
        id: "lower-003",
        name: "Cotton Pajama",
        category: "Lower",
        categorySlug: "lower",
        price: "₹150–₹220",
        moq: "100 pcs",
        fabric: "100% Cotton",
        sizes: "M, L, XL, XXL",
        colors: ["#4169E1", "#808080", "#0a0a0a"],
        image: "/lowers.png",
      },
      {
        id: "lower-004",
        name: "Jogger Pants with Cuff",
        category: "Lower",
        categorySlug: "lower",
        price: "₹280–₹380",
        moq: "50 pcs",
        fabric: "Terry Cotton",
        sizes: "S, M, L, XL, XXL",
        colors: ["#0a0a0a", "#556B2F", "#808080"],
        image: "/lowers.png",
        badge: "Trending",
      },
    ],
  },
  {
    slug: "jeans",
    name: "Jeans",
    tagline: "Slim · Regular · Stretch",
    description:
      "High-quality denim jeans in multiple fits, washes, and sizes. From slim to regular fit, all at wholesale prices.",
    heroImage: "/cat-jeans.png",
    products: [
      {
        id: "jeans-001",
        name: "Slim Fit Dark Wash Jeans",
        category: "Jeans",
        categorySlug: "jeans",
        price: "₹450–₹600",
        moq: "30 pcs",
        fabric: "Denim Stretch",
        sizes: "28, 30, 32, 34, 36",
        colors: ["#191970", "#0a0a0a"],
        image: "/jeans.png",
        badge: "Bestseller",
      },
      {
        id: "jeans-002",
        name: "Regular Fit Blue Jeans",
        category: "Jeans",
        categorySlug: "jeans",
        price: "₹380–₹500",
        moq: "50 pcs",
        fabric: "100% Denim",
        sizes: "28, 30, 32, 34, 36, 38",
        colors: ["#4169E1", "#191970"],
        image: "/jeans.png",
      },
      {
        id: "jeans-003",
        name: "Black Skinny Jeans",
        category: "Jeans",
        categorySlug: "jeans",
        price: "₹420–₹550",
        moq: "30 pcs",
        fabric: "Stretch Denim",
        sizes: "28, 30, 32, 34",
        colors: ["#0a0a0a"],
        image: "/jeans.png",
        badge: "Trending",
      },
    ],
  },
  {
    slug: "kurta-pajama",
    name: "Kurta pajama",
    tagline: "Ethnic · Festive · Cotton",
    description:
      "Traditional and modern men's kurtas for festivals, parties, and daily wear. Premium fabrics with elegant designs.",
    heroImage: "/cat-kurta.png",
    products: [
      {
        id: "kurta-001",
        name: "Plain Cotton Kurta",
        category: "Kurta pajama",
        categorySlug: "kurta-pajama",
        price: "₹300–₹420",
        moq: "30 pcs",
        fabric: "100% Cotton",
        sizes: "S, M, L, XL, XXL",
        colors: ["#FFFFFF", "#F5F5DC", "#87CEEB", "#FFC0CB"],
        image: "/kurta.png",
        badge: "Bestseller",
      },
      {
        id: "kurta-002",
        name: "Embroidered Festive Kurta",
        category: "Kurta pajama",
        categorySlug: "kurta-pajama",
        price: "₹500–₹750",
        moq: "20 pcs",
        fabric: "Silk Blend",
        sizes: "M, L, XL, XXL",
        colors: ["#FFD700", "#800020", "#191970"],
        image: "/kurta.png",
        badge: "Premium",
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return categories.map((c) => c.slug);
}
