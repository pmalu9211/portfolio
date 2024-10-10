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
                url={"https://github.com/pmalu9211/narrate"}
                className="font-bold text-blue-500"
              >
                GitHub
              </LinkPreview>{" "}
            </span>
            <span className="bg-black text-white rounded-full text-2xl w-fit px-6 py-4 mb-8 inline-flex items-center justify-center gap-2">
              <BiLink />
              <LinkPreview
                url={"https://narrate.prathamalu.xyz"}
                className="font-bold text-blue-500"
              >
                Deployed
              </LinkPreview>{" "}
            </span>
            <h1 className="text-5xl font-bold text-white-100x    mb-10">
              Blogging Website: Scalable and High-Performance Content Platform
            </h1>
            <div className="text-2xl  prose prose-sm dark:prose-invert">
              <Image
                src="/project/narrate1.png"
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
                        This Blogging Website is a high-performance content
                        platform engineered for scalability and optimized user
                        experience. The backend is powered by Hono, a TypeScript
                        framework, and deployed on Cloudflare Workers, ensuring
                        rapid and reliable service delivery. With PostgreSQL and
                        Prisma ORM handling robust data management, the platform
                        leverages advanced caching and connection pooling via
                        Prisma Accelerate, resulting in lightning-fast response
                        times even under heavy load.
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
                              Secure and scalable user authentication is managed
                              through JSON Web Tokens.
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
                              Built using Hono for its lightweight yet powerful
                              capabilities, ensuring the backend is both
                              efficient and scalable.
                            </li>
                            <li>
                              <strong className="text-white">
                                Cloudflare Workers:
                              </strong>{" "}
                              Deployed on Cloudflare Workers, providing a
                              global, distributed network that ensures
                              low-latency and high availability.
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
                              The frontend is developed using React with
                              TypeScript, leveraging hooks for optimized
                              performance and code maintainability.
                            </li>
                            <li>
                              <strong className="text-white">
                                React Router:
                              </strong>{" "}
                              Facilitates smooth and efficient navigation
                              throughout the platform, enhancing user
                              experience.
                            </li>
                            <li>
                              <strong className="text-white">Recoil:</strong>{" "}
                              Manages global state efficiently, ensuring a
                              responsive and interactive user interface.
                            </li>
                            <li>
                              <strong className="text-white">
                                Tailwind CSS:
                              </strong>{" "}
                              Utilized for rapid UI development and responsive
                              design, making the platform visually appealing
                              across devices.
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
                          (TypeScript) deployed on Cloudflare Workers (Ensures
                          efficient and scalable backend operations)
                        </li>
                        <li>
                          <strong className="text-white">Database:</strong>{" "}
                          PostgreSQL with Prisma ORM (Facilitates robust data
                          management with Prisma Accelerate for enhanced
                          performance)
                        </li>
                        <li>
                          <strong className="text-white">Security:</strong>{" "}
                          bcrypt (For secure password hashing), JWT (For user
                          authentication)
                        </li>
                        <li>
                          <strong className="text-white">Frontend:</strong>{" "}
                          React (TypeScript) with React Router, Recoil, and
                          Tailwind CSS (Delivers a dynamic and responsive user
                          experience)
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
                            High Performance:
                          </strong>{" "}
                          With Cloudflare Workers and Prisma Accelerate, the
                          platform handles heavy traffic and complex queries
                          effortlessly, ensuring smooth operation for thousands
                          of users.
                        </li>
                        <li>
                          <strong className="text-white">
                            Scalable Infrastructure:
                          </strong>{" "}
                          The use of Hono and Cloudflare Workers allows the
                          platform to scale efficiently, accommodating growth
                          without compromising performance.
                        </li>
                        <li>
                          <strong className="text-white">
                            Enhanced Security:
                          </strong>{" "}
                          bcrypt and JWT ensure that user data and
                          authentication processes are secure, maintaining trust
                          and reliability.
                        </li>
                        <li>
                          <strong className="text-white">
                            Optimized User Experience:
                          </strong>{" "}
                          The combination of React, Recoil, and Tailwind CSS
                          provides a fast, responsive, and visually appealing
                          user interface, enhancing overall satisfaction.
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
