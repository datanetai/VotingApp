<template>
<SideBarComponentVue>
<!-- create a form with poll name, poll description , candidates, start  and end date-->

  <form class="grid md:grid-cols-2 grid-cols-1 mt-s6" @submit.prevent ="createPoll">
      
      <div class="space-y-2 p-2">
          <label for="pollname" class="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Poll Name</label>
          <input type="text" id="pollname" name="pollname" class="w-full p-2 border border-gray-300 dark:border-gray-600" placeholder="Poll Name">
      </div>
      <div class="space-y-2 p-2">
          <label for="polldescription" class="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Poll Description</label>
          <input type="text" id="polldescription" name="polldescription" class="w-full p-2 border border-gray-300 dark:border-gray-600" placeholder="Poll Description">
      </div>
      <div class="space-y-2 p-2">
          <label for="startdate" class="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Start Date</label>
          <input type="date" id="startdate" name="startdate" class="w-full p-2 border border-gray-300 dark:border-gray-600" placeholder="Start Date">
      </div>
      <div class="space-y-2 p-2">
          <label for="enddate" class="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">End Date</label>
          <input type="date" id="enddate" name="enddate" class="w-full p-2 border border-gray-300 dark:border-gray-600" placeholder="End Date">
      </div>
      <!-- multiselect for candidates -->
      <div class="space-y-2 p-2">
          <label for="candidates" class="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Candidates</label>
          <MultiSelectComponent ></MultiSelectComponent>

      </div>

  </form>


</SideBarComponentVue>
</template>

<script>
import SideBarComponentVue from '@/components/SideBarComponent.vue';
import MultiSelectComponent from '@/components/MultiSelectComponent.vue';


export default {
  name: 'AddCandidateView',
  data() {
    return {
      candidates: [
        {
          id: 1,
          name: 'John Doe'
        },
        {
          id: 2,
          name: 'Jane Doe'
        },
        {
          id: 3,
          name: 'Joe Doe'
        }
      ]
    };
  },
  components: {
    SideBarComponentVue,
    MultiSelectComponent
    // Multiselect
    },
  methods: {
    createPoll() {
      // this.$store.dispatch('createPoll', {
      //   name: this.name,
      //   description: this.description,
      //   startDate: this.startDate,
      //   endDate: this.endDate,
      //   candidates: this.candidates
      // });
      // this.$router.push('/');
    }
  }
  
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

