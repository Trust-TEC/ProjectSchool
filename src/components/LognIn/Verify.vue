<template>
    <div>
        <div class="min-h-screen flex items-center bg-gray-100 justify-center bg-blue text-bluck flex-col">
            <div class="bg-white p-5 px-10 rounded-lg shadow-2xl w-1/3">
                <div class="flex justify-start items-start float-left mt-3">
                    <div>
                        <a href="" id="back4"><i class="fa-solid fa-arrow-left-long text-xl"></i></a>
                    </div>
               </div>
                <h2 class="text-center text-indigo-600 font-bold text-blue mt-3 mb-1 text-2xl">Verify code</h2>
                <label for="phone" class="pb-3">Enter code</label><br><br>
                <input type="number" name="number" id="number" class="py-2 rounded-md px-4 w-full outline-none border border-blue">
            <!--Back and next-->  
                 <div class=" float-right mt-5 pr-5">
                    <router-link to="/Bio">
                    <input type="submit" value="Confirm" id="confirm4" class=" w-20  h-7 rounded-md text-md text-white bg-indigo-600 cursor-pointer">
                    </router-link>
                </div>
            <!--****************-->
            </div>  
        </div>
    </div>
</template>
<script>
export default{
    name:'Verify',
    data: function(){
        return{
            PhoneLog: ''
        }
    }
}
</script>