<template>
  <div class="phot">
  	<h1> Photography </h1>
  	<router-link
  			:to="{ name: 'photos', params: {id : index} }"
  			v-for="(item, index) in photos"
  			:key="index">
  		<b-button variant="primary">Photo {{ item.name }}</b-button>
  	</router-link>
  	<Photo></Photo>

  	<b-button variant="danger" @click="prev"><<</b-button>
  	<b-button variant="info" @click="home">Go to home</b-button>
  	<b-button variant="success" @click="next">>></b-button>
  </div>
</template>

<script>
import Photo from '@/components/Photography.vue'

export default {
	name: 'photos',
	components: {
		Photo
	},
	data() {
		return {
			photos: [
				{
			      "id": 1,
			      "name" : "Purrsloud"
			    },
			    {
			      "id": 2,
			      "name" : "Barksalot"
			    },
			    {
			      "id": 3,
			      "name" : "Meowsalot"
			    }
			]
		}
	},
	methods: {
		home() {
			this.$router.push('/')
		},
		next() {
			this.$router.go(-1)
		},
		prev() {
			console.log("back")
			this.$router.go(1)
		}
	}
}
</script>

<style scoped>
	.btn {
		margin: 0 5px;
	}
</style>
