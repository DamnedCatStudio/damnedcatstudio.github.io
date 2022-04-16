import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { GetServerSideProps } from 'next'
import CookieBanner from '../components/cookiebanner'


const faqs = [
  {
    id: 1,
    question: "What do you do?",
    answer: "We tinker and build games"
  },
  {
    id: 2,
    question: "Made any game I've heard of?",
    answer: "Probably not, at least not yet."
  },
  {
    id: 3,
    question: "Why name your company 'Damned Cat Studio' ?",
    answer: "We all have cats here, they are always up to mischeif when we want to create."
  }
]
type props = {
  acceptedCookies: boolean
}
const Home = ({acceptedCookies}: props) => {
  return (
    <>
      <Head>
        <title>Damned Cat Studio</title>
        <meta property="og:title" content="Damned Cat Studio" key="title" />
        <meta name="description" content="Damned Cat Studio, main page" key="description" />
        <meta name="keywords" content="DCS, Damned Cat Studio" />
        <meta name="author" content="John Weland" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>


      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100 dark:bg-gray-800" />
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <div className="absolute inset-0">
              <video
                className="h-full w-full object-cover"
                placeholder='blur'
                src="/images/pexels-2.mp4"
                autoPlay
                loop
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-gray-300 to-gray-500 bg-gray-500 mix-blend-multiply" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">Get to Know Us</span>
                <span className="block text-gray-200">customer support</span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-center text-xl text-gray-200 sm:max-w-3xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                amet fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                  <Link href="/contact" >
                  <a
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-amber-700 bg-white hover:bg-amber-50 sm:px-8"
                  >
                    Let's chat
                  </a>
                  </Link>
                  <a
                    href="#faq"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-amber-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                  >
                    FAQs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Logo cloud */}
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase text-gray-500 dark:text-gray-300 tracking-wide">
            Trusted by over 5 very average small businesses
          </p>
          <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                alt="StaticKit"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                alt="Transistor"
              />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                alt="Workcation"
              />
            </div>
          </div>
        </div>
      </div>

      <div id="faq">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:max-w-2xl lg:mx-auto lg:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-4 text-gray-500 dark:text-gray-300">
            You've got questions, we have answers; though we never claim to have good answers.
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="font-semibold text-gray-900 dark:text-white">{faq.question}</dt>
                <dd className="mt-3 text-gray-600 dark:text-gray-300">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    <CookieBanner acceptedCookies={acceptedCookies}/>
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async ({req}) => {
  let accepted = req.cookies.acceptedCookies || 'false'
  return { props: { "acceptedCookies" : JSON.parse(accepted) } }
}