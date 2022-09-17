<template>
<div class="flex flex-row">
	<aside class="flex flex-col w-full p-6 sm:w-60">
		<nav class=" space-y-8 text-sm ">
			<div class="space-y-4">
				<h2 class="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">DashBoard</h2>
				<div class="flex flex-col space-y-4">
					<!-- Side menu links -->
					<router-link class="text-black-500 hover:text-gray-900" to="/">
						<span class="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Home</span>
					</router-link>

					<router-link  class="
						text-black-500 hover:text-gray-900" to="/addCandidate">
						<span class="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Add Candidate</span>
					</router-link>

					<router-link class="
						text-black-500 hover:text-gray-900" to="/viewPendingElection">
						<span class="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">View Pending Elections</span>					</router-link>

					<router-link to="/setElection" class="
						text-black-500 hover:text-gray-900" >
						<span class="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Set Election</span>
					</router-link>
			
					<router-link to="/resultView" class="
						text-black-500 hover:text-gray-900" >
						<span class="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">View result</span>
					</router-link>
				</div>
			</div>
			
		</nav>
			
	</aside>
    <div class="flex flex-col bg-slate-100 w-full">
            <slot>
				
			</slot>
			
        </div>
		

</div>
</template>

<script>

export default{
	name: 'SideBarComponent',
	components: {
	},
	data() {
		return {
			
		}
	},
}
</script>
