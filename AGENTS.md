AGENTS.md

Scope

This repository contains multiple independent TypeScript starter projects (Webpack, React hooks/apps, Next.js, Gatsby, Node, etc.) organized as separate subdirectories.

There is no single root application. Agents must operate within the scope of a specific subproject.

Repository Structure
• Each top-level directory is its own project
• Each project typically has its own:
• package.json
• scripts
• dependencies
• build / dev workflow

Example subprojects (non-exhaustive):
• webpack_typescript
• webpack_typescript_react
• webpack_typescript_threejs
• webpack_typescript_vue
• usestate
• useeffect
• usecontext
• shadereact
• hello_next
• gatsby_typescript_starter
• node_typescript
• parcel_typescript
• github-app
• graphQL_API
• threads-api
• todoapp
• quiz-app
• hn_api
• material_ui_app
• simple_blog_with_contentful

Important: Do not assume a root-level build, test, or runtime. Always work inside the relevant subproject directory.

Agent Operating Rules

1. Identify the target subproject first

Before making any change:
• Determine exactly which folder the task applies to
• If the request is ambiguous:
• Choose the smallest reasonable scope
• Modify only the subproject that clearly matches the request
• Do not refactor or synchronize multiple starters unless explicitly instructed

2. Run commands inside the subproject

All install, build, and test commands must be run from within the target folder.

Typical workflow:

cd <subproject>
yarn install
yarn dev # or yarn start
yarn test # if present
yarn build # if present

If the subproject uses npm or pnpm, follow the conventions defined by its package.json and lockfile.

3. Preserve existing structure and style
   • Match existing:
   • Code style
   • Folder layout
   • Framework and library choices
   • Do not introduce new tooling, frameworks, or architectural patterns unless required by the task

4. Make minimal, targeted changes
   • Keep diffs small and focused
   • Avoid large dependency upgrades unless necessary
   • If dependencies must change:
   • Explain why
   • Use conservative version updates

5. Safety and configuration
   • Never commit secrets (API keys, tokens, credentials)
   • For deployable or external integrations (e.g. OAuth, GitHub apps, APIs):
   • Use environment variables
   • Document configuration via .env.example or equivalent, following subproject norms

Adding a New Starter Project

When creating a new starter subproject:
• Place it in a new top-level directory
• Keep it fully self-contained
• Include at minimum:
• README.md explaining purpose and usage
• package.json with appropriate scripts (dev / start / build / test)
• tsconfig.json
• lint / format config if used
• Add the new folder to the root README list if one exists

Pull Request Checklist

Before finalizing changes:
• Changes are limited to the intended subproject(s)
• Dependencies install successfully in that folder
• Primary run command works (dev / start)
• Tests and/or build pass if provided
• README is updated if behavior or setup changed
