<template>
	<footer id="contact" class="min-h-screen flex justify-center items-center relative">
		<div class="container mx-auto px-4">
			<div class="grid gap-8 grid-cols-1 lg:grid-cols-2 mb-8">
				<!-- 聯絡我們 -->
				<div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
					<h4 class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
						<svg class="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							/>
						</svg>
						聯絡我們
					</h4>

					<!-- 聯絡方式 -->
					<div class="space-y-4">
						<!-- 電話 -->
						<div class="flex items-center gap-3 p-4 rounded-lg bg-gray-50">
							<div class="flex-shrink-0 w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center">
								<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
									<path
										d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
									/>
								</svg>
							</div>
							<div>
								<p class="text-sm text-gray-600">電話</p>
								<a href="tel:0222233355" class="font-bold text-gray-900 text-lg hover:text-brand-orange transition-colors">02-2223-3355</a>
							</div>
						</div>

						<!-- Email -->
						<div class="flex items-center gap-3 p-4 rounded-lg bg-gray-50">
							<div class="flex-shrink-0 w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center">
								<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
									<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
									<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
								</svg>
							</div>
							<div>
								<p class="text-sm text-gray-600">Email</p>
								<a href="mailto:stan@yenshow.com" class="font-bold text-gray-900 text-lg hover:text-brand-orange transition-colors">stan@yenshow.com</a>
							</div>
						</div>

						<!-- 地址 -->
						<div class="flex items-start gap-3 p-4 rounded-lg bg-gray-50">
							<div class="flex-shrink-0 w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center">
								<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
							<div class="flex-1">
								<p class="text-sm text-gray-600 mb-1">地址</p>
								<p class="font-bold text-gray-900 text-lg">23584新北市中和區橋和路122號7樓</p>
							</div>
						</div>

						<!-- 社群媒體 -->
						<div class="flex items-center gap-3 p-4 rounded-lg bg-gray-50">
							<div class="flex-shrink-0 w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center">
								<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
									<path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
									<path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
								</svg>
							</div>
							<div class="flex-1">
								<p class="text-sm text-gray-600 mb-2">社群媒體</p>
								<div class="flex flex-wrap gap-2">
									<a href="#" class="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm">
										<svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
											<path
												d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
											/>
										</svg>
										Facebook
									</a>
									<a href="#" class="flex items-center gap-2 px-3 py-1.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm">
										<svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
											<path
												d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
											/>
										</svg>
										LinkedIn
									</a>
									<a href="#" class="flex items-center gap-2 px-3 py-1.5 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors text-sm">
										<svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
											<path
												d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"
											/>
										</svg>
										WhatsApp
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- 諮詢表單 -->
				<div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
					<h4 class="text-xl font-bold text-gray-900 mb-6">諮詢表單</h4>
					<form class="space-y-4" @submit.prevent="onSubmit">
						<!-- 第一行：公司名稱 / 聯絡人 -->
						<div class="grid grid-cols-2 gap-4">
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
						</div>

						<!-- 第二行：聯絡電話 / 聯絡信箱 -->
						<div class="grid grid-cols-2 gap-4">
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
								<label for="email" class="block text-sm font-medium text-gray-700 mb-2">聯絡信箱</label>
								<input
									id="email"
									v-model="state.email"
									type="email"
									placeholder="請輸入聯絡信箱"
									class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
								/>
							</div>
						</div>

						<!-- 第三行：需求描述 -->
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

			<!-- 公司品牌區塊 + 導航按鈕 -->
			<div class="bg-white rounded-2xl p-8 pb-4 mb-8 shadow-lg border border-gray-200">
				<div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-6">
					<!-- 左側：公司品牌 -->
					<div class="flex items-center gap-6">
						<img src="/comeo-logo.png" alt="蝶蛹科技 Logo" class="w-20 h-20 lg:w-24 lg:h-24 object-contain rounded-2xl p-3 shadow-lg border border-gray-200" />
						<div>
							<h3 class="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-1">蝶蛹科技</h3>
							<p class="text-lg text-gray-600 font-medium mb-2">Comeo Technology</p>
							<p class="text-gray-600 leading-relaxed">專為建商與中端企業 量身打造系統整合與數位化方案</p>
						</div>
					</div>

					<!-- 右側：導航按鈕 -->
					<div class="px-8 py-2 rounded-2xl bg-brand-orange/90 backdrop-blur-xl border border-orange-300/50 shadow-lg">
						<div class="flex gap-4 lg:gap-8">
							<a
								href="#about"
								@click.prevent="scrollToId('about')"
								class="text-white font-semibold text-base lg:text-lg px-4 py-2 rounded-lg transition-all duration-300 hover:text-yellow-200 hover:-translate-y-0.5 relative group"
							>
								關於蝶蛹
								<span
									class="absolute bottom-1 left-1/2 w-0 h-0.5 bg-yellow-200 rounded-full transition-all duration-300 transform -translate-x-1/2 group-hover:w-3/5"
								></span>
							</a>
							<a
								href="#services"
								@click.prevent="scrollToId('services')"
								class="text-white font-semibold text-base lg:text-lg px-4 py-2 rounded-lg transition-all duration-300 hover:text-yellow-200 hover:-translate-y-0.5 relative group"
							>
								服務項目
								<span
									class="absolute bottom-1 left-1/2 w-0 h-0.5 bg-yellow-200 rounded-full transition-all duration-300 transform -translate-x-1/2 group-hover:w-3/5"
								></span>
							</a>
							<a
								href="#industries"
								@click.prevent="scrollToId('industries')"
								class="text-white font-semibold text-base lg:text-lg px-4 py-2 rounded-lg transition-all duration-300 hover:text-yellow-200 hover:-translate-y-0.5 relative group"
							>
								產業專精
								<span
									class="absolute bottom-1 left-1/2 w-0 h-0.5 bg-yellow-200 rounded-full transition-all duration-300 transform -translate-x-1/2 group-hover:w-3/5"
								></span>
							</a>
						</div>
					</div>
				</div>
			</div>

			<!-- 版權資訊 -->
			<div class="text-center py-4 absolute bottom-0 left-0 right-0">
				<p class="text-gray-600 text-sm">© 2025 Comeo Technology. All rights reserved.</p>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
import { reactive } from "vue";

interface ContactState {
	company: string;
	name: string;
	phone: string;
	email: string;
	message: string;
}
const state = reactive<ContactState>({ company: "", name: "", phone: "", email: "", message: "" });

const scrollToId = (id: string) => {
	const el = document.getElementById(id);
	if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const onSubmit = () => {
	// 目前示範：直接在前端顯示送出成功，可日後串接 API
	alert("已收到您的需求，我們將儘快與您聯繫！");
	state.company = "";
	state.name = "";
	state.phone = "";
	state.email = "";
	state.message = "";
};
</script>
