import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingSm}>
        <p>Senior Software Engineer, Raytheon Technologies</p>
      </section>
      <section className={utilStyles.headingMd}>
        <p>
          I am software guy that loves to learn and expirement. Whether if it's
          with a tech stack or on the grill with new receipes and marinades, I
          enjoy it! I find time to enjoy life, often by hosting BBQ's or
          shimmying my way onto a dance floor in the night life scene. I love to
          escape the heat of Arizona by vacationing somewhere with cooler
          weather, palm trees and water.
        </p>
      </section>
      <section>
        <h2>Projects</h2>
        <a href="https://github.com/cdeeran/bartender">
          <h3>Bartender</h3>
        </a>
        <p>
          Automated drink maker built with a Raspberry Pi, 12V pumps and relays.
          Integrated with Spotify, it's the prefect at home bartender, written
          in Python.
        </p>
        <a href="https://careerplant.vercel.app/">
          <h3>Career Plant</h3>
        </a>
        <p>
          Plant and grow your career. Explore a new career or grow your existing
          one in tech.
        </p>
      </section>
    </Layout>
  );
}
