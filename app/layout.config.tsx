import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  searchToggle: { enabled: false },
  nav: {
    title: (
      <div className="flex flex-col pl-2 mt-1">
        <img
          src="/workflow-mark.svg"
          alt="Workflow"
          className="h-4 w-auto self-start dark:invert"
        />
        <div className="text-zinc-700 dark:text-zinc-300 text-xs mt-2">
          Durable Agents Workshop
        </div>
      </div>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [],
};
