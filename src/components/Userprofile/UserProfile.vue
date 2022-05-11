<template>
   <div id="Profile">
       <!--Header-->
        <nav class=" px-10">
            <div class=" bg-gray-200 rounded-lg mt-2 px-10">
            <div class="flex justify-between text-2xl">
                    <div class="my-2"> <img :src="logo" alt="" class="w-6 h-6 "></div>
                <div class="flex justify-evenly flex-rows">
                    <div class="">
                       <input type="search" name="" id="" class=" my-2 mr-20 text-lg h-7 w-64 outline-none border border-blue bg-gray-50 rounded-xl pl-5 " placeholder="Search">
                        <!--<i class="fa-solid fa-magnifying-glass "></i>-->
                    </div>
                    <div class=" mt-1 pr-10">
                        <router-link to="/Homepage">
                        <i class="fa-solid fa-house-user"></i>
                        </router-link>
                    </div>
                    <router-link to="/Tittle">
                    <a href="" class="mr-10 pl-20"><button class=" bg-indigo-600 text-white mt-2 px-4 rounded-md hover:bg-sky-700 text-lg float-left"><p>Create</p></button></a>
                    </router-link>
                    <div class="p-2">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                </div>
            </div>
            </div>
        </nav>
        <!--***************-->
        <div class=" px-72 items-center justify-center mt-3">
            <!--Header-->
            <div class=" flex flex-row items-center justify-center">
                <div class=" mr-2 mt-2 pr-24">
                    <div>
                        <img class=" w-44 h-44 bg-red rounded-full shadow-2xl" :src="perlog" alt="">
                    </div>
                </div>
                <div class=" pl-5 pr-56">
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
                        <div class=" text-center  px-5  rounded-2xl hover:bg-gray-100 underline underline-offset-1 font-semibold"><p>posts</p></div>
                        <div class=" text-center  px-5  rounded-2xl hover:bg-gray-100">
                            <router-link to="/Follow"><p>follower</p></router-link></div>
                        <div class=" text-center  px-5  rounded-2xl hover:bg-gray-100">
                            <router-link to="Follow1"><p>following</p></router-link></div> 
                    </div>
                </div>

            <!--**********************-->    
                <div class="grid grid-cols-3 gap-9 mt-5">
                        <div class=" items-center h-72 border-2 justify-center flex mt-0.10 mb-0.5 p-2 rounded-sm w-full flex-col">
                                <h2>Picture</h2>
                        </div>
                        <div class=" items-center h-72 border-2 justify-center flex mt-0.10 mb-0.5 p-2 rounded-sm w-full flex-col">
                                <h2>Picture</h2>
                        </div>
                        <div class=" items-center h-72  border-2 justify-center flex mt-0.10 mb-0.5 p-2 rounded-sm w-full flex-col">
                                <h2>Picture</h2>
                        </div>
                        <div class=" items-center h-72 border-2 justify-center flex mt-0.10 mb-0.5 p-2 rounded-sm w-full flex-col">
                                <h2>Picture</h2>
                        </div>
                        <div class=" items-center h-72 border-2 justify-center flex mt-0.10 mb-0.5 p-2 rounded-sm w-full flex-col">
                                <h2>Picture</h2>
                        </div>
                        <div class=" items-center h-72  border-2 justify-center flex mt-0.10 mb-0.5 p-2 rounded-sm w-full flex-col">
                                <h2>Picture</h2>
                        </div>
                        <div class=" items-center h-72 border-2 justify-center flex mt-0.10 mb-0.5 p-2 rounded-sm w-full flex-col">
                                <h2>Picture</h2>
                        </div>
                        <div class=" items-center h-72 border-2 justify-center flex mt-0.10 mb-0.5 p-2 rounded-sm w-full flex-col">
                                <h2>Picture</h2>
                        </div>
                        <div class=" items-center h-72  border-2 justify-center flex mt-0.10 mb-0.5 p-2 rounded-sm w-full flex-col">
                                <h2>Picture</h2>
                        </div>  
                        
                        
                </div>       
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    name: 'Profile',
    data: function(){
        return{
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