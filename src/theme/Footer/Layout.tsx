import type { Props } from "@theme/Footer/Layout";

export default function FooterLayout({
  links,
  logo,
  copyright,
}: Props): JSX.Element {
  return (
    <footer className="dark:bg-black-400">
      <div className="max-w-screen-2xl mx-auto px-[60px] py-10 flex">
        {(logo || copyright) && (
          <div className="mr-[100px]">
            {logo && <div>{logo}</div>}
            <small className="text-base font-semibold">{copyright}</small>

            <p className="mt-6">
              Made with <span className="text-primary text-xl">♥</span> by Gasim
              Gasimzada
            </p>
          </div>
        )}
        {links}
      </div>
    </footer>
  );
}
