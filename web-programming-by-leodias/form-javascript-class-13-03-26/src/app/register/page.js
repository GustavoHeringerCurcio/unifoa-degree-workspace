"use client";

import { TextInput, Label, DarkThemeToggle, Button, Datepicker } from "flowbite-react"
export default function Home() {

  function submit() {
    console.log("Submited")
  }


  return (
    <div className="h-screen bg-gray-100 text-black dark:bg-gray-700 dark:text-white transition-colors duration-300">
      <h1>TESTE DE REGISTER</h1>
    </div>
  );
}
