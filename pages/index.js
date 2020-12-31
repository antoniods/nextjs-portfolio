import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>RIP Diego!</p>
        <p>
          Those four words describe one of the most iconic moments in football
          history, a goal that belongs to one of the most iconic footballers in
          the game's history, -- Diego Armando Maradona
        </p>
      </section>
    </Layout>
  );
}
