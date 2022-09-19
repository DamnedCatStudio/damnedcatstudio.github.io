import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const games = [
  {
    name: "Idle Merge",
    url: "/games/idlemerge",
    bannerURL: "/images/google-play-badge.png",
    platform: "Android",
  },
];
const GamesCatalog = ({}) => {
  return (
    <>
      <Head>
        <title>Our Games :: Damned Cat Studio</title>
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

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-24 prose dark:prose-invert">
        <h1 className="prose-2xl">Featured Games</h1>
        <div className="carousel w-full bg-gray-50">
          {games.map((game, index) => (
            <div
              key={index}
              id={(index + 1).toString()}
              className="carousel-item w-full"
            >
              <Link href={game.url} passHref>
                <a className="w-full">
                  <Image
                    src={game.bannerURL}
                    alt={game.name + " for " + game.platform}
                    title={game.name}
                    layout="fill"
                    className="w-full"
                  />
                </a>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          {games.map((game, index) =>
            index > 0 ? (
              <a key={game.name} href={game.url} className="btn btn-xs">
                {index + 1}
              </a>
            ) : null
          )}
        </div>
      </div>
    </>
  );
};

export default GamesCatalog;
