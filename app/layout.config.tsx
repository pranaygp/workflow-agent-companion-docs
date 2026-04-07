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
      <div className="flex flex-col pl-2">
        <div className="text-xl">
          <div
            data-zone="same"
            className="text-current hidden md:flex items-center gap-1 py-0.5 transition-opacity hover:text-current hover:opacity-80 font-semibold tracking-[-0.04em]"
          >
            Vercel Ship
            <div className="border border-current flex items-center justify-center size-6 rounded-sm">
              <div className="text-current font-semibold tracking-[-0.08em] text-[14px]">
                25
              </div>
            </div>
          </div>
        </div>
        <div className="text-zinc-700 dark:text-zinc-300">Agents Workshop</div>
      </div>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [],
};
