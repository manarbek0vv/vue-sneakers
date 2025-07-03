<script setup>
const model = defineModel()
</script>

<template>
    <label class="max-w-[250px] h-[44px] w-full relative border-none">
        <img src="../assets//icons/search.svg" class="size-[14.25px] top-[50%] translate-y-[-50%] absolute left-3" />
        <input v-model="model" placeholder="Поиск..." type="text" class="transition-colors rounded-[10px] outline-none h-full w-full pl-9 border-[1px] focus:border-[#c0c0c0] border-[#e8e8e8] font-normal text-black placeholder:text-[#C4C4C4]" />
    </label>
</template>