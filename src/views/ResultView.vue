<template>
<SideBarComponentVue>
<!-- create a table that show Pending poll with delete button-->
<div class="flex flex-col">
  <table class="table-auto w-full">
    <thead>
      <tr class="text-left">
        <th class="px-4 py-2">Poll Name</th>
        <th class="px-4 py-2">Poll Description</th>
        <th class="px-4 py-2">Poll Start Date</th>
        <th class="px-4 py-2">Poll End Date</th>
        <th class="px-4 py-2">Poll Result</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(poll, index) in polls" class="text-left">
        <td class="border px-4 py-2">{{poll.name}}</td>
        <td class="border px-4 py-2">{{poll.description}}</td>
        <td class="border px-4 py-2">{{poll.startDate}}</td>
        <td class="border px-4 py-2">{{poll.endDate}}</td>
        <td class="border px-4 py-2">
          <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click="showResult(index)">
            Show Result
          </button>
        </td>
      </tr>
    </tbody>

  </table>
</div>
</SideBarComponentVue>
</template>

<script>
import SideBarComponentVue from '@/components/SideBarComponent.vue';


export default {
  name: 'AddCandidateView',
  data() {
   return {
        url: '',                  
        polls: [
          {
            name: 'Poll 1',
            description: 'This is a poll 1',
            startDate: '2020-01-01',
            endDate: '2020-01-01',
            status: 'Finished',
            result: '0'
          },
          {
            name: 'Poll 2',
            description: 'This is a poll 2',
            startDate: '2020-01-01',
            endDate: '2020-01-01',
            status: 'Finished',
            result: '0'
          }
        ]
       };
    },
    
    components: {
    SideBarComponentVue
  },
  
}
</script>
