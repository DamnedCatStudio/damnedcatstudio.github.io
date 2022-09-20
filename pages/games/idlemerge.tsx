import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const game = {
  name: "Idle Merge",
  stores: [
    {
      platform: "Android",
      badgeURL: "/images/google-play-badge.png",
      badgeWidth: 240,
      badgeHeight: 93,
      altText: "Download on Google Play",
      URL: "https://play.google.com/store/apps/details?id=com.DamnedCatStudio.IdleMerge",
    },
  ],
  featuredImageURL: "/images/IdleMergeFeaturedGraphic.png",
  featuredImageAlt: "idle merge banner",

  featuredVideoURL: null,
  images: [
    {
      URL: "/images/idlemerge00.jpg",
      alt: "idle merge screenshot",
    },
    {
      URL: "/images/idlemerge01.jpg",
      alt: "idle merge screenshot",
    },
    {
      URL: "/images/idlemerge02.jpg",
      alt: "idle merge screenshot",
    },
    {
      URL: "/images/idlemerge03.jpg",
      alt: "idle merge screenshot",
    },
    {
      URL: "/images/idlemerge04.jpg",
      alt: "idle merge screenshot",
    },
  ],
  shortDescription: "Merge items, gain experience and level up!",
  longDescription:
    "Merge items to gain experience and level up. The higher your level, the higher the chance of uncommon items appearing. Merge uncommon items for rare items, rare items for epic items.",
  features: ["Auto Mode", "Quests"],
};
const GamePage = ({}) => {
  return (
    <>
      <Head>
        <title>Idle Merge :: Damned Cat Studio</title>
        <meta property="og:title" content="About Us" key="title" />
        <meta
          name="description"
          content="All about Idle Merge by Damned Cat Studio"
          key="description"
        />
        <meta name="keywords" content="DCS, Damned Cat Studio" />
        <meta name="author" content="John Weland" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-24 prose dark:prose-invert">
        <h1>{game.name}</h1>
        <div className="bg-gray-50 w-full rounded-box">
          {game.featuredVideoURL ? (
            <video
              className="h-full w-full object-cover"
              placeholder="blur"
              src={game.featuredVideoURL}
              autoPlay
              loop
            />
          ) : (
            <img
              src={game.featuredImageURL}
              alt={game.featuredImageAlt}
              className="w-full"
            />
          )}
        </div>

        <h2 className="">{game.shortDescription}</h2>
        <h3>Download Now</h3>
        {game.stores.map((store, index) => (
          <Link key={index} href={store.URL}>
            <a>
              <img
                src={store.badgeURL}
                alt={store.altText}
                width={store.badgeWidth}
                height={store.badgeHeight}
              />
            </a>
          </Link>
        ))}
        <div className="relative rounded-box">
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#start" className="btn btn-circle">
              ❮
            </a>
            <a href="#end" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="carousel carousel-start w-full space-x-4 rounded-box">
            {game.images.map((image, index) => (
              <div
                key={index}
                id={
                  index == 0
                    ? "#start"
                    : game.images.length - 1 == index
                    ? "#end"
                    : "#" + index
                }
                className="carousel-item"
              >
                <img
                  src={image.URL}
                  alt={image.alt}
                  title={game.name}
                  className="rounded-box"
                />
              </div>
            ))}
          </div>
        </div>
        <h3>About</h3>
        {game.longDescription.split("\n").map((str) => (
          <p key={str} className="text-base">
            {str}
          </p>
        ))}
        {game.features ? (
          <>
            <h3>Features</h3>
            <ul>
              {game.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
    </>
  );
};

export default GamePage;
