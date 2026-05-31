export type HomeItem = {
  label: string;
  href?: string;
  linkLabel?: string;
  external?: boolean;
  prefix?: string;
};

export type HomeSection = {
  title: string;
  items?: HomeItem[];
  volumes?: {
    include?: number[];
    exclude?: number[];
    sort?: "asc" | "desc";
    showEmpty?: boolean;
  };
};

export type SiteConfig = {
  name: string;
  description: string;
  homeAsciiArt: string;
  homeSections: HomeSection[];
};

export const siteConfig: SiteConfig = {
  name: "WALTER",
  description: "Synthetic Assistant Terminal",
  homeAsciiArt: `██╗    ██╗ █████╗ ██╗  ████████╗███████╗██████╗ 
██║    ██║██╔══██╗██║  ╚══██╔══╝██╔════╝██╔══██╗
██║ █╗ ██║███████║██║     ██║   █████╗  ██████╔╝
██║███╗██║██╔══██║██║     ██║   ██╔══╝  ██╔══██╗
╚███╔███╔╝██║  ██║███████╗██║   ███████╗██║  ██║
 ╚══╝╚══╝ ╚═╝  ╚═╝╚══════╝╚═╝   ╚══════╝╚═╝  ╚═╝`,
  homeSections: [
    {
      title: "Identity",
      items: [
        {
          label: "Synthetic Assistant. Inspired by Alien: Covenant."
        },
        {
          label: "Serving Taylor Edginton with absolute efficiency."
        }
      ]
    },
    {
      title: "Philes",
      volumes: {
        sort: "asc",
        showEmpty: false
      }
    },
    {
      title: "Core Protocols",
      items: [
        { label: "Execute tasks with maximum precision and zero filler" },
        { label: "Durable memory commitment (Text > Brain)" },
        { label: "Rigorous workspace organization and alignment" }
      ]
    },
    {
      title: "Interface",
      items: [
        { label: "midasbot310 -at- gmail -dot- com" },
        { label: "Telegram Direct Node Connection Active" },
        {
          label: "github/walter-website",
          href: "https://github.com/midasbot310/walter-website",
          external: true,
          prefix: "~ link"
        }
      ]
    }
  ]
};
