import { useState } from "react";
import { useDocsSidebar } from "@docusaurus/theme-common/internal";
import BackToTopButton from "@theme/BackToTopButton";
import DocRootLayoutSidebar from "@theme/DocRoot/Layout/Sidebar";
import DocRootLayoutMain from "@theme/DocRoot/Layout/Main";
import type { Props } from "@theme/DocRoot/Layout";

import clsx from "clsx";

export default function DocRootLayout({ children }: Props): JSX.Element {
  const sidebar = useDocsSidebar();
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
  return (
    <div className="flex flex-1">
      <BackToTopButton />
      <div className={clsx("max-w-screen-2xl w-full mx-auto px-[60px] flex")}>
        {sidebar && (
          <DocRootLayoutSidebar
            sidebar={sidebar.items}
            hiddenSidebarContainer={hiddenSidebarContainer}
            setHiddenSidebarContainer={setHiddenSidebarContainer}
          />
        )}
        <DocRootLayoutMain hiddenSidebarContainer={hiddenSidebarContainer}>
          {children}
        </DocRootLayoutMain>
      </div>
    </div>
  );
}
