<template>
    <div id="Profile">
       <!--Header-->
        <nav class=" fixed w-full">
            <div class=" bg-gray-200 h-11">
            <div class="flex justify-end text-2xl">
                <div class="flex justify-between flex-rows">
                    <div class="">
                       <input type="search" name="" id="" class=" my-2 mr-20 text-sm h-8 w-64 hover:border-sky-700 outline-none border border-blue bg-gray-50 rounded-md pl-5 " placeholder="Search">
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
                    <button class=" bg-indigo-600  text-white mt-2 px-4 rounded-md hover:bg-sky-700 text-lg float-left"><p>Create</p></button>
                    </router-link>
                    </div>
                    <div class="p-2 pr-5">
                        <router-link to="/Edit1">
                        <button class=" h-7 w-8 border-2  rounded-md hover:bg-sky-700 bg-indigo-600">
                        <i class="fa-solid fa-bars text-lg text-center items-center mb-2 mt-1 text-white font-bold"></i>
                        </button>
                        </router-link>
               
                    </div>
                </div>
            </div>
            </div>
        </nav>
        <!--***************-->
        <div class=" px-72 items-center justify-center">
            <!--Header-->
            <div class=" flex flex-row items-center justify-center">
                <div class=" mr-2 mt-20 pr-24">
                    <div>
                        <img class=" w-44 h-44 bg-red rounded-full shadow-2xl" :src="perlog" alt="">
                    </div>
                </div>
                <div class=" pl-5 pr-56 mt-20">
                    <div class="mt-2 text-3xl font-bold">
                        <a href=""><div>Trust TEC</div></a>
                    </div>
                    <div class="text-lg flex justify-between gap-5 mt-5">
                        <p>0 posts</p>
                        <p>0 follower</p>
                        <p>0 following</p> 
                    </div>
                    <div class="mt-2 text-2xl">
                        <div class="mt-4 font-seerif font-bold"><h2>Username</h2></div>
                        <div class="mt-2 text-lg"><p>founder</p></div>


                    </div>
                </div>    
            </div>    
            
            <!--*********************-->
            <div class=" mt-10 mb-5">
                <div class=" border-t-2">
                     <div class="text-lg flex items-center justify-center px-24 mt-3">
                        <div class=" text-center  px-5  rounded-2xl hover:bg-gray-100"><p>posts</p></div>
                        <div class=" text-center  px-5  rounded-2xl hover:bg-gray-100 underline underline-offset-1 font-semibold"><p>follower</p></div>
                        <div class=" text-center  px-5  rounded-2xl hover:bg-gray-100"><p>following</p></div> 
                    </div>
                </div>

               <!--**********************-->    
                <div class=" flex flex-wrap gap-5 items-center justify-center mt-5">
                    <div class=" rounded-lg  flex flex-rows items-center justify-between p-2 w-80">
                    <div class=" flex ">
                        <div class="shrink-0 pr-4">
                                <img class="h-14 w-14 rounded-full" :src="dtc" alt="ChitChat Logo">
                        </div>
                        <div class="">
                                        
                        <h1 class="text-lg font-bold text-black pr-2">
                        John Stone</h1>
                        <p class="text-slate-500 text-sm pl-2">Founder of MIT</p>
                        </div>
                    </div>
                    <div>
                        <button class="w-20 p-2 bg-indigo-500 text-white rounded-3xl text-sm cursor-pointer">Followed</button>
                    </div>
                    </div>

                    <!--**********************-->
                    <div class=" rounded-lg  flex flex-rows items-center justify-between p-2 w-80">
                    <div class=" flex ">
                        <div class="shrink-0 pr-4">
                                <img class="h-14 w-14 rounded-full" :src="beliget" alt="ChitChat Logo">
                        </div>
                        <div class="">
                                        
                        <h1 class="text-lg font-bold text-black pr-2">
                        Bill Gates</h1>
                        <p class="text-slate-500 text-sm pl-2">Founder Microsoft</p>
                        </div>
                    </div>
                    <div>
                        <button class="w-20 p-2 bg-indigo-500 text-white rounded-3xl text-sm cursor-pointer">Followed</button>
                    </div>
                    </div>
                <!--**********************-->
                <div class=" rounded-lg  flex flex-rows items-center justify-between p-2 w-80">
                    <div class=" flex ">
                        <div class="shrink-0 pr-4">
                                <img class="h-14 w-14 rounded-full" :src="dtc" alt="ChitChat Logo">
                        </div>
                        <div class="">
                                        
                        <h1 class="text-lg font-bold text-black pr-2">
                        John Stone</h1>
                        <p class="text-slate-500 text-sm pl-2">Founder of MIT</p>
                        </div>
                    </div>
                    <div>
                        <button class="w-20 p-2 bg-indigo-500 text-white rounded-3xl text-sm cursor-pointer">Followed</button>
                    </div>
                    </div>

                    <!--**********************-->
                    <div class=" rounded-lg  flex flex-rows items-center justify-between p-2 w-80">
                    <div class=" flex ">
                        <div class="shrink-0 pr-4">
                                <img class="h-14 w-14 rounded-full" :src="beliget" alt="ChitChat Logo">
                        </div>
                        <div class="">
                                        
                        <h1 class="text-lg font-bold text-black pr-2">
                        Bill Gates</h1>
                        <p class="text-slate-500 text-sm pl-2">Founder Microsoft</p>
                        </div>
                    </div>
                    <div>
                        <button class="w-20 p-2 bg-indigo-500 text-white rounded-3xl text-sm cursor-pointer">Followed</button>
                    </div>
                    </div>
                <!--**********************-->
                <div class=" rounded-lg  flex flex-rows items-center justify-between p-2 w-80">
                    <div class=" flex ">
                        <div class="shrink-0 pr-4">
                                <img class="h-14 w-14 rounded-full" :src="dtc" alt="ChitChat Logo">
                        </div>
                        <div class="">
                                        
                        <h1 class="text-lg font-bold text-black pr-2">
                        John Stone</h1>
                        <p class="text-slate-500 text-sm pl-2">Founder of MIT</p>
                        </div>
                    </div>
                    <div>
                        <button class="w-20 p-2 bg-indigo-500 text-white rounded-3xl text-sm cursor-pointer">Followed</button>
                    </div>
                    </div>

                    <!--**********************-->
                    <div class=" rounded-lg  flex flex-rows items-center justify-between p-2 w-80">
                    <div class=" flex ">
                        <div class="shrink-0 pr-4">
                                <img class="h-14 w-14 rounded-full" :src="beliget" alt="ChitChat Logo">
                        </div>
                        <div class="">
                                        
                        <h1 class="text-lg font-bold text-black pr-2">
                        Bill Gates</h1>
                        <p class="text-slate-500 text-sm pl-2">Founder Microsoft</p>
                        </div>
                    </div>
                    <div>
                        <button class="w-20 p-2 bg-indigo-500 text-white rounded-3xl text-sm cursor-pointer">Followed</button>
                    </div>
                    </div>
                <!--**********************-->
                <div class=" rounded-lg  flex flex-rows items-center justify-between p-2 w-80">
                    <div class=" flex ">
                        <div class="shrink-0 pr-4">
                                <img class="h-14 w-14 rounded-full" :src="dtc" alt="ChitChat Logo">
                        </div>
                        <div class="">
                                        
                        <h1 class="text-lg font-bold text-black pr-2">
                        John Stone</h1>
                        <p class="text-slate-500 text-sm pl-2">Founder of MIT</p>
                        </div>
                    </div>
                    <div>
                        <button class="w-20 p-2 bg-indigo-500 text-white rounded-3xl text-sm cursor-pointer">Followed</button>
                    </div>
                    </div>

                    <!--**********************-->
                    <div class=" rounded-lg  flex flex-rows items-center justify-between p-2 w-80">
                    <div class=" flex ">
                        <div class="shrink-0 pr-4">
                                <img class="h-14 w-14 rounded-full" :src="beliget" alt="ChitChat Logo">
                        </div>
                        <div class="">
                                        
                        <h1 class="text-lg font-bold text-black pr-2">
                        Bill Gates</h1>
                        <p class="text-slate-500 text-sm pl-2">Founder Microsoft</p>
                        </div>
                    </div>
                    <div>
                        <button class="w-20 p-2 bg-indigo-500 text-white rounded-3xl text-sm cursor-pointer">Followed</button>
                    </div>
                    </div>
                <!--**********************-->
                <div class=" rounded-lg  flex flex-rows items-center justify-between p-2 w-80">
                    <div class=" flex ">
                        <div class="shrink-0 pr-4">
                                <img class="h-14 w-14 rounded-full" :src="dtc" alt="ChitChat Logo">
                        </div>
                        <div class="">
                                        
                        <h1 class="text-lg font-bold text-black pr-2">
                        John Stone</h1>
                        <p class="text-slate-500 text-sm pl-2">Founder of MIT</p>
                        </div>
                    </div>
                    <div>
                        <button class="w-20 p-2 bg-indigo-500 text-white rounded-3xl text-sm cursor-pointer">Followed</button>
                    </div>
                    </div>

                    <!--**********************-->
                    <div class=" rounded-lg  flex flex-rows items-center justify-between p-2 w-80">
                    <div class=" flex ">
                        <div class="shrink-0 pr-4">
                                <img class="h-14 w-14 rounded-full" :src="beliget" alt="ChitChat Logo">
                        </div>
                        <div class="">
                                        
                        <h1 class="text-lg font-bold text-black pr-2">
                        Bill Gates</h1>
                        <p class="text-slate-500 text-sm pl-2">Founder Microsoft</p>
                        </div>
                    </div>
                    <div>
                        <button class="w-20 p-2 bg-indigo-500 text-white rounded-3xl text-sm cursor-pointer">Followed</button>
                    </div>
                    </div>
                <!--**********************-->
                <div class=" rounded-lg  flex flex-rows items-center justify-between p-2 w-80">
                    <div class=" flex ">
                        <div class="shrink-0 pr-4">
                                <img class="h-14 w-14 rounded-full" :src="dtc" alt="ChitChat Logo">
                        </div>
                        <div class="">
                                        
                        <h1 class="text-lg font-bold text-black pr-2">
                        John Stone</h1>
                        <p class="text-slate-500 text-sm pl-2">Founder of MIT</p>
                        </div>
                    </div>
                    <div>
                        <button class="w-20 p-2 bg-indigo-500 text-white rounded-3xl text-sm cursor-pointer">Followed</button>
                    </div>
                    </div>

                    <!--**********************-->
                    <div class=" rounded-lg  flex flex-rows items-center justify-between p-2 w-80">
                    <div class=" flex ">
                        <div class="shrink-0 pr-4">
                                <img class="h-14 w-14 rounded-full" :src="beliget" alt="ChitChat Logo">
                        </div>
                        <div class="">
                                        
                        <h1 class="text-lg font-bold text-black pr-2">
                        Bill Gates</h1>
                        <p class="text-slate-500 text-sm pl-2">Founder Microsoft</p>
                        </div>
                    </div>
                    <div>
                        <button class="w-20 p-2 bg-indigo-500 text-white rounded-3xl text-sm cursor-pointer">Followed</button>
                    </div>
                    </div>
                <!--**********************-->
                <div class=" rounded-lg flex flex-rows items-center justify-between p-2 w-80">
                    <div class=" flex ">
                        <div class="shrink-0 pr-4">
                                <img class="h-14 w-14 rounded-full" :src="dtc" alt="ChitChat Logo">
                        </div>
                        <div class="">
                                        
                        <h1 class="text-lg font-bold text-black pr-2">
                        John Stone</h1>
                        <p class="text-slate-500 text-sm pl-2">Founder of MIT</p>
                        </div>
                    </div>
                    <div>
                        <button class="w-20 p-2 bg-indigo-500 text-white rounded-3xl text-sm cursor-pointer">Followed</button>
                    </div>
                    </div>

                    <!--**********************-->
                    <div class=" rounded-lg  flex flex-rows items-center justify-between p-2 w-80">
                    <div class=" flex ">
                        <div class="shrink-0 pr-4">
                                <img class="h-14 w-14 rounded-full" :src="beliget" alt="ChitChat Logo">
                        </div>
                        <div class="">
                                        
                        <h1 class="text-lg font-bold text-black pr-2">
                        Bill Gates</h1>
                        <p class="text-slate-500 text-sm pl-2">Founder Microsoft</p>
                        </div>
                    </div>
                    <div>
                        <button class="w-20 p-2 bg-indigo-500 text-white rounded-3xl text-sm cursor-pointer">Followed</button>
                    </div>
                    </div>
                <!--**********************-->
                
                   
             </div>
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    name: 'Follow',
    data: function(){
        return{
            PhoneLog: 'https://healthvoices.org.au/wp-content/uploads/2020/11/ideas-2500.jpg',
            puser: 'https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg',
            beliget: 'https://likewise-stage.azureedge.net/uploads/3eb6cf23-895b-45e9-b92c-5fb1b457dd04/bill-gates-profile-pic.jpg',
            perlog: 'https://www.brooksschool.org/uploaded/News/new-faculty-2019-federico.gif',
            dtc: 'https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/747/original/Data_Science.jpg',
            avd: 'https://www.citrix.com/blogs/wp-content/upload/2018/03/slack_compressed-e1521621363404-360x360.jpg',
            img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-icon%2Fuser_14023446.htm&psig=AOvVaw1xZZeYGVk1NTsjNFsKnoRn&ust=1652249319368000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOjv2cmi1PcCFQAAAAAdAAAAABAE'
        }
    }
}
</script>