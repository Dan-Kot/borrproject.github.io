import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Computer Science',
    description: (
      <>
        Path to a free self-taught education in Computer Science!
      </>
    ),
    link: '/computer-science',
    buttontext: "Let's Go!",
  },
  {
    title: 'Pre-College Math',
    description: (
      <>
        Path to a free self-taught education in pre-college Math!
      </>
    ),
    link: '/precollege-math',
    buttontext: "Let's Go!",
  },
  {
    title: 'Data Science',
    description: (
      <>
        Path to a free self-taught education in Data Science!
      </>
    ),
    link: '/data-science',
    buttontext: "Let's Go!",
  },
  {
    title: 'Math',
    description: (
      <>
        Path to a free self-taught education in Math!
      </>
    ),
    link: '/math',
    buttontext: "Let's Go!",
  },
];

function Feature({title, description, link, buttontext}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center padding-horiz--md padding-vert--md">
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
        <div className={styles.buttons}>
          <a
            className="button button--primary button--md"
            href={link}>
            {buttontext}
          </a>
        </div>
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
