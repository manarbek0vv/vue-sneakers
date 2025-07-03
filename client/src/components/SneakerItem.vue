<script setup>
import { computed, inject } from 'vue';

const props = defineProps([ 'id', 'title', 'price', 'imageUrl' ])

const { favoriteSneakers, changeFavorite } = inject('favoriteSneakers');
const { basket, changeBasket } = inject('basket');

const isFavorite = computed(() => !!favoriteSneakers.value.find(item => item.id === props.id));
const isExistsInBasket = computed(() => !!basket.value.find(item => item.id === props.id));
</script>

<template>
    <li
        class="relative w-[210px] h-[260px] rounded-[40px] border-[#F8F8F8] border-[1px] shadow-md shadow-black] pt-[20px] flex flex-col gap-[14px] items-center">
        <img class="border-none w-[133px] h-[112px] object-cover" :src="`http://localhost:5173${props.imageUrl}`" />
        <span class="block max-w-[150px] w-full leading-[120%] font-normal text-[14px] text-black">{{ props.title }}</span>
        <div class="max-w-[151px] flex w-full justify-between items-center">
            <div class="flex flex-col leading-none gap-1">
                <span class="text-[#BDBDBD] text-[11px] font-medium">ЦЕНА:</span>
                <span class="text-black text-[14px] font-bold">{{ props.price }} руб.</span>
            </div>

            <div
                @click="changeBasket(props)"
                :class="{ 'bg-linear-to-b from-[#89F09C] to-[#3CC755]': isExistsInBasket, 'bg-white': !isExistsInBasket }"
                class="transition-colors cursor-pointer leading-none size-8 border-[1px] border-#F2F2F2 rounded-[8px] text-[#D3D3D3] flex items-center justify-center text-[20px]">
                <img class="size-[11px] appearance" v-if="!isExistsInBasket" src="../assets/icons/plus.png" alt="" />
                <img class="size-[11px] appearance" v-else src="../assets/icons/checkmark.png" alt="" />
            </div>
        </div>

        <div @click="changeFavorite(props)" :class="{ 'bg-[#FEF0F0] border-none': isFavorite, 'bg-transparent': !isFavorite }" class="transition-colors absolute left-[36px] top-[29px] size-8 border-[1px] border-[#ececec] rounded-[7px] flex justify-center items-center">
            <img v-if="!isFavorite" class="favorite w-[14.4px] h-[12.8px]" src="../assets/icons/gray-favorite.png" />
            <img v-else class= "not-favorite w-[14.4px] h-[12.8px]" src="../assets/icons/red-favorite.svg" />
        </div>
    </li>
</template>