<script setup>
import { computed, inject } from 'vue';

const { basket, changeBasket } = inject('basket')
</script>

<template>
    <ul class="overflow-hidden overflow-y-scroll no-scrollbar flex flex-col gap-[20px] grow-1 shrink-1">
        <TransitionGroup :name="!!basket.length ? 'list' : ''">
            <li v-for="sneaker in basket" :key="sneaker.id"
                class="p-[20px] items-end pb-[30px] relative max-w-[325px] w-full border-[1px] rounded-[20px] border-[#F3F3F3] flex gap-[21px]">
                <img :src="`http://localhost:5173${sneaker.imageUrl}`" class="border-none size-[70px] object-contain" />
                <div class="max-w-[150px] w-full flex flex-col leading-none text-[14px] gap-1">
                    <span class="font-normal">{{ sneaker.title }}</span>
                    <span class="font-bold">{{ sneaker.price }} руб.</span>
                </div>
                <button @click="changeBasket(sneaker)"
                    class="absolute bottom-[20px] right-[20px] size-[32px] flex justify-center items-center rounded-[8px] border-[1px] border-[#DBDBDB]">
                    <img src="../assets/icons/plus.png" class="transform-[rotate(45deg)] size-[11px] " />
                </button>
            </li>
        </TransitionGroup>
    </ul>
</template>