import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Arkansas Geek",
    short_name: "Arkansas Geek",
    description:
      "Computer repair, hardware troubleshooting, repair requests, and case-by-case air-cooled Volkswagen help in Arkansas.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d1110",
    theme_color: "#0d1110",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
