const FeatureList = [
  {
    title: "Built-in editor",
    Svg: require("@site/static/img/editor.svg").default,
    description: (
      <>Manage with entities, manage, and your project all in one place.</>
    ),
  },
  {
    title: "Lua scripting",
    Svg: require("@site/static/img/lua.svg").default,
    description: (
      <>You can build your game logic using Lua scripting language.</>
    ),
  },
  {
    title: "Open source",
    Svg: require("@site/static/img/github.svg").default,
    description: <>Quoll Engine is open source and free to use.</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className="w-[240px]">
      <div className="text-center">
        <Svg className="h-[44px] dark:fill-white" role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className="font-extrabold text-xl">{title}</h3>
        <p className="text-sm leading-6">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className="dark:bg-black-300 py-[60px]">
      <div className="max-w-screen-2xl w-full mx-auto px-[60px]">
        <div className="flex flex-col gap-[40px] sm:flex-row sm:gap-0 justify-center items-center sm:items-stretch lg:gap-[150px]">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
