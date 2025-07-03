<script setup>
import { inject } from 'vue';

const { changeBasketVisible } = inject('isBasketVisible')
</script>

<template>
    <header class="w-full justify-between flex pl-[45px] pt-[43px] pr-[60px]">
        <div class="flex gap-4 items-center">
            <RouterLink to="/">
                <img class="size-10" src="../assets/logo.png" alt="logo">
                <div class="gap-1 flex flex-col leading-none">
                    <h1 class="text-[20px] text-black font-bold">VUE SNEAKERS</h1>
                    <span class="text-[#9D9D9D] font-normal text-[14px]">Магазин лучших кроссовок</span>
                </div>
            </RouterLink>
        </div>

        <nav class="flex gap-8 items-center">
            <div @click="changeBasketVisible" class="cursor-pointer flex gap-[10px] items-center leading-none">
                <img src="../assets/icons/group.svg">
                <span class="block text-(--gray-font-color) text-[14px] font-semibold">0 руб.</span>
            </div>
            <RouterLink to ='/favorite'>
                <div class="cursor-pointer flex gap-[8px] items-center leading-none">
                    <img src="../assets/icons/favorite.svg">
                    <span class="block text-(--gray-font-color) text-[14px] font-normal">Закладки</span>
                </div>
            </RouterLink>
            <div class="cursor-pointer flex gap-[8px] items-center leading-none">
                <img src="../assets/icons/profile.svg">
                <span class="block text-(--gray-font-color) text-[14px] font-normal">Профиль</span>
            </div>
        </nav>
    </header>
</template>