<template>
<div id="SingIn">
    <div class="min-h-screen max-auto flex items-center justify-center bg-blue text-bluck flex-col">
            <div class="bg-white p-5 rounded-lg shadow-2xl "> 
                <h2 class=" text-2xl mb-8 font-bold text-indigo-600 text-center">Create Your Account</h2>
                <form action="" class="space-y-5">
                <div class="flex flex-row">
                    <div class=" mt-1 mb-1">
                    <label for="" class="block mb-1 text-sm text-gray-500">Name</label>
                    <input type="text" class="py-3 px-4 w-5/6 outline-none border border-blue" placeholder="First Name">
                    </div>
                    <div class=" mt-7 mb-1">
                    <input type="text" class="py-3 px-4 w-64 outline-none border border-blue" placeholder="Last Name">
                    </div>
               </div>
               <div class=" mt-1 mb-1">
                   <label for="" class="block mb-1 text-sm text-gray-500">Email</label> 
                    <input type="email" class="py-3 px-4 w-full outline-none border border-blue" placeholder="Email or Phone Number">
               </div>
                <div class=" mt-1 mb-1">
                   <label for="" class="block mb-1 text-sm text-gray-500">Password</label>
                   <input type="password" class="py-3 px-4 w-full outline-none border border-blue" placeholder="Password">
               </div>
                    <div class=" mt-1 mb-1">
                   <label for="" class="block mb-1 text-sm text-gray-500">Comfirm Password</label>
                   <input type="password" class="py-3 px-4 w-full outline-none border border-blue" placeholder="Confirm Password">
               </div>
              <router-link to="Log1"> <input type="submit" value="Next" class="w-full p-2 bg-indigo-500 text-white rounded-full text-xl mt-5 cursor-pointer"></router-link>
               
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