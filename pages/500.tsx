import Link from "next/link";

export default function Custom500() {
  return (
    <>
      <div className="py-16">
        <div className="text-center">
          <p className="text-sm font-semibold text-2xl text-amber-600 uppercase tracking-wide">
            500 error
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight sm:text-5xl">
            Something went wrong!
          </h1>
          <p className="mt-2 text-base text-gray-700 dark:text-gray-300">
            It&apos;s not you, its us. Something went wrong, we&apos;ll try to
            fix it.
          </p>
          <div className="mt-6">
            <Link legacyBehavior href="/">
              <a className="text-base font-medium text-amber-600 hover:text-amber-500">
                Go back home<span aria-hidden="true"> &rarr;</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
