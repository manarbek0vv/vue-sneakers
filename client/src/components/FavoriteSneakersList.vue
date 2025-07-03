<script setup>
import { inject } from 'vue';
import SneakerItem from './SneakerItem.vue';

const { favoriteSneakers } = inject('favoriteSneakers')
</script>

<template>
    <template v-if="!!favoriteSneakers.length">
        <ul class="grid w-full auto-rows-auto grid-cols-4 gap-10">
            <TransitionGroup name="list">
                <SneakerItem :key="sneaker.id" v-bind="sneaker" v-for="sneaker in favoriteSneakers" />
            </TransitionGroup>
        </ul>
    </template>

    <template v-else>
        <div class="grow-1 w-full h-full flex items-center justify-center">
            <div class="max-w-[285px] flex flex-col items-center">
                <img src="../assets/icons/smiley.png" class="size-[70px]" alt="" />
                <h3 class="font-semibold text-black text-[22px] mt-[21px]">Закладок нет :(</h3>
                <span class="text-[16px] font-normal text-black/30 mt-[9px] text-center">Вы ничего не добавляли в закладки</span>
                <RouterLink class="w-full" to="/">
                    <button
                        class="mt-[40px] text-white text-[16px] font-semibold max-w-[245px] w-full flex justify-center items-center bg-[#9DD458] rounded-[18px] h-[55px]">
                        Вернуться назад
                    </button>
                </RouterLink>
            </div>
        </div>
    </template>
</template>