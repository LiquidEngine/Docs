import React from "react";
import clsx from "clsx";
import { useDocsSidebar } from "@docusaurus/theme-common/internal";
import type { Props } from "@theme/DocRoot/Layout/Main";

import styles from "./styles.module.css";

export default function DocRootLayoutMain({
  hiddenSidebarContainer,
  children,
}: Props): JSX.Element {
  const sidebar = useDocsSidebar();
  return (
    <main
      className={clsx(
        styles.docMainContainer,
        "ds-mobile-cutoff:px-10",
        (hiddenSidebarContainer || !sidebar) && styles.docMainContainerEnhanced,
      )}
    >
      <div
        className={clsx(
          "w-full padding-top--md padding-bottom--lg",
          styles.docItemWrapper,
          hiddenSidebarContainer && styles.docItemWrapperEnhanced
        )}
      >
        {children}
      </div>
    </main>
  );
}
