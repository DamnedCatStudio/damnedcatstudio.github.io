// @ts-nocheck
import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Head from "next/head";

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function PostPage({ frontmatter, content }) {
  return (
    <>
      <Head>
        <title>{frontmatter.title} :: Damned Cat Studio</title>
        <meta property="og:title" content="About Us" key="title" />
        <meta
          name="description"
          content={frontmatter.description}
          key="description"
        />
        <meta name="keywords" content={frontmatter.tags} />
        <meta name="author" content={frontmatter.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10">
        {frontmatter.featuredImage ? (
          <img src={`${frontmatter.featuredImage}`} className="w-full mb-4" />
        ) : null}
        <div className="prose mx-auto dark:prose-invert">
          <h1 className="mb-0 text-4xl">{frontmatter.title}</h1>
          <small className="text-2xl -mt-4">{frontmatter.tagline}</small>
          <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        </div>
      </div>
    </>
  );
}
