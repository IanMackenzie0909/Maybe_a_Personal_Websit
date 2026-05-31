'use strict';

const root = document.documentElement;
root.classList.add('js');

const translations = {
    en: {
        metaDescription: "Ian Mackenzie's autonomous robotics portfolio, focused on ROS 2 self-driving AMR, computer vision, AIoT, web apps, and optimization projects.",
        title: 'Ian Mackenzie | Autonomous Robotics Portfolio',
        nav: {
            about: 'About',
            projects: 'Projects',
            skills: 'Skills',
            contact: 'Contact'
        },
        controls: {
            language: '中文',
            themeDark: 'Dark',
            themeLight: 'Light'
        },
        hero: {
            title: 'Ian Mackenzie <span>Autonomous Robotics Portfolio</span>',
            lead: 'NTU postgraduate student building practical systems across ROS 2 self-driving vehicles, computer vision inspection, AIoT automation, web products, and optimization experiments.',
            github: 'View GitHub',
            projects: 'Selected Projects'
        },
        snapshot: {
            title: 'Self-driving systems through real builds',
            body: 'My main work is wheel-based AMR development, ROS 2 navigation, perception integration, and mission workflows. Robotic arms are a future interest project.',
            signal1: 'ROS 2 self-driving AMR workspace with SLAM, Nav2, lidar, teleoperation, and inspection missions.',
            signal2: 'Computer vision pipelines using GroundingDINO, MobileSAM, OpenCV, PyTorch, Docker, and CUDA.',
            signal3: 'Web, cloud, and AIoT projects connecting real-world context to usable interfaces.'
        },
        stats: {
            repos: 'GitHub repos',
            focus: 'Focus areas',
            student: 'Postgraduate'
        },
        about: {
            title: 'About',
            kicker: 'Turning coursework, club practice, and personal builds into inspectable autonomous-vehicle engineering projects.',
            body: 'I am an autonomous robotics-oriented engineering postgraduate at National Taiwan University. My portfolio shows a hands-on style: integrating ROS 2 self-driving vehicle workspaces, building perception and inspection flows, connecting sensors to cloud dashboards, and turning algorithmic experiments into documented projects that others can inspect.',
            direction: 'Current Direction'
        },
        tags: {
            amr: 'Self-Driving AMR',
            vision: 'Computer Vision',
            web: 'Web Apps',
            optimization: 'Optimization',
            data: 'Data Visualization'
        },
        projects: {
            title: 'Selected Projects',
            kicker: 'Filter meaningful projects by the real-world problem area they touch.'
        },
        filters: {
            all: 'All',
            autonomous: 'Self-Driving',
            vision: 'Vision / AI',
            web: 'Web',
            optimization: 'Optimization'
        },
        project: {
            open: 'Open repository',
            asr: {
                title: 'ASR-AMR: ROS 2 Self-Driving Vehicle Workspace',
                body: 'Homemade self-driving AMR workspace integrating WHEELTEC vehicle components, base control, teleoperation, lidar drivers, URDF, SLAM, localization, Nav2, visual tracking, and PBL inspection missions.'
            },
            cv: {
                body: 'Industrial inspection pipeline combining GroundingDINO and MobileSAM, producing conservative structured evidence for HMI, audit logs, and event engines.'
            },
            next: {
                body: 'Context-aware city recommendation app designed around mood, time, weather, distance, and personal preference.'
            },
            pot: {
                body: 'IIoT smart-pot system with ESP8266 sensing, MQTT data transmission, Blynk monitoring, automatic irrigation, and ESP32-CAM remote observation.'
            },
            cvrp: {
                body: 'Capacitated vehicle routing solver comparing crossover and mutation strategies, with systematic experimental analysis and route-performance reporting.'
            }
        },
        skills: {
            title: 'Skills',
            kicker: 'A practical stack for connecting vehicle hardware, ROS 2 navigation, perception models, data, and interfaces.',
            vehicle: {
                title: 'Autonomous Vehicles'
            },
            future: {
                title: 'Future Robotics Plan',
                body: 'Robotic arm integration is a future interest: combining manipulation with mobile inspection, perception, and task planning.'
            }
        },
        contact: {
            title: "Let's build the next practical system.",
            body: 'Open to research, autonomous vehicles, computer vision, AIoT, and applied web projects. Reach me through GitHub or email.'
        },
        footer: {
            copy: '© 2026 Ian Mackenzie. Built as a static GitHub Pages portfolio.'
        }
    },
    zh: {
        metaDescription: 'Ian Mackenzie 的自走車作品集，聚焦 ROS 2 自走車、電腦視覺、AIoT、網頁應用與最佳化專案。',
        title: 'Ian Mackenzie | 自走車作品集',
        nav: {
            about: '關於',
            projects: '專案',
            skills: '技能',
            contact: '聯絡'
        },
        controls: {
            language: 'EN',
            themeDark: '深色',
            themeLight: '淺色'
        },
        hero: {
            title: 'Ian Mackenzie <span>自走車作品集</span>',
            lead: '台大研究生，實作方向聚焦 ROS 2 自走車、電腦視覺檢測、AIoT 自動化、網頁產品與最佳化實驗。',
            github: '查看 GitHub',
            projects: '精選專案'
        },
        snapshot: {
            title: '用實作打造自走系統',
            body: '目前主軸是輪式自走車開發、ROS 2 導航、感知整合與任務流程。機械手臂是未來想延伸的興趣專案。',
            signal1: 'ROS 2 自走車工作區，整合 SLAM、Nav2、光達、遙控與檢測任務流程。',
            signal2: '使用 GroundingDINO、MobileSAM、OpenCV、PyTorch、Docker 與 CUDA 的電腦視覺流程。',
            signal3: '把 Web、Cloud 與 AIoT 專案連到真實情境，做成可操作的介面。'
        },
        stats: {
            repos: 'GitHub 專案',
            focus: '主要方向',
            student: '研究生'
        },
        about: {
            title: '關於',
            kicker: '把課堂、社團與個人實作整理成可檢視、可重現的自走車工程作品。',
            body: '我是國立臺灣大學的研究生，方向偏自走車與應用型機器人。我的作品集重視實作：整合 ROS 2 自走車工作區、建立感知與檢測流程、把感測資料接到雲端儀表板，也把演算法實驗整理成可閱讀、可驗證的專案。',
            direction: '目前方向'
        },
        tags: {
            amr: '自走車 AMR',
            vision: '電腦視覺',
            web: '網頁應用',
            optimization: '最佳化',
            data: '資料視覺化'
        },
        projects: {
            title: '精選專案',
            kicker: '依照實際應用領域篩選做過的專案。'
        },
        filters: {
            all: '全部',
            autonomous: '自走車',
            vision: '視覺 / AI',
            web: '網頁',
            optimization: '最佳化'
        },
        project: {
            open: '開啟 repo',
            asr: {
                title: 'ASR-AMR：ROS 2 自走車工作區',
                body: '自製自走車工作區，整合 WHEELTEC 車體元件、底盤控制、遙控、光達驅動、URDF、SLAM、定位、Nav2、視覺追蹤與 PBL 檢測任務。'
            },
            cv: {
                body: '工業檢測視覺流程，結合 GroundingDINO 與 MobileSAM，輸出保守且結構化的證據，供 HMI、稽核紀錄與事件引擎使用。'
            },
            next: {
                body: '情境感知城市推薦應用，根據心情、時間、天氣、距離與個人偏好設計外出決策體驗。'
            },
            pot: {
                body: 'AIoT 智慧盆栽系統，使用 ESP8266 感測、MQTT 傳輸、Blynk 監控、自動澆水與 ESP32-CAM 遠端觀察。'
            },
            cvrp: {
                body: '容量限制車輛路徑問題的基因演算法求解器，比較交配與突變策略，並整理系統化實驗結果。'
            }
        },
        skills: {
            title: '技能',
            kicker: '能把自走車硬體、ROS 2 導航、感知模型、資料與介面接在一起的實作型技術組合。',
            vehicle: {
                title: '自走車'
            },
            future: {
                title: '未來機器人計畫',
                body: '機械手臂整合是未來興趣：希望把操作能力與移動檢測、感知、任務規劃結合。'
            }
        },
        contact: {
            title: '一起做下一個能落地的系統。',
            body: '歡迎交流自走車、電腦視覺、AIoT、研究與應用型網頁專案，可以透過 GitHub 或 Email 聯絡我。'
        },
        footer: {
            copy: '© 2026 Ian Mackenzie。靜態 GitHub Pages 作品集。'
        }
    }
};

const themeToggle = document.querySelector('.theme-toggle');
const languageToggle = document.querySelector('.lang-toggle');
const filterButtons = document.querySelectorAll('.filter-button');
const projectCards = document.querySelectorAll('.project-card');

function getNestedValue(source, path) {
    return path.split('.').reduce((value, key) => value?.[key], source);
}

function applyLanguage(language) {
    const dictionary = translations[language] || translations.en;
    root.lang = language === 'zh' ? 'zh-Hant' : 'en';
    root.dataset.language = language;
    languageToggle?.setAttribute('aria-pressed', String(language === 'zh'));
    languageToggle?.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切換到中文');
    document.title = dictionary.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', dictionary.metaDescription);
    }

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const value = getNestedValue(dictionary, element.dataset.i18n);
        if (!value) return;
        if (element.dataset.i18n === 'hero.title') {
            element.innerHTML = value;
        } else {
            element.textContent = value;
        }
    });

    updateThemeLabel();
    localStorage.setItem('portfolio-language', language);
}

function applyTheme(theme) {
    root.dataset.theme = theme;
    const isDark = theme === 'dark';
    themeToggle?.setAttribute('aria-pressed', String(isDark));
    localStorage.setItem('portfolio-theme', theme);

    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
        themeColor.setAttribute('content', isDark ? '#0d1720' : '#f7fbff');
    }

    updateThemeLabel();
}

function updateThemeLabel() {
    if (!themeToggle) return;
    const language = root.dataset.language || 'en';
    const dictionary = translations[language] || translations.en;
    const label = themeToggle.querySelector('.control-label');
    const isDark = root.dataset.theme === 'dark';
    if (label) {
        label.textContent = isDark ? dictionary.controls.themeLight : dictionary.controls.themeDark;
    }
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
}

function applyFilter(filter) {
    filterButtons.forEach((button) => {
        const active = button.dataset.filter === filter;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
    });

    projectCards.forEach((card) => {
        const categories = card.dataset.category?.split(' ') || [];
        const shouldShow = filter === 'all' || categories.includes(filter);
        card.hidden = !shouldShow;
    });
}

function setupRevealAnimations() {
    const revealItems = document.querySelectorAll('.reveal');
    revealItems.forEach((item, index) => {
        window.setTimeout(() => {
            item.classList.add('is-visible');
        }, index * 80);
    });
}

const storedTheme = localStorage.getItem('portfolio-theme');
const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
applyTheme(storedTheme || preferredTheme);

const storedLanguage = localStorage.getItem('portfolio-language') || 'en';
applyLanguage(storedLanguage);
applyFilter('all');
setupRevealAnimations();

themeToggle?.addEventListener('click', () => {
    applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});

languageToggle?.addEventListener('click', () => {
    applyLanguage(root.dataset.language === 'zh' ? 'en' : 'zh');
});

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        applyFilter(button.dataset.filter || 'all');
    });
});
