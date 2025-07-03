<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import SneakerItem from './SneakerItem.vue';

const { searchValue } = defineProps(['searchValue'])

const sneakers = ref([]);

const filteredSneakers = computed(() => sneakers.value.filter(item => item.title.includes(searchValue)));

onMounted(async () => {
    const response = await (await fetch('http://localhost:3000' + '/sneakers')).json();
    sneakers.value = response;
})
</script>

<template>
    <ul class="grid w-full auto-rows-auto grid-cols-4 gap-10">
        <SneakerItem v-bind="sneaker" v-for="sneaker in filteredSneakers" />
    </ul>
</template>