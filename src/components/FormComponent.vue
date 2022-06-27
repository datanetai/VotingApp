<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-50">
    <body class="h-full">
    ```
  -->
  <div class="bg-gray-300 h-full">
      <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class=" bg-white space-y-8 p-10">
      <div class="">
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Add new user</h2>
       
      </div>
      <slot>

      </slot>
    </div>
  </div>
   </div>
   
</template>

<script>
export default {
  name: 'FormComponent',
}
</script>