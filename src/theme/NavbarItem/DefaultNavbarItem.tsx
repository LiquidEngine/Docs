import React from "react";
import clsx from "clsx";
import NavbarNavLink from "@theme/NavbarItem/NavbarNavLink";
import type {
  DesktopOrMobileNavBarItemProps,
  Props,
} from "@theme/NavbarItem/DefaultNavbarItem";

function DefaultNavbarItemDesktop({
  className,
  isDropdownItem = false,
  ...props
}: DesktopOrMobileNavBarItemProps) {
  console.log(props);
  const element = (
    <NavbarNavLink
      className={clsx(
        "text-black-100 dark:text-white hover:text-primary dark:hover:text-primary active:text-primary dark:active:text-primary hover:no-underline font-medium hidden lg:inline-block",
        {
          dropdown__link: isDropdownItem,
        },
        className
      )}
      isDropdownLink={isDropdownItem}
      {...props}
    />
  );

  if (isDropdownItem) {
    return <li>{element}</li>;
  }

  return element;
}

function DefaultNavbarItemMobile({
  className,
  isDropdownItem,
  ...props
}: DesktopOrMobileNavBarItemProps) {
  return (
    <li className="menu__list-item">
      <NavbarNavLink className={clsx("menu__link", className)} {...props} />
    </li>
  );
}

export default function DefaultNavbarItem({
  mobile = false,
  position, // Need to destructure position from props so that it doesn't get passed on.
  ...props
}: Props): JSX.Element {
  const Comp = mobile ? DefaultNavbarItemMobile : DefaultNavbarItemDesktop;
  return (
    <Comp
      {...props}
      activeClassName={
        props.activeClassName ??
        (mobile ? "menu__link--active" : "text-primary dark:text-primary")
      }
    />
  );
}
