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
                url={"https://github.com/pmalu9211/LinkHub/"}
                className="font-bold text-blue-500"
              >
                GitHub
              </LinkPreview>{" "}
            </span>
            <span className="bg-black text-white rounded-full text-2xl w-fit px-6 py-4 mb-8 inline-flex items-center justify-center gap-2">
              <BiLink />
              <LinkPreview
                url={"https://linkhub-khaki.vercel.app/"}
                className="font-bold text-blue-500"
              >
                Deployed
              </LinkPreview>{" "}
            </span>
            <h1 className="text-5xl font-bold text-white mb-10">
              LinkHub: Secure and Efficient Link Management Platform
            </h1>
            <div className="text-2xl  prose prose-sm dark:prose-invert">
              <Image
                src="/project/linkhub1.png"
                alt="blog thumbnail"
                height="1000"
                width="1000"
                className={twMerge(
                  inter.className,
                  "rounded-lg mb-10 object-cover"
                )}
              />
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
                        LinkHub is a highly efficient link management platform
                        designed for scalability, security, and performance. The
                        backend, built with Hono (TypeScript) and deployed on
                        Cloudflare Workers, offers a distributed and serverless
                        architecture. PostgreSQL with Prisma ORM ensures robust
                        data handling, enhanced with Prisma Accelerate for
                        caching and connection pooling.
                      </p>
                    </section>

                    <section className="mb-14">
                      <h2 className="text-4xl font-semibold text-white-100 mb-6">
                        Core Features
                      </h2>
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-3xl font-medium text-white-100 mb-3">
                            Secure Authentication & Data Handling
                          </h3>
                          <ul className="list-disc list-inside text-xl text-white-200 ml-5">
                            <li className="mb-3">
                              <strong className="text-white">
                                JWT Authentication:
                              </strong>{" "}
                              Ensures secure and scalable user authentication.
                            </li>
                            <li>
                              <strong className="text-white">bcrypt:</strong>{" "}
                              Implements bcrypt for robust password hashing,
                              ensuring data security.
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-3xl font-medium text-white-100 mb-3">
                            Scalable Backend Infrastructure
                          </h3>
                          <ul className="list-disc list-inside text-xl text-white-200 ml-5">
                            <li className="mb-3">
                              <strong className="text-white">
                                Hono (TypeScript):
                              </strong>{" "}
                              Built using Hono for lightweight and scalable
                              backend performance.
                            </li>
                            <li>
                              <strong className="text-white">
                                Cloudflare Workers:
                              </strong>{" "}
                              Deployed on Cloudflare Workers for low-latency and
                              global availability.
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-3xl font-medium text-white-100 mb-3">
                            Upvoting & Downvoting System
                          </h3>
                          <ul className="list-disc list-inside text-xl text-white-200 ml-5">
                            <li className="mb-3">
                              <strong className="text-white">
                                Real-Time Feedback:
                              </strong>{" "}
                              Users can upvote or downvote links, with votes
                              managed efficiently in the backend.
                            </li>
                            <li>
                              <strong className="text-white">
                                Vote-Based Sorting:
                              </strong>{" "}
                              Links can be sorted by upvotes, downvotes, or
                              other criteria, ensuring the most relevant content
                              is highlighted.
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-3xl font-medium text-white-100 mb-3">
                            Optimized Frontend Performance
                          </h3>
                          <ul className="list-disc list-inside text-xl text-white-200 ml-5">
                            <li className="mb-3">
                              <strong className="text-white">
                                React (TypeScript):
                              </strong>{" "}
                              Developed using React with TypeScript, optimized
                              for performance and code maintainability.
                            </li>
                            <li>
                              <strong className="text-white">
                                React Router:
                              </strong>{" "}
                              Enables smooth navigation and a seamless user
                              experience.
                            </li>
                            <li>
                              <strong className="text-white">Recoil:</strong>{" "}
                              Efficient global state management ensures a
                              responsive UI.
                            </li>
                            <li>
                              <strong className="text-white">
                                Tailwind CSS:
                              </strong>{" "}
                              Rapid UI development and responsive design create
                              a visually appealing and consistent interface.
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
                          <strong className="text-white">Backend:</strong> Hono
                          (TypeScript) deployed on Cloudflare Workers for
                          efficient, serverless backend operations.
                        </li>
                        <li>
                          <strong className="text-white">Database:</strong>{" "}
                          PostgreSQL with Prisma ORM, enhanced by Prisma
                          Accelerate for performance optimization.
                        </li>
                        <li>
                          <strong className="text-white">Security:</strong>{" "}
                          bcrypt for secure password hashing and JWT for robust
                          authentication.
                        </li>
                        <li>
                          <strong className="text-white">Frontend:</strong>{" "}
                          React (TypeScript) with React Router, Recoil, and
                          Tailwind CSS for a dynamic and responsive user
                          interface.
                        </li>
                      </ul>
                    </section>

                    <section className="mb-14">
                      <h2 className="text-4xl font-semibold text-white-100 mb-6">
                        Key Highlights
                      </h2>
                      <ul className="list-disc list-inside text-xl text-white-200 ml-5 space-y-3">
                        <li>
                          <strong className="text-white">
                            Scalable & High Performance:
                          </strong>{" "}
                          Cloudflare Workers and Prisma Accelerate enable the
                          platform to handle heavy traffic and complex queries
                          with ease.
                        </li>
                        <li>
                          <strong className="text-white">
                            Enhanced Security:
                          </strong>{" "}
                          bcrypt and JWT provide a strong security foundation,
                          safeguarding user data and authentication processes.
                        </li>
                        <li>
                          <strong className="text-white">
                            Optimized User Experience:
                          </strong>{" "}
                          The combination of React, Recoil, and Tailwind CSS
                          delivers a fast, responsive, and visually appealing
                          interface.
                        </li>
                        <li>
                          <strong className="text-white">
                            Real-Time Interaction:
                          </strong>{" "}
                          The upvote/downvote system provides immediate
                          feedback, enhancing user engagement and content
                          relevance.
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
