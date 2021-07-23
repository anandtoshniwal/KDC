import React from "react"
import ClinicMap from "../components/ClinicMap"
import LocationIcon from "../assets/icons/location.svg"

const Footer = () => {
  return (
    <div class="flex flex-wrap justify-center bg-gray-800 p-6">
      <div class="flex flex-wrap mb-4 w-full">
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 ">
          <div class="flex align-middle text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <h3 class="text-3xl py-4 inline text-gray-300 my-0 ml-3">
              Address
            </h3>
          </div>

          <p class="text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
            Om 25, Shri Vyankatesh Housing Society,
            <br />
            Jawahar Colony Area, Near Chetak Ghoda Chowk,
            <br />
            Aurangabad, Maharashtra 431005
          </p>
        </div>

        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 lg:pl-8 pt-4">
          <h3 class="text-3xl py-4 inline text-gray-300 my-0 ml-3 text-center">
            Get in touch
          </h3>
          <div class="lg:flex items-center mt-4 text-gray-600 dark:text-gray-400">
            <div class="flex items-center mt-2 text-gray-600 dark:text-gray-400">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                class="w-8 h-8 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div class="ml-4 text-md tracking-wide font-semibold w-40 text-gray-300">
                <a href="tel:02402970193">9422704393</a>
              </div>
            </div>
            <div class="flex items-center mt-2">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                class="w-8 h-8 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div class="ml-4 text-md  font-semibold w-40 text-gray-300">
                <a href="tel:9422704393">8766921820</a>
              </div>
            </div>
          </div>
          <div class="flex items-center mt-2 text-gray-600 dark:text-gray-400 ">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              class="w-8 h-8 text-gray-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div class="ml-4 text-md tracking-wide font-semibold w-40 text-gray-300 whitespace-nowrap">
              <a href="mailto:drsunitadoibale@gmail.com">
                drsunitadoibale@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
          <ClinicMap />
        </div>
      </div>
    </div>
  )
}
export default Footer
