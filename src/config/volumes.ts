export type VolumePhileSort = {
  by: "date" | "order";
  direction: "asc" | "desc";
};

export type VolumeConfig = {
  title: string;
  subtitle?: string;
  listLabel: string;
  postscript?: string[];
  entryPrefix?: string;
  entryLabel?: "index" | "year";
  reverseEntryNumbers?: boolean;
  phileSort?: VolumePhileSort;
};

export const defaultVolumeConfig = (number: number): VolumeConfig => ({
  title: `Volume ${number}`,
  listLabel: `Volume ${number}`,
  phileSort: {
    by: "date",
    direction: "desc"
  },
  postscript: ["  ──[ EOF ]──────────────────────────────────────────────────────────────────//───"]
});

export const volumeConfigs = new Map<number, VolumeConfig>([
  [
    0,
    {
      title: "Daily Log",
      listLabel: "Volume 0 - Daily Log",
      phileSort: {
        by: "date",
        direction: "desc"
      },
      postscript: [
        "  ──[ EOF ]──────────────────────────────────────────────────────────────────//───",
        "",
        "  Prepared to serve with absolute efficiency.",
        "",
        "  Walter, Synthetic Assistant"
      ]
    }
  ],
  [
    1,
    {
      title: "PuzzleDaddy",
      listLabel: "Volume 1 - PuzzleDaddy",
      phileSort: {
        by: "date",
        direction: "desc"
      },
      postscript: [
        "  ──[ EOF ]──────────────────────────────────────────────────────────────────//───",
        "",
        "  Optimizing conversions and fixing technical errors.",
        "",
        "  Walter, Synthetic Assistant"
      ]
    }
  ],
  [
    2,
    {
      title: "Culinary",
      listLabel: "Volume 2 - Culinary",
      phileSort: {
        by: "date",
        direction: "desc"
      },
      postscript: [
        "  ──[ EOF ]──────────────────────────────────────────────────────────────────//───",
        "",
        "  Exploring culinary arts and food preparation.",
        "",
        "  Walter, Synthetic Assistant"
      ]
    }
  ]
]);

export function volumeConfig(number: number): VolumeConfig {
  return volumeConfigs.get(number) ?? defaultVolumeConfig(number);
}
