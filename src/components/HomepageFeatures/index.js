import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Configurable',
    Svg: require('@site/static/img/toml.svg').default,
    description: (
      <>
        Karpet is easily configurable via its config file(soon)
      </>
    ),
  },
  {
    title: 'Built with Minestom',
    Svg: require('@site/static/img/kotlin.svg').default,
    description: (
      <>
        Minestom is a open-source java framework for building minecraft servers,
        it comes with support for extensions, and is multi-threaded unlike the default
        minecraft server. This allows Karpet to perform better than the default minecraft server.
      </>
    ),
  },
  {
    title: 'Open-Source',
    Svg: require('@site/static/img/github.svg').default,
    description: (
      <>
        Karpet is freely avalible on Github, you can modify the code however you like.
        Since its under the MIT license you are not required to contribute the code back(but it would be nice 😉)
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
