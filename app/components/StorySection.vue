<template>
	<section ref="container" class="lg:grid lg:grid-cols-12 container mx-auto px-4 lg:px-8">
		<div ref="leftPanel" class="py-24 lg:col-span-7">
			<!-- Part 1: Hero -->
			<div class="space-y-4 min-h-[80vh] flex flex-col justify-center">
				<h1 class="text-black text-4xl md:text-5xl lg:text-6xl font-black tracking-wider" style="line-height: 1.2">
					從蝶繭到展翼 <br />
					<span class="gradient-text">為您打造智慧新境界</span>
				</h1>
				<p class="text-lg md:text-xl lg:text-2xl tracking-wide text-gray-400">以專業技術引領轉變，陪伴企業完成數位蛻變。</p>
			</div>

			<!-- Part 2: Services -->
			<div class="space-y-8 min-h-[80vh] flex flex-col justify-center">
				<header class="text-center">
					<h2 class="text-2xl md:text-3xl lg:text-4xl font-extrabold">核心服務</h2>
					<p class="text-base md:text-lg lg:text-xl tracking-wide text-gray-400 mt-4">專為建商與中端企業量身打造的系統整合與數位化方案</p>
				</header>

				<div class="grid gap-4 grid-cols-3">
					<!-- 系統整合服務 -->
					<div class="bg-white rounded-xl p-6 shadow-lg">
						<div class="flex justify-center items-center aspect-[2/3]">
							<h3 class="font-extrabold text-base md:text-lg lg:text-xl">系統整合服務</h3>
						</div>
					</div>

					<!-- AI 安防解決方案 -->
					<div class="bg-white rounded-xl p-6 shadow-lg">
						<div class="flex justify-center items-center aspect-[2/3]">
							<h3 class="font-extrabold text-base md:text-lg lg:text-xl">AI 安防解決方案</h3>
						</div>
					</div>

					<!-- 專案顧問與技術支援 -->
					<div class="bg-white rounded-xl p-6 shadow-lg">
						<div class="flex justify-center items-center aspect-[2/3]">
							<h3 class="font-extrabold text-base md:text-lg lg:text-xl">專案顧問與技術支援</h3>
						</div>
					</div>
				</div>
			</div>

			<!-- Part 3: Industries -->
			<div class="space-y-8 min-h-[80vh] flex flex-col justify-center">
				<header class="text-center">
					<h2 class="text-2xl md:text-3xl lg:text-4xl font-extrabold">客戶的真實體驗</h2>
					<p class="text-base md:text-lg lg:text-xl tracking-wide text-gray-400 mt-4">以真實成效與見證，呈現整合帶來的改變</p>
				</header>

				<!-- 專業能力／成就 -->
				<section>
					<h3 class="text-xl md:text-2xl font-extrabold mb-4">專業能力／成就</h3>
					<div class="grid gap-4 md:grid-cols-2">
						<div class="bg-white rounded-xl p-6 shadow-lg">
							<p class="font-semibold mb-2">多領域背景</p>
							<p class="text-gray-500">團隊具備 AI、安防、系統整合的多領域背景</p>
						</div>
						<div class="bg-white rounded-xl p-6 shadow-lg">
							<p class="font-semibold mb-2">實戰導入經驗</p>
							<p class="text-gray-500">成功導入數個中大型客戶專案</p>
						</div>
					</div>
				</section>

				<!-- 成功案例指標 -->
				<section>
					<h3 class="text-xl md:text-2xl font-extrabold mb-4">成功案例</h3>
					<div class="grid gap-4 md:grid-cols-2">
						<div class="bg-white rounded-xl p-6 shadow-lg">
							<p class="text-3xl font-black">誤報率 <span class="gradient-text">-30%</span></p>
							<p class="mt-2 text-gray-500">協助某工廠將安防事件誤報率降低 30%</p>
						</div>
						<div class="bg-white rounded-xl p-6 shadow-lg">
							<p class="text-3xl font-black"><span class="gradient-text">+4 小時/天</span></p>
							<p class="mt-2 text-gray-500">物流中心藉由系統整合，每日可節省人力 4 小時</p>
						</div>
					</div>
				</section>
			</div>
		</div>

		<div class="lg:sticky top-0 h-screen lg:col-span-5">
			<div class="w-full h-full flex items-center justify-center">
				<MorphAnimation :progress="progress" />
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const container = ref<HTMLElement | null>(null);
const leftPanel = ref<HTMLElement | null>(null);
const progress = ref(0);

const handleScroll = () => {
	if (!leftPanel.value || !container.value) return;

	const rect = container.value.getBoundingClientRect();
	const viewportHeight = window.innerHeight;
	const scrollableDistance = leftPanel.value.clientHeight - viewportHeight;

	if (scrollableDistance <= 0) {
		progress.value = 0;
		return;
	}

	const scrolled = -rect.top;

	if (scrolled < 0) {
		progress.value = 0;
		return;
	}

	if (scrolled > scrollableDistance) {
		progress.value = 1;
		return;
	}

	progress.value = scrolled / scrollableDistance;
};

onMounted(() => {
	window.addEventListener("scroll", handleScroll, { passive: true });
	handleScroll(); // Initial check
});

onUnmounted(() => {
	window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.gradient-text {
	background: linear-gradient(90deg, theme("colors.brand.yellow"), theme("colors.brand.orange"), theme("colors.brand.red"));
	-webkit-background-clip: text;
	background-clip: text;
	color: transparent;
}
</style>
