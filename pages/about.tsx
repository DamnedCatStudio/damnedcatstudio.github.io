import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const people = [
  {
    name: "John Weland",
    role: "Co-Founder | CEO",
    imageUrl: "/images/jweland.jpeg",
  },
  {
    name: "Timothy Jeske",
    role: "Co-Founder | COO",
    imageUrl: "/images/tjeske.jpeg",
  },
];
const About = ({}) => {
  return (
    <>
      <Head>
        <title>About Us :: Damned Cat Studio</title>
        <meta property="og:title" content="About Us" key="title" />
        <meta
          name="description"
          content="About the team of Damned Cat Studio"
          key="description"
        />
        <meta name="keywords" content="DCS, Damned Cat Studio" />
        <meta name="author" content="John Weland" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-gray-700 dark:text-gray-200 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Meet our team
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-200">
              Meet our team; Co-founded by two friends using what they learn to
              try to do something different! If you want to join in on our
              shinanigans{" "}
              <Link legacyBehavior href="https://discord.gg/MvbmbswYSa">
                <a className="font-bold underline">contact us</a>
              </Link>
              .
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-2 lg:max-w-5xl"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-6">
                  <Image
                    className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56 object-cover"
                    width={200}
                    height={200}
                    unoptimized
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3 className="text-gray-800 dark:text-gray-200">
                        {person.name}
                      </h3>
                      <p className="text-amber-600">{person.role}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
