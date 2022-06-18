<template>
<div id="SingIn">
    <div class="min-h-screen bg-gray-100 flex items-center justify-center bg-blue text-bluck flex-col">
            <div class="bg-white p-5 px-10 rounded-lg shadow-2xl w-1/3 hue-rotate-0">
                <div class="flex justify-start items-start float-left mt-3">
                    <div>
                        <a href="" id="back"><i class="fa-solid fa-arrow-left-long text-xl"></i></a>
                    </div>
               </div>
                <h2 class=" text-2xl mb-8 font-bold text-indigo-600 text-center">Create Your Account</h2>
                <form action="" class="space-y-5">
                <div class="flex flex-row">
                    <div class=" mt-1 mb-1">
                    <label for="" class="block mb-1 text-sm text-gray-500">Name</label>
                    <input type="text" class="py-3 h-12 rounded-md px-4 w-5/6 outline-none border border-blue" placeholder="First Name">
                    </div>
                    <div class=" mt-7 mb-1">
                    <input type="text" class="py-3 h-12 rounded-md px-4 w-64 outline-none border border-blue" placeholder="Last Name">
                    </div>
               </div>
               <div class=" mt-1 mb-1">
                   <label for="" class="block mb-1 text-sm text-gray-500">Email</label> 
                    <input type="email" class="py-3 h-12 rounded-md px-4 w-full outline-none border border-blue" placeholder="Email or Phone Number">
               </div>
                <div class=" mt-1 mb-1">
                   <label for="" class="block mb-1 text-sm text-gray-500">Password</label>
                   <input type="password" class="py-3 h-12 rounded-md px-4 w-full outline-none border border-blue" placeholder="Password">
               </div>
                    <div class=" mt-1 mb-1">
                   <label for="" class="block mb-1 text-sm text-gray-500">Comfirm Password</label>
                   <input type="password" class="py-3 h-12 rounded-md px-4 w-full outline-none border border-blue" placeholder="Confirm Password">
               </div>

               
            <!--Back and next-->  
                 <div class=" float-right mt-5 pr-5">
                    <router-link to="/Log1">
                    <input type="submit" value="Next" id="next" class=" w-20  h-7 rounded-md text-md text-white bg-indigo-600 cursor-pointer">
                    </router-link>
                </div>
            <!--****************-->
           </form>
        </div>
        </div>
</div>
</template>
<script>
export default{
    name: '#SingIn',
    data: function(){
        return{
            UserSing: ''
        }
    }
}
</script>