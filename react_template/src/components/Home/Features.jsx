import React from 'react'
import { features } from "../../constants/data";
import SubTitle from '../common/SubTitle';

const Features = () => {
  return (
    <div className='mt-20 border-b border-neutral-800'>
      <div className='text-center'>
        <span className='dark:bg-neutral-900 text-indigo-500 py-1 px-2 text-sm font-medium uppercase rounded-full light: border light: border-neatrsl-500 light: bg-white dark:border-0'>Features</span>
        <SubTitle frontTitle='Easliy Build ' backTitle=' Your Codes'/>
      </div>
      <div className='flex flex-wrap mt-10 lg:mt-20'>
          {
            features.map((Feature, index) => (
              <div key={index} className='w-full sm:w-1/2 lg:w-1/3'>
                <div className='flex'>
                  <div className='flex justify-center items-center w-10 h-10 dark:bg-neutral-900 text-indigo-700 rounded-full p-2 mx-6 dark:border-0 light: bg-white light: border light: border-neutral-500'>
                    <div className='w-full h-full'>{Feature.icon}</div>
                  </div>
                  <div>
                    <h5 className='mt-1 mb-6 text-xl'>{Feature.text}</h5>
                    <p className='text md mb-20 text-neutral-500'>{Feature.description}</p>
                  </div>
                </div>
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default Features