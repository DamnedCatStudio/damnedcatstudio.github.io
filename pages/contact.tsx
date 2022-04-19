import type { NextPage } from 'next'
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { useRouter } from 'next/router'


import Head from 'next/head'
import Link from 'next/link'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Contact: NextPage = () => {
    const router = useRouter();
    const [agreed, setAgreed] = useState(false)
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setPhonenumnber] = useState("");
    const [message, setMessage] = useState("");
    const [honeypot, setHoneypot] = useState("");


    const submitHandler = async event => {
        event.preventDefault();
        fetch("https://relayforms.com/submit/9A5nePDo7JWygFbuAIpW", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstname,
                lastname,
                company,
                email,
                phonenumber,
                message,
                honeypot
            }),
        })
            .then((res) => {
                router.push('/')
            })
            .catch((err) => {
                console.error(err);
            });
    }

    return (
        <>
            <Head>
                <title>Damned Cat Studio</title>
                <meta property="og:title" content="Contact Us :: Damned Cat Studio" key="title" />
                <meta name="description" content="Need to reach us? Contact us on this fancy page!" key="description" />
                <meta name="keywords" content="DCS, Damned Cat Studio, Contact Us" />
                <meta name="author" content="John Weland" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <div className="bg-white dark:bg-gray-900 py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
                <div className="relative max-w-xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">Contact Us</h2>
                        <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                            Have an idea? Want to talk about an upcoming project or join in our shinanigans?
                        </p>
                    </div>
                    <div className="mt-12">
                        <form onSubmit={submitHandler} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                            <div>
                                <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    First name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="firstname"
                                        id="firstname"
                                        autoComplete="given-name"
                                        required
                                        value={firstname}
                                        onChange={(ev) => setFirstname(ev.currentTarget.value)}
                                        className="py-3 px-4 text-gray-900 block w-full shadow-sm focus:ring-amber-600 focus:border-amber-600 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Last name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="lastname"
                                        id="lastname"
                                        autoComplete="family-name"
                                        required
                                        value={lastname}
                                        onChange={(ev) => setLastname(ev.currentTarget.value)}
                                        className="py-3 px-4 text-gray-900 block w-full shadow-sm focus:ring-amber-600 focus:border-amber-600 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Company
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="company"
                                        id="company"
                                        autoComplete="organization"
                                        value={company}
                                        onChange={(ev) => setCompany(ev.currentTarget.value)}
                                        className="py-3 px-4 text-gray-900 block w-full shadow-sm focus:ring-amber-600 focus:border-amber-600 border-gray-300 rounded-md"
                                    />
                                    <input
                                        type="text"
                                        name="honeypot"
                                        id="honeypot"
                                        hidden
                                        onChange={(ev) => setHoneypot(ev.currentTarget.value)}
                                        className="hidden py-3 px-4 text-gray-900 block w-full shadow-sm focus:ring-amber-600 focus:border-amber-600 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={(ev) => setEmail(ev.currentTarget.value)}
                                        className="py-3 px-4 text-gray-900 block w-full shadow-sm focus:ring-amber-600 focus:border-amber-600 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Phone Number
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 flex items-center">
                                        <label htmlFor="country" className="sr-only">
                                            Country
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            className="h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-amber-600 focus:border-amber-600 rounded-md"
                                        >
                                            <option>US</option>
                                            <option>CA</option>
                                            <option>EU</option>
                                        </select>
                                    </div>
                                    <input
                                        type="text"
                                        name="phone-number"
                                        id="phonenumber"
                                        autoComplete="tel"
                                        value={phonenumber}
                                        onChange={(ev) => setPhonenumber(ev.currentTarget.value)}
                                        className="py-3 px-4 text-gray-900 block w-full pl-20 focus:ring-amber-600 focus:border-amber-600 border-gray-300 rounded-md"
                                        placeholder="+1 (555) 987-6543"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Message
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        value={message}
                                        onChange={(ev) => setMessage(ev.currentTarget.value)}
                                        className="py-3 px-4 text-gray-900 block w-full shadow-sm focus:ring-amber-600 focus:border-amber-600 border border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <Switch
                                            checked={agreed}
                                            onChange={setAgreed}
                                            className={classNames(
                                                agreed ? 'bg-amber-600' : 'bg-gray-200 dark:bg-gray-600',
                                                'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600'
                                            )}
                                        >
                                            <span className="sr-only">Agree to policies</span>
                                            <span
                                                aria-hidden="true"
                                                className={classNames(
                                                    agreed ? 'translate-x-5' : 'translate-x-0',
                                                    'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                                )}
                                            />
                                        </Switch>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-base text-gray-500 dark:text-gray-100">
                                            By selecting this, you agree to the{' '}
                                            <Link href="/legal/privacy">
                                                <a className="font-medium text-gray-700 dark:text-gray-300 underline">
                                                    Privacy Policy
                                                </a>
                                            </Link>
                                            {' '}and{' '}
                                            <Link href="/legal/cookies">
                                                <a className="font-medium text-gray-700 dark:text-gray-300 underline">
                                                    Cookie Policy
                                                </a>
                                            </Link>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <button
                                    type="submit"
                                    disabled={!agreed}
                                    className="disabled:opacity-50 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600"
                                >
                                    Let&apos;s talk
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact