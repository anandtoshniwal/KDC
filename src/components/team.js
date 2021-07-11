import React from "react"
import Person1 from "../assets/team/sunita_doibale.jpeg"
import Person2 from "../assets/team/archana_damrekar.jpeg"
import Person3 from "../assets/team/pradyumana_doibale.jpeg"
import Person4 from "../assets/team/chandrakant_shete.jpeg"
import Person5 from "../assets/team/nilesh_deshmukh.jpeg"

const Team = () => {
  return (
    <div id="team" class="p-8 bg-white dark:bg-gray-800 rounded-lg">
      <p class="text-center text-3xl font-bold text-gray-800 dark:text-white">
        Professional team
      </p>
      <p class="text-center mb-12 text-xl font-normal text-gray-500 dark:text-gray-200">
        Meet the best team in world
      </p>
      <div class="flex flex-col md:flex-row justify-evenly">
        <div class="p-4 w-full md:w-1/2 ">
          <div class="text-center mb-4 opacity-90">
            <a href="#" class="block relative">
              <img
                alt="profil"
                src={Person1}
                class="mx-auto object-cover rounded-full h-40 w-40 "
              />
            </a>
          </div>
          <div class="text-center">
            <p class="text-2xl text-gray-800 dark:text-white">Sunita Doibale</p>
            <div>
              <p class="text-md text-gray-500 dark:text-gray-400 w-auto font-light mb-0">
                BDS Mumbai (1984)
              </p>

              <p class="text-md text-gray-500 dark:text-gray-400 w-auto font-light">
                Family Dental Surgeon
              </p>
            </div>
          </div>
        </div>
        <div class="p-4 w-full md:w-1/2">
          <div class="text-center mb-4 opacity-90">
            <a href="#" class="block relative">
              <img
                alt="profil"
                src={Person3}
                class="mx-auto object-cover rounded-full h-40 w-40 "
              />
            </a>
          </div>
          <div class="text-center">
            <p class="text-2xl text-gray-800 dark:text-white">
              Pradyumana Doibale
            </p>
            <p class="text-md text-gray-500 dark:text-gray-400 font-light mb-0">
              BDS (Gold Medalist)
            </p>
            <p class="text-md text-gray-500 dark:text-gray-400 font-light">
              MDS Prosthodontics & Implantology (Pursuing)
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row justify-between">
        <div class="p-4 w-full md:w-1/3">
          <div class="text-center mb-4 opacity-90">
            <a href="#" class="block relative">
              <img
                alt="profil"
                src={Person2}
                class="mx-auto object-cover rounded-full h-40 w-40 "
              />
            </a>
          </div>
          <div class="text-center">
            <p class="text-2xl text-gray-800 dark:text-white">
              Dr.Archana Damrekar
            </p>
            <div>
              <p class="text-md text-gray-500 dark:text-gray-400 max-w-xs font-light">
                MDS, Periodontology & Implantology
              </p>
            </div>
          </div>
        </div>
        <div class="p-4 w-full md:w-1/3">
          <div class="text-center mb-4 opacity-90">
            <a href="#" class="block relative">
              <img
                alt="profil"
                src={Person4}
                class="mx-auto object-cover rounded-full h-40 w-40 "
              />
            </a>
          </div>
          <div class="text-center">
            <p class="text-2xl text-gray-800 dark:text-white">
              Dr. Chandrakant Shete
            </p>
            <div>
              <p class="text-md text-gray-500 dark:text-gray-400 min-w-xs max-w-xs font-light mb-0">
                BDS, MDS (Orthodontics)
              </p>

              <p class="text-md text-gray-500 dark:text-gray-400 max-w-xs font-light">
                Specialization: Obstructive Sleep Apnea<br /> 
                Recipient of the acclaimed Helen E Dewel award
              </p>
            </div>
          </div>
        </div>
        <div class="p-4 w-full md:w-1/3">
          <div class="text-center mb-4 opacity-90">
            <a href="#" class="block relative">
              <img
                alt="profil"
                src={Person5}
                class="mx-auto object-cover rounded-full h-40 w-40 "
              />
            </a>
          </div>
          <div class="text-center">
            <p class="text-2xl text-gray-800 dark:text-white">
              Dr. Nilesh Deshmukh
            </p>
            <div>
              <p class="text-md text-gray-500 dark:text-gray-400 max-w-xs font-light mb-0">
                BDS, MDS (Oral & Maxillofacial Surgery)
              </p>

              <p class="text-md text-gray-500 dark:text-gray-400 max-w-xs font-light">
                Fellowship & Mastership in TMD & Orofacial Pain, Roseman
                University, USA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
