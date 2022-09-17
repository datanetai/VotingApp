<!-- Component for multi select -->
<template>
    
    <form >
      <!-- tailwind class -->
        <select multiple class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="candidates" v-model="candidates">
            <!-- checkboxes as options -->
            <option v-for="candidate in candidates" :value="candidate">
            <input type="checkbox" v-model="candidates">
            </option>
        </select>
    </form>

</template>
<script>
 export default{
    name:"MultiSelectComponent",    
    data(){
        return{
            candidates: [{
                name: 'Candidate 1',
                description: 'This is a candidate 1',
                startDate: '2020-01-01',
                endDate: '2020-01-01',
                
            },
            {
                name: 'Candidate 2',
                description: 'This is a candidate 2',
                startDate: '2020-01-01',
                endDate: '2020-01-01',
                
            },
            {
                name: 'Candidate 3',
                description: 'This is a candidate 3',
                startDate: '2020-01-01',
                endDate: '2020-01-01',
                
            
            }],
        }
    },
    methods:{
        toggleSelect(){
            this.isOpen = !this.isOpen;
        },
        searchItems(){
            this.isOpen = true;
        },
        selectItem(item){
            this.selectedItems.push(item.id);
            this.isOpen = false;
        }
        
    }


 }
</script>
<style scoped>
    .multiselect{
        position: relative;
        display: inline-block;

    }
</style>