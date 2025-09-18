<template>
	<section id="contact" class="py-section">
		<div class="max-w-container mx-auto px-4">
			<header class="text-center mb-8">
				<h2 class="text-2xl md:text-3xl lg:text-4xl font-extrabold">開始您的轉化之旅</h2>
				<p class="text-brand-muted mt-2">留下資訊，我們將於 1-2 個工作天與您聯繫</p>
			</header>

			<div class="grid gap-6 grid-cols-1 lg:grid-cols-2 items-start">
				<div>
					<ul class="leading-relaxed">
						<li class="my-2"><strong class="text-brand-muted font-bold">電話：</strong>02-1234-5678</li>
						<li class="my-2"><strong class="text-brand-muted font-bold">Email：</strong>info@comeo-tech.com</li>
						<li class="my-2"><strong class="text-brand-muted font-bold">地址：</strong>台北市信義區信義路五段7號</li>
					</ul>
				</div>
				<div>
					<div class="bg-white border border-brand-border rounded-xl p-6 shadow-surface">
						<h3 class="font-extrabold mb-6">免費諮詢表單</h3>
						<form class="space-y-4" @submit.prevent="onSubmit">
							<div>
								<label for="company" class="block text-sm font-medium text-gray-700 mb-2">公司名稱</label>
								<input
									id="company"
									v-model="state.company"
									type="text"
									placeholder="請輸入公司名稱"
									class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
								/>
							</div>
							<div>
								<label for="name" class="block text-sm font-medium text-gray-700 mb-2">聯絡人</label>
								<input
									id="name"
									v-model="state.name"
									type="text"
									placeholder="請輸入聯絡人姓名"
									class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
								/>
							</div>
							<div>
								<label for="phone" class="block text-sm font-medium text-gray-700 mb-2">聯絡電話</label>
								<input
									id="phone"
									v-model="state.phone"
									type="tel"
									placeholder="請輸入聯絡電話"
									class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
								/>
							</div>
							<div>
								<label for="message" class="block text-sm font-medium text-gray-700 mb-2">需求描述</label>
								<textarea
									id="message"
									v-model="state.message"
									placeholder="請簡述您的需求..."
									rows="4"
									class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-vertical"
								></textarea>
							</div>
							<button
								type="submit"
								class="w-full bg-brand-orange text-white font-semibold py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
							>
								送出諮詢
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { reactive } from "vue";

interface ContactState {
	company: string;
	name: string;
	phone: string;
	message: string;
}
const state = reactive<ContactState>({ company: "", name: "", phone: "", message: "" });

const onSubmit = () => {
	// 目前示範：直接在前端顯示送出成功，可日後串接 API
	alert("已收到您的需求，我們將儘快與您聯繫！");
	state.company = "";
	state.name = "";
	state.phone = "";
	state.message = "";
};
</script>
