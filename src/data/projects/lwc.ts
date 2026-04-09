import type {ProjectData} from "./types";

const ROOT = `${import.meta.env.BASE_URL}/media/projects/lwc`;
const IMG = `${ROOT}/image`;
const VID = `${ROOT}/video`;

const lwc: ProjectData = {
    slug: "lwc",
    title: "편지와 마녀의 아이 (개인 프로젝트)",
    notionLabel: "상세 코드(Notion)",
    tagline: "유저가 직접 체감하는 게임 경험을 중심으로 로딩, 맵 이동, 컷신 연출을 설계하고 구현한 개인 프로젝트",
    thumb: {
        src: `${IMG}/lwc.png`,
        alt: "편지와 마녀의 아이 썸네일",
    },

    headline: "플레이 흐름 안에서 상호작용, 연출, 스토리를 자연스럽게 연결한 Unity 프로젝트",
        description:
            "개인 프로젝트 편지와 마녀의 아이(Letters and the Witch’s Child)는 \n" +
            "플레이 흐름 안에서 상호작용, 스토리 연출, 리소스 로딩이 자연스럽게 이어지도록 구현하기 위해 진행한 프로젝트입니다.\n" +
            "\n" +
            "UIManager, ResourceManager, TableManager, LocalizationManager 등 공통 시스템을 API 형태로 구성하여 기능들이 일관된 방식으로 동작하도록 설계했습니다.\n" +
            "Addressables 기반 리소스 관리와 UniTask 기반 비동기 흐름을 통해 안정적인 플레이 흐름을 유지할 수 있도록 구성했습니다.\n" +
            "또한 Jenkins CI를 통해 Unity BatchMode 기반 Android 빌드 파이프라인을 구축하여 Addressables 빌드·APK 생성 과정을 자동화하고 개발 운영 환경까지 함께 검증했습니다.",
    tags: [
        "Unity",
        "C#",
        "System Design",
        "Data-Driven Design",
        "UI Architecture",
        "Addressables",
        "Async Programming",
        "Localization",
        "Narrative Tools",
        "Jenkins CI",
        "Build Automation",
    ],

    sections: [
        {
            kind: "bullets",
            id: "role-overview",
            lead: "프로젝트에서 직접 설계하고 구현한 핵심 시스템을 요약했습니다.",
            title: "설계 및 구현 범위",
            bullets: [
                "UIManager, ResourceManager, TableManager, LocalizationManager 등 Manager 기반 Core System 직접 설계 및 구현",
                "UI 열기, 리소스 로드, 데이터 조회를 일관된 방식으로 호출할 수 있는 API 형태 구조 설계",
                "Addressables 기반 로드·캐시·해제 흐름과 UniTask 기반 비동기 구조 설계",
                "CSV 기반 데이터 구조와 Story 시스템 설계로 코드 수정 없이 콘텐츠 확장 가능하도록 구성",
                "개인 프로젝트 전반 기획·구현·구조 설계를 단독으로 수행",
            ],
        },
        // -----------------------------
        // 0. 프로젝트 요약
        // -----------------------------
        {
            kind: "bullets",
            id: "summary",
            title: "0. 프로젝트 요약",
            lead: "개인 프로젝트로서 ‘구조 유지’와 ‘확장 가능성’을 플레이 흐름 안에서 검증하고 있습니다.",
            bullets: [
                "최종 개선일: 2026.04.07",
                "스토리 중심 2D 싱글 플레이 게임(PC) / Unity 2023.2.20 -> Unity 6000.3.10f1",
                "플레이 흐름(Title→로딩→허브→상호작용→맵 전환→날짜/루틴→갱신)을 기준으로 시스템을 연결",
                "데이터/이벤트 중심 운영(GameData + CSV Table + MessageSystem)으로 변경 반영 규칙을 통일",
                "StoryCut(Core~View) 계층 분리로 스토리 표출 확장 기반 확보",
                "Jenkins CI 기반 Android 빌드 자동화 파이프라인 구축",
            ],
        },

        // -----------------------------
        // 1. 프로젝트 개요(간단)
        // -----------------------------
        {
            kind: "bullets",
            id: "overview",
            title: "1. 프로젝트 개요",
            bullets: [
                "장르: 2D 싱글 플레이 / 스토리 중심",
                "플랫폼: PC 및 모바일",
                "엔진: Unity 6000.3.10f1",
                "사용 기술: C#, Unity UGUI, Addressables, Assembly, UniTask, Yarn Spinner, CSV, TMP",
                "CI / Build: Jenkins Pipeline, Unity BatchMode Android Build",
                "진행 형태: 개인 프로젝트 (기획·개발 전반 단독)",
            ],
        },

        // -----------------------------
        // 2. 핵심 특징(요약)
        // -----------------------------
        {
            kind: "bullets",
            id: "highlights",
            title: "2. 핵심 특징",
            groups: [
                {
                    title: "[플레이 흐름 기반 구조]",
                    items: [
                        "Title→로딩/페이드→맵/상호작용→대화/스토리→날짜/루틴→UI 갱신까지 실제 플레이 순서로 시스템 연결",
                        "진입 분기/로드/전환 연출을 하나의 플로우로 설계(로딩 큐 + Fade 시퀀스)",
                    ],
                },
                {
                    title: "[데이터/이벤트 중심 운영]",
                    items: [
                        "GameData + CSV Table + MessageSystem으로 “데이터 변경→이벤트→UI/표출 반영”을 전역 규칙으로 통일",
                        "UI는 데이터를 직접 감시하지 않고 메시지 기반으로 갱신(재진입 없이 최신 상태 유지)",
                    ],
                },
                {
                    title: "[표출 계층 분리]",
                    items: [
                        "Dialogue(Yarn)와 StoryCut(테이블 기반 컷) 모두 진행 제어와 표시(View)를 분리",
                        "컷 타입 추가/연출 확장에 대응 가능한 기반(Core/Runner/Presenter/View)",
                    ],
                },
            ],
        },

        // -----------------------------
        // 3. 게임 플레이 흐름 기반 핵심 카드(5개)
        // -----------------------------
        {
            kind: "case",
            id: "playflow-core",
            title: "3. 게임 플레이 흐름 기반 핵심 사례 (5)",
            subtitle: "미디어 중심으로 구조의 핵심만 남기고, 나머지 흐름은 하단 ‘보조 요약’에 포함했습니다.",
            cards: [
                {
                    title: "3-1. Title → Loading → Fade → Game 진입 (리소스 로드)",
                    summary:
                        "유저가 게임을 시작할 때, 로딩과 진입 과정이 끊기지 않고 자연스럽게 이어지도록 구성한 플레이 진입 흐름",
                    impact:
                        "초기 진입 시 로딩 대기나 화면 전환에서 오는 이질감을 줄이고,\n" +
                        "Fade 연출과 연결해 “게임이 시작된다”는 몰입감을 자연스럽게 전달하도록 개선",
                    media: [
                        {type: "image", src: `${IMG}/title_to_load_1.gif`, alt: "전부 로드"},
                        {type: "image", src: `${IMG}/title_to_load_2.gif`, alt: "미 로드"},
                    ],
                    links: [
                        {label: "관련 코드(Notion)", href: "https://www.notion.so/Project-LWC-2026-02-18-2ce7c7e6db098009a8b4c7b579e4f103?source=copy_link#2d37c7e6db09807d8f9de76ae32e44a7", kind: "code"},
                    ],
                    points: [
                        "로딩 완료 후 즉시 Fade 연출을 연결해 화면 전환의 이질감을 제거",
                        "New / Load 상황에 따라 불필요한 대기 없이 바로 플레이로 이어지도록 구성",
                        "유저 입장에서 “기다림”이 아닌 “자연스러운 시작”으로 느껴지도록 흐름 설계",
                        "Label 기반 Addressables 로딩 대상 수집으로 하드코딩 제거",
                        "관련: LoadingUIController / ResourceManager / FadeManager",
                    ],
                },

                {
                    title: "3-2. MagicBookPopup (메인 허브 UIPopup)",
                    summary:
                        "플레이 중 필요한 기능(인벤토리, 일정, 옵션 등)에 빠르게 접근할 수 있도록 구성한 허브 UI",
                    impact:
                        "플레이 흐름을 끊지 않고 필요한 정보를 확인하거나 기능을 사용할 수 있어\n" +
                        "유저의 행동 흐름을 유지하면서 편의성을 개선",
                    media: [
                        {type: "image", src: `${IMG}/content_inventory.png`, alt: "인벤 토리"},
                        {type: "image", src: `${IMG}/content_calendar.png`, alt: "달력"},
                        {type: "image", src: `${IMG}/content_option.png`, alt: "옵션"},
                        {
                            type: "video",
                            src: `${VID}/magicbookpopup.mp4`,
                            poster: `${IMG}/magicbookpopup.png`,
                        },
                    ],
                    links: [{label: "관련 코드(Notion)", href: "https://www.notion.so/Project-LWC-2026-02-18-2ce7c7e6db098009a8b4c7b579e4f103?source=copy_link#2d37c7e6db098030ac56dd65e03a2b2f", kind: "code"}],
                    points: [
                        "하나의 UI에서 주요 기능을 빠르게 전환할 수 있어 불필요한 화면 이동 감소",
                        "플레이 도중 자연스럽게 접근하고 다시 복귀할 수 있는 흐름 유지",
                        "PopupData로 UI 진입 시 현재 상황에 맞는 탭으로 바로 연결되도록 구성",
                        "Scene에 UI를 상주시켜두지 않고 UIManager가 생성/닫기/정리를 관리",
                        "관련: UIManager / UIMagicBookPopup / InventoryContent / CalendarContent / MenuContent",
                    ],
                },

                {
                    title: "3-3. 맵 이동 시스템 (Portal/Door + Fade 시퀀스)",
                    summary:
                        "맵 이동 시 끊김 없이 자연스럽게 다음 공간으로 이어지도록 구성한 이동 시스템",
                    impact:
                        "화면 전환 과정에서의 어색함을 줄이고,\n" +
                        "Fade와 카메라 이동을 통해 공간이 이어지는 느낌을 강화하여 몰입도를 향상",
                    media: [
                        {type: "image", src: `${IMG}/map_move_1.gif`, alt: "맵 전환(1)"},
                        {type: "image", src: `${IMG}/map_move_2.gif`, alt: "맵 전환(2)"},
                    ],
                    links: [{label: "관련 코드(Notion)", href: "https://www.notion.so/Project-LWC-2026-02-18-2ce7c7e6db098009a8b4c7b579e4f103?source=copy_link#2d37c7e6db0980eebceaf495ee59ed26", kind: "code"}],
                    points: [
                        "상호작용 오브젝트가 맵 시스템을 직접 제어하지 않도록 책임 분리",
                        "이동 시 Fade 연출을 활용해 전환의 이질감 최소화",
                        "카메라 이동과 캐릭터 위치를 자연스럽게 연결",
                        "이전 맵을 정리하고 다음 맵을 로드하여 안정적인 플레이 유지(맵 단위 메모리 관리)",
                        "관련: Door / IInteractable / MapSystem / ResourceManager / CameraManager / FadeManager",
                    ],
                },

                {
                    title: "3-4. 언어 변경 기능 (UI/폰트/Yarn 동기화)",
                    summary:
                        "플레이 중 언제든 언어를 변경해도 흐름이 끊기지 않도록 구성한 다국어 시스템",
                    impact:
                        "게임을 재시작하지 않고도 즉시 언어가 반영되어\n" +
                        "글로벌 유저가 플레이 흐름을 유지한 채 게임을 경험할 수 있도록 개선",
                    media: [
                        {type: "image", src: `${IMG}/localization.gif`, alt: "언어 변경"},
                        {
                            type: "video",
                            src: `${VID}/localization_story.mp4`,
                            poster: `${IMG}/localization_story.png`,
                        },
                    ],
                    links: [{label: "관련 코드(Notion)", href: "https://www.notion.so/Project-LWC-2026-02-18-2ce7c7e6db098009a8b4c7b579e4f103?source=copy_link#2f47c7e6db09803cbc37dc408575bd66", kind: "code"}],
                    points: [
                        "UI와 대사가 즉시 변경되어 플레이 흐름이 끊기지 않음",
                        "언어 변경 후에도 현재 진행 상태 그대로 유지",
                        "다양한 언어 환경에서도 동일한 플레이 경험 제공",
                        "FontPolicyManager가 언어별 폰트를 Addressables로 로드 후 전역 적용",
                        "관련: LocalizationManager / LocalizedText / FontPolicyManager / DialogueManager / MessageSystem",
                    ],
                },

                {
                    title: "3-5. Story 플레이 흐름",
                    summary:
                        "플레이 중 상호작용을 통해 자연스럽게 시작되고,\n" +
                        "텍스트, 캐릭터, 미디어 연출을 통해 스토리가 이어지도록 구성한 컷신 시스템",
                    impact:
                        "스토리 연출이 별도의 시스템처럼 분리되지 않고\n" +
                        "플레이 흐름 안에서 자연스럽게 이어지도록 구성하여\n" +
                        "캐릭터와 상황에 대한 몰입도를 높이는 경험 제공",
                    media: [
                        {
                            type: "video",
                            src: `${VID}/storycut.mp4`,
                            poster: `${IMG}/storycut.png`,
                        },
                    ],
                    links: [{label: "관련 코드(Notion)", href: "https://www.notion.so/Project-LWC-2026-02-18-2ce7c7e6db098009a8b4c7b579e4f103?source=copy_link#30a7c7e6db0980eab918dfd0aa402f61", kind: "code"}],
                    points: [
                        "상호작용 또는 이벤트를 통해 StoryCut이 자연스럽게 시작되도록 구성",
                        "StoryCutAction 단위로 텍스트, 캐릭터, 미디어 연출을 순차적으로 실행",
                        "WorldBubble을 활용해 캐릭터 위치 기반으로 대사를 표현하여 현장감 강화",
                        "이미지 및 미디어 연출을 상황에 맞게 조합해 감정 전달을 강화",
                        "모든 연출 종료 후 카메라와 상태를 원래 플레이 상태로 복귀",
                        "관련: StoryDirectorCore / StoryRunnerBehaviour / StoryPresenter / WorldBubbleView / TableManager",
                    ],
                },

                {
                    title: "3-6. Jenkins CI 기반 Unity Android 빌드 파이프라인",
                    summary:
                        "Jenkins Pipeline과 Unity BatchMode를 연결해 Addressables 빌드부터 APK 생성까지 자동화한 CI 환경을 구축",
                    impact:
                        "수동 빌드 절차를 제거하고 Addressables 빌드, Android Target 전환, APK 생성 과정을 파이프라인으로 고정해 빌드 재현성과 운영 효율을 개선",
                    media: [
                        {
                            type: "image",
                            src: `${IMG}/jenkins_build.png`,
                            alt: "Jenkins Android Build 결과",
                        },
                    ],
                    links: [
                        {
                            label: "관련 내용(Notion)",
                            href: "https://www.notion.so/Project-LWC-2026-02-18-2ce7c7e6db098009a8b4c7b579e4f103?source=copy_link#3227c7e6db09807e9faed061d0c47817",
                            kind: "code",
                        },
                    ],
                    points: [
                        "Unity BatchMode + CommandLine Build 방식으로 Jenkins에서 Android APK 자동 생성",
                        "Addressables Clean → Build → Player Build 순서를 파이프라인으로 고정",
                        "Keystore 검증 단계를 추가해 서명 오류를 사전에 차단",
                        "APK와 Unity 빌드 로그를 Jenkins 아티팩트로 자동 보관",
                        "파일명에 Version / VersionCode 포함 규칙 적용으로 빌드 이력 관리",
                        "관련: Jenkins Pipeline / AndroidBuild.cs / Addressables Build",
                    ],
                },
            ],
        },

        // -----------------------------
        // 3-A. 보조 요약(4개 흡수)
        // -----------------------------
        {
            kind: "bullets",
            id: "playflow-support",
            title: "3-A. 플레이 흐름 보조 요약",
            lead:
                "핵심 카드에서 제외한 흐름(진입 분기·상호작용/대화·일자/루틴·자동 갱신)은 아래 규칙으로 연결됩니다.",
            groups: [
                {
                    title: "[진입 분기(3-1) 요약]",
                    items: [
                        "Title은 New/Load 분기와 데이터 준비까지만 담당",
                        "실제 로딩/연출 시퀀스는 LoadingUIController로 위임",
                        "NewGame은 기존 로드 리소스 정리 후 재진입(캐시 해제→재로드) 흐름을 보장",
                    ],
                },
                {
                    title: "[상호작용/대화(3-4) 요약]",
                    items: [
                        "Player는 ‘현재 상호작용 대상’만 관리하고 실제 동작은 IInteractable에 위임",
                        "Dialogue 시작은 노드명만 전달해 게임 로직과 분리",
                        "Yarn Command는 MessageSystem 이벤트로 변환해 UI/연출 처리를 외부 시스템으로 분리",
                    ],
                },
                {
                    title: "[일자/루틴(3-6) + 자동 갱신(3-7) 요약]",
                    items: [
                        "Day 변경을 단일 이벤트로 통일해 UI/시스템이 동시에 반응하도록 설계",
                        "상태 변경 시 즉시 비동기 저장(GameDataManager)로 데이터 일관성 유지",
                        "UI는 데이터 직접 감시 대신 메시지 기반 Refresh로 최신 상태 유지(재진입 없이 동기화)",
                    ],
                },
            ],
        },

        // -----------------------------
        // 4. 구조 설계에서 중점적으로 고민한 부분
        // -----------------------------
        {
            kind: "bullets",
            id: "architecture-focus",
            title: "4. 구조 설계에서 중점적으로 고민한 부분",
            bullets: [
                "UIManager: Popup/Panel 생명주기 관리 + 허브/콘텐츠 분리로 역할 고정",
                "MessageSystem: 상태 변화(Day/Language/StoryStart 등)를 이벤트로 전파해 결합도 최소화",
                "ResourceManager + Addressables: 로드/캐시/해제 전략을 플레이 흐름에서 검증",
                "CSV Table + GameData: 데이터 변경이 UI/플레이/스토리 표출에 자연스럽게 반영되도록 규칙 통일",
                "StoryCut Core~View 분리: 타입 확장과 연출 확장에 대응 가능한 기반 확보",
                "Jenkins CI 기반 Android 빌드 자동화로 Addressables 빌드·APK 생성 과정을 파이프라인으로 고정",
            ],
        },

        // -----------------------------
        // 5. 진행 중인 프로젝트로서의 LWC
        // -----------------------------
        {
            kind: "bullets",
            id: "ongoing",
            title: "5. 진행 중인 프로젝트로서의 LWC",
            bullets: [
                "포트폴리오 제출 시점에도 개발이 진행 중인 프로젝트",
                "플레이 흐름 기반 구조는 유지한 채 기능을 단계적으로 확장",
                "최근: 다국어 런타임 전환(UI/폰트/Yarn/Story 텍스트) + StoryCut 표출 확장",
                "단기 데모가 아니라, 구조를 유지하며 콘텐츠를 늘려가는 장기 운영형 개인 프로젝트를 목표",
            ],
        },

        // -----------------------------
        // 6. 정리
        // -----------------------------
        {
            kind: "bullets",
            id: "wrapup",
            title: "6. 정리",
            bullets: [
                "스토리 중심 게임의 필수 흐름(진입/로딩/연출→상호작용/대화→맵 전환→날짜 진행→갱신)을 구조적으로 연결",
                "데이터(GameData/CSV) + 이벤트(MessageSystem) + 리소스(Addressables) + 표출 계층 분리(StoryCut)로 확장/변경에도 구조가 무너지지 않는지 지속 검증",
            ],
        },
    ],
};

export default lwc;