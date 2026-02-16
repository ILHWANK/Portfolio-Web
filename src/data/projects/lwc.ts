import type { ProjectData } from "./types";

const ROOT = `${import.meta.env.BASE_URL}media/projects/lwc`;
const IMG = `${ROOT}/image`;
const VID = `${ROOT}/video`;

const lwc: ProjectData = {
    slug: "lwc",
    title: "편지와 마녀의 아이 (Letters and the Witch’s Child)",
    notionLabel: "상세 코드(Notion)",
    tagline: "스토리 중심 2D 싱글 플레이 (Unity 2023.2.20)",
    thumb: {
        src: `${IMG}/lwc.png`,
        alt: "편지와 마녀의 아이 썸네일",
    },

    headline:
        "하루 단위 플레이 흐름 속에서 스토리·UI·데이터·연출 시스템이 유기적으로 연결되는 스토리 중심 2D 싱글 플레이 게임",
    description:
        "본 프로젝트는 개발 진행 중이며, 구조 개선 및 기능 추가에 따라 포트폴리오 내용이 일부 변경될 수 있습니다.",
    tags: [
        "Unity",
        "UGUI",
        "Addressables",
        "Assembly",
        "UniTask",
        "Yarn Spinner",
        "TextMeshPro",
        "LoopScrollRect",
        "CSV",
        "Localization",
    ],

    sections: [
        // -----------------------------
        // 0. 프로젝트 요약 / 링크
        // -----------------------------
        {
            kind: "bullets",
            id: "summary",
            title: "0. 프로젝트 요약",
            bullets: [
                "최종 개선일: 2026.01.27",
                "GitHub: https://github.com/ILHWANK/Project-LWC.git",
                "하루 단위 플레이 흐름 속에서 스토리·UI·데이터·연출 시스템이 유기적으로 연결되는 스토리 중심 2D 싱글 플레이 게임",
                "현재 개발 진행 중(구조/기능 업데이트에 따라 내용 일부 변경 가능)",
            ],
        },

        // -----------------------------
        // 1. 프로젝트 개요
        // -----------------------------
        {
            kind: "bullets",
            id: "overview",
            title: "1. 프로젝트 개요",
            bullets: [
                "장르: 2D 싱글 플레이 / 스토리 중심",
                "플랫폼: PC",
                "엔진: Unity 2023.2.20",
                "사용 기술: C#, Unity UGUI, Addressables, UniTask, Yarn Spinner, CSV",
                "진행 형태: 개인 프로젝트 (기획·개발 전반 단독)",
            ],
        },

        // -----------------------------
        // 2. 프로젝트 목적
        // -----------------------------
        {
            kind: "bullets",
            id: "goal",
            title: "2. 프로젝트 목적",
            bullets: [
                "스토리 중심 게임에서 UI·데이터·연출 흐름을 구조적으로 안정적으로 설계할 수 있는지 검증",
                "기능 추가 시 구조가 무너지지 않는지",
                "데이터 변경이 UI와 플레이에 자연스럽게 반영되는지",
                "시스템 간 의존도를 최소화할 수 있는지",
                "Resource 관리를 어떤 방식으로 하는 것이 좋은지",
            ],
        },

        // -----------------------------
        // 3. 플레이 흐름 기반 시스템 구성
        // -----------------------------
        {
            kind: "case",
            id: "playflow",
            title: "3. 게임 플레이 흐름 기반 시스템 구성",
            subtitle:
                "기능 나열이 아닌 실제 플레이 흐름(Title → 로딩 → 허브 → 상호작용 → 맵 전환 → 날짜/데이터 반영)을 기준으로 설계",
            cards: [
                {
                    title: "3-1. 게임 시작 & Title 화면",
                    summary:
                        "Title은 진입 분기(New/Load) + 데이터 준비까지만 담당하고, 실제 로딩 시퀀스는 LoadingUIController로 위임",
                    media: [{ type: "image", src: `${IMG}/title.png`, alt: "Title 화면" }],
                    points: [
                        "New/Load 분기와 “게임 진입 준비 흐름” 트리거",
                        "TitleUI는 UI 제어 + 시작 트리거까지만 담당",
                        "NewGame: 기존 로드 리소스 정리 후 새 흐름으로 진입",
                        "GameData는 파일이 없으면 기본값으로 초기화해 NewGame 기본 상태를 보장",
                        "저장은 ThreadPool에서 파일 IO 처리(메인 스레드 부담 최소화)",
                        "관련: TitleUIController / LoadingUIController / GameDataManager / GameData",
                    ],
                    notionHref: "#https://www.notion.so/Project-LWC-2026-01-27-2ce7c7e6db098009a8b4c7b579e4f103?source=copy_link#2d37c7e6db09807d8f9de76ae32e44a7",
                    links: [
                        { label: "관련 코드(Notion)", href: "#https://www.notion.so/Project-LWC-2026-01-27-2ce7c7e6db098009a8b4c7b579e4f103?source=copy_link#2d37c7e6db09807d8f9de76ae32e44a7", kind: "code" }
                    ],
                },

                {
                    title: "3-2. Title → Loading → Fade → Game 진입 (리소스 로드) [2026.01.27]",
                    summary:
                        "큐 기반 로딩(함수 등록) + Label 기반 대상 수집 + Fade 연출 연결로 “로딩→연출→진입” 플로우를 통합",
                    media: [
                        {
                            type: "video",
                            src: `${VID}/title_to_game.mp4`,
                            poster: `${IMG}/title_to_game_poster.png`,
                        },
                    ],
                    points: [
                        "LoadingUIController가 로딩 큐(_items) 관리: 함수 기반으로 로드 확장 가능",
                        "Label 기반으로 Addressables 로딩 대상을 수집해 하드코딩 제거",
                        "NewGame: 캐시 전체 해제 후 재로드 / LoadGame: 캐시 스킵 + 미로드만 로드",
                        "로드 완료 직후 FadeOut → FadeIn으로 “로딩→연출→진입”을 하나의 흐름으로 연결",
                        "관련: LoadingUIController / ResourceManager / FadeManager",
                    ],
                    notionHref: "#",
                },

                {
                    title: "3-3. MagicBookPopup (메인 허브 UIPopup)",
                    summary:
                        "허브 팝업 1개 + Content 분리(Inventory/Calendar/Menu)로 역할을 명확히 하고, PopupData로 진입 탭을 제어",
                    media: [
                        {
                            type: "video",
                            src: `${VID}/magicbook.mp4`,
                            poster: `${IMG}/magicbook_poster.png`,
                        },
                    ],
                    points: [
                        "Scene에 UI를 상주시켜두지 않고 UIManager가 생명주기 관리",
                        "PopupData로 ‘어느 탭으로 열지’를 외부에서 결정 → 확장 시 구조 변경 최소화",
                        "Content는 OnEnter/OnExit로 정리해 탭 전환 안정성 확보",
                        "관련: UIManager / UIMagicBookPopup / InventoryContent / CalendarContent / MenuContent",
                    ],
                    notionHref: "#",
                },

                {
                    title: "3-4. 플레이어 조작 & Dialogue 진행 (Yarn)",
                    summary:
                        "상호작용은 인터페이스(IInteractable)로 위임하고, Dialogue는 노드명만 전달 + Yarn Command를 이벤트로 변환해 결합도를 낮춤",
                    media: [
                        {
                            type: "video",
                            src: `${VID}/interaction_dialogue.mp4`,
                            poster: `${IMG}/interaction_dialogue_poster.png`,
                        },
                    ],
                    points: [
                        "Player는 ‘현재 상호작용 대상’만 관리하고 실제 동작은 IInteractable에 위임",
                        "Dialogue 시작은 노드 이름만 전달 → 게임 로직과 분리",
                        "Yarn Command → MessageSystem 이벤트로 변환해 UI/연출을 외부 시스템에서 처리",
                        "관련: CharacterInteractionController / DialogueManager / DialogueRunner / MessageSystem",
                    ],
                    notionHref: "#",
                },

                {
                    title: "3-5. 맵 이동 시스템 (Portal/Door + Fade 시퀀스) [2026.01.14]",
                    summary:
                        "Door는 의도(MapType)만 전달, 실제 전환은 시스템이 처리(FadeOut→Load→Camera→FadeIn) + 맵 단위 로드/해제로 메모리 관리",
                    media: [
                        {
                            type: "video",
                            src: `${VID}/portal_mapchange.mp4`,
                            poster: `${IMG}/portal_mapchange_poster.png`,
                        },
                    ],
                    points: [
                        "상호작용 오브젝트가 맵 시스템을 직접 제어하지 않도록 책임 분리",
                        "전환 시퀀스 순서 보장: FadeOut → Map Load → Camera Follow → FadeIn",
                        "이전 맵 리소스 해제 후 다음 맵 로드(맵 단위 메모리 관리)",
                        "Spot 캐싱으로 배치 로직에 활용",
                        "관련: Door / IInteractable / MapSystem / ResourceManager / CameraManager / FadeManager",
                    ],
                    notionHref: "#",
                },

                {
                    title: "3-6. 일자 변경 & 데이터 반영",
                    summary:
                        "Day 변경을 단일 이벤트로 통일하고, UI/시스템이 동시에 반응하도록 설계 (데이터 변경 즉시 저장)",
                    media: [
                        {
                            type: "video",
                            src: `${VID}/day_transition.mp4`,
                            poster: `${IMG}/day_transition_poster.png`,
                        },
                    ],
                    points: [
                        "DayTransitionPanel은 연출/확인 역할만 담당, 종료 시점에 데이터/상태를 일괄 반영",
                        "DayUpdate 이벤트 1개로 전파 → 여러 시스템이 동기화",
                        "GameData에 Day/일과/난이도 집중 + 변경 즉시 비동기 저장",
                        "관련: DayTransitionPanel / GameDataManager / MessageSystem",
                    ],
                    notionHref: "#",
                },

                {
                    title: "3-7. 데이터 변경에 따른 UI 자동 갱신 (MessageSystem)",
                    summary:
                        "UI가 데이터를 직접 감시하지 않고 이벤트 기반으로 반응 → 재진입 없이 최신 상태 유지",
                    media: [
                        {
                            type: "video",
                            src: `${VID}/ui_refresh.mp4`,
                            poster: `${IMG}/ui_refresh_poster.png`,
                        },
                    ],
                    points: [
                        "DayUpdate 이벤트 구독 → MainUI 날짜 즉시 갱신",
                        "Calendar는 테이블 기반 구성 + 선택 변경 메시지로 부분 Refresh",
                        "Inventory는 변경 후 UI 직접 수정 대신 Refresh 재구성(선택/스크롤 UX 유지)",
                        "관련: MainUIController / CalendarContent / InventoryContent / TableManager / MessageSystem",
                    ],
                    notionHref: "#",
                },

                {
                    title: "3-8. 언어 변경 기능 (UI/폰트/Yarn 동기화) [2026.01.27]",
                    summary:
                        "언어 변경 이벤트 1회로 UI 텍스트/폰트/Yarn Locale까지 즉시 전환되도록 구성",
                    media: [
                        {
                            type: "video",
                            src: `${VID}/localization.mp4`,
                            poster: `${IMG}/localization_poster.png`,
                        },
                    ],
                    points: [
                        "LocalizedText가 LanguageChanged/FontChanged 메시지를 구독해 즉시 갱신",
                        "FontPolicyManager가 언어별 폰트를 Addressables로 로드 후 전역 적용",
                        "Yarn BuiltinLocalisedLineProvider.LocaleCode 변경으로 대사 즉시 전환",
                        "GameData에 언어 저장 → 재시작 후에도 유지",
                        "관련: LocalizationManager / LocalizedText / FontPolicyManager / DialogueManager / MessageSystem",
                    ],
                    notionHref: "#",
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
                "UIManager 구조: UI 생명주기 및 역할 분리",
                "MessageSystem: 시스템 간 결합도 최소화",
                "ResourceManager: 리소스 접근 및 관리 단순화",
                "CSV 기반 데이터 관리: 콘텐츠 확장 용이성 확보",
                "모든 구조는 프로젝트에서 실제 사용 및 검증 중",
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
                "구조 개선에 따라 일부 설계가 변경될 수 있음",
                "신규 기능 추가 및 콘텐츠 확장을 지속적으로 진행",
                "단기 결과물이 아닌 장기적으로 발전시키는 개인 프로젝트를 목표",
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
                "기능 1개를 잘 만든 프로젝트가 아니라, 스토리 중심 게임을 구조적으로 설계하고 유지하는 경험을 끝까지 검증하는 프로젝트",
                "플레이 흐름 기반 설계로 시스템 간 책임을 분리하고, 데이터 변경이 UI/플레이에 자연스럽게 반영되도록 구조를 검증",
            ],
        },

        // -----------------------------
        // 7. Update / Bug Fix Log
        // -----------------------------
        {
            kind: "case",
            id: "changelog",
            title: "7. Update / Bug Fix Log",
            subtitle: "주요 개선/수정 내역 요약",
            cards: [
                {
                    title: "[2025.12.28] Dialogue 이슈 확인 및 정리",
                    summary: "초기 Dialogue UI 비활성화/HideCharacters/선택지 표기 문제 확인 및 대응 방향 정리",
                    points: [
                        "최초 Dialogue 진행 시 UI 비활성화 문제 확인 → 시작 트리거 로직 추가",
                        "Character Hide 정상 동작 이슈 확인 → MessageSystem 공통화 과정에서 수정 예정",
                        "선택지(Options) 일부 상황에서 미표기 → 원인 추적 진행",
                    ],
                    notionHref: "#",
                },
                {
                    title: "[2026.01.07] Dialogue UI/선택지 표시 이슈 수정",
                    summary: "DialogueRunner Awake 단계 UI 비활성화 문제 해결 + 파싱 이슈로 인한 선택지 누락 수정",
                    points: [
                        "MainScene 진입 시 Dialogue UI 명시적 활성화로 수정",
                        "선택지 2개 이상인데 1개만 출력 → 문서 Enter 누락으로 파싱 문제, 작성 주의사항 정리",
                        "캐릭터 리소스 변경 타이밍 이질감 이슈 → 개선 필요 사항으로 정리",
                    ],
                    notionHref: "#",
                },
                {
                    title: "[2026.01.09] MessageSystem 구조 개선",
                    summary: "string/object 기반 전달 제거 → MessageClass 기반으로 타입 안정성 확보",
                    points: [
                        "메시지 타입 명확화",
                        "이벤트 전달 안정성 개선",
                        "확장/유지보수 용이성 확보",
                    ],
                    notionHref: "#",
                },
                {
                    title: "[2026.01.14] 맵 이동 시스템 구조 개선",
                    summary: "Portal(Object) 상호작용 기반으로 개선, 맵 이동 책임을 시스템 단위로 정리",
                    points: [
                        "Portal Prefab 배치만으로 맵 이동 가능하도록 구조 개선",
                        "문 방향/상황에 따른 예외 처리 로직 추가",
                        "MapBase 구조 수정 및 맵 구조 전반 정리",
                    ],
                    notionHref: "#",
                },
                {
                    title: "[2026.01.27] 리소스/로컬라이징 시스템 추가 및 개선",
                    summary: "UI 로컬라이징 + 폰트 정책 + Yarn 로컬라이징 + Addressables 로딩/캐시 구조 개선",
                    points: [
                        "UILocalStringTable.csv 기반 키 조회(LocalizationManager) 구조 확립",
                        "LanguageChangedMessage → LocalizedText 구독으로 UI 텍스트 즉시 갱신",
                        "FontPolicyManager가 언어별 폰트를 Addressables로 로드/적용 + FontChangedMessage 전파",
                        "Yarn LocaleCode 변경으로 대사 즉시 다국어 전환",
                        "ResourceManager에서 Addressables 로딩/캐시/해제 로직 통합(일관성/사용성 개선)",
                    ],
                    notionHref: "#",
                },
            ],
        },
    ],
};

export default lwc;
