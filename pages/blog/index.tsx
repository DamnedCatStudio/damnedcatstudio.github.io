// @ts-nocheck
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

const Archive = ({ posts }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 md:p-0">
        {posts.map(({ slug, frontmatter }) => (
          <div
            key={slug}
            className="border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            <Link legacyBehavior href={`/blog/${slug}`}>
              <a>
                <img
                  width={650}
                  height={340}
                  alt={frontmatter.title}
                  src={`${frontmatter.featuredImage}`}
                />
                <h1 className="text-base text-center p-4">
                  {frontmatter.title}
                </h1>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Archive;
