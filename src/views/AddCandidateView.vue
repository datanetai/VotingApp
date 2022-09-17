<template>
<SideBarComponentVue>
<form class="grid md:grid-cols-2 grid-cols-1 mt-8" @submit.prevent="addCandidate">
				<div class="space-y-2 p-2">
					<label for="name" class="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Name</label>
					<input type="text" id="name" 
					name="name"
					class="w-full p-2 border border-gray-300 dark:border-gray-600" placeholder="John Doe">
					</div>
				<div class="space-y-2 p-2">
					<label for="email" class="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Email</label>
					<input type="email" id="email" class="w-full p-2 border border-gray-300 dark:border-gray-600" placeholder="am"
						   value="" required>


					</div>
				<div class="space-y-2 p-2" >
					<label for="party" class="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Party Name</label>
					<select id="party" name="party" class="w-full p-2 border border-gray-300 dark:border-gray-600">
						<option value="">Select Party</option>
						<option value="BJP">BJP</option>
						<option value="Congress">Congress</option>
						<option value="AAP">AAP</option>
						<option value="Others">Others</option>
					</select>
					</div>
				<div class="space-y-2 p-2 ">
					<label for="address" class="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Address</label>
					<input type="text" id="address" name="address" class="w-full p-2 border border-gray-300 dark:border-gray-600" placeholder="Address">
					</div>
				
					<!-- image input preview chosen file -->
					<div class="space-y-2 p-2">
					<label for="image" class="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Image</label>
					<input type="file" id="image" class="w-full p-2 border border-gray-300 dark:border-gray-600" placeholder="" v-on:change="onFileChange">
					</div>
					<div class="space-y-2 p-2 mt-4">
						<img :src="url" v-if="url" class="h-32 ml-5">
					</div>
                     <!-- submit
					 -->
				<div class="space-y-2 p-6 mt-6">
					<button type="submit" class="w-full p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
						Add Candidate
					</button>
					</div>
					</form>
		</SideBarComponentVue>			
</template>

<script>
import SideBarComponentVue from '@/components/SideBarComponent.vue';
// candidate store
import {CandidateStore} from '../stores/CandidateStore';
const candidateStore = new CandidateStore();

export default {
  name: 'AddCandidateView',
  data() {
	return {
	  url: '',
	};
  },
  components: {
    SideBarComponentVue
  },
  methods: {
	addCandidate(e) {
		console.log("submitted");
		console.log(e.target.elements.name.value);
	  e.preventDefault();
	  candidateStore.addCandidate(e.target.elements.name.value, e.target.elements.email.value, e.target.elements.party.value, e.target.elements.address.value, this.url); 
	  // validation
	  
	},
	onFileChange(e) {
		const file = e.target.files[0];
		if(file.type.match(/image.*/)) {
			// if the file is an image, we read it into a data url
			const reader = new FileReader();
			reader.onload = (e) => {
				this.url = reader.result;
			};
			reader.readAsDataURL(file);
		}
		else {
			// if the file is not an image, we reset the input field
			this.url = '';
			alert('You can only upload images');
			this.$refs.image.value = '';
		}
		// this.url = URL.createObjectURL(file);
	}
  }
  
}
</script>