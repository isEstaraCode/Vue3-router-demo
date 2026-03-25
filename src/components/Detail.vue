<template>
	<div class="page">
		<h1>详情页</h1>
		<p>当前查看ID：{{ route.params.id }}</p>
		<div class="actions">
			<button @click="goBack">返回上一页</button>
			<button @click="goForward">前进下一页</button>
			<button @click="goHome">强制返回首页</button>
		</div>
	</div>
</template>

<script setup>
	import { useRouter,useRoute } from 'vue-router';
	const router=useRouter();
	const route=useRoute();
	const goBack=()=>{router.back();};
	const goForward=()=>{router.forward();};
	const goHome=()=>{router.push('/');};
</script>
