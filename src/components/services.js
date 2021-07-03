import React from "react"
import dentalFilling from "../assets/images/filling-icon.png"
import RootCanal from "../assets/images/root-canal.png"
import TeethRemoval from "../assets/images/teeth-removal.png"
import BracesAligners from "../assets/images/braces-aligners.png"
import DentalImplants from "../assets/images/dental-implant.png"
import Dentures from "../assets/images/dentures-icon.png"
import CrownsBridges from "../assets/images/crowns-bridges.png"
import ChildrensDentistry from "../assets/images/childrens-dentistry.png"
import SmileMakeover from "../assets/images/smile-makeover.png"
import TeethWhitening from "../assets/images/teeth-whitening.png"
import MouthUlcers from "../assets/images/mouth-ulcers.png"

const Services = () => {
  return (
    <div id="services" class="my-5 mb-10">
      <h2 class="text-center text-3xl font-bold text-gray-800 dark:text-white mb-5">
        Our services
      </h2>
      <div class=" grid-cols-2 md:grid-cols-3 lg:grid-cols-6 grid gap-4 justify-center align-center text-center max-w-full m-auto">
        <div class="px-5 border m-auto shadow-lg">
          <img class="mt-0 mb-5 mx-auto" src={dentalFilling} />
          <p>Dental Filing</p>
        </div>
        <div class="px-5 border m-auto shadow-lg">
          <img class="mt-0 mb-5 mx-auto" src={RootCanal} />
          <p>Root Canal</p>
        </div>

        <div class="px-5 border m-auto shadow-lg">
          <img class="mt-0 mb-5 mx-auto" src={TeethRemoval} />
          <p>Wisdom Teeth Removal</p>
        </div>

        <div class="px-5 border m-auto shadow-lg">
          <img class="mt-0 mb-5 mx-auto" src={BracesAligners} />
          <p>Braces & aligners</p>
        </div>

        <div class="px-5 border m-auto shadow-lg">
          <img class="mt-0 mb-5 mx-auto" src={DentalImplants} />
          <p>Dental Implants</p>
        </div>
        <div class="px-5 border m-auto shadow-lg">
          <img class="mt-0 mb-5 mx-auto" src={Dentures} />
          <p>Dentures</p>
        </div>
        <div class="px-5 border m-auto shadow-lg">
          <img class="mt-0 mb-5 mx-auto" src={CrownsBridges} />
          <p>Bridges & Crowns</p>
        </div>
        <div class="px-5 border m-auto shadow-lg">
          <img class="mt-0 mb-5 mx-auto" src={ChildrensDentistry} />
          <p>Kids Dentistry</p>
        </div>
        <div class="px-5 border m-auto shadow-lg">
          <img class="mt-0 mb-5 mx-auto" src={SmileMakeover} />
          <p>Smile Makeover</p>
        </div>

        <div class="px-5 border m-auto shadow-lg">
          <img class="mt-0 mb-5 mx-auto" src={TeethWhitening} />
          <p>Teeth whitening</p>
        </div>

        <div class="px-5 border m-auto shadow-lg">
          <img class="mt-0 mb-5 mx-auto" src={MouthUlcers} />
          <p>Mouth Ulcers</p>
        </div>
      </div>
    </div>
  )
}

export default Services
