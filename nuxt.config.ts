// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },

	modules: ["@nuxt/image", "@nuxtjs/tailwindcss"],
	tailwindcss: {
		cssPath: "~/assets/css/tailwind.css"
	},

	app: {
		head: {
			title: "蝶蛹科技 Comeo Technology — 系統整合與數位轉型",
			meta: [
				{
					name: "description",
					content: "蝶蛹科技（Comeo Technology）專注 SI 系統整合，服務建商與中端企業，提供 ERP/CRM 整合、BIM 應用、雲端遷移與資安檢視等解決方案。"
				},
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ property: "og:type", content: "website" },
				{ property: "og:title", content: "蝶蛹科技 Comeo Technology — 系統整合與數位轉型" },
				{ property: "og:description", content: "專為建商與中端企業的 SI 服務與數位轉型夥伴。" },
				{ property: "og:image", content: "/og-cover.png" },
				{ property: "og:locale", content: "zh_TW" }
			],
			link: [{ rel: "icon", type: "image/png", href: "/public/comeo-logo.png" }]
		}
	}
});
