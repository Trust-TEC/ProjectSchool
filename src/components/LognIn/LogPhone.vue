<template>
    <div>
        <div class="min-h-screen flex items-center bg-gray-100 justify-center bg-blue text-bluck flex-col">
            <div class="bg-white p-5 px-10 rounded shadow-2xl w-1/3">
                <div class="flex justify-start items-start float-left mt-3">
                    <div>
                        <a href="" id="back3"><i class="fa-solid fa-arrow-left-long text-xl"></i></a>
                    </div>
               </div>
                <h2 class="text-center text-indigo-600 font-bold text-blue mb-5 text-2xl">Phone Number</h2><br>
                <label for="phone" class="pb-3 text-sm text-gray-500">Enter Phone Number</label><br><br>
                <input type="tel" name="phone" id="phone" class="py-2 h-12 rounded-md px-4 w-full outline-none border border-blue" placeholder="+855   ">
               <!--button to continue-->  
                 <div class=" float-right mt-10">
                    <router-link to="/Verify">
                    <input type="submit" value="Continue" id="continue3" class=" w-20  h-7 rounded-md text-md text-white bg-indigo-600 cursor-pointer">
                    </router-link>
                </div>
            <!--****************-->
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