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
                url={"https://github.com/pmalu9211/Backend_Project/"}
                className="font-bold text-blue-500"
              >
                GitHub
              </LinkPreview>{" "}
            </span>

            <h1 className="text-5xl font-bold text-white mb-10">
              VidShare: Advanced Video Sharing Platform
            </h1>
            <div className="text-2xl  prose prose-sm dark:prose-invert">
              <Image
                src="/backend-project.png"
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
                        VidShare is a comprehensive video hosting platform,
                        similar to YouTube, built with a robust backend using
                        Node.js, Express.js, MongoDB, and various modern web
                        technologies. This project showcases advanced features,
                        industry-standard practices, and a scalable architecture
                        designed to handle complex video sharing
                        functionalities.
                      </p>
                    </section>

                    <section className="mb-14">
                      <h2 className="text-4xl font-semibold text-white-100 mb-6">
                        Core Features
                      </h2>
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-3xl font-medium text-white-100 mb-3">
                            User Authentication and Security
                          </h3>
                          <ul className="list-disc list-inside text-xl text-white-200 ml-5">
                            <li className="mb-3">
                              <strong className="text-white">
                                JWT Authentication:
                              </strong>{" "}
                              Implements secure token-based authentication for
                              user sessions.
                            </li>
                            <li>
                              <strong className="text-white">
                                Password Hashing:
                              </strong>{" "}
                              Utilizes bcrypt for secure password storage and
                              verification.
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-3xl font-medium text-white-100 mb-3">
                            Video Management
                          </h3>
                          <ul className="list-disc list-inside text-xl text-white-200 ml-5">
                            <li className="mb-3">
                              <strong className="text-white">
                                Upload and Streaming:
                              </strong>{" "}
                              Enables users to upload, store, and stream video
                              content.
                            </li>
                            <li>
                              <strong className="text-white">
                                Engagement Features:
                              </strong>{" "}
                              Implements like, dislike, comment, and reply
                              functionalities for videos.
                            </li>
                            <li>
                              <strong className="text-white">
                                Subscription System:
                              </strong>{" "}
                              Allows users to subscribe to channels and manage
                              subscriptions.
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-3xl font-medium text-white-100 mb-3">
                            Advanced Backend Capabilities
                          </h3>
                          <ul className="list-disc list-inside text-xl text-white-200 ml-5">
                            <li className="mb-3">
                              <strong className="text-white">
                                MongoDB with Mongoose:
                              </strong>{" "}
                              Utilizes MongoDB for efficient data storage and
                              Mongoose for advanced data modeling.
                            </li>
                            <li>
                              <strong className="text-white">
                                Aggregation and Pagination:
                              </strong>{" "}
                              Implements MongoDB aggregation pipelines and
                              pagination for optimized data retrieval.
                            </li>
                            <li>
                              <strong className="text-white">
                                Cloudinary Integration:
                              </strong>{" "}
                              Manages image uploading and processing using
                              Cloudinary&apos;s cloud services.
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
                          <strong className="text-white">Backend:</strong>{" "}
                          Node.js, Express.js
                        </li>
                        <li>
                          <strong className="text-white">Database:</strong>{" "}
                          MongoDB with Mongoose ORM
                        </li>
                        <li>
                          <strong className="text-white">
                            Authentication:
                          </strong>{" "}
                          JWT (JSON Web Tokens)
                        </li>
                        <li>
                          <strong className="text-white">File Handling:</strong>{" "}
                          Multer for uploads, Cloudinary for cloud storage
                        </li>
                        <li>
                          <strong className="text-white">Security:</strong>{" "}
                          bcrypt for password hashing, environment variables for
                          sensitive data
                        </li>
                        <li>
                          <strong className="text-white">Development:</strong>{" "}
                          Nodemon for hot-reloading, Prettier for code
                          formatting
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
                            Scalable Architecture:
                          </strong>{" "}
                          Designed with a modular structure for easy maintenance
                          and scalability.
                        </li>
                        <li>
                          <strong className="text-white">
                            Comprehensive API:
                          </strong>{" "}
                          Includes endpoints for user management, video
                          operations, interactions, and more.
                        </li>
                        <li>
                          <strong className="text-white">
                            Security-First Approach:
                          </strong>{" "}
                          Implements best practices in authentication, data
                          protection, and error handling.
                        </li>
                        <li>
                          <strong className="text-white">
                            Performance Optimized:
                          </strong>{" "}
                          Utilizes caching, efficient database queries, and
                          cloud services for optimal performance.
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
