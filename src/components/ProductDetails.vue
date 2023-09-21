<script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import axios from 'axios'

    const route = useRoute()
    const id  = route.params.id
    const product = ref({})
    onMounted(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(res => {
                product.value = res.data
            })
    })
</script>

<template>
    <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12 mt-8">
        <div class="grid grid-cols-12 lg:gap-x-[25px] max-md:gap-y-[25px]">
            <div class="lg:col-span-6 col-span-12">
                <div class="product-detail-img relative">
                    <span class="bg-black text-white block leading-[28px] absolute top-[15px] right-[15px] px-[15px] z-[1]">
                        {{ product.stock > 0 ? `Srock: ${product.stock}` : 'Out of Stock' }}
                    </span>
                    <img class="w-full" :src="product.thumbnail" alt="Product Image" width="585" height="585">
                </div>
            </div>
            <div class="lg:col-span-6 col-span-12">
                <div class="product-detail-content">
                    <h3 class="mb-[10px] text-4xl font-bold text-gray-600">{{ product.title }}</h3>
                    <span class="product-price text-[30px] leading-[42px] text-[#999999] mb-[25px]">৳ {{ product.price }}</span>
                    <p class="text-[14px] leading-[24px] lg:max-w-[450px]">{{ product.description }}</p>
                    <div class="group-btn flex py-[30px]">
                        <div class="cursor-not-allowed"><button type="button" class="bg-black text-white px-[42px] h-[46px] leading-[44px] pointer-events-none mr-[15px]">Add to cart</button></div>
                        <button type="button" class="border border-[#dddddd] text-[20px] w-[46px] h-[46px] leading-[46px] inline-flex justify-center items-center transition-all hover:text-primary">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="other-info">
                        <div class="category-wrap font-medium"><span class="font-bold">Category:</span><span class="text-[#666666] ml-[5px]">{{ product.category }}</span></div>
                        <div class="category-wrap font-medium"><span class="font-bold">Brand:</span><span class="text-[#666666] ml-[5px]">{{ product.brand }}</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>