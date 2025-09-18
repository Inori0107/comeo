<template>
	<nav class="fixed top-0 left-0 right-0 z-50 py-4 lg:py-8">
		<div class="container mx-auto px-4 py-2 flex items-center justify-between gap-8">
			<!-- Logo + Company 區塊 -->
			<div class="flex items-center cursor-pointer" @click="scrollToId('top')">
				<img src="/comeo-logo.png" alt="蝶蛹科技 Logo" class="w-12 lg:w-16 aspect-square object-contain" />
				<div class="ml-4">
					<div class="font-extrabold text-lg lg:text-xl text-gray-900">蝶蛹科技</div>
					<div class="text-sm lg:text-base text-gray-500 font-medium text-nowrap">Comeo Technology</div>
				</div>
			</div>

			<!-- Navigation 區塊 -->
			<div class="absolute left-1/2 -translate-x-1/2 hidden md:flex justify-center items-center">
				<!-- nav backdrop -->
				<div class="px-8 py-2 rounded-2xl bg-white/30 backdrop-blur-xl border border-white/20 shadow-lg">
					<div class="flex gap-4 lg:gap-8">
						<!-- 關於蝶蛹 -->
						<a
							href="#about"
							@click.prevent="scrollToId('about')"
							class="text-gray-900 font-semibold text-base lg:text-lg px-4 py-2 rounded-lg transition-all duration-300 hover:text-orange-500 hover:-translate-y-0.5 relative group"
						>
							關於蝶蛹
							<span
								class="absolute bottom-1 left-1/2 w-0 h-0.5 bg-orange-500 rounded-full transition-all duration-300 transform -translate-x-1/2 group-hover:w-3/5"
							></span>
						</a>
						<!-- 服務項目 -->
						<a
							href="#services"
							@click.prevent="scrollToId('services')"
							class="text-gray-900 font-semibold text-base lg:text-lg px-4 py-2 rounded-lg transition-all duration-300 hover:text-orange-500 hover:-translate-y-0.5 relative group"
						>
							服務項目
							<span
								class="absolute bottom-1 left-1/2 w-0 h-0.5 bg-orange-500 rounded-full transition-all duration-300 transform -translate-x-1/2 group-hover:w-3/5"
							></span>
						</a>
						<!-- 產業專精 -->
						<a
							href="#industries"
							@click.prevent="scrollToId('industries')"
							class="text-gray-900 font-semibold text-base lg:text-lg px-4 py-2 rounded-lg transition-all duration-300 hover:text-orange-500 hover:-translate-y-0.5 relative group"
						>
							產業專精
							<span
								class="absolute bottom-1 left-1/2 w-0 h-0.5 bg-orange-500 rounded-full transition-all duration-300 transform -translate-x-1/2 group-hover:w-3/5"
							></span>
						</a>
					</div>
				</div>
			</div>

			<!-- Contact Button 區塊 -->
			<div class="relative group">
				<button
					@click="scrollToId('contact')"
					class="relative overflow-hidden cursor-pointer bg-gradient-to-r from-brand-yellow via-brand-orange to-brand-red text-white font-bold px-4 py-2 lg:px-8 lg:py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
				>
					<!-- 內容 -->
					<div class="relative flex items-center justify-center gap-2">
						<!-- 郵件圖示 -->
						<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
								stroke="currentColor"
								stroke-width="2"
								fill="none"
							/>
						</svg>

						<!-- 文字 -->
						<span class="text-sm lg:text-base hidden sm:inline">免費諮詢</span>
						<span class="text-sm lg:text-base sm:hidden">諮詢</span>
					</div>

					<!-- 光澤效果 -->
					<div
						class="absolute inset-0 -top-2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
					></div>
				</button>
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
const scrollToId = (id: string) => {
	const el = document.getElementById(id);
	if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};
</script>
