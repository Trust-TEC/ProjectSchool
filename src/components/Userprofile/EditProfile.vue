<template>
    <div id="EditProfile">
       <!--Header-->
        <nav class=" fixed w-full">
            <div class=" bg-gray-200 h-11">
            <div class="flex justify-end text-2xl">
                <div class="flex justify-between flex-rows">
                    <div class="">
                       <input type="search" name="" id="" class=" hover:border-sky-700 my-2 mr-20 text-sm h-8 w-64 outline-none border border-blue bg-gray-50 rounded-md pl-5 " placeholder="Search">
                        <!--<i class="fa-solid fa-magnifying-glass "></i>-->
                    </div>
                    <div class=" mt-1 pr-10">
                        <router-link to="/Homepage">
                        <button class=" items-center hover:bg-sky-700 mt-1 h-7 w-8 rounded-md bg-indigo-600">
                        <i class="fa-solid fa-house-user text-lg mb-1 text-white font-bold"></i>
                        </button>
                        </router-link>
                    </div>
                    <div class=" pr-32">
                    <router-link to="/Tittle">
                    <button class=" bg-indigo-600 text-white mt-2 px-4 rounded-md hover:bg-sky-700 text-lg float-left"><p>Create</p></button>
                    </router-link>
                    </div>
                    <div class="p-2 pr-5">
                      
               
                    </div>
                </div>
            </div>
            </div>
        </nav>
        <!--update personal detail left page-->
        <div class="flex px-72">
            <div class="w-2/5">
                <div class=" bg-gray-100 h-96 w-80 rounded-md justify-center flex mt-20">
                    <div class="grid grid-rows-3 grid-flow-col gap-20">
                    <div class=" flex justify-center">
                        <img class="  w-32 h-32 bg-red rounded-full shadow-2xl mt-5" :src="perlog" alt="">
                    </div>
                    <div class="">
                        <div class="text-2xl font-bold text-center">
                            <h2>Jason Handor</h2>
                        </div>
                        <div class="text-md text-gray-500 mt-1 text-center">
                            <p>trusttec@gmail.com</p>
                        </div>
                        <div class=" mt-5 mb-5 text-indigo-600 font-bold text-xl justify-center flex">
                            <h2>About</h2>
                        </div>
                        <div class="text-sm text-black px-5 justify-center fle">
                        <p>Jason Handor. Full Stack Designer I enjoy creating user-centric, delightful and human experiences.</p>
                        </div>
                    </div>
                    </div>

                </div>
                
            </div>
        <!--Update personal detail right page-->
            <div class="w-3/5">
             <div class=" w-full bg-gray-100 hue-rotate-0 pl-16 p-3 rounded-md flex mt-20">
                
                <div class="">
                <h2 class=" text-xl mb-2 mt-3 font-bold text-indigo-600 text-start">Personal detail update</h2>
              <form action="" class="space-y-5">
                <div class="flex flex-row">
                    <div class=" mt-1 mb-1">
                    <label for="" class="block mb-1 text-sm text-gray-900">New name</label>
                    <input type="text" class="py-3 px-4 h-10 rounded-md w-5/6 outline-none border border-blue" placeholder="First Name">
                    </div>
                    <div class=" mt-7 mb-1">
                    <input type="text" class="py-3 px-4 h-10 rounded-md w-64 outline-none border border-blue" placeholder="Last Name">
                    </div>
               </div>
               <div class="mb-1">
                   <label for="" class="block mb-1 text-sm text-gray-900">Email</label> 
                    <input type="email" class="py-3 h-10 rounded-md px-4 w-full outline-none border border-blue" placeholder="Email or Phone Number">
               </div>
                <div class=" mb-1">
                   <label for="" class="block mb-1 text-sm text-gray-900">Enter current password</label>
                   <input type="password" class="py-3 px-4 h-10 rounded-md w-full outline-none border border-blue" placeholder="Current Password">
               </div>
                <div class=" mb-1">
                   <label for="" class="block mb-1 text-sm text-gray-900">Enter new password</label>
                   <input type="password" class="py-3 px-4 h-10 rounded-md w-full outline-none border border-blue" placeholder="New Password">
               </div>
               <div class=" mb-1">
                   <label for="" class="block mb-1 text-sm text-gray-900">Re-enter new password</label>
                   <input type="password" class="py-3 px-4 h-10 rounded-md w-full outline-none border border-blue" placeholder="New Password">
               </div>
              <div class="grid grid-cols-2 float-right">
                <div class=" pr-4">
                    <input type="submit" value="Cancel" id="cancel" class=" mb-4 w-20 h-7 rounded-md text-md hover:bg-white text-indigo-600 border-2 border-indigo-600 cursor-pointer">
                </div>
                 <div>
                    <input type="submit" value="Update" id="update" class=" mb-4 w-20  h-7 rounded-md text-md text-white bg-indigo-600 cursor-pointer">
                </div>

              </div>
               
           </form>
             </div>
        </div>
        </div>
        </div>
       
</div>       
</template>
<script>
export default {
    name: 'Edit1',
    data: function(){
        return{
            toggle() {
                if (!this.isActive) {
                    this.isActive = true;
                } else {
                    this.isActive = false;
                }
            },
            PhoneLog: 'https://healthvoices.org.au/wp-content/uploads/2020/11/ideas-2500.jpg',
            puser: 'https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg',
            beliget: 'https://likewise-stage.azureedge.net/uploads/3eb6cf23-895b-45e9-b92c-5fb1b457dd04/bill-gates-profile-pic.jpg',
            perlog: 'https://www.brooksschool.org/uploaded/News/new-faculty-2019-federico.gif',
            dtc: 'https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/747/original/Data_Science.jpg',
            avd: 'https://www.citrix.com/blogs/wp-content/upload/2018/03/slack_compressed-e1521621363404-360x360.jpg'
        }
    }
}
</script>