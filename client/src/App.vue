<script setup>
import { provide, ref } from 'vue';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Basket from './components/Basket.vue';
import { RouterView } from 'vue-router';

const favoriteSneakers = ref([]);
const basket = ref([]);
const isBasketVisible = ref(false);

function changeFavorite(sneaker) {
  const isFavorite = favoriteSneakers.value.find(item => item.id === sneaker.id);
  if (isFavorite) favoriteSneakers.value = favoriteSneakers.value.filter(item => item.id !== sneaker.id);
  else favoriteSneakers.value.push(sneaker);
}

function changeBasket(sneaker) {
  const isExists = basket.value.find(item => item.id === sneaker.id);
  if (isExists) basket.value = basket.value.filter(item => item.id !== sneaker.id);
  else basket.value.push(sneaker);
}

function clearBasket() {
  basket.value = [];
}

function changeBasketVisible() {
  isBasketVisible.value = !isBasketVisible.value;
}

provide('favoriteSneakers', { favoriteSneakers, changeFavorite });
provide('basket', { basket, changeBasket, clearBasket });
provide('isBasketVisible', { isBasketVisible, changeBasketVisible })

</script>

<template>
  <div
    class="bg-(--frame-bg-color) w-screen min-h-screen flex justify-center p-[85px] overflow-y-scroll overflow-x-hidden no-scrollbar">
    <div class="rounded-[20px] max-w-270 w-full flex flex-col bg-(--main-bg-color)">
      <Header />

      <div class="w-full bg-[#EAEAEA] h-[1px] mt-11" />

      <RouterView />
    </div>

    <Basket />
  </div>
</template>