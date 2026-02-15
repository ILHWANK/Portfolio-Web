export type MediaItem =
    | { type: "image"; src: string; alt: string }
    | { type: "gif"; src: string; alt: string }
    | { type: "video"; src: string; poster?: string };

export type FeatureCard = {
    title: string;
    summary: string;
    media?: MediaItem[];
    points?: string[];
    notionHref?: string;
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

export type ProjectData = {
    slug: string;
    title: string;
    tagline?: string;
    headline?: string;
    description?: string;
    tags?: string[];
    primaryMedia?: MediaItem;
    sections: ProjectSection[];
};

const ROOT = `${import.meta.env.BASE_URL}media/projects/oz-rewrite`;
const IMG = `${ROOT}/image`;
const VID = `${ROOT}/video`;

const ozRewrite: ProjectData = {
    slug: "oz-rewrite",
    title: "OZ:Rewrite",
    tagline: "Unity(UGUI) 기반 라이브 서비스 클라이언트",
    headline: "라이브 서비스 UI·연출·최적화 사례를 미디어 중심으로 정리",
    description:
        "상점·친구·메일·미션·인벤토리 등 핵심 UI 콘텐츠와 이벤트 미니게임/왕국/스테이지/영웅 정보/소환 시스템을 설계·구현하고, 운영 이슈를 구조적으로 개선했습니다.",
    tags: ["Unity", "UGUI", "Addressables", "UniTask", "Timeline", "Spine"],

    sections: [
        // -----------------------------
        // 0. 기술 스택
        // -----------------------------
        {
            kind: "bullets",
            id: "tech-stack",
            title: "0. 기술 스택",
            bullets: [
                "Unity(UGUI) 기반 라이브 서비스 클라이언트 개발",
                "Addressables 운영 / UniTask 비동기 구조 / DOTween · Timeline 연출",
                "CRIWARE 영상·오디오 / Cinemachine · NavMesh",
                "LoopScrollRect / Spine / Shader",
                "Unity Profiler · Xcode Instruments · Memory Profiler",
                "Jenkins · Jira · Confluence · Slack / Rider",
                "C# · 객체지향 설계 · 디자인 패턴 기반 구조화",
            ],
        },

        // -----------------------------
        // 1. 라이브 서비스 핵심 콘텐츠 UI 시스템
        // -----------------------------
        {
            kind: "bullets",
            id: "core-ui-overview",
            title: "1. 라이브 서비스 핵심 콘텐츠 UI 시스템",
            bullets: [
                "담당: 상점/친구/메일/창고(인벤토리)/미션 등 핵심 UI 콘텐츠 전반 설계·구현",
                "문제: 재화/구매 방식/개편 요청이 반복되어 구조가 파편화될 위험",
                "목표: 유저 불편 최소화 + 변경을 흡수 가능한 재사용 구조 유지",
            ],
        },
        {
            kind: "case",
            id: "core-ui-cases",
            title: "1-1. 구현 / 개선 사례",
            subtitle: "대표 UI 콘텐츠별 미디어(이미지/영상) + 핵심 포인트",
            cards: [
                {
                    title: "Shop",
                    summary: "공통 Slot + UIStyle로 다양한 재화/구매 분기 UI를 통합",
                    media: [
                        {type: "image", src: `${IMG}/shop_main1.jpg`, alt: "상점 메인"},
                        {type: "image", src: `${IMG}/shop_payment2.jpg`, alt: "상점 다수 구매"},
                        {type: "image", src: `${IMG}/shop_main2.jpg`, alt: "상점 메인2"},
                        {type: "image", src: `${IMG}/shop_payment1.jpg`, alt: "상점 단일 구매"},
                    ],
                    points: [
                        "UIStyle 개념으로 공통 Slot Prefab 구조화(표현 차이만 분리)",
                        "일괄/개별/제한 수량 구매 등 분기 지원 + 소모 재화 변경 대응",
                        "재화 추가에도 최소 수정으로 확장 가능하도록 Prefab/코드 설계",
                        "구매 확인/결과/경고 등 구매 관련 팝업 UI 전반 개발",
                        "구조 재사용으로 이후 ‘왕국 자판기’ 콘텐츠를 빠르게 구현(상점 Prefab/Code Common 공용화 포함)",
                    ],
                    notionHref: "#",
                },

                {
                    title: "Mail",
                    summary: "대량 메일에서도 서버 부하를 줄이는 점진 로딩 구조",
                    media: [
                        {type: "image", src: `${IMG}/mail_main.jpg`, alt: "메일 리스트"},
                        {type: "image", src: `${IMG}/mail_main2.jpg`, alt: "스크롤 후 추가 로딩"},
                        {type: "gif", src: `${IMG}/mail_scroll.gif`, alt: "보상 수령"},
                    ],
                    points: [
                        "메일 수신/정렬/보상 수령 등 메일 기능 전반 개발",
                        "전량 1회 수신 방식의 서버 부하 이슈를 점진 로딩으로 개선",
                        "예: 50개 단위 요청 → 40개 열람 시 51~100 추가 요청",
                        "TCP 딜레이 체감을 줄이기 위해 약간의 여유를 두고 다음 구간을 선요청",
                    ],
                    notionHref: "#",
                },

                {
                    title: "Friend",
                    summary: "확장(지원 영웅) 대비 진입 구조 + 테스트 효율 개선",
                    media: [
                        {type: "image", src: `${IMG}/friend_main.jpg`, alt: "친구 메인"},
                        {type: "image", src: `${IMG}/friend_info.jpg`, alt: "Info Popup"},
                        {type: "image", src: `${IMG}/friend_main2.jpg`, alt: "검색"},
                        {type: "image", src: `${IMG}/friend_main3.jpg`, alt: "등록"},
                    ],
                    points: [
                        "추후 ‘지원 영웅’ 기능을 고려해 Panel 진입점/기본 구조 선구축",
                        "개발/테스트 효율을 위한 테스트 Packet + Cheat(Tool) 추가",
                        "UID → IMID 검색 기준 변경에 맞춰 검색/유효성 검사 로직 수정",
                        "친구 등록/정보 확인용 Info Popup 개발",
                    ],
                    notionHref: "#",
                },

                {
                    title: "Mission",
                    summary: "일일/주간/업적/이벤트 미션을 공통 구조로 분리",
                    media: [
                        {type: "image", src: `${IMG}/mission.jpg`, alt: "탭 전환1"},
                        {type: "image", src: `${IMG}/mission3.jpg`, alt: "탭 전환2"},
                        {type: "image", src: `${IMG}/mission1.jpg`, alt: "탭 보상 수령1"},
                        {type: "image", src: `${IMG}/mission2.jpg`, alt: "탭 보상 수령2"},
                    ],
                    points: [
                        "일일/주간/업적/전체 미션 기능 전반 개발",
                        "이벤트 미션에도 재사용 가능하도록 기본 로직/ UI 분리 설계",
                    ],
                    notionHref: "#",
                },

                {
                    title: "Inventory",
                    summary: "기간성 아이템/만료 처리 등 운영 이슈를 구조적으로 반영",
                    media: [
                        {type: "image", src: `${IMG}/inventory_main.jpg`, alt: "인벤토리 메인"},
                        {type: "image", src: `${IMG}/inventory_sub1.jpg`, alt: "바로가기/획득 경로"},
                        {type: "image", src: `${IMG}/inventory_sub2.jpg`, alt: "안내 메시지"},
                        {type: "image", src: `${IMG}/inventory_shortcut.jpg`, alt: "바로가기 이동"},
                    ],
                    points: [
                        "창고(인벤토리) 기본 기능 개발 + UI 리뉴얼 대응",
                        "기간 제한 아이템 남은 기간 표기",
                        "만료/이벤트 아이템 변환 재화 안내 팝업",
                        "서버와 협업해 만료 시점을 통일 → 불필요 Packet 최소화",
                    ],
                    notionHref: "#",
                },

                {
                    title: "Event UI",
                    summary: "이벤트 메인 + 상점/미션 재활용 구조로 개발 속도 단축",
                    media: [
                        {type: "image", src: `${IMG}/event_main.jpg`, alt: "이벤트 메인1"},
                        {type: "image", src: `${IMG}/event_shop.jpg`, alt: "상점 재활용"},
                        {type: "image", src: `${IMG}/event_mission.jpg`, alt: "미션 재활용"},
                        {type: "image", src: `${IMG}/event_bonus_character.jpg`, alt: "이벤트 보너스 효과 Popup"},
                        {type: "image", src: `${IMG}/event_character.jpg`, alt: "이벤트 보너스 효과 편성 Panel"},
                    ],
                    points: [
                        "이벤트 메인 화면 전반 개발(공용화 작업은 다른 담당)",
                        "이벤트 재화 보너스/효과 관련 팝업 및 UI 작업",
                        "이벤트 상점/미션은 기존 구조/코드 재사용하여 개발",
                    ],
                    notionHref: "#",
                },

                {
                    title: "기타 UI/구조 개선",
                    summary: "운영/기획 변경을 ‘땜질’이 아니라 구조 개선으로 흡수",
                    points: [
                        "아이템 확률 띠지(높음/보통/낮음) 기능 추가 + 테이블 구조 변경 방향 제안",
                        "아이템 설명/획득 경로 Popup 리뉴얼: 설명 + 획득경로 통합, Command 기반 바로가기 로직 개선",
                        "UI 구조/Addressables 구조 변경 대응: 기존 코드 전반 정리·수정",
                        "해상도 대응 컴포넌트(ResolutionBG/Fit/Effect) 개발 + SafeArea 고려",
                    ],
                    notionHref: "#",
                },
            ],
        },
        {
            kind: "bullets",
            id: "core-ui-result",
            title: "1-2. 결과",
            bullets: [
                "핵심 UI 전반을 안정적으로 운영 가능한 구조로 정립",
                "재화 추가/기획 변경/UI 개편에도 최소 수정으로 대응",
                "서버 부하와 유저 체감 성능을 함께 고려한 구조 개선",
                "이후 콘텐츠 개발 시 UI/로직 재사용으로 개발 속도 단축",
            ],
        },

        // -----------------------------
        // 2. 이벤트용 미니게임 시스템 구현
        // -----------------------------
        {
            kind: "bullets",
            id: "event-minigame-overview",
            title: "2. 이벤트용 미니게임 시스템 구현",
            bullets: [
                "담당: 이벤트 기간 한정 미니게임 콘텐츠 시스템 전반",
                "영웅 투표/타일 깨기/술래 찾기 등 서로 다른 규칙의 미니게임 3종 구현",
                "문제: 짧은 기간, 협업 일정 불일치로 클라가 병목이 되기 쉬움",
                "목표: 단순 기능 구현을 넘어 연출 완성도까지 확보",
            ],
        },
        {
            kind: "case",
            id: "event-minigame-cases",
            title: "2-1. 미니게임 3종",
            subtitle: "미니게임 영상 + 핵심 포인트",
            cards: [
                {
                    title: "술래 찾기",
                    summary: "Factory/Strategy/State로 생성·행동을 분리해 확장 가능한 구조",
                    media: [
                        {
                            type: "video",
                            src: `${VID}/taggerfind.mp4`,
                            poster: `${IMG}/taggerfind.png`,
                        },
                    ],
                    points: [
                        "SD 캐릭터 Factory 생성(상태/데이터에 따라 사이즈/속도/대사/오브젝트 등 변형)",
                        "술래/일반 행동 차이를 Strategy로 분리",
                        "공통 행동은 State로 관리(Idle/Tagger 등)",
                        "미니게임 맵 선제 제작으로 아트 협업 지원",
                    ],
                    notionHref: "#",
                },
                {
                    title: "타일 깨기",
                    summary: "획득·파괴·발견·라운드 전환까지 UI/로직을 신규 구현",
                    media: [
                        {
                            type: "video",
                            src: `${VID}/tilebreak.mp4`,
                            poster: `${IMG}/tilebreak.png`,
                        }
                    ],
                    points: [
                        "이벤트 재화로 타일 획득/파괴, 아이템 발견 단계별 연출",
                        "NPC 대사/라운드 전환/폭탄 다중 파괴 기능",
                        "보상 조건 달성 시 다음 라운드로 진행되는 구조",
                    ],
                    notionHref: "#",
                },
                {
                    title: "영웅 투표",
                    summary: "보상/연출 분기 + 라운드 종료 연출까지 포함한 이벤트 구조",
                    media: [
                        {
                            type: "video",
                            src: `${VID}/vote.mp4`,
                            poster: `${IMG}/vote.png`,
                        },
                    ],
                    points: [
                        "기존 메인 패널 기반으로 보상 정보 팝업/관련 UI 추가",
                        "투표 시 캐릭터 투표 연출 적용 + 재화 상태에 따른 분기",
                        "라운드 종료 MVP 여부에 따른 차별화 연출",
                    ],
                    notionHref: "#",
                },
            ],
        },
        {
            kind: "bullets",
            id: "event-minigame-result",
            title: "2-2. 결과",
            bullets: [
                "이벤트 기간 내 미니게임 콘텐츠를 문제 없이 개발·서비스",
                "유사 이벤트에서 구조/코드 재활용 가능",
                "서버·기획·UI 간 병목을 완화하며 협업에 기여",
                "연출 중심 개발 경험을 통해 체감 완성도 향상",
            ],
        },

        // -----------------------------
        // 3. 왕국 콘텐츠 & 연출 시스템
        // -----------------------------
        {
            kind: "bullets",
            id: "kingdom-overview",
            title: "3. 왕국 콘텐츠 & 연출 시스템",
            bullets: [
                "담당: 왕국 내 상호작용 콘텐츠의 UI/로직/연출 흐름 전반",
                "선택 → 연출 → 결과 반영 구조 구현 및 기존 구조 개선",
                "문제: 잦은 기획 변경/연출 추가, 아이소메트릭 정렬 제약, 일정 불일치로 조율 필요",
            ],
        },
        {
            kind: "case",
            id: "kingdom-cases",
            title: "3-1. 대표 콘텐츠",
            cards: [
                {
                    title: "왕국 초대",
                    summary: "정렬 제약을 해소하고 연출 확장이 가능한 기반으로 구조 개선",
                    media: [{
                        type: "video",
                        src: `${VID}/kingdom_Invitation_Interaction.mp4`,
                        poster: `${IMG}/kingdom_Invitation_Interaction.png`,
                    }],
                    points: [
                        "아이소메트릭 정렬 문제로 ‘건물 뒤 등장 연출’이 불가능했던 구조 개선",
                        "기존 기능 영향 최소화하며 코드 전반 구조 정리",
                        "상호작용 이슈 수정 + 연출 추가가 가능한 상태로 개선",
                        "NavMesh 생성/MapResource 생성 흐름 정리·단순화",
                    ],
                    notionHref: "#",
                },
                {
                    title: "왕국 선물",
                    summary: "상호작용 방식 개선 + 연출 타이밍/등장 NPC 확장",
                    media: [{
                        type: "video",
                        src: `${VID}/kingdom_present.mp4`,
                        poster: `${IMG}/kingdom_present.png`,
                    }],
                    points: [
                        "직접 상호작용 기반 → UI 버튼 기반으로 선물 가능한 캐릭터 연출 확인",
                        "호감도 연출 유무에 따라 애니메이션 재생 타이밍 분기",
                        "이벤트 진행 시 NPC 추가를 위한 테이블/등장 연출 로직 개선",
                    ],
                    notionHref: "#",
                },
                {
                    title: "왕국 운세",
                    summary: "선택 → 결과 → 보상 획득까지 UI 흐름 정리",
                    media: [
                        {type: "image", src: `${IMG}/luck1.gif`, alt: "운세 창 열기"},
                        {type: "image", src: `${IMG}/luck2.gif`, alt: "선택/보상"},
                        {type: "image", src: `${IMG}/luck3.gif`, alt: "운세 창 닫기"},
                    ],
                    points: [
                        "3개 오브젝트 중 선택 → 서버 결과 기반 운세/보상 제공",
                        "운세 전/후 왕국 내 건물 이미지 변경",
                        "재오픈 시 이전 결과 표기",
                    ],
                    notionHref: "#",
                },
                {
                    title: "왕국 스케줄(아르바이트)",
                    summary: "조건(미오픈/레벨) 반영 + 완료 연출 추가",
                    media: [
                        {type: "image", src: `${IMG}/kingdom_schedule_main.jpg`, alt: "스케줄 메인"},
                        {type: "image", src: `${IMG}/kingdom_schedule1.jpg`, alt: "조건/잠금"},
                        {type: "image", src: `${IMG}/kingdom_schedule3.jpg`, alt: "선택/진행"},
                        {type: "gif", src: `${IMG}/schedule.gif`, alt: "완료 연출"},
                    ],
                    points: [
                        "호감도 상승을 위한 스케줄 콘텐츠",
                        "건물 상호작용/진입 팝업 개선",
                        "미오픈/건물 레벨 조건 추가 및 수정",
                        "스케줄 완료 연출 추가",
                    ],
                    notionHref: "#",
                },
                {
                    title: "왕국 자판기",
                    summary: "기획 변경(레벨 잠금) 대응 + 연출 구현 지원",
                    media: [
                        {type: "gif", src: `${IMG}/vendingmachine.gif`, alt: "자판기 Main1"},
                        {type: "gif", src: `${IMG}/vendingmachine2.gif`, alt: "자판기 Main2"},
                    ],
                    points: [
                        "Gold 상품 리스트 기반 아이템 목록/구매 기능",
                        "왕국 레벨에 따른 잠금 추가(테이블 구조 방향 협의 + 서버 조율 후 코드 반영)",
                        "UI 담당자 대신 구현 방향/수정 방법 정리 전달로 연출 적용 지원",
                    ],
                    notionHref: "#",
                },
                {
                    title: "왕국 정보/랭크 UI",
                    summary: "단계별 보상 확인 + 단계 상승 전용 팝업 추가",
                    media: [
                        {type: "image", src: `${IMG}/kingdom_info_main.jpg`, alt: "왕국 정보"},
                        {type: "image", src: `${IMG}/kingdom_info.jpg`, alt: "성장 재화 및 보상"},
                        {type: "image", src: `${IMG}/kingdom_info2.jpg`, alt: "랭크 별 보상"},
                        {type: "gif", src: `${IMG}/growth.gif`, alt: "누적 보상 수령"},
                    ],
                    points: [
                        "왕국 랭크 보상 수령 중심 UI를 단계별 확인 가능하도록 개선",
                        "왕국 단계 상승을 위한 전용 팝업 추가",
                    ],
                    notionHref: "#",
                },
                {
                    title: "만찬(미공개)",
                    summary: "미공개 콘텐츠로 미디어 없이 흐름/설계 의도 중심 정리",
                    points: [
                        "도우미 영웅/조리 음식 선택(특정 영웅 특수 효과)",
                        "타이밍 맞추기 미니게임",
                        "결과 요리 생성 → 초대 영웅 선택 → 초대 연출 → 버프/호감도 적용",
                    ],
                    notionHref: "#",
                },
            ],
        },
        {
            kind: "bullets",
            id: "kingdom-result",
            title: "3-2. 결과",
            bullets: [
                "연출 확장 제약 해소 + 기획 변경에도 유연한 기반 확보",
                "정렬/상호작용 이슈 해결로 안정성 향상",
                "왕국과 유사한 맵 콘텐츠를 더 빠르게 제작 가능한 구조 정립",
            ],
        },

        // -----------------------------
        // 4. 스테이지 시스템 & 개발 툴
        // -----------------------------
        {
            kind: "bullets",
            id: "stage-overview",
            title: "4. 스테이지 시스템 & 개발 툴",
            bullets: [
                "담당: 스테이지 구조 개선/기능 개발/제작 툴 설계",
                "문제: 담당자 부재로 임시 구조, 반복 작업/테스트 기준 부재",
                "해결: 제작 규칙 정립 + 툴 도입 + 2D→3D 구조 전환 + 로딩/메모리 개선",
            ],
        },
        {
            kind: "case",
            id: "stage-cases",
            title: "4-1. 대표 사례",
            cards: [
                {
                    title: "스테이지 전반 조작",
                    summary: "이동/연출/보물찾기 등 확장 기반을 포함한 메인 기능 개발",
                    media: [{
                        type: "video",
                        src: `${VID}/stage_main.mp4`,
                        poster: `${IMG}/stage.jpg`,
                    }],
                    points: [
                        "캐릭터 이동 연출용 Effect 기능 추가",
                        "특정 칸 이상 이동 시 순간 이동 기능 및 연출",
                        "대표 캐릭터 변경 시 StageMap SD 표시 연동",
                        "보물 찾기 기능 추가",
                    ],
                    notionHref: "#",
                },
                {
                    title: "스테이지 간편 이동",
                    summary: "기존 이동 UX 개선 + 미완료 미션 스테이지 진입까지 확장",
                    media: [
                        {type: "image", src: `${IMG}/stage_shortcut.jpg`, alt: "스테이지 바로 가기 관련 UI"},
                        {type: "image", src: `${IMG}/stage_non_fulfillment.jpg`, alt: "미션 미달성"},
                        {type: "image", src: `${IMG}/stage_shortcutpopup.jpg`, alt: "간편 이동 Main"},
                        {type: "gif", src: `${IMG}/stageshortcut.gif`, alt: "Map 전환"},
                    ],
                    points: [
                        "간편 이동 전용 팝업 UI 개발",
                        "미션 미완료 스테이지로도 이동 가능하도록 확장",
                    ],
                    notionHref: "#",
                },
                {
                    title: "제작 툴 & 2D→3D 전환",
                    summary: "반복 작업 감소 + 연출/카메라 확장 가능하도록 구조 자체를 전환",
                    points: [
                        "StageSpot 기준 데이터 생성 → 다수 스팟 일괄 적용(리소스 변경도 일괄 반영)",
                        "2D MapResource를 3D 환경에 맞게 변환하는 툴 기능 추가",
                        "3D 구조 전환으로 캐릭터 정렬/카메라 연출 확장 기반 확보",
                        "Cinemachine FOV 렌즈 효과로 2D 이미지 기반 입체감 연출",
                        "레이어 정렬 규칙 확정",
                    ],
                    notionHref: "#",
                },
                {
                    title: "로드/메모리 관리 개선",
                    summary: "이전 맵 해제 + 페이드 연출로 체감 지연을 자연스럽게 처리",
                    points: [
                        "스테이지 이동 시 로드만 하고 해제하지 않아 메모리 이슈 발생",
                        "ResourceManager로 이전 맵 리소스를 즉시 해제하도록 수정",
                        "로드/해제 체감 지연은 Fade 연출로 흡수",
                    ],
                    notionHref: "#",
                },
            ],
        },
        {
            kind: "bullets",
            id: "stage-result",
            title: "4-2. 결과",
            bullets: [
                "제작 규칙/테스트 기준 정립으로 안정적인 제작 가능",
                "툴 도입으로 반복 작업 감소 + 제작 효율 향상",
                "3D 구조 전환으로 연출/콘텐츠 확장성 확보",
                "메모리 관리 개선으로 이동 시 안정성/체감 품질 향상",
            ],
        },

        // -----------------------------
        // 5. 영웅 정보 & 성장 UI 시스템
        // -----------------------------
        {
            kind: "bullets",
            id: "hero-overview",
            title: "5. 영웅 정보 & 성장 UI 시스템",
            bullets: [
                "담당: 장비/성장/스킬/소속 등 정보 밀도 높은 UI 전반 설계·구현",
                "문제: 정보 집중으로 UI 복잡도 증가, 다른 콘텐츠로의 재사용 요구, 기획 변경(스킬 확장) 발생",
                "해결: 공통 데이터 구조로 확장 + UI 리뉴얼 대응",
            ],
        },
        {
            kind: "case",
            id: "hero-cases",
            title: "5-1. 대표 사례",
            cards: [
                {
                    title: "기본 정보",
                    summary: "레벨/장비/등급/스킬 등 핵심 정보 구성(4컷)",
                    media: [
                        {type: "image", src: `${IMG}/character_equipment.jpg`, alt: "장비"},
                        {type: "image", src: `${IMG}/character_level.jpg`, alt: "레벨"},
                        {type: "image", src: `${IMG}/character_grade.jpg`, alt: "등급"},
                        {type: "image", src: `${IMG}/character_skill.jpg`, alt: "스킬"},
                    ],
                    points: [
                        "영웅 장비 및 레벨, 등급, 스킬 화면 리뉴얼",
                        "각 기능별 기본 로직에 기능 및 연출 추가",
                        "케릭터 Level 성장 로직 수정",
                    ],
                    notionHref: "#",
                },
                {
                    title: "장비 강화",
                    summary: "장비 강화 연출 영상",
                    media: [{
                        type: "video",
                        src: `${VID}/character_equipment.mp4`,
                        poster: `${IMG}/character_equipment_upgrade.png`,
                    }],
                    points: [
                        "장비 착용 및 성장 팝업 개발",
                        "장비 레벨 및 등급 성장 연출 추가",
                        "경험치 관련 기본 로직 추가",
                    ],
                    notionHref: "#",
                },
                {
                    title: "상세 정보",
                    summary: "대표 이미지 3~4 + 상세 보기 GIF 1 (5컷)",
                    media: [
                        {type: "image", src: `${IMG}/character_info2.jpg`, alt: "상세1"},
                        {type: "image", src: `${IMG}/character_info.jpg`, alt: "상세2"},
                        {type: "image", src: `${IMG}/character_world_map.jpg`, alt: "상세3"},
                        {type: "gif", src: `${IMG}/characterInfo1.gif`, alt: "상세4"},
                        {type: "gif", src: `${IMG}/characterInfo2.gif`, alt: "다른 컨텐츠 에서 영웅 상세 정보 Open"},
                    ],
                    points: [
                        "영웅 정보/소속 정보/소속 시너지/월드맵(World Map) 형태 정보 UI",
                        "영웅 전용 Addressables → Common 데이터 구조로 변경해 다른 화면에서도 재사용",
                        "리뉴얼 대응: 기존 구조 유지하면서 UI 변경에 맞춰 로직 정리",
                    ],
                    notionHref: "#",
                },
                {
                    title: "스킬 태그 & 스킬 정보",
                    summary: "스킬 효과 태그 + 상세 팝업으로 정보 탐색 UX 개선",
                    media: [
                        {type: "image", src: `${IMG}/character_skill1.jpg`, alt: "스킬 설명 팝업"},
                        {type: "image", src: `${IMG}/character_skill_tooltip.jpg`, alt: "스킬 태그 / 상세"},
                    ],
                    points: [
                        "스턴/흡혈/소환 등 스킬 효과 태그 기능 구현",
                        "태그 선택 시 상세 팝업, 스킬 클릭 시 설명 팝업",
                        "특정 레벨 이후 확장 효과 반영을 위한 테이블 구조 방향 협의/반영",
                        "정보 창 내부/외부 모두 동일 기준으로 표시되도록 구조 정리",
                    ],
                    notionHref: "#",
                },
            ],
        },
        {
            kind: "bullets",
            id: "hero-result",
            title: "5-2. 결과",
            bullets: [
                "영웅 정보/성장 UI를 확장 가능한 구조로 정리",
                "소환/정보 확인 등 여러 콘텐츠에서 공통 활용 가능",
                "기획 변경 및 UI 리뉴얼에도 안정적으로 대응",
            ],
        },

        // -----------------------------
        // 6. 소환 시스템 & 연출 최적화
        // -----------------------------
        {
            kind: "bullets",
            id: "summon-overview",
            title: "6. 소환 시스템 & 연출 최적화",
            bullets: [
                "담당: 소환 UI 구조 개선 + 연출 흐름 설계 + 리소스 로딩 최적화 + 연출 툴 제공",
                "문제: 영상/배너/다수 캐릭터 확장으로 메모리 급증, 연출 단계 증가로 이질감, 스킵 기능 추가",
                "해결: 단계 재정리 + 단계별 로드/해제 + Timeline 기반 툴 제공",
            ],
        },
        {
            kind: "case",
            id: "summon-cases",
            title: "6-1. 대표 사례",
            cards: [
                {
                    title: "소환 UI",
                    summary: "영상+배너+다수 캐릭터 구조로 전환(메모리 최적화 포함)",
                    media: [
                        {type: "image", src: `${IMG}/summon_main.jpg`, alt: "소환 메인"},
                        {type: "gif", src: `${IMG}/summon_banner.gif`, alt: "배너 전환"},
                        {type: "gif", src: `${IMG}/summon_video.gif`, alt: "영상 전환"},
                    ],
                    points: [
                        "캐릭터 소개 영상(CRIWARE) 전량 로드로 인한 메모리 이슈 확인",
                        "선택 캐릭터 1명만 로드 → 변경 시 이전 영상 해제 방식으로 개선",
                        "영상↔배너 전환이 어색한 부분은 UI 팀과 협업해 전환 연출 추가",
                    ],
                    notionHref: "#",
                },
                {
                    title: "소환 연출 흐름",
                    summary: "영상 → 이펙트 → Fade → 캐릭터 등장 → 결과 화면(스킵 대응)",
                    media: [
                        {
                            type: "video",
                            src: `${VID}/summon_no_skip.mp4`,
                            poster: `${IMG}/summon_no_skip.png`,
                        },
                        {type: "gif", src: `${IMG}/summon_skip1.gif`, alt: "결과 스킵"},
                        {type: "gif", src: `${IMG}/summon_skip2.gif`, alt: "초반 영상 스킵"},
                    ],
                    points: [
                        "연출 단계 재정리로 일관된 흐름 확보",
                        "전환 이질감 해소를 위해 Fade 단계 도입",
                        "특정 단계에서 Skip이 발생해도 흐름이 끊기지 않도록 전체 조정",
                    ],
                    notionHref: "#",
                },
                {
                    title: "Timeline 기반 연출 툴",
                    summary: "Base Timeline 제공 + Spine 커스텀 제어 확장",
                    media: [{
                        type: "video",
                        src: `${VID}/23_summon_timeline.mp4`,
                        poster: `${IMG}/23_summon_timeline.png`,
                    }],
                    points: [
                        "UI 팀이 Timeline으로 연출을 조정/확장 가능하도록 기반 제공",
                        "Timeline만으로 어려운 Spine 연출을 위한 Custom Timeline 기능 추가",
                        "3성 전조 연출 등 추가 연출을 별도 Timeline로 확장",
                    ],
                    notionHref: "#",
                },
                {
                    title: "연출 리소스 관리",
                    summary: "단계 종료 시 불필요 리소스 즉시 해제로 안정성 확보",
                    points: [
                        "이펙트/사운드/영상 동시 로드로 메모리 증가 문제 대응",
                        "단계 종료 시 불필요 리소스 즉시 해제 구조로 수정",
                        "3성 관련 리소스 Addressables를 Common으로 전환해 다른 콘텐츠에서도 재사용",
                    ],
                    notionHref: "#",
                },
            ],
        },
        {
            kind: "bullets",
            id: "summon-result",
            title: "6-2. 결과",
            bullets: [
                "소환 연출 메모리 이슈 해소 + 단계 증가에도 일관된 경험 제공",
                "스킵/기획 변경/연출 추가에도 빠르게 대응 가능한 구조 확보",
                "다른 콘텐츠에서도 재사용 가능한 형태로 확장",
            ],
        },

        // -----------------------------
        // 7. 작업 환경 및 기술 별 작업 내용 요약
        // -----------------------------
        {
            kind: "bullets",
            id: "work-summary",
            title: "7. 작업 환경 및 기술 별 작업 내용 요약",
            bullets: [
                "개발/협업: Unity(UGUI), Rider, Jira/Confluence/Slack, Jenkins, AssetPipeline/AssetBundle 운용",
                "설계: 라이브 서비스 핵심 UI 전반 설계·구현, 의존성 조율, 확장 가능한 구조로 리팩토링",
                "비동기/연출: UniTask 흐름 제어, DOTween UI 애니메이션, Timeline 기반 연출 구조/커스텀 확장, CRIWARE 로드/해제 최적화",
                "리소스/최적화: Addressables 로드·캐시·해제 전략, Profiler/Xcode Instruments/Memory Profiler로 분석",
                "플레이/맵: LoopScrollRect 대량 리스트, NavMesh 이동/상호작용, Cinemachine 카메라 연출, Spine 상태 애니메이션, Shader 적용/수정",
                "역량: OOP 기반 역할 분리, Factory/Strategy/State/Command 패턴 적용, 툴 제작(EditorWindow)로 제작 효율 향상",
            ],
        },
    ],
};

export default ozRewrite;
