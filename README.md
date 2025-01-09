# Revance Test Monorepo

## Overview

This is a Turbo monorepo with SvelteKit and TailwindCSS, created for testing purposes.

## Features

- **Turbo Monorepo**: Efficiently manages multiple projects and shared packages.
- **SvelteKit**: Framework for building web applications with server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

## Structure

```
revance-test
├── apps
│   ├── gradient-background-logo          # Test project 1
│   ├── navigation-hover                  # Test project 2
│   ├── todo-app                          # Test project 3
│   └── website                           # Test project 4
├── packages
│   ├── ui                                # Shared UI components
│   ├── utils                             # Shared utilities
│   └── config                            # Shared configuration files (e.g., Tailwind)
├── turbo.json                            # Turbo configuration
├── package.json                          # Root package.json managing dependencies
└── README.md                             # Documentation
```

## Prerequisites

- **Node.js**: v18 or higher
- **npm**: v10.1.0 or higher

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/turabond/revance-test-monorepo.git
   cd revance-test-monorepo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Scripts

### Root Scripts

- `turbo run dev`: Starts the development server for all projects.
- `turbo run build`: Builds all projects.
- `turbo run lint`: Runs lint checks for all projects.

### Individual Project Scripts

Navigate to a specific project folder (e.g., `apps/todo-app`) and use:

- `npm run dev`: Starts the development server for the specific project.
- `npm run build`: Builds the specific project.

Or use Turbo's filtering:

- `turbo run dev  --filter=todo-app`: Starts the development server for todo-app.
- `turbo run build  --filter=todo-app`: Builds only todo-app.

---

**Author**: turabond
