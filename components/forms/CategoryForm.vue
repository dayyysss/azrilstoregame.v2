<script lang="ts" setup>
    import { category } from "~/composables/constants/category";
        const categories = ref(category)
            const form = ref({
        name: "",
        })
    const isShowAlert = ref(false);
    const submitCategory = () => {
        categories.value.push({id: categories.value.length + 1, name:
        form.value.name});
        isShowAlert.value = true;
        form.value.name = "";
            setTimeout(() => {
                isShowAlert.value = false;
                    }, 3000);
                } 
</script>

<template>
    <section class="flex justify-center py-10">
        <div class="w-[500px]">
            <h1 class="text-2xl mb-7 font-medium">Create Category</h1>
                <div v-if="isShowAlert" class="p-4 mb-4 text-sm rounded-lg bg-green-100
                text-green-800">Create Category Successfully</div>
                <form @submit.prevent="submitCategory">
            <div class="mb-6">
        <label for="name" class="block mb-2 text-sm font-medium text-gray-
    900">Name</label>
    <input type="text" id="name" v-model="form.name" class="bg-gray-50
        border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
            focus:border-blue-500 block w-full p-2.5" placeholder="Masukan Nama Category"
                 required="true">
            </div>
        <button type="submit" class="text-white bg-primary hover:bg-primary/80
            focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg
                text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>
        </div>
    </section>
</template>