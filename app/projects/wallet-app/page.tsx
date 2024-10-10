import React from "react";
import { Inter } from "next/font/google";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { LinkPreview } from "@/components/ui/link-preview";
import { BiLink } from "react-icons/bi";

const inter = Inter({ subsets: ["latin"] });
export default function TracingBeamDemo() {
  return (
    <div className="bg-black-100 relative w-full h-full">
      <TracingBeam className="px-6 relative bg-black-100 mt-24">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          <div className="mb-10">
            <span className="bg-black text-white rounded-full text-2xl w-fit px-6 py-4 mb-8 inline-flex items-center justify-center gap-2">
              <BiLink />
              <LinkPreview
                url={"https://github.com/pmalu9211/paytm"}
                className="font-bold text-blue-500"
              >
                GitHub
              </LinkPreview>{" "}
            </span>
            {/* <span className="bg-black text-white rounded-full text-2xl w-fit px-6 py-4 mb-8 inline-flex items-center justify-center gap-2">
              <BiLink />
              <LinkPreview
                url={""}
                className="font-bold text-blue-500"
              >
                Deployed
              </LinkPreview>{" "}
            </span> */}
            <h1 className="text-5xl font-bold text-white mb-10">
              Wallet App: Secure and Efficient Financial Management
            </h1>
            <div className="text-2xl  prose prose-sm dark:prose-invert">
              {items?.image && (
                <Image
                  src={items.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className={twMerge(
                    inter.className,
                    "rounded-lg mb-10 object-cover"
                  )}
                />
              )}
              <div
                className={twMerge(
                  inter.className,
                  "rounded-lg mb-10 text-2xl"
                )}
              >
                <div className="bg-black-100 py-14 px-8 sm:px-14">
                  <div className="max-w-7xl mx-auto">
                    <section className="mb-14">
                      <h2 className="text-4xl font-semibold text-white-100 mb-6">
                        Overview
                      </h2>
                      <p className="text-xl text-white-200">
                        The Wallet App is a cutting-edge financial management
                        tool designed to offer users a secure and seamless
                        experience in handling personal finances. Built with a
                        robust technical stack using Turborepo, this full-stack
                        application features a Next.js-based frontend and
                        backend, with a specialized backend dedicated to
                        managing banking webhooks for on-ramp transactions. The
                        app ensures data integrity and security at every step,
                        from user authentication to money transfers.
                      </p>
                    </section>

                    <section className="mb-14">
                      <h2 className="text-4xl font-semibold text-white-100 mb-6">
                        Core Features
                      </h2>
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-3xl font-medium text-white-100 mb-3">
                            User Authentication & Security
                          </h3>
                          <ul className="list-disc list-inside text-xl text-white-200 ml-5">
                            <li className="mb-3">
                              <span className="font-bold text-white-100">
                                NextAuth:
                              </span>
                              <span className="ml-2">
                                The app offers robust authentication,
                                safeguarding user access and personal data.
                              </span>
                            </li>
                            <li>
                              <span className="font-bold text-white-100">
                                Prisma ORM:
                              </span>
                              <span className="ml-2">
                                Ensures secure and efficient data handling, with
                                all transactions conducted at the highest
                                security standards.
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-3xl font-medium text-white-100 mb-3">
                            Comprehensive Wallet Functionality
                          </h3>
                          <ul className="list-disc list-inside text-xl text-white-200 ml-5">
                            <li className="mb-3">
                              Users can transfer funds from their bank accounts
                              to the wallet, and between wallets using unique
                              IDs.
                            </li>
                            <li>
                              All transactions are fortified with
                              <span className="font-bold text-white-100 ml-2">
                                Prisma transactions and locking mechanisms
                              </span>
                              , preventing any discrepancies or mishaps.
                            </li>
                          </ul>
                        </div>

                        <div>
                          <Image
                            src={"/project/paytm2.png"}
                            alt="blog thumbnail"
                            height="1000"
                            width="1000"
                            className={twMerge(
                              inter.className,
                              "rounded-lg mb-10 object-cover"
                            )}
                          />
                          <h3 className="text-3xl font-medium text-white-100 mb-3">
                            Banking Webhooks for On-Ramp Transactions
                          </h3>
                          <ul className="list-disc list-inside text-xl text-white-200 ml-5">
                            <li>
                              A dedicated backend manages banking webhooks,
                              ensuring that transactions are only credited to
                              the user&apos;s wallet after successful bank
                              verification.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </section>

                    <section className="mb-14">
                      <h2 className="text-4xl font-semibold text-white-100 mb-6">
                        Technical Stack
                      </h2>
                      <ul className="list-disc list-inside text-xl text-white-200 ml-5 space-y-3">
                        <li>
                          <span className="font-bold text-white-100">
                            Frontend & Backend:
                          </span>
                          <span className="ml-2">
                            Next.js (A powerful React-based framework for
                            server-rendered and static web applications)
                          </span>
                        </li>
                        <li>
                          <span className="font-bold text-white-100">
                            Database:
                          </span>
                          <span className="ml-2">
                            PostgreSQL with Prisma ORM (Ensures secure and
                            efficient data management)
                          </span>
                        </li>
                        <li>
                          <span className="font-bold text-white-100">
                            Authentication:
                          </span>
                          <span className="ml-2">
                            NextAuth (Provides secure and seamless user
                            authentication)
                          </span>
                        </li>
                        <li>
                          <span className="font-bold text-white-100">
                            Modular Codebase:
                          </span>
                          <span className="ml-2">
                            Turborepo (Promotes code reusability and a clean,
                            maintainable structure)
                          </span>
                        </li>
                      </ul>
                    </section>

                    <section className="mb-14">
                      <h2 className="text-4xl font-semibold text-white-100 mb-6">
                        Key Highlights
                      </h2>
                      <ul className="list-disc list-inside text-xl text-white-200 ml-5 space-y-3">
                        <li>
                          <span className="font-bold text-white-100">
                            Modularity & Code Reusability:
                          </span>
                          <span className="ml-2">
                            Leveraging Turborepo, the codebase is highly
                            modular, allowing for the reuse of components across
                            the application, ensuring a clean and maintainable
                            code structure.
                          </span>
                        </li>
                        <li>
                          <span className="font-bold text-white-100">
                            Prisma Transactions & Locking:
                          </span>
                          <span className="ml-2">
                            The use of Prisma transactions and locking
                            mechanisms guarantees data integrity and prevents
                            race conditions during money transfers, ensuring a
                            reliable and secure user experience.
                          </span>
                        </li>
                        <li>
                          <span className="font-bold text-white-100">
                            Secure Transfers:
                          </span>
                          <span className="ml-2">
                            Funds are only credited to the wallet post-bank
                            verification, enhancing the security and reliability
                            of transactions.
                          </span>
                        </li>
                        <li>
                          <span className="font-bold text-white-100">
                            Banking Webhooks:
                          </span>
                          <span className="ml-2">
                            Efficiently handles on-ramp transactions with a
                            specialized backend, ensuring the authenticity and
                            security of every transaction.
                          </span>
                        </li>
                      </ul>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TracingBeam>
    </div>
  );
}

const items = {
  title: "Wallet App",
  badge: {
    github: "https://github.com/pmalu9211/paytm",
    deployed: "https://narrate.prathamalu.xyz",
  },
  image: "/project/paytm4.png",
};
