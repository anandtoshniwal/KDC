import React from "react"
import family from "../assets/images/family.png"

const Tout = () => {
  return (
    <div
      id="menu1"
      class="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6"
    >
      <div class="flex flex-col items-center w-full md:flex-row md:w-1/2">
        <div class="max-w-lg md:mx-12 md:order-2">
          <h1 class="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">
            Spreading Smiles Since 1986...
          </h1>
          <p class="mt-4 text-gray-600 dark:text-gray-300">
            Established in the year 1986, Dr. Sunita Doibale’s Kranti Dental
            Clinic in Jawahar Colony, Aurangabad-Maharashtra is one of the top
            players in the city. This well-known establishment acts as a
            one-stop destination servicing customers both local and from other
            parts of Aurangabad-Maharashtra.
          </p>
          <p class="mt-4 text-gray-600 dark:text-gray-300">
            The belief that customer satisfaction is as important as their
            products and services, have helped this establishment garner a vast
            base of customers, which continues to grow by the day.
          </p>
        </div>
      </div>

      <div class="flex items-center justify-center w-full h-96 md:w-1/2">
        <img
          class="object-cover w-full h-full max-w-2xl rounded-md"
          src={family}
          alt="apple watch photo"
        />
      </div>
    </div>
  )
}

export default Tout
