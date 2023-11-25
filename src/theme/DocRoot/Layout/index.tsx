import { useState } from "react";
import { useDocsSidebar } from "@docusaurus/theme-common/internal";
import BackToTopButton from "@theme/BackToTopButton";
import DocRootLayoutSidebar from "@theme/DocRoot/Layout/Sidebar";
import DocRootLayoutMain from "@theme/DocRoot/Layout/Main";
import type { Props } from "@theme/DocRoot/Layout";


export default function DocRootLayout({ children }: Props): JSX.Element {
  const sidebar = useDocsSidebar();
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
  return (
    <div className="flex flex-1">
      <BackToTopButton />
      <div className={"q-container flex pt-4"}>
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
