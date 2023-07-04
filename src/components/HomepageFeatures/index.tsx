import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    description: (
      <>
        This comes with one simple CLI for you to use, or if you prefer to code
        stuff yourself, a simple codebase with one function that does the heavy
        calculations for you!
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    description: (
      <>
        The Battle Pass Calculator allows you to focus on completing your
        challenges, it's super simple to use!
      </>
    ),
  },
  {
    title: "Zero Math Required!",
    description: (
      <>
        The Battle Pass Calculator allows you to not have to do hard math, as
        our CLI or calculate function will handle that for you!
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
