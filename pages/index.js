import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

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
    </Layout>
  );
}
