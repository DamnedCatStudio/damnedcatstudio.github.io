/* This example requires Tailwind CSS v2.0+ */
import { SpeakerphoneIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useState, useEffect } from "react";
import { setCookies, getCookie } from "cookies-next";

const CookieBanner = () => {
  const acceptedCookies = () => {
    let accepted = getCookie("acceptedCookies") || false;
    return accepted;
  };
  const [accepted, setAccepted] = useState(acceptedCookies);
  useEffect(() => {
    setCookies("acceptedCookies", accepted, { maxAge: 365 });
  }, [accepted]);

  if (accepted) return null;

  return (
    <div className="fixed inset-x-0 bottom-0">
      <div className="bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-orange-800">
                <SpeakerphoneIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="md:hidden">We&apos;ve got cookies!</span>
                <span className="hidden md:inline">
                  We use Cookies, apparently we need to let you know we use
                  cookies.
                </span>
                <span className="block sm:ml-2 sm:inline-block">
                  <Link legacyBehavior href="/legal/cookies">
                    <a className="text-white font-bold underline">
                      {" "}
                      Learn more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </Link>
                </span>
              </p>
            </div>

            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                onClick={() => {
                  setAccepted(true);
                }}
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-orange-600 bg-white hover:bg-orange-50"
              >
                I Consent
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CookieBanner;
