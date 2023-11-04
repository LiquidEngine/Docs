import clsx from "clsx";
import styles from "./styles.module.css";
import { config } from "./config";

interface AdmonitionProps {
  children: React.ReactNode;
  type: keyof typeof config;
  title: string;
}

export default function Admonition({ type, title, children }: AdmonitionProps) {
  const { IconComponent, label, className } = config[type] ?? config.info;
  const titleLabel = title ?? label;

  return (
    <div className={clsx(className, "alert mb-4")}>
      <div className={styles.admonitionHeading}>
        <span className={styles.admonitionIcon}>
          <IconComponent />
        </span>
        {titleLabel}
      </div>
      <div className={styles.admonitionContent}>{children}</div>
    </div>
  );
}
