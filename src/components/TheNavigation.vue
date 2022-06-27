<template>
    <nav class="relative  p-6">
     <div class="flex item-center justify-between">
        <img class="w-24" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
        
         <router-link to="/" class="hover:text-red-500">
          Home
        </router-link>

        <router-link to="/about" class="hover:text-red-500">
          About
        </router-link>
        <router-link to="/login" class="hover:text-red-500">
          login
        </router-link>
        <router-link to="/addUser" class="hover:text-red-500">
          register
        </router-link>
        <router-link to="/addCandidate" class="hover:text-red-500">
          Add candidate
        </router-link>
        <router-link to="/userDashboard" class="hover:text-red-500">
         Dashboard
        </router-link>
     </div>

    </nav>

</template>