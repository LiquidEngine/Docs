import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="pt-5 lg:pt-3 pb-10">
      <div className="flex items-center justify-between space-x-12 q-container">
        <div className="flex-1">
          <h1 className="font-black text-5xl">
            Seamlessly <span className="text-primary">build</span> worlds
            <span className="text-primary">.</span>
          </h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div>
            <Link
              className="inline-block text-white rounded-lg px-5 py-3 text-xl font-bold bg-primary hover:no-underline hover:text-white hover:translate-y-1 transition-transform"
              to="/download"
            >
              Download
            </Link>
          </div>
        </div>
        <div className="flex-1 hidden md:block">
          <div className="py-8">
            <div className="pt-1 bg-[#222222] rounded-md">
              <img
                src={require("@site/static/img/quoll-editor.png").default}
                alt={siteConfig.title}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout description="Open source game engine built with simplicity in mind">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
