<template>
    <div>
        <div class="min-h-screen flex items-center justify-center bg-blue text-bluck flex-col">
            <div class="bg-white p-20 rounded shadow-2xl">
                <h2 class="text-center text-indigo-600 font-bold text-blue mb-5 text-2xl">Phone Number</h2>
                <label for="phone" class="pb-3 text-sm text-gray-500">Enter Phone Number</label><br><br>
                <input type="tel" name="phone" id="phone" class="py-2 px-6 w-full outline-none border border-blue" placeholder="+855   ">
                <router-link to="Verify"><input type="submit" value="Send" class="w-full p-2 bg-indigo-600 text-white rounded-full text-xl mt-5 cursor-pointer"></router-link>
            </div>  
        </div>
    </div>
</template>
<script>
export default{
    name:'PhoneLog',
    data: function(){
        return{
            PhoneLog: ''
        }
    }
}
</script>