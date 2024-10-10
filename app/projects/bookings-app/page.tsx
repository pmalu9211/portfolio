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
                url={"https://github.com/pmalu9211/bookingsapp"}
                className="font-bold text-blue-500"
              >
                GitHub
              </LinkPreview>{" "}
            </span>
            <span className="bg-black text-white rounded-full text-2xl w-fit px-6 py-4 mb-8 inline-flex items-center justify-center gap-2">
              <BiLink />
              <LinkPreview
                url={"https://book.prathamalu.xyz"}
                className="font-bold text-blue-500"
              >
                Deployed
              </LinkPreview>{" "}
            </span>
            <h1 className="text-5xl font-bold text-white-100 mb-10">
              Bookings App: Seamless Property Listings and Bookings
            </h1>
            <div className="text-2xl  prose prose-sm dark:prose-invert">
              <Image
                src="/airbnb.png"
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
                        The Bookings App is a full-stack MERN application
                        designed for listing and booking rental properties.
                        Inspired by platforms like Airbnb, this app offers a
                        streamlined and secure experience for both property
                        owners and renters. The app features image handling via
                        Cloudinary, secure deployment on AWS EC2, and
                        incorporates Docker for containerization. It&apos;s
                        equipped with HTTPS security and rate limiting to
                        protect against abuse.
                      </p>
                    </section>

                    <section className="mb-14">
                      <h2 className="text-4xl font-semibold text-white-100 mb-6">
                        Core Features
                      </h2>
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-3xl font-medium text-white-100 mb-3">
                            Property Listings & Bookings
                          </h3>
                          <ul className="list-disc list-inside text-xl text-white-200 ml-5">
                            <li className="mb-3">
                              Allows users to list rental properties, complete
                              with images and detailed descriptions.
                            </li>
                            <li>
                              Facilitates bookings with real-time availability
                              and user-friendly navigation.
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-3xl font-medium text-white-100 mb-3">
                            Image Handling via Cloudinary
                          </h3>
                          <ul className="list-disc list-inside text-xl text-white-200 ml-5">
                            <li>
                              Integrates Cloudinary for efficient and optimized
                              image storage and retrieval, ensuring high-quality
                              visuals for all property listings.
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-3xl font-medium text-white-100 mb-3">
                            Security & Performance
                          </h3>
                          <Image
                            src="/airbnb1.png"
                            alt="rate limiting thumbnail"
                            height="1000"
                            width="1000"
                            className={twMerge(
                              inter.className,
                              "rounded-lg mb-10 object-cover"
                            )}
                          />
                          <ul className="list-disc list-inside text-xl text-white-200 ml-5">
                            <li className="mb-3">
                              Deployed on an AWS EC2 instance with HTTPS
                              security to ensure safe and secure user
                              interactions.
                            </li>
                            <li>
                              Rate limiting implemented to prevent abuse by
                              limiting the number of requests per IP address.
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
                          <span className="font-bold text-white">
                            Frontend:
                          </span>{" "}
                          React (Provides an intuitive and dynamic user
                          interface)
                        </li>
                        <li>
                          <span className="font-bold text-white">Backend:</span>{" "}
                          Node.js & Express (Handles server-side operations and
                          API endpoints)
                        </li>
                        <li>
                          <span className="font-bold text-white">
                            Database:
                          </span>{" "}
                          MongoDB (NoSQL database for storing user and listing
                          data)
                        </li>
                        <li>
                          <span className="font-bold text-white">
                            Image Handling:
                          </span>{" "}
                          Cloudinary (For efficient image storage and retrieval)
                        </li>
                        <li>
                          <span className="font-bold text-white">
                            Deployment:
                          </span>{" "}
                          Docker & AWS EC2 (Containerized deployment with HTTPS
                          security)
                        </li>
                        <li>
                          <span className="font-bold text-white">
                            Security:
                          </span>{" "}
                          Rate limiting for IPs (Prevents excessive requests
                          from a single source)
                        </li>
                      </ul>
                    </section>

                    <section className="mb-14">
                      <h2 className="text-4xl font-semibold text-white-100 mb-6">
                        Key Highlights
                      </h2>
                      <ul className="list-disc list-inside text-xl text-white-200 ml-5 space-y-3">
                        <li>
                          <span className="font-bold text-white">
                            End-to-End Functionality:
                          </span>{" "}
                          From property listings to bookings, the app provides a
                          complete solution for rental management.
                        </li>
                        <li>
                          <span className="font-bold text-white">
                            Cloudinary Integration:
                          </span>{" "}
                          Ensures that all property images are handled
                          efficiently and displayed with optimal performance.
                        </li>
                        <li>
                          <span className="font-bold text-white">
                            Secure Deployment:
                          </span>{" "}
                          Deployed on AWS EC2 with Docker, offering a secure and
                          scalable environment for the application.
                        </li>
                        <li>
                          <span className="font-bold text-white">
                            Rate Limiting:
                          </span>{" "}
                          Adds an additional layer of security by preventing
                          abuse through request limiting.
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
