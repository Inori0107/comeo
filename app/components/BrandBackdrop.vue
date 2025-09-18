<template>
	<!-- 品牌背景：以 Logo 的色彩為靈感，營造柔和水彩暈染 -->
	<div class="brand-backdrop" aria-hidden="true">
		<!-- 暖色主筆觸：黃→橙→紅 -->
		<div class="blob warm" />
		<!-- 冷色延伸：藍色筆觸 -->
		<div class="blob cool" />
		<!-- 新芽：綠色點綴 -->
		<div class="blob green" />
		<!-- 柔和光暈與格紋 -->
		<div class="glow" />
		<div class="grid" />
	</div>
</template>

<style scoped>
.brand-backdrop {
	position: fixed;
	inset: 0;
	pointer-events: none;
	z-index: -1;
	background: radial-gradient(1200px 600px at 80% -5%, color-mix(in oklab, theme("colors.brand.yellow") 12%, transparent), transparent 65%),
		radial-gradient(900px 520px at -10% 90%, color-mix(in oklab, theme("colors.brand.blue") 10%, transparent), transparent 65%),
		radial-gradient(600px 360px at 65% 65%, color-mix(in oklab, theme("colors.brand.green") 7%, transparent), transparent 70%), #ffffff;
}

.blob {
	position: absolute;
	filter: blur(60px) saturate(1.12);
	opacity: 0.35;
	mix-blend-mode: multiply;
	transform: translateZ(0);
	animation: drift 26s ease-in-out infinite;
}
.blob.warm {
	width: 52vw;
	height: 52vw;
	min-width: 520px;
	min-height: 520px;
	top: -12vh;
	right: -8vw;
	background: radial-gradient(40% 40% at 60% 30%, theme("colors.brand.yellow"), transparent 60%),
		radial-gradient(38% 38% at 40% 60%, theme("colors.brand.orange"), transparent 70%),
		radial-gradient(32% 32% at 50% 50%, theme("colors.brand.red"), transparent 75%);
	border-radius: 48% 58% 52% 48% / 52% 48% 58% 48%;
}
.blob.cool {
	width: 44vw;
	height: 44vw;
	min-width: 440px;
	min-height: 440px;
	left: -14vw;
	bottom: -10vh;
	background: radial-gradient(42% 42% at 60% 50%, theme("colors.brand.blue"), transparent 70%);
	border-radius: 58% 42% 50% 50% / 46% 54% 46% 54%;
	animation-delay: -6s;
}
.blob.green {
	width: 26vw;
	height: 26vw;
	min-width: 260px;
	min-height: 260px;
	left: 52%;
	top: 48%;
	background: radial-gradient(50% 50% at 50% 50%, theme("colors.brand.green"), transparent 65%);
	border-radius: 40% 60% 50% 50% / 60% 40% 60% 40%;
	animation-delay: -13s;
}

.glow {
	position: absolute;
	inset: 0;
	background: radial-gradient(1200px 1200px at 50% -10%, color-mix(in oklab, #ffffff 15%, theme("colors.brand.yellow")), transparent 60%);
	opacity: 0.35;
	filter: blur(20px);
}

.grid {
	position: absolute;
	inset: 0;
	background-image: linear-gradient(to right, rgba(2, 6, 23, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(2, 6, 23, 0.04) 1px, transparent 1px);
	background-size: 28px 28px;
	mix-blend-mode: multiply;
	opacity: 0.35;
}

@keyframes drift {
	0% {
		transform: translate3d(0, 0, 0) rotate(0.2deg) scale(1);
	}
	50% {
		transform: translate3d(0, -1.2%, 0) rotate(-0.6deg) scale(1.02);
	}
	100% {
		transform: translate3d(0, 0, 0) rotate(0.2deg) scale(1);
	}
}
</style>
