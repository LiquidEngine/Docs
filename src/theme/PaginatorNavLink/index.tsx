import clsx from "clsx";
import Link from "@docusaurus/Link";
import type { Props } from "@theme/PaginatorNavLink";

export default function PaginatorNavLink(props: Props): JSX.Element {
  const { permalink, title, subLabel, isNext } = props;
  return (
    <Link className={clsx(isNext ? "text-right" : "text-left")} to={permalink}>
      {subLabel && <div className="pagination-nav__sublabel">{subLabel}</div>}
      <div className="pagination-nav__label">{title}</div>
    </Link>
  );
}
