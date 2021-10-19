import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

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
          Hello, I am Cody. I am an Arizona native that studied Computer Science
          at The University of Arizona. I am a space and tech enthusiast, I love
          conversing about the resurection of the space race and space
          exploration. I currently work as an Embedded Software Engineer at
          Raytheon Technologies. My dream is to work on a space program that
          will pave way for mankind to travel further into the universe.
        </p>
        <p>
          In my free time, I enjoy BBQing, hanging out with friends and catching
          the ball game. I enjoy working on side projects to learn new skills and keep
          my current ones up to date.
        </p>
        <p>
          Thanks for visiting my site! Please feel free to poke around and
          contact me via one of the methods listed.
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
        <a href="https://ff-dashboard-6uc5npm9u-siddharthsharma.vercel.app/">
          <h3>Laces</h3>
        </a>
        <p>
          Fantasy Football analytic website build off of the <a href="https://sleeper.app">Sleeper.app</a> API. Laces
          offers a smooth UI/UX using Javascript/React with the data analysis power of
          Python using Flask.
        </p>
        <a href="http://resumo-bot.herokuapp.com/">
          <h3>Resumo Bot</h3>
        </a>
        <p>
          Hackathon project, Resumo Bot is a resumè chat bot for Facebook
          Messenger and Alexa. Built using Glitch, Python-Flask with NLP and AI
          powered by Wit.ai
        </p>
        <a href="https://github.com/cdeeran/WeightCoach">
          <h3>Weight Coach</h3>
        </a>
        <p>
          NLP project using Alexa and AWS. Create a new user and track weight
          using DynamoDB with creative feedback from Alexa.
        </p>
      </section>
      <section>
        <h2>Skills</h2>
        <ul>
          <li>Python</li>
          <li>C++</li>
          <li>C</li>
          <li>Real-Time Operating Systems</li>
          <li>Embedded Software</li>
          <li>Object-Oriented Programming</li>
          <li>SWCM Tools</li>
        </ul>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          <a
            href="https://www.github.com/cdeeran"
            title="Visit My GitHub Page"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://www.linkedin.com/in/codydeeran"
            title="Visit My LinkedIn"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="mailto:contact@codydeeran.com"
            title="Email Me"
            target="_blank"
          >
            <FontAwesomeIcon icon={faPaperPlane} size="lg" />
          </a>
          {/* &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="cody_deeran_resume.pdf" title="View Resume" target="_blank">
            <FontAwesomeIcon icon={faFileContract} size="lg" />
          </a> */}
        </p>
      </section>
    </Layout>
  );
}
