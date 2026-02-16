export type MediaItem =
    | { type: "image"; src: string; alt: string }
    | { type: "gif"; src: string; alt: string }
    | { type: "video"; src: string; poster?: string };

export type CardLink = {
    label: string;           // 버튼에 보일 텍스트
    href: string;            // 링크
    kind?: "code" | "doc" | "issue" | "etc"; // 선택(필터/스타일용)
};

export type FeatureCard = {
    title: string;
    summary: string;
    media?: MediaItem[];
    points?: string[];
    notionHref?: string;
    links?: CardLink[];
};

export type CaseSection = {
    kind: "case";
    id: string;
    title: string;
    subtitle?: string;
    cards: FeatureCard[];
};

export type BulletsSection = {
    kind: "bullets";
    id: string;
    title: string;
    bullets: string[];
};

export type ProjectSection = CaseSection | BulletsSection;

export type ProjectThumb = {
    src: string;
    alt: string;
};

export type ProjectData = {
    slug: string;
    title: string;
    tagline?: string;
    headline?: string;
    description?: string;
    tags?: string[];
    primaryMedia?: MediaItem;
    thumb?: ProjectThumb;
    sections: ProjectSection[];
    notionLabel?: string;
};