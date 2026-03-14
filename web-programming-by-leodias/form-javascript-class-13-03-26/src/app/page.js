"use client";

import { TextInput, Label, DarkThemeToggle, Button, Datepicker } from "flowbite-react"
export default function Home() {

  function submit() {
    console.log("Submited")
  }


  return (
    <div className="h-screen bg-gray-100 text-black dark:bg-gray-700 dark:text-white transition-colors duration-300">
      <div className="bg-blue-900 dark:bg-blue-500 h-20 flex px-5 justify-end items-center">
        <DarkThemeToggle className="bg-white"></DarkThemeToggle>
      </div>

      <div className="flex flex-col justify-center items-center ">
          <section className="flex flex-col p-15 w-150 h-150 gap-2 rounded-2xl drop-shadow-2xl bg-gray-100 text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">

            <div className="flex flex-col justify-center items-center gap-2">
              <h1 className="w-full font-semibold">Name:</h1>
              <TextInput className="w-full" placeholder="type your name"></TextInput>
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
              <h1 className="w-full font-semibold">Email:</h1>
              <TextInput className="w-full" type="email" placeholder="email@example.com"></TextInput>
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
              <h1 className="w-full font-semibold">Birthday:</h1>
              <TextInput className="w-full" type="date" ></TextInput>
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
              <h1 className="w-full font-semibold">Contact:</h1>
              <TextInput className="w-full" type="tel" placeholder="(24) 0000-0000"></TextInput>
            </div>



            <section className="flex flex-col  mt-5 gap-5">
              
              <Button className="w-full" onClick={submit} >Submit</Button>
              
              <div className="flex justify-center items-center gap-5 w-full">
                <Button className="bg-blue-900 w-full">Back</Button>
                <Button className="bg-blue-900 w-full">Reset</Button>
              </div>
              
            </section>


          </section>

          
      </div>
    </div>
  );
}
