<script setup lang="ts">
import { ref } from 'vue';
import Search from './Search.vue';
import SneakersList from './SneakersList.vue';

const searchValue = ref('');

</script>

<template>
    <div class="flex w-full flex-col gap-[26px]">
        <div class="flex justify-between">
            <h2 class="leading-none text-[32px] font-bold text-black">Все кроссовки</h2>

            <Search v-model="searchValue" />
        </div>

        <SneakersList :searchValue="searchValue" class="pb-[43px]" />
    </div>
</template>