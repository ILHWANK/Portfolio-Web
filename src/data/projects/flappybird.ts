import type { ProjectData } from "./types";

const ROOT = `${import.meta.env.BASE_URL}/media/projects/flappybird`;
const IMG = `${ROOT}/image`;
const VID = `${ROOT}/video`;

const flappybird: ProjectData = {
    slug: "flappybird",
    title: "FlappyBird (광고 SDK · Google Play 배포 구성)",
    notionLabel: "상세 코드(Notion)",
    tagline: "Unity 2D 게임에 Google Mobile Ads SDK와 Google Play 배포 설정을 연동해 최소 수익화 파이프라인을 구성한 프로젝트",
    thumb: {
        src: `${IMG}/flappybird.png`,
        alt: "FlappyBird 썸네일",
    },

    headline: "Google Play Console 배포 설정과 Google Mobile Ads SDK를 연결해 실제 배포 환경과 광고 호출 흐름을 검증한 Unity 프로젝트",
    description:
        "FlappyBird 프로젝트는 Unity 기반 2D 게임에 Google Play Console 배포 설정과 Google Mobile Ads SDK를 연동해 최소 수익화 파이프라인을 구성한 사례입니다.\n" +
        "단순히 광고 SDK를 연결하는 것에 그치지 않고, 실제 스토어 배포 환경에서 필요한 패키지 식별자, 버전 관리, 키스토어, Android Manifest 메타데이터, 네이티브 의존성 관리까지 함께 반영했습니다.\n" +
        "Banner와 Interstitial 광고를 역할별로 분리하고, 게임 흐름과 충돌 없이 동작하도록 구성하는 것을 목표로 했습니다.",
    tags: [
        "Unity",
        "C#",
        "Google Mobile Ads",
        "Google Play Console",
        "Android Build",
        "Monetization",
        "Mobile Game",
        "SDK Integration",
        "Deployment Pipeline",
    ],

    sections: [
        {
            kind: "bullets",
            id: "role-overview",
            lead: "프로젝트에서 직접 구성하고 검증한 핵심 범위를 요약했습니다.",
            title: "설계 및 구현 범위",
            bullets: [
                "Unity 2D 게임 프로젝트에 Google Mobile Ads SDK 연동",
                "Google Play Console 배포를 고려한 Player Settings 구성",
                "Application Identifier / Version Code / Custom Keystore 설정 반영",
                "Banner / Interstitial 광고를 역할별 스크립트로 분리하여 관리",
                "Android / iOS 플랫폼 분기 기반 Ad Unit ID 구성",
                "External Dependency Manager 기반 네이티브 의존성 관리",
            ],
        },

        {
            kind: "bullets",
            id: "summary",
            title: "0. 프로젝트 요약",
            lead: "광고 SDK 연결과 스토어 배포 환경 구성을 함께 검증한 프로젝트입니다.",
            bullets: [
                "최종 개선일: 2026.03.07",
                "Unity 기반 2D 싱글 플레이 게임",
                "Google Play Console 배포 설정과 Google Mobile Ads SDK를 함께 구성",
                "Banner / Interstitial 광고 호출 흐름을 게임 진행과 분리하여 관리",
                "스토어 등록과 수익화 구조를 연결하는 최소 운영 파이프라인 검증",
            ],
        },

        {
            kind: "bullets",
            id: "overview",
            title: "1. 프로젝트 개요",
            bullets: [
                "장르: 2D 싱글 플레이 게임",
                "엔진: Unity (Built-in 2D Template 기반)",
                "플랫폼: Android 중심 (iOS 분기 코드 일부 포함)",
                "광고 SDK: Google Mobile Ads Unity Plugin",
                "광고 포맷: Bottom Banner / Interstitial",
                "패키지명: com.Shinetoday.FlyBirdClone2D",
            ],
        },

        {
            kind: "bullets",
            id: "highlights",
            title: "2. 핵심 특징",
            groups: [
                {
                    title: "[Console 배포 설정 반영]",
                    items: [
                        "패키지명, 버전 코드, Custom Keystore, Alias 등 실제 배포용 설정을 Player Settings에 반영",
                        "Google Play Console 등록 시 필요한 식별 정보와 서명 구조를 프로젝트에 포함",
                    ],
                },
                {
                    title: "[광고 초기화와 광고 포맷 역할 분리]",
                    items: [
                        "게임 시작 시 SDK 초기화를 수행하고, Banner / Interstitial 광고를 각 스크립트에서 분리 관리",
                        "광고 포맷별 역할을 분리해 유지보수와 흐름 제어를 단순화",
                    ],
                },
                {
                    title: "[플랫폼 분기 기반 Ad Unit 관리]",
                    items: [
                        "Android / iOS 광고 유닛을 컴파일 분기로 분리",
                        "플랫폼별 설정 차이를 코드 레벨에서 명확히 구분",
                    ],
                },
            ],
        },

        {
            kind: "case",
            id: "ads-pipeline",
            title: "3. 광고 SDK 및 배포 구성 핵심 사례",
            subtitle: "광고 SDK 초기화, 광고 포맷 구성, 배포 설정, 네이티브 의존성 관리를 중심으로 정리했습니다.",
            cards: [
                {
                    title: "3-1. Google Play Console 등록 대응 설정",
                    summary:
                        "Player Settings에 Application Identifier, Version Code, Custom Keystore, Alias를 반영하여 실제 배포 가능한 형태로 구성",
                    impact:
                        "Unity 프로젝트 내부 설정만이 아니라, 스토어 배포를 위한 패키지 식별과 서명 구조까지 함께 검증할 수 있었습니다.",
                    media: [
                        { type: "image", src: `${IMG}/player_settings.png`, alt: "Player Settings" },
                    ],
                    points: [
                        "Application Identifier: com.Shinetoday.FlyBirdClone2D",
                        "Version Code: 3",
                        "Custom Keystore 및 Alias 설정 반영",
                        "Google Play Console 등록을 고려한 배포용 설정 구성",
                        "관련 파일: ProjectSettings/ProjectSettings.asset",
                    ],
                },

                {
                    title: "3-2. Google Mobile Ads SDK 초기화",
                    summary:
                        "게임 시작 시점에 MobileAds.Initialize를 호출하고 이후 Banner 광고 요청으로 연결되는 초기화 흐름 구성",
                    impact:
                        "광고 호출 전 SDK 초기화가 선행되도록 하여 광고 요청 타이밍과 게임 진입 흐름이 충돌하지 않도록 정리했습니다.",
                    media: [
                        { type: "image", src: `${IMG}/banner_init.png`, alt: "광고 SDK 초기화" },
                    ],
                    points: [
                        "게임 시작 시 SDK 초기화 수행",
                        "초기화 이후 RequestBanner 호출",
                        "광고 시스템 진입 순서를 단순한 흐름으로 정리",
                        "관련 클래스: BottomBanner",
                    ],
                },

                {
                    title: "3-3. Bottom Banner 광고 구성",
                    summary:
                        "Adaptive Banner Size를 사용해 화면 하단 고정 배너를 생성하고, 기존 배너 존재 시 정리 후 재생성하는 구조를 적용",
                    impact:
                        "화면 크기 변화에 대응하는 배너 구성과 기존 오브젝트 정리 흐름을 함께 적용해 광고 UI 중복 문제를 방지했습니다.",
                    media: [
                        { type: "image", src: `${IMG}/bottom_banner.png`, alt: "배너 광고" },
                    ],
                    points: [
                        "Android / iOS 플랫폼 분기 기반 Ad Unit ID 사용",
                        "기존 배너 존재 시 Destroy 후 재생성",
                        "Adaptive Banner Size 적용",
                        "AdRequest 생성 후 BannerView.LoadAd 호출",
                        "관련 클래스: BottomBanner",
                    ],
                },

                {
                    title: "3-4. Interstitial 광고와 재시작 플로우 연동",
                    summary:
                        "게임 재시작 시 전면 광고를 로드하고, 광고 종료 후 PlayScene으로 복귀하도록 구성",
                    impact:
                        "광고 표시와 게임 재시작을 분리해 광고 종료 이후 플레이 흐름이 자연스럽게 이어지도록 처리했습니다.",
                    media: [
                        { type: "image", src: `${IMG}/interstitial_restart.png`, alt: "전면 광고 재시작 흐름" },
                    ],
                    points: [
                        "restart() → RequestInterstitial() → showInterstitial() 흐름 구성",
                        "OnAdClosed 이벤트에서 Score 초기화 후 PlayScene 로드",
                        "광고 종료 후 게임 진행 복귀 처리",
                        "관련 클래스: ReStart",
                    ],
                },

                {
                    title: "3-5. 네이티브 의존성 및 Android Manifest 설정",
                    summary:
                        "External Dependency Manager를 활용해 Android / iOS 광고 SDK 의존성을 관리하고, Manifest에 APPLICATION_ID 메타데이터를 구성",
                    impact:
                        "Unity C# 코드뿐 아니라 네이티브 SDK 의존성과 플랫폼 설정까지 포함해 광고 연동 구조 전체를 검증할 수 있었습니다.",
                    media: [
                        { type: "image", src: `${IMG}/manifest_dependency.png`, alt: "Manifest 및 의존성 설정" },
                    ],
                    points: [
                        "Android: com.google.android.gms:play-services-ads:20.6.0",
                        "iOS: Google-Mobile-Ads-SDK ~> 9.0",
                        "AndroidManifest.xml에 APPLICATION_ID 메타데이터 추가",
                        "External Dependency Manager 기반 Android Maven / iOS CocoaPods 대응",
                        "관련 파일: GoogleMobileAdsDependencies.xml / AndroidResolverDependencies.xml / AndroidManifest.xml",
                    ],
                },
            ],
        },

        {
            kind: "bullets",
            id: "ops-checkpoints",
            title: "4. 운영 관점 체크 포인트",
            lead: "현재 구조는 동작 가능한 상태이며, 실제 서비스 운영을 위해 추가로 고려할 부분도 함께 정리했습니다.",
            bullets: [
                "실서비스 Ad Unit ID와 테스트 광고 ID를 빌드 환경별로 분리 관리할 필요",
                "Interstitial 광고 로딩 대기 구조에 타임아웃 및 실패 처리 분기 추가 필요",
                "광고 로드 실패 시 즉시 게임 재시작으로 이어지는 대체 흐름 보강 필요",
                "iOS 배포를 위한 App ID / Pod / 권한 / 심사 대응 설정 추가 점검 필요",
            ],
        },

        {
            kind: "bullets",
            id: "stack",
            title: "5. 적용 기술 스택",
            groups: [
                {
                    title: "[Unity / Console]",
                    items: [
                        "Unity Player Settings",
                        "Package Identifier / Version Code / Custom Keystore",
                    ],
                },
                {
                    title: "[광고 SDK]",
                    items: [
                        "Google Mobile Ads Unity API",
                        "MobileAds / BannerView / InterstitialAd / AdRequest",
                    ],
                },
                {
                    title: "[플랫폼 대응]",
                    items: [
                        "Android / iOS 플랫폼 분기 컴파일",
                        "#if UNITY_ANDROID / #elif UNITY_IPHONE",
                    ],
                },
                {
                    title: "[Android 설정 / 의존성]",
                    items: [
                        "Android Manifest 메타데이터",
                        "External Dependency Manager",
                        "Android Maven / iOS CocoaPods",
                    ],
                },
            ],
        },

        {
            kind: "bullets",
            id: "wrapup",
            title: "6. 정리",
            bullets: [
                "Unity 기반 모바일 게임이 실제 스토어 배포 환경에서 동작하기 위해 필요한 설정과 광고 SDK 연동 구조를 함께 검증한 프로젝트",
                "Player Settings, Application Identifier, Version Code, Keystore, Android Manifest, 네이티브 의존성 관리까지 포함해 배포 환경을 구성",
                "Banner / Interstitial 광고를 게임 흐름과 분리해 관리함으로써 최소 수익화 파이프라인을 구현",
                "단순 기능 구현이 아니라, 스토어 배포 환경과 인게임 광고 호출 흐름이 실제 프로젝트에서 어떻게 연결되는지를 확인한 사례",
            ],
        },
    ],
};

export default flappybird;