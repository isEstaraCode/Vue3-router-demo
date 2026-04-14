<<<<<<< HEAD
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
=======
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
>>>>>>> 2baa739dbdfc6d95680a4b6d31da04a0e11f0823
	const goHome=()=>{router.push('/');};
</script>
