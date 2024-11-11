import React from 'react'
import Header from '../components/Header'

const HomePage = () => {
  return (
    <>
    <Header/>
    <section className='w-full flex flex-col gap-6 items-center py-48  tracking-wider'>
        <h1 className='text-4xl'>Welcome to<span className='text-indigo-500 tracking-wider font-bold'> HOME</span>  page! </h1>
        <p className='text-gray-300 text-2xl max-w-6xl text-center  leading-10 tracking-wider'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto mollitia, iure reprehenderit earum, fugiat ea repudiandae labore officiis maxime recusandae adipisci praesentium veniam illum rerum tenetur, ullam dicta vel at?</p>
    </section>
    </>
  )
}

export default HomePage