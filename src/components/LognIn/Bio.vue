<template>
    <div id="PhonLog">
        <div class="min-h-screen flex items-center bg-gray-100 justify-center bg-blue text-bluck flex-col">
            <div class="bg-white p-5 px-10 rounded-lg shadow-2xl w-1/3">
                <div class="flex justify-start items-start float-left mt-3">
                    <div>
                        <a href="" id="back5"><i class="fa-solid fa-arrow-left-long text-xl"></i></a>
                    </div>
               </div>
                <h2 class="text-center pr-5 text-indigo-600 font-bold mb-5 text-2xl">Bio</h2>
                <label for="phone" class=" mt-5 text-lg text-gray-900">Input your bio</label><br><br>
                <textarea name="" id="" cols="50" rows="3" placeholder="Write down your bio" class="border rounded-md p-3 border-blue w-full outline-none text-xl"></textarea>
               <!--Back and next-->  
                 <div class=" float-right mt-5 pr-5">
                    <router-link to="/Upload">
                    <input type="submit" value="Continue" id="continue5" class=" w-20  h-7 rounded-md text-md text-white bg-indigo-600 cursor-pointer">
                    </router-link>
                </div>
            <!--****************-->
            </div>  
        </div>
    </div>
</template>
<script>
export default{
    name:'#PhoneLog',
    data: function(){
        return{
            PhoneLog: ''
        }
    }
}
</script>