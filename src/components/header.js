/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import Logo from "../assets/images/kcd-logo.jpeg"

const navigation = ["Home", "About us", "Services", "Team"]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Header() {
  return (
    <div>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-auto w-20 my-4 mx-auto"
                      src={Logo}
                      alt="Kranti Dental Clinic"
                    />
                    <p className="text-white my-2 hidden md:block">
                      Kranti Dental Clinic
                    </p>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item, itemIdx) =>
                        itemIdx === 0 ? (
                          <Fragment key={item}>
                            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                            <a
                              href={
                                "#" + item.replace(/\s/g, "-").toLowerCase()
                              }
                              className="bg-gray-900 text-white px-3 py-2 rounded-md text-basefont-medium"
                            >
                              {item}
                            </a>
                          </Fragment>
                        ) : (
                          <a
                            key={item}
                            href={"#" + item.replace(/\s/g, "-").toLowerCase()}
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                          >
                            {item}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </div>

                <div className="md:hidden">
                  <p className="text-white my-2 hiddenmd:block">
                    Kranti Dental Clinic
                  </p>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item, itemIdx) =>
                  itemIdx === 0 ? (
                    <Fragment key={item}>
                      {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                      <a
                        href={"#" + item.replace(/\s/g, "-").toLowerCase()}
                        className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                      >
                        {item}
                      </a>
                    </Fragment>
                  ) : (
                    <a
                      key={item}
                      href={"#" + item.replace(/\s/g, "-").toLowerCase()}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header> */}
    </div>
  )
}
