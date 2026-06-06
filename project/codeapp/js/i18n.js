/**
 * i18n — 多语言引擎
 * 支持 简体中文(zh-CN) / English(en)
 * 自动检测浏览器语言，持久化到 localStorage
 */
const i18n = (() => {
  const STORAGE_KEY = 'ocs_lang';

  const translations = {
    'zh-CN': {
      /* ─── 导航 ─── */
      'nav.home': '首页',
      'nav.projects': '核心项目',
      'nav.entries': '常用入口',
      'nav.about': '关于我们',
      'nav.menu': '菜单',

      /* ─── 页脚 ─── */
      'footer.tagline': '一群热爱技术的学生团队，致力打造稳定高效的跨平台工具。',
      'footer.github': 'GitHub',
      'footer.about': '关于我们',
      'footer.joinGroup': '加入交流群',
      'footer.copyright': '© 2026 Open Code Studio. All rights reserved.',

      /* ─── 首页 ─── */
      'hero.tag': '打造稳定的工具，软件',
      'hero.title': '为热爱打造<br><span class="gradient-text">极简</span> 的<br>工具生态',
      'hero.desc': '源自于对优秀开发体验的追求。我们致力于构建跨平台、高质量的开源工具与框架，让技术创造更简单。',
      'hero.viewProjects': '查看项目',
      'hero.githubOrg': 'GitHub 组织',
      'hero.techCross': '跨平台',
      'hero.techOpen': '开源',

      /* ─── 核心项目页 ─── */
      'projects.number': '/ 01',
      'projects.title': '核心项目',
      'projects.desc': '我们正在开发和维护的项目',
      'projects.status.active': '持续更新',
      'projects.status.maintain': '持续更新',
      'projects.status.paused': '持续更新',
      'projects.link.page': '项目页',
      'projects.link.download': '下载',
      'projects.link.github': 'GitHub',

      'project.codeapp.name': 'CodeApp',
      'project.codeapp.desc': '面向开发者的现代化代码编写平台，支持实时协同编辑与自动化工作流管理，助力团队高效交付。',
      'project.openkit.name': 'OpenKit.Core',
      'project.openkit.desc': 'TypeScript 生态的工具链核心库，提供 CLI 脚手架、配置解析、日志系统等基础能力，为其他项目提供底层支持。',
      'project.cloudflow.name': 'CloudFlow',
      'project.cloudflow.desc': '跨平台 Linux 实时数据监控面板，基于 Dart 构建高性能后端，支持自定义仪表盘与告警规则，强调一致体验。',
      'project.jmcl.name': 'JMCL',
      'project.jmcl.desc': '轻量级跨平台 Minecraft 启动器，基于 Java 构建，支持多版本管理、Mod 加载与一键启动，提供简洁高效的游戏体验。',

      /* ─── 常用入口页 ─── */
      'entries.number': '/ 02',
      'entries.title': '常用入口',
      'entries.desc': '文档、发布、反馈和社区入口',
      'entries.docs.title': 'Open Code Studio Docs',
      'entries.docs.desc': '查看产品文档、使用指南和 API 参考。',
      'entries.codeapp.title': 'CodeApp Releases',
      'entries.codeapp.desc': '查看 CodeApp 最新发布说明和历史版本。',
      'entries.cloudflow.title': 'CloudFlow Releases',
      'entries.cloudflow.desc': '查看 CloudFlow 的发布节奏与可下载构建。',

      /* ─── 关于我们页 ─── */
      'about.number': '/ 03',
      'about.title': '关于我们',
      'about.desc': '一群热爱技术的学生团队，喜欢制作应用、游戏和 MC 地图。',
      'about.content': 'Open Code Studio 源自于对开发工具的追求。我们是一群热爱技术的学生（初中生），致力于打造稳定、高效、可长期维护的开源工具生态。无论是代码协作、监控面板还是工具链，我们都以最高标准要求自己，让每一位开发者都能享受技术带来的纯粹乐趣。',
      'about.contact': '联系方式',
      'about.joinCommunity': '加入社区交流群',

      /* ─── 项目子导航 ─── */
      'subnav.home': '项目主页',
      'subnav.intro': '详细介绍',
      'subnav.download': '下载',

      /* ─── 项目页面通用 ─── */
      'project.hero.badge.active': '持续更新',
      'project.hero.intro': '详细介绍',
      'project.hero.download': '下载',
      'project.hero.github': 'GitHub',
      'project.hero.website': '项目官网',
      'project.hero.feedback': '反馈问题',
      'project.hero.viewReleases': '查看发布页',

      'project.section.features': '/ 功能特性',
      'project.section.featuresTitle': '核心能力',
      'project.section.featuresDesc': '让开发更高效、更自由',
      'project.section.tech': '/ 技术栈',
      'project.section.techTitle': '构建技术',
      'project.section.techDesc': '采用的技术生态',
      'project.section.more': '了解更多',
      'project.section.help': '获取帮助',
      'project.section.latestVersion': '/ 最新版本',
      'project.section.requirements': '/ 系统要求',

      'project.btn.intro': '详细介绍',
      'project.btn.download': '下载',
      'project.btn.github': 'GitHub',
      'project.btn.website': '项目官网',
      'project.btn.feedback': '反馈问题',
      'project.btn.releases': '查看发布页',
      'project.btn.projectHome': '项目主页',

      /* ─── CodeApp 项目详情 ─── */
      'codeapp.intro.title': '关于 CodeApp',
      'codeapp.intro.subtitle': '了解 CodeApp 的诞生背景、架构设计与开发历程',
      'codeapp.intro.bgTitle': '/ 诞生背景',
      'codeapp.intro.bgHeading': '为什么打造 CodeApp',
      'codeapp.intro.bgP1': '在软件开发领域，代码编辑器是开发者最亲密的伙伴。然而，现有方案在跨平台一致性、实时协作体验和扩展性方面仍有提升空间。',
      'codeapp.intro.bgP2': 'CodeApp 的目标是重新定义代码编写体验。基于现代 Web 技术构建，它提供流畅的编辑体验、强大的扩展系统和原生的实时协作能力，让团队协作零摩擦。',
      'codeapp.intro.archTitle': '/ 架构设计',
      'codeapp.intro.archHeading': '系统架构',
      'codeapp.intro.arch1Title': '前端层（Electron + React）',
      'codeapp.intro.arch1Desc': '使用 Electron 构建跨平台桌面应用，React 驱动 UI 渲染，提供原生般流畅的用户体验。',
      'codeapp.intro.arch2Title': '编辑核心（Monaco Editor）',
      'codeapp.intro.arch2Desc': '基于 VS Code 同款编辑器 Monaco Editor，支持语法高亮、智能补全、代码导航等高级特性。',
      'codeapp.intro.arch3Title': '协作引擎（CRDT）',
      'codeapp.intro.arch3Desc': '基于 CRDT 算法构建实时协同引擎，支持多人同时编辑同一文件，自动合并冲突。',
      'codeapp.intro.arch4Title': '扩展系统',
      'codeapp.intro.arch4Desc': '提供完整的插件 API，支持主题、语言服务、代码片段、工作流等扩展能力。',
      'codeapp.intro.roadmapTitle': '/ 开发路线',
      'codeapp.intro.roadmapHeading': '版本里程碑',
      'codeapp.intro.roadmapV1': 'v1.0 — 核心编辑器功能，跨平台桌面客户端',
      'codeapp.intro.roadmapV2': 'v1.1 — 扩展系统开放，插件市场上线',
      'codeapp.intro.roadmapV3': 'v1.2 — 实时协同编辑，团队工作空间',
      'codeapp.intro.roadmapV4': 'v1.3 — AI 智能代码补全与重构建议',
      'codeapp.intro.roadmapV5': 'v1.4 — DevOps 集成，CI/CD 流水线可视化',
      'codeapp.intro.roadmapMore': '更多新特性正在开发中...',

      'codeapp.download.title': '下载 CodeApp',
      'codeapp.download.subtitle': '选择适合你平台的版本，即刻开始高效的代码编写',
      'codeapp.download.version': 'v1.2.0',
      'codeapp.download.versionDesc': '2026 年 5 月发布 ｜ 实时协作与插件系统',
      'codeapp.download.win': 'Windows',
      'codeapp.download.winDesc': 'Windows 10 / 11 (x64)',
      'codeapp.download.winBtn': '下载 (.exe)',
      'codeapp.download.mac': 'macOS',
      'codeapp.download.macDesc': 'macOS 12+ (Intel / Apple Silicon)',
      'codeapp.download.macBtn': '下载 (.dmg)',
      'codeapp.download.linux': 'Linux',
      'codeapp.download.linuxDesc': 'DEB / RPM / AppImage',
      'codeapp.download.linuxBtn': '下载 (.AppImage)',
      'codeapp.download.requirements': '运行环境',
      'codeapp.download.req1': '操作系统：Windows 10+ / macOS 12+ / Linux (内核 5.0+)',
      'codeapp.download.req2': '内存：最低 4GB（推荐 8GB）',
      'codeapp.download.req3': '磁盘：至少 500MB 可用空间',
      'codeapp.download.req4': '网络：协作功能需要稳定的互联网连接',
      'codeapp.download.reqTitle': '运行环境',

      /* ─── CodeApp 主页特性 ─── */
      'codeapp.feature1Title': '实时协同',
      'codeapp.feature1Desc': '支持多人实时编辑同一文件，基于 CRDT 算法自动合并冲突，让团队协作如丝般顺滑。',
      'codeapp.feature2Title': '智能补全',
      'codeapp.feature2Desc': '集成 AI 驱动的代码补全引擎，支持多语言上下文感知，大幅提升编码效率。',
      'codeapp.feature3Title': '扩展生态',
      'codeapp.feature3Desc': '开放插件系统，支持主题、语言服务、代码片段等扩展，满足个性化开发需求。',
      'codeapp.feature4Title': '跨平台',
      'codeapp.feature4Desc': '基于 Electron 构建，原生支持 Windows、macOS 和 Linux，提供一致的用户体验。',
      'codeapp.tech1': 'TypeScript',
      'codeapp.tech2': 'Electron',
      'codeapp.tech3': 'React',
      'codeapp.tech4': 'Monaco Editor',
      'codeapp.tech5': 'CRDT',
      'codeapp.tech6': 'Node.js',

      /* ─── OpenKit.Core 项目详情 ─── */
      'openkit.intro.title': '关于 OpenKit.Core',
      'openkit.intro.subtitle': '了解 OpenKit.Core 的设计理念、模块架构与开发路线',
      'openkit.intro.bgTitle': '/ 设计哲学',
      'openkit.intro.bgHeading': '小而美的工具链核心',
      'openkit.intro.bgP1': '每个前端团队在项目演进过程中，都会积累大量重复的工具代码 —— 脚手架、配置管理、日志输出等。OpenKit.Core 的目标是提供一套经过实战验证的、高内聚低耦合的工具链核心库。',
      'openkit.intro.bgP2': '秉持"小而美"的设计哲学，OpenKit.Core 只做一件事并做到极致：为 TypeScript/Node.js 项目提供开箱即用的基础设施。每个模块都可独立使用，同时也支持统一集成。',
      'openkit.intro.archTitle': '/ 模块架构',
      'openkit.intro.archHeading': '核心模块',
      'openkit.intro.arch1Title': 'CLI 脚手架',
      'openkit.intro.arch1Desc': '基于 Commander.js 构建，提供类型安全的命令行参数解析、自动帮助文档生成和子命令路由。',
      'openkit.intro.arch2Title': '配置解析',
      'openkit.intro.arch2Desc': '支持 JSON / YAML / TOML 多格式配置文件，运行时热重载，提供 Schema 验证功能。',
      'openkit.intro.arch3Title': '日志系统',
      'openkit.intro.arch3Desc': '结构化的分层日志系统，支持多级别输出、彩色终端展示和可扩展的传输通道。',
      'openkit.intro.arch4Title': '工具函数',
      'openkit.intro.arch4Desc': '收集了日常开发中高频使用的工具函数，包括文件操作、网络请求、数据转换等，避免重复造轮子。',
      'openkit.intro.roadmapTitle': '/ 开发路线',
      'openkit.intro.roadmapHeading': '版本里程碑',
      'openkit.intro.roadmapV1': 'v1.0 — 核心模块发布，CLI + 配置 + 日志',
      'openkit.intro.roadmapV2': 'v1.1 — 插件机制开放，支持社区扩展',
      'openkit.intro.roadmapV3': 'v1.2 — 性能优化，模块按需加载',
      'openkit.intro.roadmapV4': 'v2.0 — 跨运行时支持（Node.js / Deno / Bun）',
      'openkit.intro.roadmapMore': '更多新特性正在规划中...',

      'openkit.download.title': '安装 OpenKit.Core',
      'openkit.download.subtitle': '通过 npm 快速安装，即刻为你的项目注入核心能力',
      'openkit.download.versionDesc': '2026 年 5 月发布 ｜ 性能优化与 API 稳定性加固',
      'openkit.download.npm': 'npm 安装',
      'openkit.download.npmDesc': '在项目中使用 OpenKit.Core',
      'openkit.download.npmBtn': 'npm install @open-kit/core',
      'openkit.download.cli': '独立 CLI',
      'openkit.download.cliTitle': '独立 CLI 工具',
      'openkit.download.cliDesc': '全局安装后可直接使用 openkit 命令',
      'openkit.download.cliBtn': 'npm install -g @open-kit/cli',
      'openkit.download.source': '源码构建',
      'openkit.download.sourceDesc': '从 GitHub 克隆并构建',
      'openkit.download.sourceBtn': '查看源码',
      'openkit.download.reqTitle': '环境要求',
      'openkit.download.req1': '运行时：Node.js 18+（推荐 20 LTS）',
      'openkit.download.req2': '包管理器：npm 9+ / pnpm 8+ / yarn 3+',
      'openkit.download.req3': 'TypeScript：4.9+（使用类型定义时）',
      'openkit.download.req4': '操作系统：Windows / macOS / Linux 均可',
      'openkit.download.reqTitle': '运行环境',

      /* ─── OpenKit.Core 主页特性 ─── */
      'openkit.feature1Title': 'CLI 脚手架',
      'openkit.feature1Desc': '类型安全的命令行参数解析，支持自动帮助文档生成和多级子命令路由。',
      'openkit.feature2Title': '配置管理',
      'openkit.feature2Desc': '多格式配置文件支持，运行时热重载，内置 Schema 验证确保配置正确性。',
      'openkit.feature3Title': '日志系统',
      'openkit.feature3Desc': '结构化分层日志，支持多级别、彩色终端输出和自定义传输通道。',
      'openkit.feature4Title': '插件机制',
      'openkit.feature4Desc': '开放插件 API，支持社区扩展核心功能，按需加载保持应用轻量。',
      'openkit.tech1': 'TypeScript',
      'openkit.tech2': 'Node.js',
      'openkit.tech3': 'Commander.js',
      'openkit.tech4': 'Zod',
      'openkit.tech5': 'Vitest',
      'openkit.tech6': 'pnpm',

      /* ─── CloudFlow 项目详情 ─── */
      'cloudflow.intro.title': '关于 CloudFlow',
      'cloudflow.intro.subtitle': '了解 CloudFlow 的诞生背景、技术架构与开发路线',
      'cloudflow.intro.bgTitle': '/ 诞生背景',
      'cloudflow.intro.bgHeading': '为什么打造 CloudFlow',
      'cloudflow.intro.bgP1': 'Linux 服务器监控一直是个复杂的话题。现有方案要么过于重量级（如 Prometheus + Grafana），要么功能单一、扩展性差。中小团队和独立开发者亟需一款轻量但功能完整的监控方案。',
      'cloudflow.intro.bgP2': 'CloudFlow 旨在填补这一空白。基于 Dart 构建高性能后端，配备现代化的 Web 前端，提供从数据采集到可视化的完整链路，同时保持极低的资源占用和简单的部署流程。',
      'cloudflow.intro.archTitle': '/ 技术架构',
      'cloudflow.intro.archHeading': '系统架构',
      'cloudflow.intro.arch1Title': '数据采集层',
      'cloudflow.intro.arch1Desc': '使用 Dart 实现高效的数据采集代理，支持 CPU、内存、磁盘、网络等系统指标的采样与上报。',
      'cloudflow.intro.arch2Title': '存储与计算层',
      'cloudflow.intro.arch2Desc': '基于时序数据库存储监控数据，支持数据聚合、降采样和自定义保留策略。',
      'cloudflow.intro.arch3Title': '告警引擎',
      'cloudflow.intro.arch3Desc': '灵活的规则配置系统，支持多条件告警、通知渠道集成（钉钉、邮件、Webhook）和静默期管理。',
      'cloudflow.intro.arch4Title': '可视化层',
      'cloudflow.intro.arch4Desc': '基于 Web 的交互式仪表盘，支持拖拽布局、自定义图表和实时数据刷新。',
      'cloudflow.intro.roadmapTitle': '/ 开发路线',
      'cloudflow.intro.roadmapHeading': '版本里程碑',
      'cloudflow.intro.roadmapV1': 'v0.1 — 基础监控代理，系统指标采集与展示',
      'cloudflow.intro.roadmapV2': 'v0.2 — 告警规则引擎，多渠道通知集成',
      'cloudflow.intro.roadmapV3': 'v0.3 — 自定义仪表盘，拖拽式布局编辑器',
      'cloudflow.intro.roadmapV4': 'v0.4 — 插件系统，支持自定义监控指标',
      'cloudflow.intro.roadmapV5': 'v0.5 — 分布式部署支持，多节点统一管理',
      'cloudflow.intro.roadmapMore': '更多新特性正在开发中...',

      'cloudflow.download.title': '下载 CloudFlow',
      'cloudflow.download.subtitle': '选择适合你环境的方式部署 CloudFlow',
      'cloudflow.download.linuxAmd': 'Linux (x86_64)',
      'cloudflow.download.linuxAmdTitle': 'Linux (x86_64)',
      'cloudflow.download.linuxAmdDesc': 'Ubuntu / Debian / CentOS',
      'cloudflow.download.linuxAmdBtn': '下载 (.tar.gz)',
      'cloudflow.download.linuxArm': 'Linux (ARM64)',
      'cloudflow.download.linuxArmTitle': 'Linux (ARM64)',
      'cloudflow.download.linuxArmDesc': '树莓派 / ARM 服务器',
      'cloudflow.download.linuxArmBtn': '下载 (.tar.gz)',
      'cloudflow.download.docker': 'Docker',
      'cloudflow.download.dockerTitle': 'Docker',
      'cloudflow.download.dockerDesc': '一键部署容器化版本',
      'cloudflow.download.dockerBtn': 'docker pull',
      'cloudflow.download.reqTitle': '系统要求',
      'cloudflow.download.req1': '操作系统：Linux (内核 4.15+)',
      'cloudflow.download.req2': '内存：最低 512MB（推荐 2GB）',
      'cloudflow.download.req3': '磁盘：至少 1GB 可用空间（含数据存储）',
      'cloudflow.download.req4': '网络：需要稳定网络连接接收告警通知',
      'cloudflow.download.req5': '浏览器：推荐 Chrome / Firefox / Edge 最新版',
      'cloudflow.download.reqTitle': '系统要求',

      /* ─── CloudFlow 主页特性 ─── */
      'cloudflow.feature1Title': '实时监控',
      'cloudflow.feature1Desc': '支持 CPU、内存、磁盘、网络等多维度系统指标实时采集，毫秒级数据刷新。',
      'cloudflow.feature2Title': '自定义仪表盘',
      'cloudflow.feature2Desc': '拖拽式布局编辑器，支持自定义图表组合、主题配色和全局筛选器。',
      'cloudflow.feature3Title': '智能告警',
      'cloudflow.feature3Desc': '灵活的规则配置系统，支持多条件组合告警，集成钉钉、邮件、Webhook 通知。',
      'cloudflow.feature4Title': '跨平台',
      'cloudflow.feature4Desc': '基于 Dart 构建，高性能低资源占用，支持 x86_64 和 ARM64 架构。',
      'cloudflow.tech1': 'Dart',
      'cloudflow.tech2': 'Flutter',
      'cloudflow.tech3': 'InfluxDB',
      'cloudflow.tech4': 'WebSocket',
      'cloudflow.tech5': 'Docker',
      'cloudflow.tech6': 'gRPC',

      /* ─── JMCL 项目详情 ─── */
      'jmcl.intro.title': '关于 JMCL',
      'jmcl.intro.subtitle': '了解 JMCL 的诞生背景、架构设计与开发历程',
      'jmcl.intro.bgTitle': '/ 诞生背景',
      'jmcl.intro.bgHeading': '为什么打造 JMCL',
      'jmcl.intro.bgP1': 'Minecraft 启动器是每位玩家进入游戏的必经门户。然而，市面上的启动器往往存在体验不一致、跨平台支持不完善、Mod 管理繁琐等问题。',
      'jmcl.intro.bgP2': 'JMCL（Java Minecraft Launcher）的目标是提供一款真正轻量、开源、跨平台的 Minecraft 启动器。基于 Java 构建，JMCL 天然具备跨平台能力，同时保持极小的体积和干净的界面。',
      'jmcl.intro.archTitle': '/ 架构设计',
      'jmcl.intro.archHeading': '系统架构',
      'jmcl.intro.arch1Title': 'UI 层（JavaFX）',
      'jmcl.intro.arch1Desc': '使用 JavaFX 构建现代化图形界面，支持 CSS 样式定制，提供流畅的动画和响应式布局。',
      'jmcl.intro.arch2Title': '版本管理层',
      'jmcl.intro.arch2Desc': '自动从 Mojang 元数据服务获取版本列表，支持版本缓存、增量更新和自定义版本目录。',
      'jmcl.intro.arch3Title': 'Mod 加载引擎',
      'jmcl.intro.arch3Desc': '内置 Forge 和 Fabric 安装器，自动处理加载器版本匹配和 Mod 依赖关系，简化 Mod 管理。',
      'jmcl.intro.arch4Title': '诊断与日志',
      'jmcl.intro.arch4Desc': '提供启动日志实时查看、Java 环境检测、常见问题诊断，帮助用户快速定位和解决问题。',
      'jmcl.intro.roadmapTitle': '/ 开发路线',
      'jmcl.intro.roadmapHeading': '版本里程碑',
      'jmcl.intro.roadmapV1': 'v0.1 Alpha — 基础启动器核心，支持版本管理和一键启动',
      'jmcl.intro.roadmapV2': 'v0.2 Beta — Forge/Fabric 加载器支持，Mod 管理功能',
      'jmcl.intro.roadmapV3': 'v0.3 — 账号系统上线，支持微软/Mojang 登录',
      'jmcl.intro.roadmapV4': 'v0.4 — 资源包与光影包管理，游戏配置可视化编辑',
      'jmcl.intro.roadmapV5': 'v0.5 — 插件系统开放，支持社区扩展启动器功能',
      'jmcl.intro.roadmapMore': '更多新特性正在开发中...',

      'jmcl.download.title': '下载 JMCL',
      'jmcl.download.subtitle': '选择适合你平台的版本，即刻开启 Minecraft 之旅',
      'jmcl.download.version': 'v0.5.0',
      'jmcl.download.versionDesc': '2026 年 5 月发布 ｜ 插件系统与性能优化',
      'jmcl.download.win': 'Windows',
      'jmcl.download.winDesc': 'Windows 10 / 11 (x64)',
      'jmcl.download.winBtn': '下载 (.exe)',
      'jmcl.download.mac': 'macOS',
      'jmcl.download.macDesc': 'macOS 12+ (Intel / Apple Silicon)',
      'jmcl.download.macBtn': '下载 (.dmg)',
      'jmcl.download.linux': 'Linux',
      'jmcl.download.linuxDesc': 'DEB / RPM / AppImage',
      'jmcl.download.linuxBtn': '下载 (.AppImage)',
      'jmcl.download.reqTitle': '运行环境',
      'jmcl.download.req1': '运行时：Java 17+（推荐 Java 21）',
      'jmcl.download.req2': '操作系统：Windows 10+ / macOS 12+ / Linux (内核 5.0+)',
      'jmcl.download.req3': '内存：最低 2GB（推荐 4GB）',
      'jmcl.download.req4': '磁盘：至少 200MB 可用空间（不含 Minecraft 游戏文件）',
      'jmcl.download.req5': '显卡：支持 OpenGL 3.2+',
      'jmcl.download.reqTitle': '运行环境',

      /* ─── JMCL 主页特性 ─── */
      'jmcl.feature1Title': '多版本管理',
      'jmcl.feature1Desc': '支持从 1.7 到最新版的 Minecraft 全版本管理，自动下载安装，在多个版本间无缝切换。',
      'jmcl.feature2Title': 'Mod 加载管理',
      'jmcl.feature2Desc': '集成 Forge、Fabric 等主流 Mod 加载器，支持 Mod 可视化安装、启用/禁用和一键更新。',
      'jmcl.feature3Title': '跨平台支持',
      'jmcl.feature3Desc': '基于 Java 构建，原生支持 Windows、macOS 和 Linux，提供一致的用户界面和操作体验。',
      'jmcl.feature4Title': '一键启动',
      'jmcl.feature4Desc': '智能版本检测与依赖自动补全，配置完成后一键启动游戏，无需手动配置 Java 参数。',
      'jmcl.tech1': 'Java',
      'jmcl.tech2': 'JavaFX',
      'jmcl.tech3': 'Gradle',
      'jmcl.tech4': 'Minecraft API',
      'jmcl.tech5': 'Forge',
      'jmcl.tech6': 'Fabric',
    },

    'en': {
      /* ─── Navigation ─── */
      'nav.home': 'Home',
      'nav.projects': 'Projects',
      'nav.entries': 'Quick Links',
      'nav.about': 'About',
      'nav.menu': 'Menu',

      /* ─── Footer ─── */
      'footer.tagline': 'A student team passionate about technology, building stable and efficient cross-platform tools.',
      'footer.github': 'GitHub',
      'footer.about': 'About',
      'footer.joinGroup': 'Join Group',
      'footer.copyright': '© 2026 Open Code Studio. All rights reserved.',

      /* ─── Home ─── */
      'hero.tag': 'Building stable tools, software',
      'hero.title': 'Built for passion<br><span class="gradient-text">Minimal</span><br>Tool Ecosystem',
      'hero.desc': 'Driven by the pursuit of excellent development experience. We are committed to building cross-platform, high-quality open-source tools and frameworks, making technical creation simpler.',
      'hero.viewProjects': 'View Projects',
      'hero.githubOrg': 'GitHub Org',
      'hero.techCross': 'Cross-platform',
      'hero.techOpen': 'Open Source',

      /* ─── Projects Page ─── */
      'projects.number': '/ 01',
      'projects.title': 'Core Projects',
      'projects.desc': 'Projects we are developing and maintaining',
      'projects.status.active': 'Active',
      'projects.status.maintain': 'Active',
      'projects.status.paused': 'Active',
      'projects.link.page': 'Project Page',
      'projects.link.download': 'Download',
      'projects.link.github': 'GitHub',

      'project.codeapp.name': 'CodeApp',
      'project.codeapp.desc': 'A modern code editing platform for developers, supporting real-time collaborative editing and automated workflow management.',
      'project.openkit.name': 'OpenKit.Core',
      'project.openkit.desc': 'A TypeScript ecosystem toolchain core library providing CLI scaffolding, config parsing, logging and other foundational capabilities.',
      'project.cloudflow.name': 'CloudFlow',
      'project.cloudflow.desc': 'A cross-platform Linux real-time monitoring dashboard with customizable dashboards and alert rules.',
      'project.jmcl.name': 'JMCL',
      'project.jmcl.desc': 'A lightweight cross-platform Minecraft launcher built with Java, supporting multi-version management and mod loading.',

      /* ─── Entries Page ─── */
      'entries.number': '/ 02',
      'entries.title': 'Quick Links',
      'entries.desc': 'Docs, Releases, Feedback & Community',
      'entries.docs.title': 'Open Code Studio Docs',
      'entries.docs.desc': 'View product documentation, user guides, and API reference.',
      'entries.codeapp.title': 'CodeApp Releases',
      'entries.codeapp.desc': 'Check the latest CodeApp release notes and version history.',
      'entries.cloudflow.title': 'CloudFlow Releases',
      'entries.cloudflow.desc': 'View CloudFlow release cadence and downloadable builds.',

      /* ─── About Page ─── */
      'about.number': '/ 03',
      'about.title': 'About Us',
      'about.desc': 'A student team passionate about technology, who love building apps, games, and MC maps.',
      'about.content': 'Open Code Studio was born from the pursuit of excellent development tools. We are a team of students passionate about technology, dedicated to building a stable, efficient, and maintainable open-source tool ecosystem. Whether it is code collaboration, monitoring dashboards, or toolchains, we hold ourselves to the highest standards.',
      'about.contact': 'Contact',
      'about.joinCommunity': 'Join Our Community',

      /* ─── Project Subnav ─── */
      'subnav.home': 'Home',
      'subnav.intro': 'Introduction',
      'subnav.download': 'Download',

      /* ─── Project Page Common ─── */
      'project.hero.badge.active': 'Active',
      'project.hero.intro': 'Introduction',
      'project.hero.download': 'Download',
      'project.hero.github': 'GitHub',
      'project.hero.website': 'Website',
      'project.hero.feedback': 'Feedback',
      'project.hero.viewReleases': 'View Releases',

      'project.section.features': '/ Features',
      'project.section.featuresTitle': 'Core Features',
      'project.section.featuresDesc': 'Make development more efficient and enjoyable',
      'project.section.tech': '/ Tech Stack',
      'project.section.techTitle': 'Built With',
      'project.section.techDesc': 'Technologies powering this project',
      'project.section.more': 'Learn More',
      'project.section.help': 'Get Help',

      'project.btn.intro': 'Introduction',
      'project.btn.download': 'Download',
      'project.btn.github': 'GitHub',
      'project.btn.website': 'Website',
      'project.btn.feedback': 'Feedback',
      'project.btn.releases': 'View Releases',
      'project.btn.projectHome': 'Project Home',

      /* ─── CodeApp Details ─── */
      'codeapp.intro.title': 'About CodeApp',
      'codeapp.intro.subtitle': 'Learn about CodeApp\'s background, architecture, and development journey',
      'codeapp.intro.bgTitle': '/ Background',
      'codeapp.intro.bgHeading': 'Why CodeApp',
      'codeapp.intro.bgP1': 'In software development, the code editor is a developer\'s closest companion. However, existing solutions still have room for improvement in cross-platform consistency, real-time collaboration, and extensibility.',
      'codeapp.intro.bgP2': 'CodeApp aims to redefine the coding experience. Built with modern web technologies, it provides a smooth editing experience, powerful extension system, and native real-time collaboration capabilities.',
      'codeapp.intro.archTitle': '/ Architecture',
      'codeapp.intro.archHeading': 'System Architecture',
      'codeapp.intro.arch1Title': 'Frontend (Electron + React)',
      'codeapp.intro.arch1Desc': 'Cross-platform desktop app built with Electron, with React-driven UI for native-like performance.',
      'codeapp.intro.arch2Title': 'Editor Core (Monaco Editor)',
      'codeapp.intro.arch2Desc': 'Based on the same editor as VS Code, Monaco Editor, supporting syntax highlighting, intelli-sense, and code navigation.',
      'codeapp.intro.arch3Title': 'Collaboration Engine (CRDT)',
      'codeapp.intro.arch3Desc': 'Built on CRDT algorithm for real-time collaborative editing, allowing multiple users to edit simultaneously with automatic conflict resolution.',
      'codeapp.intro.arch4Title': 'Extension System',
      'codeapp.intro.arch4Desc': 'Complete plugin API supporting themes, language services, snippets, and workflow extensions.',
      'codeapp.intro.roadmapTitle': '/ Roadmap',
      'codeapp.intro.roadmapHeading': 'Version Milestones',
      'codeapp.intro.roadmapV1': 'v1.0 — Core editor features, cross-platform desktop client',
      'codeapp.intro.roadmapV2': 'v1.1 — Extension system, plugin marketplace launch',
      'codeapp.intro.roadmapV3': 'v1.2 — Real-time collaboration, team workspaces',
      'codeapp.intro.roadmapV4': 'v1.3 — AI-powered code completion and refactoring',
      'codeapp.intro.roadmapV5': 'v1.4 — DevOps integration, CI/CD pipeline visualization',
      'codeapp.intro.roadmapMore': 'More features in development...',

      'codeapp.download.title': 'Download CodeApp',
      'codeapp.download.subtitle': 'Choose the version for your platform and start coding efficiently',
      'codeapp.download.version': 'v1.2.0',
      'codeapp.download.versionDesc': 'May 2026 Release | Real-time Collaboration & Plugin System',
      'codeapp.download.win': 'Windows',
      'codeapp.download.winDesc': 'Windows 10 / 11 (x64)',
      'codeapp.download.winBtn': 'Download (.exe)',
      'codeapp.download.mac': 'macOS',
      'codeapp.download.macDesc': 'macOS 12+ (Intel / Apple Silicon)',
      'codeapp.download.macBtn': 'Download (.dmg)',
      'codeapp.download.linux': 'Linux',
      'codeapp.download.linuxDesc': 'DEB / RPM / AppImage',
      'codeapp.download.linuxBtn': 'Download (.AppImage)',
      'codeapp.download.requirements': 'System Requirements',
      'codeapp.download.req1': 'OS: Windows 10+ / macOS 12+ / Linux (kernel 5.0+)',
      'codeapp.download.req2': 'RAM: 4GB minimum (8GB recommended)',
      'codeapp.download.req3': 'Disk: At least 500MB free space',

      /* ─── CodeApp Home Features ─── */
      'codeapp.feature1Title': 'Real-time Collaboration',
      'codeapp.feature1Desc': 'Multi-user real-time editing with CRDT-based conflict resolution for seamless team collaboration.',
      'codeapp.feature2Title': 'Smart Completion',
      'codeapp.feature2Desc': 'AI-powered code completion engine with multi-language context awareness, boosting coding efficiency.',
      'codeapp.feature3Title': 'Extension Ecosystem',
      'codeapp.feature3Desc': 'Open plugin system supporting themes, language services, snippets, and workflow extensions.',
      'codeapp.feature4Title': 'Cross-platform',
      'codeapp.feature4Desc': 'Built with Electron, natively supporting Windows, macOS, and Linux with consistent experience.',
      'codeapp.tech1': 'TypeScript',
      'codeapp.tech2': 'Electron',
      'codeapp.tech3': 'React',
      'codeapp.tech4': 'Monaco Editor',
      'codeapp.tech5': 'CRDT',
      'codeapp.tech6': 'Node.js',

      /* ─── OpenKit.Core Details ─── */
      'openkit.intro.title': 'About OpenKit.Core',
      'openkit.intro.subtitle': 'Learn about OpenKit.Core\'s design philosophy, module architecture, and roadmap',
      'openkit.intro.bgTitle': '/ Philosophy',
      'openkit.intro.bgHeading': 'A Minimalist Toolchain Core',
      'openkit.intro.bgP1': 'Every frontend team accumulates repetitive tooling code over time — scaffolding, config management, logging, etc. OpenKit.Core aims to provide a battle-tested, highly cohesive yet loosely coupled toolchain core library.',
      'openkit.intro.bgP2': 'Following the "minimalist" philosophy, OpenKit.Core does one thing well: providing production-ready infrastructure for TypeScript/Node.js projects. Each module works independently, and all modules integrate seamlessly.',
      'openkit.intro.archTitle': '/ Modules',
      'openkit.intro.archHeading': 'Core Modules',
      'openkit.intro.arch1Title': 'CLI Scaffolding',
      'openkit.intro.arch1Desc': 'Built on Commander.js with type-safe argument parsing, auto-generated help docs, and subcommand routing.',
      'openkit.intro.arch2Title': 'Config Parser',
      'openkit.intro.arch2Desc': 'Multi-format config file support (JSON/YAML/TOML), hot-reload at runtime, with Schema validation built in.',
      'openkit.intro.arch3Title': 'Logging System',
      'openkit.intro.arch3Desc': 'Structured layered logging with multi-level output, colored terminal display, and extensible transport channels.',
      'openkit.intro.arch4Title': 'Utilities',
      'openkit.intro.arch4Desc': 'Collection of high-frequency utility functions including file operations, network requests, and data transformation.',
      'openkit.intro.roadmapTitle': '/ Roadmap',
      'openkit.intro.roadmapHeading': 'Version Milestones',
      'openkit.intro.roadmapV1': 'v1.0 — Core modules: CLI + Config + Logging',
      'openkit.intro.roadmapV2': 'v1.1 — Plugin system, community extensions',
      'openkit.intro.roadmapV3': 'v1.2 — Performance optimization, on-demand loading',
      'openkit.intro.roadmapV4': 'v2.0 — Cross-runtime support (Node.js / Deno / Bun)',
      'openkit.intro.roadmapMore': 'More features being planned...',

      'openkit.download.title': 'Download OpenKit.Core',
      'openkit.download.subtitle': 'Install via npm or download standalone CLI',
      'openkit.download.npm': 'npm Install',
      'openkit.download.npmDesc': 'Use OpenKit.Core in your project',
      'openkit.download.npmBtn': 'npm install @open-kit/core',
      'openkit.download.cli': 'Standalone CLI',
      'openkit.download.cliDesc': 'Global install CLI tool',
      'openkit.download.cliBtn': 'npm install -g @open-kit/cli',
      'openkit.download.source': 'Source Build',
      'openkit.download.sourceDesc': 'Clone and build from GitHub',
      'openkit.download.sourceBtn': 'View Source',
      'openkit.download.reqTitle': 'Requirements',
      'openkit.download.req1': 'Runtime: Node.js 18+ (20 LTS recommended)',
      'openkit.download.req2': 'Package Manager: npm 9+ / pnpm 8+ / yarn 3+',
      'openkit.download.req3': 'TypeScript: 4.9+ (for type definitions)',

      /* ─── OpenKit.Core Home Features ─── */
      'openkit.feature1Title': 'CLI Scaffolding',
      'openkit.feature1Desc': 'Type-safe argument parsing with auto-generated help docs and multi-level subcommand routing.',
      'openkit.feature2Title': 'Config Management',
      'openkit.feature2Desc': 'Multi-format config support, hot-reload at runtime, with built-in Schema validation.',
      'openkit.feature3Title': 'Logging System',
      'openkit.feature3Desc': 'Structured layered logging with multi-level, colored output and custom transport channels.',
      'openkit.feature4Title': 'Plugin System',
      'openkit.feature4Desc': 'Open Plugin API for community extensions, on-demand loading keeps your app lightweight.',
      'openkit.tech1': 'TypeScript',
      'openkit.tech2': 'Node.js',
      'openkit.tech3': 'Commander.js',
      'openkit.tech4': 'Zod',
      'openkit.tech5': 'Vitest',
      'openkit.tech6': 'pnpm',

      /* ─── CloudFlow Details ─── */
      'cloudflow.intro.title': 'About CloudFlow',
      'cloudflow.intro.subtitle': 'Learn about CloudFlow\'s background, technical architecture, and roadmap',
      'cloudflow.intro.bgTitle': '/ Background',
      'cloudflow.intro.bgHeading': 'Why CloudFlow',
      'cloudflow.intro.bgP1': 'Linux server monitoring has always been complex. Existing solutions are either too heavy (e.g. Prometheus + Grafana) or too limited in functionality. Small teams and independent developers need a lightweight yet complete monitoring solution.',
      'cloudflow.intro.bgP2': 'CloudFlow fills this gap. Built with Dart for high-performance backend, paired with a modern Web frontend, it provides a complete pipeline from data collection to visualization while maintaining minimal resource usage and simple deployment.',
      'cloudflow.intro.archTitle': '/ Architecture',
      'cloudflow.intro.archHeading': 'System Architecture',
      'cloudflow.intro.arch1Title': 'Data Collection Layer',
      'cloudflow.intro.arch1Desc': 'Efficient data collection agent built with Dart, supporting CPU, memory, disk, and network metric sampling.',
      'cloudflow.intro.arch2Title': 'Storage & Compute Layer',
      'cloudflow.intro.arch2Desc': 'Time-series database for metric storage with data aggregation, downsampling, and custom retention policies.',
      'cloudflow.intro.arch3Title': 'Alert Engine',
      'cloudflow.intro.arch3Desc': 'Flexible rule configuration with multi-condition alerts, notification channel integration (DingTalk, Email, Webhook).',
      'cloudflow.intro.arch4Title': 'Visualization Layer',
      'cloudflow.intro.arch4Desc': 'Web-based interactive dashboard with drag-and-drop layout, customizable charts, and real-time data refresh.',
      'cloudflow.intro.roadmapTitle': '/ Roadmap',
      'cloudflow.intro.roadmapHeading': 'Version Milestones',
      'cloudflow.intro.roadmapV1': 'v0.1 — Basic monitoring agent, system metrics collection & display',
      'cloudflow.intro.roadmapV2': 'v0.2 — Alert rule engine, multi-channel notifications',
      'cloudflow.intro.roadmapV3': 'v0.3 — Custom dashboards, drag-and-drop layout editor',
      'cloudflow.intro.roadmapV4': 'v0.4 — Plugin system, custom monitoring metrics',
      'cloudflow.intro.roadmapV5': 'v0.5 — Distributed deployment, multi-node management',
      'cloudflow.intro.roadmapMore': 'More features in development...',

      'cloudflow.download.title': 'Download CloudFlow',
      'cloudflow.download.subtitle': 'Choose the best way to deploy CloudFlow',
      'cloudflow.download.linuxAmd': 'Linux (x86_64)',
      'cloudflow.download.linuxAmdDesc': 'Ubuntu / Debian / CentOS',
      'cloudflow.download.linuxAmdBtn': 'Download (.tar.gz)',
      'cloudflow.download.linuxArm': 'Linux (ARM64)',
      'cloudflow.download.linuxArmDesc': 'Raspberry Pi / ARM Servers',
      'cloudflow.download.linuxArmBtn': 'Download (.tar.gz)',
      'cloudflow.download.docker': 'Docker',
      'cloudflow.download.dockerDesc': 'One-click containerized deployment',
      'cloudflow.download.dockerBtn': 'docker pull',
      'cloudflow.download.reqTitle': 'System Requirements',
      'cloudflow.download.req1': 'OS: Linux (kernel 4.15+)',
      'cloudflow.download.req2': 'RAM: 512MB minimum (2GB recommended)',
      'cloudflow.download.req3': 'Disk: At least 1GB free space (including data storage)',

      /* ─── CloudFlow Home Features ─── */
      'cloudflow.feature1Title': 'Real-time Monitoring',
      'cloudflow.feature1Desc': 'Multi-dimensional system metrics including CPU, memory, disk, and network with millisecond-level refresh.',
      'cloudflow.feature2Title': 'Custom Dashboards',
      'cloudflow.feature2Desc': 'Drag-and-drop layout editor with customizable charts, themes, and global filters.',
      'cloudflow.feature3Title': 'Smart Alerts',
      'cloudflow.feature3Desc': 'Flexible multi-condition alert rules with DingTalk, Email, and Webhook integration.',
      'cloudflow.feature4Title': 'Cross-platform',
      'cloudflow.feature4Desc': 'Built with Dart for high performance and low resource usage, supporting x86_64 and ARM64.',
      'cloudflow.tech1': 'Dart',
      'cloudflow.tech2': 'Flutter',
      'cloudflow.tech3': 'InfluxDB',
      'cloudflow.tech4': 'WebSocket',
      'cloudflow.tech5': 'Docker',
      'cloudflow.tech6': 'gRPC',

      /* ─── JMCL Details ─── */
      'jmcl.intro.title': 'About JMCL',
      'jmcl.intro.subtitle': 'Learn about JMCL\'s background, architecture, and development journey',
      'jmcl.intro.bgTitle': '/ Background',
      'jmcl.intro.bgHeading': 'Why JMCL',
      'jmcl.intro.bgP1': 'The Minecraft launcher is every player\'s gateway to the game. However, existing launchers often suffer from inconsistent experiences, incomplete cross-platform support, and cumbersome mod management.',
      'jmcl.intro.bgP2': 'JMCL (Java Minecraft Launcher) aims to provide a truly lightweight, open-source, cross-platform Minecraft launcher. Built with Java, JMCL naturally supports cross-platform use while maintaining a small footprint and clean interface.',
      'jmcl.intro.archTitle': '/ Architecture',
      'jmcl.intro.archHeading': 'System Architecture',
      'jmcl.intro.arch1Title': 'UI Layer (JavaFX)',
      'jmcl.intro.arch1Desc': 'Modern GUI built with JavaFX, supporting CSS customization with smooth animations and responsive layout.',
      'jmcl.intro.arch2Title': 'Version Manager',
      'jmcl.intro.arch2Desc': 'Automatically fetches version list from Mojang metadata service with version caching and incremental updates.',
      'jmcl.intro.arch3Title': 'Mod Loader Engine',
      'jmcl.intro.arch3Desc': 'Built-in Forge and Fabric installers with automatic loader version matching and dependency resolution.',
      'jmcl.intro.arch4Title': 'Diagnostics & Logging',
      'jmcl.intro.arch4Desc': 'Real-time launch log viewer, Java environment detection, and common issue diagnostics.',
      'jmcl.intro.roadmapTitle': '/ Roadmap',
      'jmcl.intro.roadmapHeading': 'Version Milestones',
      'jmcl.intro.roadmapV1': 'v0.1 Alpha — Core launcher, version management & one-click launch',
      'jmcl.intro.roadmapV2': 'v0.2 Beta — Forge/Fabric loader support, mod management',
      'jmcl.intro.roadmapV3': 'v0.3 — Account system, Microsoft/Mojang login',
      'jmcl.intro.roadmapV4': 'v0.4 — Resource pack & shader management, visual config editor',
      'jmcl.intro.roadmapV5': 'v0.5 — Plugin system, community extensions',
      'jmcl.intro.roadmapMore': 'More features in development...',

      'jmcl.download.title': 'Download JMCL',
      'jmcl.download.subtitle': 'Choose the version for your platform and start your Minecraft journey',
      'jmcl.download.version': 'v0.5.0',
      'jmcl.download.versionDesc': 'May 2026 Release | Plugin System & Performance',
      'jmcl.download.win': 'Windows',
      'jmcl.download.winDesc': 'Windows 10 / 11 (x64)',
      'jmcl.download.winBtn': 'Download (.exe)',
      'jmcl.download.mac': 'macOS',
      'jmcl.download.macDesc': 'macOS 12+ (Intel / Apple Silicon)',
      'jmcl.download.macBtn': 'Download (.dmg)',
      'jmcl.download.linux': 'Linux',
      'jmcl.download.linuxDesc': 'DEB / RPM / AppImage',
      'jmcl.download.linuxBtn': 'Download (.AppImage)',
      'jmcl.download.reqTitle': 'Requirements',
      'jmcl.download.req1': 'Runtime: Java 17+ (Java 21 recommended)',
      'jmcl.download.req2': 'OS: Windows 10+ / macOS 12+ / Linux (kernel 5.0+)',
      'jmcl.download.req3': 'RAM: 2GB minimum (4GB recommended)',

      /* ─── JMCL Home Features ─── */
      'jmcl.feature1Title': 'Multi-version Management',
      'jmcl.feature1Desc': 'Full version management from 1.7 to the latest, auto-download and seamless switching between versions.',
      'jmcl.feature2Title': 'Mod Loader',
      'jmcl.feature2Desc': 'Integrated Forge and Fabric installers with visual mod installation, enable/disable, and one-click updates.',
      'jmcl.feature3Title': 'Cross-platform',
      'jmcl.feature3Desc': 'Built with Java, natively supporting Windows, macOS, and Linux with a consistent user interface.',
      'jmcl.feature4Title': 'One-click Launch',
      'jmcl.feature4Desc': 'Smart version detection and auto dependency resolution for one-click game launch without manual Java config.',
      'jmcl.tech1': 'Java',
      'jmcl.tech2': 'JavaFX',
      'jmcl.tech3': 'Gradle',
      'jmcl.tech4': 'Minecraft API',
      'jmcl.tech5': 'Forge',
      'jmcl.tech6': 'Fabric',
    },
  };

  let currentLang = localStorage.getItem(STORAGE_KEY);
  if (!currentLang) {
    const browserLang = navigator.language || navigator.userLanguage || '';
    currentLang = browserLang.startsWith('zh') ? 'zh-CN' : 'en';
  }
  if (!translations[currentLang]) currentLang = 'zh-CN';

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    translatePage();
    updateLangSwitchBtn();
  }

  function toggleLanguage() {
    const next = currentLang === 'zh-CN' ? 'en' : 'zh-CN';
    setLanguage(next);
  }

  function translatePage() {
    // Translate text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = translations[currentLang][key];
      if (text !== undefined) {
        el.textContent = text;
      }
    });

    // Translate innerHTML (for elements with <br>, <span>, etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const html = translations[currentLang][key];
      if (html !== undefined) {
        el.innerHTML = html;
      }
    });

    // Translate placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const text = translations[currentLang][key];
      if (text !== undefined) {
        el.placeholder = text;
      }
    });

    // Translate aria-label
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      const text = translations[currentLang][key];
      if (text !== undefined) {
        el.setAttribute('aria-label', text);
      }
    });
  }

  function updateLangSwitchBtn() {
    document.querySelectorAll('.lang-switch').forEach(btn => {
      btn.textContent = currentLang === 'zh-CN' ? 'EN' : '中';
    });
  }

  function t(key) {
    return translations[currentLang][key] || key;
  }

  // Init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      document.documentElement.lang = currentLang;
      translatePage();
      updateLangSwitchBtn();
    });
  } else {
    document.documentElement.lang = currentLang;
    translatePage();
    updateLangSwitchBtn();
  }

  return {
    currentLang,
    setLanguage,
    toggleLanguage,
    translate: translatePage,
    t,
  };
})();