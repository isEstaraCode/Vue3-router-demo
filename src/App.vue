<template>
  <div id="app">
	  <header class="navbar">
		  <div class="nav-bread">vue3路由演示</div>
		  <nav class="nav-links">
			  <router-link to="/" active-class="active">首页</router-link>
			  <router-link to="/list" active-class="active">列表页</router-link>
			  <router-link to="/detail/101" active-class="active">详情页</router-link>
		  </nav>
	  </header>
	  <main class="main-content">
	    <transition name="fade" mode="out-in">
	      <router-view />
	    </transition>
	  </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
onMounted(()=>{
	console.log('已启动，系统就绪')
})
</script>
<style>
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	body{
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		background-color: #f0f2f5;
		color: #333;
		height: 100vh;
	}
	#app{
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	.navbar{
		background-color: #42b983;
		padding: 1rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-shadow: 0 2px 8px rgba(0,0,0,0.1);
	}
	.nav-bread{
		color: white;
		font-size: 1.5rem;
		font-weight: bold;
	}
	.nav-links{
		display: flex;
		gap: 20px;
	}
	.nav-links a{
		color: rgba(255,255,255,0.8);
		text-decoration: none;
		font-size: 1rem;
		transition: color 0.3s;
	}
	.nav-links a:hover{
		color: white;
	}
	.nav-links a.active{
		color: white;
		font-weight: bold;
		border-bottom: 2px solid white;
	}
	.main-content{
		flex: 1;
		padding: 40px;
		max-width: 800px;
		margin: 0 auto;
		width: 100%;
		background: white;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
		margin-top: 20px;
		margin-bottom: 20px;
		border-radius: 8px;
	}
	.fade-enter-active,.fade-leave-active{
		transition: opacity 0.2s ease;
	}
	.fade-enter-from,.fade-leave-to{
		opacity: 0;
	}
</style>