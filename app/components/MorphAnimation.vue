<template>
	<div class="w-64 h-64 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center">
		<p class="text-2xl font-mono">{{ progress.toFixed(2) }}</p>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	progress: number;
}>();
</script>
