import { ResidentialRental } from "@/types/realEstate";

export const residentialRentals: ResidentialRental[] = [
  {
    id: "rent-junction-garden",
    slug: "junction-garden",
    title: "JUNCTION GARDENS | 3 Bedroom Townhouse",
    locationRegion: "Nairobi",
    locationArea: "Lavington",
    bedrooms: 3,
    bathrooms: 3,
    sizeSqm: 0,
    pricePerMonth: 160000,
    currency: "KES",
    status: "Available",
    amenities: [],
    galleryImages: [
      "/images/RENT/residential/JUNCTION%20GARDEN/%E2%84%A2Black_Sky_Lenses-22.jpg",
      "/images/RENT/residential/JUNCTION%20GARDEN/%E2%84%A2Black_Sky_Lenses-27.jpg",
      "/images/RENT/residential/JUNCTION%20GARDEN/%E2%84%A2Black_Sky_Lenses-56.jpg",
      "/images/RENT/residential/JUNCTION%20GARDEN/%E2%84%A2Black_Sky_Lenses-57.jpg",
      "/images/RENT/residential/JUNCTION%20GARDEN/%E2%84%A2Black_Sky_Lenses-65.jpg",
      "/images/RENT/residential/JUNCTION%20GARDEN/%E2%84%A2Black_Sky_Lenses-69.jpg",
      "/images/RENT/residential/JUNCTION%20GARDEN/%E2%84%A2Black_Sky_Lenses-75.jpg",
      "/images/RENT/residential/JUNCTION%20GARDEN/%E2%84%A2Black_Sky_Lenses-97.jpg",
      "/images/RENT/residential/JUNCTION%20GARDEN/%E2%84%A2Black_Sky_Lenses-98.jpg",
    ],
    description:
      "Junction Gardens is a 3-bedroom townhouse rental in Lavington, available at KES 160,000 per month.",
  }
];

const rentalPriority = ["junction-garden"];
residentialRentals.sort((a, b) => {
  const ai = rentalPriority.indexOf(a.slug);
  const bi = rentalPriority.indexOf(b.slug);
  if (ai === -1 && bi === -1) return 0;
  if (ai === -1) return 1;
  if (bi === -1) return -1;
  return ai - bi;
});
