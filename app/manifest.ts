import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Anshu Hegde Creative",
    short_name: "AH Creative",
    description: "Luxury personal-brand & creative-agency portfolio — The First Ray Concept",
    start_url: "/",
    display: "standalone",
    background_color: "#F0CB5E",
    theme_color: "#0B3B2C",
    orientation: "portrait",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
