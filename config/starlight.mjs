import starlightThemeBlack from "starlight-theme-black";
import starlightLlmsTxt from "starlight-llms-txt";

export default {
            title: "Bifrost Docs",
            editLink: { baseUrl: "https://github.com/gobifrost/public-docs/edit/main/" },
            description:
                "Documentation for Bifrost, the open-source, full-stack development platform for MSPs.",
            logo: {
                src: "./src/assets/public-docs/logo-square.svg",
            },
            favicon: "/logo-square.svg",
            customCss: ["./src/styles/docs-custom.css"],
            head: [
                {
                    tag: "meta",
                    attrs: { property: "og:image", content: "https://gobifrost.com/og/bifrost.png" },
                },
                {
                    tag: "meta",
                    attrs: { name: "twitter:image", content: "https://gobifrost.com/og/bifrost.png" },
                },
                {
                    tag: "script",
                    attrs: { type: "module" },
                    content:
                        "import mediumZoom from 'https://cdn.jsdelivr.net/npm/medium-zoom@1.1.0/+esm'; const sel = '.sl-markdown-content img'; const z = mediumZoom(sel, { background: 'rgba(0,0,0,0.92)' }); document.addEventListener('astro:page-load', () => { z.detach(); z.attach(sel); });",
                },
            ],
            social: [
                {
                    icon: "github",
                    label: "GitHub",
                    href: "https://github.com/gobifrost/bifrost",
                },
                {
                    icon: "discord",
                    label: "Discord",
                    href: "https://discord.gg/x84pft2YDa",
                },
                {
                    icon: "youtube",
                    label: "YouTube",
                    href: "https://www.youtube.com/@gobifrost",
                },
            ],
            components: {
                Head: "./src/components/docs/Head.astro",
                Sidebar: "./src/components/docs/Sidebar.astro",
            },
            plugins: [
                starlightThemeBlack({}),
                starlightLlmsTxt({
                    projectName: "Bifrost",
                    description:
                        "Bifrost is the open-source, full-stack development platform for MSPs (managed service providers). Develop and run workflows, agents, and apps for your own team and for all of your customers.",
                    details: [
                        "Bifrost is self-hosted with Docker Compose and licensed under AGPL-3.0. It gives every workflow, agent, and app the same foundation, so MSPs don't rebuild hosting, SSO, secrets, scheduling, logs, and updates for each one:",
                        "",
                        "- Multi-tenancy: one deployment serves the MSP and every customer organization, and each organization only sees its own data.",
                        "- Access control: SSO, roles, and per-organization access to each workflow, agent, form, and app.",
                        "- Built-in platform services: hosting, secrets, OAuth connections, scheduling, logs, and an MCP server.",
                        "- Coding agents: Claude Code, Codex, and other agents can build and deploy to Bifrost through its plugin and MCP server.",
                        "- Model-agnostic agents that can use the MSP's integrations as tools.",
                    ].join("\n"),
                    optionalLinks: [
                        { label: "Homepage", url: "https://gobifrost.com/", description: "What Bifrost is and who it's for" },
                        { label: "Examples", url: "https://gobifrost.com/examples/", description: "Real builds and getting-started videos" },
                        { label: "Features", url: "https://gobifrost.com/features/", description: "Everything included in the platform" },
                        { label: "Compare", url: "https://gobifrost.com/compare/", description: "Bifrost vs Power Platform vs n8n" },
                        { label: "Why Bifrost", url: "https://gobifrost.com/why-bifrost/", description: "Why it's open source and model-agnostic" },
                        { label: "Source code", url: "https://github.com/gobifrost/bifrost", description: "GitHub repository" },
                        { label: "YouTube", url: "https://www.youtube.com/@gobifrost", description: "Walkthroughs and demos" },
                    ],
                    promote: ["docs/about**", "docs/getting-started/**"],
                }),
            ],
            sidebar: [
                {
                    label: "About",
                    items: [
                        {
                            label: "What is Bifrost?",
                            slug: "docs/about",
                        },
                        {
                            label: "Why Open Source?",
                            slug: "docs/about/why-open-source",
                        },
                        {
                            label: "Versions & Compatibility",
                            slug: "docs/about/versioning",
                        },
                        {
                            label: "License (AGPL)",
                            slug: "docs/about/license",
                        },
                    ],
                },
                {
                    label: "Getting Started",
                    items: [
                        {
                            label: "Installation Guide",
                            slug: "docs/getting-started/installation",
                        },
                        {
                            label: "For Non-Developers",
                            slug: "docs/getting-started/for-non-developers",
                        },
                        {
                            label: "Build Your First Workflow",
                            slug: "docs/getting-started/first-workflow",
                        },
                        {
                            label: "Create Dynamic Forms",
                            slug: "docs/getting-started/creating-forms",
                        },
                        {
                            label: "Integrations",
                            slug: "docs/getting-started/integrations",
                        },
                    ],
                },
                {
                    label: "Common Setups",
                    collapsed: true,
                    items: [
                        {
                            label: "Overview",
                            slug: "docs/common-setups",
                        },
                        {
                            label: "Microsoft for MSPs",
                            collapsed: false,
                            items: [
                                {
                                    label: "Architecture",
                                    slug: "docs/how-to-guides/integrations/microsoft/architecture",
                                },
                                {
                                    label: "Partner Center",
                                    slug: "docs/how-to-guides/integrations/microsoft/partner-center",
                                },
                                {
                                    label: "Microsoft Graph",
                                    slug: "docs/how-to-guides/integrations/microsoft/microsoft-graph",
                                },
                                {
                                    label: "GDAP",
                                    slug: "docs/how-to-guides/integrations/microsoft/csp-gdap",
                                },
                                {
                                    label: "Shared Teams Bot",
                                    slug: "docs/how-to-guides/integrations/shared-teams-bot",
                                },
                                {
                                    label: "Setup Assistant",
                                    slug: "docs/how-to-guides/integrations/microsoft/setup-assistant",
                                },
                            ],
                        },
                    ],
                },
                {
                    label: "Core Concepts",
                    items: [
                        {
                            label: "Platform Overview",
                            slug: "docs/core-concepts/platform-overview",
                        },
                        { label: "Workflows", slug: "docs/core-concepts/workflows" },
                        {
                            label: "Workflow Registration",
                            slug: "docs/core-concepts/discovery-system",
                        },
                        { label: "Forms", slug: "docs/core-concepts/forms" },
                        { label: "Apps", slug: "docs/core-concepts/apps" },
                        { label: "Solutions", slug: "docs/core-concepts/solutions" },
                        { label: "Tables", slug: "docs/core-concepts/tables" },
                        { label: "Knowledge", slug: "docs/core-concepts/knowledge" },
                        { label: "Agents", slug: "docs/core-concepts/agents" },
                        { label: "Chat", slug: "docs/core-concepts/chat" },
                        {
                            label: "Integrations",
                            slug: "docs/core-concepts/integrations",
                        },
                        { label: "Events", slug: "docs/core-concepts/events" },
                        { label: "MCP", slug: "docs/core-concepts/mcp" },
                        {
                            label: "Organizations",
                            slug: "docs/core-concepts/organizations",
                        },
                        {
                            label: "Permissions",
                            slug: "docs/core-concepts/permissions",
                        },
                        { label: "Scopes", slug: "docs/core-concepts/scopes" },
                        {
                            label: "Entity Management",
                            slug: "docs/core-concepts/entity-management",
                        },
                        {
                            label: "Configuration",
                            slug: "docs/core-concepts/config",
                        },
                    ],
                },
                {
                    label: "How-To Guides",
                    collapsed: true,
                    items: [
                        {
                            label: "Workflows",
                            collapsed: true,
                            items: [
                                {
                                    label: "Writing Workflows",
                                    slug: "docs/how-to-guides/workflows/writing-workflows",
                                },
                                {
                                    label: "Using Decorators",
                                    slug: "docs/how-to-guides/workflows/using-decorators",
                                },
                                {
                                    label: "Error Handling",
                                    slug: "docs/how-to-guides/workflows/error-handling",
                                },
                                {
                                    label: "Scheduled Workflows (Cron)",
                                    slug: "docs/how-to-guides/workflows/scheduled-workflows",
                                },
                                {
                                    label: "Scheduled Executions (One-Time)",
                                    slug: "docs/how-to-guides/workflows/scheduled-executions",
                                },
                            ],
                        },
                        {
                            label: "Events & Webhooks",
                            collapsed: true,
                            items: [
                                {
                                    label: "Create an Event Source",
                                    slug: "docs/how-to-guides/events/event-sources",
                                },
                                {
                                    label: "Microsoft Event Sources",
                                    slug: "docs/how-to-guides/events/microsoft-event-sources",
                                },
                                {
                                    label: "Subscribe a Workflow or Agent",
                                    slug: "docs/how-to-guides/events/subscriptions",
                                },
                                {
                                    label: "Verify Webhook HMAC",
                                    slug: "docs/how-to-guides/events/webhook-hmac",
                                },
                                {
                                    label: "Webhook & Event Variables",
                                    slug: "docs/how-to-guides/events/webhook-variables",
                                },
                            ],
                        },
                        {
                            label: "Tables",
                            collapsed: true,
                            items: [
                                {
                                    label: "Writing Policies",
                                    slug: "docs/how-to-guides/tables/writing-policies",
                                },
                                {
                                    label: "Editing Policies in the UI",
                                    slug: "docs/how-to-guides/tables/editing-policies",
                                },
                                {
                                    label: "Reading from Apps",
                                    slug: "docs/how-to-guides/tables/reading-from-apps",
                                },
                            ],
                        },
                        {
                            label: "Forms",
                            collapsed: true,
                            items: [
                                {
                                    label: "Share and Embed Forms",
                                    slug: "docs/how-to-guides/forms/publishing-and-embedding",
                                },
                                {
                                    label: "Cascading Dropdowns",
                                    slug: "docs/how-to-guides/forms/cascading-dropdowns",
                                },
                                {
                                    label: "Dynamic Fields",
                                    slug: "docs/how-to-guides/forms/visibility-rules",
                                },
                                {
                                    label: "Personalized Messages",
                                    slug: "docs/how-to-guides/forms/html-content",
                                },
                                {
                                    label: "Pre-fill Forms from URLs",
                                    slug: "docs/how-to-guides/forms/startup-workflows",
                                },
                                {
                                    label: "Reference Context Data",
                                    slug: "docs/how-to-guides/forms/context-field-references",
                                },
                            ],
                        },
                        {
                            label: "Agents",
                            collapsed: true,
                            items: [
                                {
                                    label: "Fleet Overview",
                                    slug: "docs/how-to-guides/agents/fleet-overview",
                                },
                                {
                                    label: "Reviewing Runs",
                                    slug: "docs/how-to-guides/agents/reviewing-runs",
                                },
                                {
                                    label: "Tuning Agents",
                                    slug: "docs/how-to-guides/agents/tuning-agents",
                                },
                                {
                                    label: "Run History & Filters",
                                    slug: "docs/how-to-guides/agents/run-history-and-filters",
                                },
                            ],
                        },
                        {
                            label: "AI",
                            collapsed: true,
                            items: [
                                {
                                    label: "Agents and Chat",
                                    slug: "docs/how-to-guides/ai/agents-and-chat",
                                },
                                {
                                    label: "Chat Artifacts",
                                    slug: "docs/how-to-guides/ai/chat-artifacts",
                                },
                                {
                                    label: "Using AI in Workflows",
                                    slug: "docs/how-to-guides/ai/using-ai-in-workflows",
                                },
                                {
                                    label: "Knowledge Bases",
                                    slug: "docs/how-to-guides/ai/knowledge-bases",
                                },
                                {
                                    label: "Configure AI Models",
                                    slug: "docs/how-to-guides/ai/llm-configuration",
                                },
                                {
                                    label: "Memory & Instructions",
                                    slug: "docs/how-to-guides/ai/memory-and-instructions",
                                },
                            ],
                        },
                        {
                            label: "Integrations",
                            collapsed: true,
                            items: [
                                {
                                    label: "Storing Sensitive Config Values",
                                    slug: "docs/how-to-guides/integrations/secrets-management",
                                },
                                {
                                    label: "Automate Microsoft 365",
                                    slug: "docs/how-to-guides/integrations/microsoft-graph",
                                },
                                {
                                    label: "Set Up a Shared Teams Bot",
                                    slug: "docs/how-to-guides/integrations/shared-teams-bot",
                                },
                                {
                                    label: "Custom REST APIs",
                                    slug: "docs/how-to-guides/integrations/creating-integrations",
                                },
                            ],
                        },
                        {
                            label: "MCP",
                            collapsed: true,
                            items: [
                                {
                                    label: "Server Setup",
                                    slug: "docs/how-to-guides/mcp/server-setup",
                                },
                                {
                                    label: "Connecting Clients",
                                    slug: "docs/how-to-guides/mcp/connecting-clients",
                                },
                                {
                                    label: "Agents as MCP",
                                    slug: "docs/how-to-guides/mcp/agents-as-mcp",
                                },
                                {
                                    label: "Connecting external MCP servers",
                                    slug: "docs/how-to-guides/mcp/external-servers",
                                },
                                {
                                    label: "Personal MCP identity",
                                    slug: "docs/how-to-guides/mcp/per-user-mcp-credentials",
                                },
                            ],
                        },
                        {
                            label: "Local Development",
                            collapsed: true,
                            items: [
                                {
                                    label: "Setup",
                                    slug: "docs/how-to-guides/local-dev/setup",
                                },
                                {
                                    label: "AI Coding Guide",
                                    slug: "docs/how-to-guides/local-dev/ai-coding",
                                },
                            ],
                        },
                        {
                            label: "Authentication",
                            collapsed: true,
                            items: [
                                {
                                    label: "Managing Users & Invites",
                                    slug: "docs/how-to-guides/authentication/managing-users",
                                },
                                {
                                    label: "Configure SSO",
                                    slug: "docs/how-to-guides/authentication/sso",
                                },
                                {
                                    label: "Passkeys (WebAuthn)",
                                    slug: "docs/how-to-guides/authentication/passkeys",
                                },
                            ],
                        },
                        {
                            label: "Operations",
                            collapsed: true,
                            items: [
                                {
                                    label: "Diagnostics & Process Pools",
                                    slug: "docs/how-to-guides/operations/diagnostics",
                                },
                                {
                                    label: "Audit Log",
                                    slug: "docs/how-to-guides/operations/audit-log",
                                },
                                {
                                    label: "Usage & ROI Reports",
                                    slug: "docs/how-to-guides/operations/usage-reports",
                                },
                                {
                                    label: "GitHub Sync",
                                    slug: "docs/how-to-guides/operations/github-sync",
                                },
                                {
                                    label: "Workspace Maintenance",
                                    slug: "docs/how-to-guides/operations/maintenance",
                                },
                                {
                                    label: "Workflow Keys",
                                    slug: "docs/how-to-guides/operations/workflow-keys",
                                },
                                {
                                    label: "Branding & Terminology",
                                    slug: "docs/how-to-guides/operations/branding",
                                },
                                {
                                    label: "Files & Access Policies",
                                    slug: "docs/how-to-guides/operations/files",
                                },
                            ],
                        },
                        {
                            label: "Apps",
                            collapsed: true,
                            items: [
                                {
                                    label: "Independent App Development",
                                    slug: "docs/how-to-guides/apps/independent-apps",
                                },
                                {
                                    label: "Update Deployed App SDKs",
                                    slug: "docs/how-to-guides/apps/updating-deployed-sdks",
                                },
                            ],
                        },
                        {
                            label: "Solutions",
                            collapsed: true,
                            items: [
                                {
                                    label: "Install a Solution",
                                    slug: "docs/how-to-guides/solutions/installing",
                                },
                                {
                                    label: "Deploy from a Workspace",
                                    slug: "docs/how-to-guides/solutions/deploying",
                                },
                                {
                                    label: "Local Development",
                                    slug: "docs/how-to-guides/solutions/local-dev",
                                },
                                {
                                    label: "Connections & Setup",
                                    slug: "docs/how-to-guides/solutions/connection-references",
                                },
                                {
                                    label: "Export & Backup",
                                    slug: "docs/how-to-guides/solutions/exporting-backup",
                                },
                                {
                                    label: "Update an Install",
                                    slug: "docs/how-to-guides/solutions/updating",
                                },
                            ],
                        },
                        {
                            label: "Portability",
                            collapsed: true,
                            items: [
                                {
                                    label: "Exporting and Importing",
                                    slug: "docs/how-to-guides/portability/exporting-importing",
                                },
                                {
                                    label: "Manifest Format",
                                    slug: "docs/how-to-guides/portability/manifest-format",
                                },
                            ],
                        },
                        {
                            label: "User Interface",
                            collapsed: true,
                            items: [
                                {
                                    label: "Keyboard Shortcuts",
                                    slug: "docs/how-to-guides/ui/keyboard-shortcuts",
                                },
                            ],
                        },
                    ],
                },
                {
                    label: "Reference",
                    collapsed: true,
                    items: [
                        {
                            label: "SDK",
                            collapsed: true,
                            items: [
                                {
                                    label: "Agents Module",
                                    slug: "docs/sdk-reference/sdk/agents-module",
                                },
                                {
                                    label: "AI Module",
                                    slug: "docs/sdk-reference/sdk/ai-module",
                                },
                                {
                                    label: "Bifrost Module",
                                    slug: "docs/sdk-reference/sdk/bifrost-module",
                                },
                                {
                                    label: "Config Module",
                                    slug: "docs/sdk-reference/sdk/config-module",
                                },
                                {
                                    label: "Context API",
                                    slug: "docs/sdk-reference/sdk/context-api",
                                },
                                {
                                    label: "Decorators",
                                    slug: "docs/sdk-reference/sdk/decorators",
                                },
                                {
                                    label: "Email Module",
                                    slug: "docs/sdk-reference/sdk/email-module",
                                },
                                {
                                    label: "Executions Module",
                                    slug: "docs/sdk-reference/sdk/executions-module",
                                },
                                {
                                    label: "External SDK",
                                    slug: "docs/sdk-reference/sdk/external-sdk",
                                },
                                {
                                    label: "Files Module",
                                    slug: "docs/sdk-reference/sdk/files-module",
                                },
                                {
                                    label: "Integrations Module",
                                    slug: "docs/sdk-reference/sdk/integrations-module",
                                },
                                {
                                    label: "Knowledge Module",
                                    slug: "docs/sdk-reference/sdk/knowledge-module",
                                },
                                {
                                    label: "Organizations Module",
                                    slug: "docs/sdk-reference/sdk/organizations-module",
                                },
                                {
                                    label: "Roles Module",
                                    slug: "docs/sdk-reference/sdk/roles-module",
                                },
                                {
                                    label: "Tables Module",
                                    slug: "docs/sdk-reference/sdk/tables-module",
                                },
                                {
                                    label: "Users Module",
                                    slug: "docs/sdk-reference/sdk/users-module",
                                },
                                {
                                    label: "Webhooks Module",
                                    slug: "docs/sdk-reference/sdk/webhooks-module",
                                },
                            ],
                        },
                        {
                            label: "Apps",
                            collapsed: true,
                            items: [
                                {
                                    label: "Code-Based Apps",
                                    slug: "docs/sdk-reference/app-builder/code-apps",
                                },
                            ],
                        },
                    ],
                },
                {
                    label: "Troubleshooting",
                    collapsed: true,
                    items: [
                        { label: "OAuth", slug: "docs/troubleshooting/oauth" },
                        {
                            label: "Workflow Engine",
                            slug: "docs/troubleshooting/workflow-engine",
                        },
                        { label: "Forms", slug: "docs/troubleshooting/forms" },
                    ],
                },
            ],
        };
