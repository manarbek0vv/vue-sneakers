<script setup>
import { computed, inject, ref } from 'vue';
import BasketList from './BasketList.vue';

const { basket, clearBasket } = inject('basket')
const { isBasketVisible, changeBasketVisible } = inject("isBasketVisible");
const isSuccessful = ref(false);

const totalPrice = computed(() => basket.value.reduce((acc, item) => acc + item.price, 0));
const totalTax = computed(() => Math.ceil(totalPrice.value * 0.05));

function placeOrder() {
    clearBasket();
    isSuccessful.value = true;
}
</script>

<template>
    <Transition name="side">
        <side v-if="isBasketVisible"
            class="bg-white z-20 fixed right-0 top-0 bottom-0 w-full max-w-[385px] gap-[30px] flex flex-col p-[30px] pt-[32px]">
            <h2 class="text-[24px] text-black font-bold">Корзина</h2>

            <BasketList />

            <template v-if="basket.length !== 0 && !isSuccessful">
                <div class="flex flex-col gap-[24px] w-full">
                    <div class="flex flex-col gap-[19px]">
                        <div class="flex justify-between items-center gap-[6px] text-[16px]">
                            <span class="font-normal">Итого:</span>
                            <div class="h-3 grow-1 shrink-1 border-b-[2px] border-[#DFDFDF] border-dotted" />
                            <span class="font-semibold">{{ totalPrice }} руб.</span>
                        </div>
                        <div class="flex justify-between items-center gap-[6px] text-[16px]">
                            <span class="font-normal">Налог 5%:</span>
                            <div class="h-3 grow-1 shrink-1 border-b-[2px] border-[#DFDFDF] border-dotted" />
                            <span class="font-semibold">{{ totalTax }} руб.</span>
                        </div>
                    </div>
                    <button
                        @click="placeOrder"
                        class="text-white text-[16px] font-semibold max-w-[325px] w-full flex justify-center items-center bg-[#9DD458] rounded-[18px] h-[55px]">
                        Оформить заказ
                    </button>
                </div>
            </template>

            <template v-else-if="basket.length === 0 && !isSuccessful">
                <div class="grow-1 w-full h-full flex items-center justify-center">
                    <div class="max-w-[285px] flex flex-col items-center">
                        <img src="../assets/icons/box.svg" class="size-[120px]" alt="" />
                        <h3 class="font-semibold text-black text-[22px] mt-[21px]">Корзина пустая</h3>
                        <span class="text-[16px] font-normal text-black/30 mt-[9px] text-center">Добавьте хотя бы одну
                            пару
                            кроссовок, чтобы сделать заказ.</span>
                        <button @click="changeBasketVisible"
                            class="mt-[40px] text-white text-[16px] font-semibold max-w-[245px] w-full flex justify-center items-center bg-[#9DD458] rounded-[18px] h-[55px]">
                            Вернуться назад
                        </button>
                    </div>
                </div>
            </template>

            <template v-else>
                <div class="grow-1 w-full h-full flex items-center justify-center">
                    <div class="max-w-[285px] flex flex-col items-center">
                        <img src="../assets/icons/successfull.png" class="size-[120px]" alt="" />
                        <h3 class="font-semibold text-[#87C20A] text-[22px] mt-[21px]">Заказ оформлен!</h3>
                        <span class="text-[16px] font-normal text-black/30 mt-[9px] text-center">
                            Ваш заказ #18 скоро
                            будет передан курьерской доставке.</span>
                        <button @click="changeBasketVisible"
                            class="mt-[40px] text-white text-[16px] font-semibold max-w-[245px] w-full flex justify-center items-center bg-[#9DD458] rounded-[18px] h-[55px]">
                            Вернуться назад
                        </button>
                    </div>
                </div>
            </template>
        </side>
    </Transition>
    <Transition appear name="modal">
        <div v-if="isBasketVisible" @click="changeBasketVisible" class="fixed inset-0 bg-black/20 z-10" />
    </Transition>
</template>