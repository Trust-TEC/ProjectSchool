<template>
    <div id="HomePafe" class=" overflow-hidden">
        <!--Header-->
        <nav class=" fixed w-full">
            <div class=" bg-gray-200 h-11">
            <div class="flex justify-between text-2xl">
                    <div class="my-2"> <img :src="logo" alt="" class="w-6 h-6 "></div>
                <div class="flex justify-end flex-rows">
                    <div class=" pr-42">
                       <input type="search" name="" id="" class=" hover:border-sky-700 mt-2 mr-20 text-sm h-8 w-80 outline-none border-2 bg-gray-50 rounded-lg pl-5 " placeholder="Search">
                        <!--<i class="fa-solid fa-magnifying-glass "></i>-->
                    </div>
                    <div class=" pr-96">
                    <router-link to="/Tittle" >
                    <button class=" bg-indigo-600 text-white mt-2 px-4 rounded-md hover:bg-sky-700 text-lg float-left"><p>Create</p></button>
                    </router-link>
                    </div>
                </div>
            </div>
            </div>
        </nav>
        <!--***************-->
        <div class="flex px-10 overscroll-x-none">

            <div class=" w-1/3 flex">
                <div class="mr-5  py-9 justify-items-end pl-16 fixed mt-5">
                    <div class="flex mt-5 pl-5">
                        <div class="flex-none">
                            <div class=" px-2"><i class="fa-solid fa-podcast text-3xl"></i></div>
                        </div>
                        <div class="flex-1 font-bold text-2xl pl-4 font-mono mb-2">
                            <h2>Podcast</h2>
                        </div>
                    </div>
                    <div class="flex mt-9 pl-5">
                        <div class="flex-none">
                            <div class=" px-1"><i class="fa-solid fa-user-group text-3xl"></i></div>
                        </div>
                        <div class="flex-1 font-bold text-2xl pl-4 font-mono mb-2">
                            <h2>Community</h2>
                        </div>
                    </div>
                    <div class="flex mt-9 pl-5">
                        <div class="flex-none">
                            <div class=" px-2"><i class="fa-solid fa-bell text-3xl"></i></div>
                        </div>
                        <div class="flex-1 font-bold text-2xl pl-4 font-mono mb-2">
                            <h2>Notification</h2>
                        </div>
                    </div>

                    <div class="flex mt-9 pl-5">
                        <div class="flex-none">
                            <div class="px-2"><i class="fa-solid fa-message text-3xl"></i></div>
                        </div>
                        <div class="flex-1 font-bold text-2xl pl-4 font-mono mb-2">
                            <h2>Message</h2>
                        </div>
                    </div>

                    <div class="flex mt-9 pl-5">
                        <div class="flex-none">
                            <div class=" px-2"><i class="fa-solid fa-bookmark text-3xl"></i></div>
                        </div>
                        <div class="flex-1 font-bold text-2xl pl-4 font-mono mb-2">
                            <h2>bookmart</h2>
                        </div>
                    </div>

                    <div class="flex mt-9 pl-5">
                        <div class="flex-none">
                            <div class=" px-2"><i class="fa-solid fa-user text-3xl"></i></div>
                        </div>
                        <router-link to="/Profile">
                        <div class="flex-1 font-bold text-2xl pl-4 font-mono mb-2">
                            <h2>Profile</h2>
                        </div>
                        </router-link>
                    </div>
            <!------>
                </div>
            </div>
            <div class="w-2/3 ">
                <div class="flex mt-2 font-mono">
                    <h4 class=" font-bold text-whit px-4 py-1 rounded-2xl hover:bg-gray-100 ">Home Page</h4>
                    <h4 class=" font-bold pl-4 text-whit px-3 py-1 rounded-2xl hover:bg-gray-100">Recommend</h4>
                    <h4 class=" font-bold pl-4 text-whit px-3 py-1 rounded-2xl hover:bg-gray-100">Top Read</h4>
                </div>
                <!--################################-->

                <div class="my-1 mt-2">
                <div class=" p-2 border-2 rounded-2xl bg-gray-50">
                   <div class="flex justify-between ">
                        <div class="flex ml-5">
                             <div>
                                <img class="w-16 h-16 bg-red rounded-full" :src="perlog" alt="">
                            </div>
                            <div class="ml-2">
                                <h2 class="text-lg mb-2">User Name</h2>
                                <h4 class="text-lg">Title Post</h4>
                                <p class=" text-sm">Description
                                </p>
                                
                            </div>
                        </div>
                        <div class="flex ">
                            <div><i class="fa-solid fa-star p-2 text-xl"></i></div>
                            <div><i class="fa-solid fa-bookmark p-2 text-xl"></i></div>
                        </div>
                   </div>
                   <div class=" mx-20 border-2 rounded-2xl">
                       <div class="text-center ">
                           <img  :src="dtc" alt="" class=" w-full   rounded-lg">    
                       </div>
                    
                   </div>
                   <div class="flex justify-around my-2 text-lg">
                       <div id="example-1">
                            <button v-on:click="counter += 1"><i class="fa-solid fa-heart"></i></button>
                            <p class=" inline-block ml-2 text-[#e11d48]"> {{ counter }}</p>
                        </div>
                       <div><i class="fa-solid fa-comment"></i></div>
                       <div><i class="fa-solid fa-flag"></i></div>
                       <div><i class="fa-solid fa-arrow-up-right-from-square"></i></div>
                   </div>
                   
                </div>
            <!--################################-->
                <div class=" p-2 border-2 mt-2 rounded-2xl bg-gray-50">
                   <div class="flex justify-between ">
                        <div class="flex ml-5">
                             <div>
                                <img class="w-16 h-16 bg-red rounded-full" :src="perlog" alt="">
                            </div>
                            <div class="ml-2">
                                <h2 class="text-lg mb-2">User Name</h2>
                                <h4 class="text-lg">Title Post</h4>
                                <p class=" text-sm">Description
                                </p>
                                
                            </div>
                        </div>
                        <div class="flex ">
                            <div><i class="fa-solid fa-star p-2 text-xl"></i></div>
                            <div><i class="fa-solid fa-bookmark p-2 text-xl"></i></div>
                        </div>
                   </div>
                   <div class=" mx-20 border-2 rounded-2xl">
                       <div class="text-center ">
                           <img  :src="dtc" alt="" class=" w-full   rounded-lg">    
                       </div>
                    
                   </div>
                   <div class="flex justify-around my-2 text-lg">
                       <div id="example-1">
                            <button v-on:click="counter += 1"><i class="fa-solid fa-heart"></i></button>
                            <p class=" inline-block ml-2 text-[#e11d48]"> {{ counter }}</p>
                        </div>
                       <div><i class="fa-solid fa-comment"></i></div>
                       <div><i class="fa-solid fa-flag"></i></div>
                       <div><i class="fa-solid fa-arrow-up-right-from-square"></i></div>
                   </div>
                   
                </div>
                 <div class=" p-2 border-2 mt-2 rounded-2xl bg-gray-50">
                   <div class="flex justify-between ">
                        <div class="flex ml-5">
                             <div>
                                <img class="w-16 h-16 bg-red rounded-full" :src="perlog" alt="">
                            </div>
                            <div class="ml-2">
                                <h2 class="text-lg mb-2">User Name</h2>
                                <h4 class="text-lg">Title Post</h4>
                                <p class=" text-sm">Description
                                </p>
                                
                            </div>
                        </div>
                        <div class="flex ">
                            <div><i class="fa-solid fa-star p-2 text-xl"></i></div>
                            <div><i class="fa-solid fa-bookmark p-2 text-xl"></i></div>
                        </div>
                   </div>
                   <div class=" mx-20 border-2 rounded-2xl">
                       <div class="text-center ">
                           <img  :src="dtc" alt="" class=" w-full   rounded-lg">    
                       </div>
                    
                   </div>
                   <div class="flex justify-around my-2 text-lg">
                       <div id="example-1">
                            <button v-on:click="counter += 1"><i class="fa-solid fa-heart"></i></button>
                            <p class=" inline-block ml-2 text-[#e11d48]"> {{ counter }}</p>
                        </div>
                       <div><i class="fa-solid fa-comment"></i></div>
                       <div><i class="fa-solid fa-flag"></i></div>
                       <div><i class="fa-solid fa-arrow-up-right-from-square"></i></div>
                   </div>
                   
                </div>
                 <div class=" p-2 border-2 mt-2 rounded-2xl bg-gray-50">
                   <div class="flex justify-between ">
                        <div class="flex ml-5">
                             <div>
                                <img class="w-16 h-16 bg-red rounded-full" :src="perlog" alt="">
                            </div>
                            <div class="ml-2">
                                <h2 class="text-lg mb-2">User Name</h2>
                                <h4 class="text-lg">Title Post</h4>
                                <p class=" text-sm">Description
                                </p>
                                
                            </div>
                        </div>
                        <div class="flex ">
                            <div><i class="fa-solid fa-star p-2 text-xl"></i></div>
                            <div><i class="fa-solid fa-bookmark p-2 text-xl"></i></div>
                        </div>
                   </div>
                   <div class=" mx-20 border-2 rounded-2xl">
                       <div class="text-center ">
                           <img  :src="dtc" alt="" class=" w-full   rounded-lg">    
                       </div>
                    
                   </div>
                   <div class="flex justify-around my-2 text-lg">
                       <div id="example-1">
                            <button v-on:click="counter += 1"><i class="fa-solid fa-heart"></i></button>
                            <p class=" inline-block ml-2 text-[#e11d48]"> {{ counter }}</p>
                        </div>
                       <div><i class="fa-solid fa-comment"></i></div>
                       <div><i class="fa-solid fa-flag"></i></div>
                       <div><i class="fa-solid fa-arrow-up-right-from-square"></i></div>
                   </div>
                   
                </div>
            <!--################################-->
               </div>
            </div>
            
            <!--Right bar-->
            <div class="text-center w-1/3 p-6">
                    <!--Tage user-->
                    <div class=" bg-gray-100 h-screen rounded-xl">
                    <div class=" mt-8 bold text-2xl">
                        <h2>Tage recommend topic</h2>
                    </div>
                    <div class=" flex flex-col space-y-2 pl-8 mt-5">
                    <div class=" ">
                        
                        <div class=" flex gap-2">
                            <button class=" bg-gray-300 py-2 px-3 flex text-md rounded-3xl text-black">Math Lab Engineering</button>
                            
                            <button class=" bg-gray-300 py-2 px-3 flex text-md rounded-3xl text-black">Data Engineering</button>
                            
                        </div>
                    </div>
                    <div>
                        
                        <div class=" flex gap-2">
                            <button class=" bg-gray-300 p-2 w-24 text-md rounded-3xl text-black">Math Lab</button>
                            <button class=" bg-gray-300 py-2 px-3 flex text-md rounded-3xl text-black">Programming</button>
                            <button class=" bg-gray-300 py-2 px-3 flex text-lg rounded-3xl text-black">C++ </button>
                            
                        </div>
                    </div>
                        <div>

                        <div class=" flex gap-2">
                            <button class=" bg-gray-300 p-2 w-24  text-md rounded-3xl text-black">Math Lab</button>
                            <button class=" bg-gray-300 py-2 px-3 flex text-md rounded-3xl text-black">calculus</button>
                            <button class=" bg-gray-300 py-2 px-3 flex text-md rounded-3xl text-black">Electromagnetic</button>
                        </div>
                    </div>
                    </div>
                        <!--Follow user-->
                        <div>
                        <div class="flex flex-col mt-5 px-3">
                            <h2 class="text-2xl bold">Recommend User</h2>
                        <div class="  flex flex-col ">
                                
                                <div class=" text-center">
                                    <div class="rounded-2xl bg-gray-300 flex flex-rows items-center justify-between m-1 p-3 w-96">
                                    <div class=" flex ">
                                        <div class="shrink-0">
                                            <img class="h-16 w-16 rounded-full" :src="put" alt="ChitChat Logo">
                                        </div>
                                        <div class="">
                                            
                                            <h1 class="text-lg font-bold text-black pb-2 mt-2 pr-2 pl-5">
                                                Ampraham kountic
                                            </h1>
                                            <p class="text-slate-500 text-sm pl-2">Professor of ITI and Founder</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button class="w-24 p-2  bg-indigo-500 text-white rounded-full text-sm cursor-pointer">Follwing</button>
                                    </div>
                                </div>
                                </div>
                        
                        <div class=" rounded-2xl bg-gray-300 flex flex-rows items-center justify-between m-1 p-3 w-96">
                            <div class=" flex ">
                                <div class="shrink-0">
                                    <img class="h-16 w-16 rounded-full" :src="puser" alt="ChitChat Logo">
                                </div>
                                <div class="">
                                    
                                    <h1 class="text-lg font-bold text-black pb-2 mt-2 pr-2">
                                        Ariah bubble
                                    </h1>
                                    <p class="text-slate-500 text-sm pl-2">Teacher and Researcher</p>
                                </div>
                            </div>
                            <div>
                                <button class="w-24 p-2 bg-indigo-500 text-white rounded-full text-sm cursor-pointer">Follwing</button>
                            </div>
                        </div>


                        <div class=" rounded-2xl bg-gray-300 flex flex-rows items-center justify-between m-1 p-3 w-96">
                            <div class=" flex ">
                                <div class="shrink-0">
                                    <img class="h-16 w-16 rounded-full" :src="beliget" alt="ChitChat Logo">
                                </div>
                                <div class="">
                                    
                                    <h1 class="text-lg font-bold text-black pb-2 mt-2 pr-2">
                                        Bill Gates
                                    </h1>
                                    <p class="text-slate-500 text-sm pl-2">Founder of Microsoft</p>
                                </div>
                            </div>
                            <div>
                                <button class="w-24 p-2 bg-indigo-500 text-white rounded-full text-sm cursor-pointer">Follwing</button>
                            </div>
                        </div>

                        <div class=" rounded-2xl bg-gray-300 flex flex-rows items-center justify-between m-1 p-3 w-96">
                            <div class=" flex ">
                                <div class="shrink-0">
                                    <img class="h-16 w-16 rounded-full" :src="avd" alt="ChitChat Logo">
                                </div>
                                <div class="">
                                    
                                    <h1 class="text-lg font-bold text-black pb-2 mt-2 pr-2">
                                        Akshat Bordia
                                    </h1>
                                    <p class="text-slate-500 text-sm pl-2">Advisor of team Developer</p>
                                </div>
                            </div>
                            <div>
                                <button class="w-24 p-2 bg-indigo-500 text-white rounded-full text-sm cursor-pointer">Follwed</button>
                            </div>
                        </div>
                    </div>
                </div>
				</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name:'Page',
    data: function(){
        return{
            counter: 0,
            PhoneLog: 'https://healthvoices.org.au/wp-content/uploads/2020/11/ideas-2500.jpg',
            puser: 'https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg',
            beliget: 'https://likewise-stage.azureedge.net/uploads/3eb6cf23-895b-45e9-b92c-5fb1b457dd04/bill-gates-profile-pic.jpg',
            perlog: 'https://www.brooksschool.org/uploaded/News/new-faculty-2019-federico.gif',
            dtc: 'https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/747/original/Data_Science.jpg',
            avd: 'https://www.citrix.com/blogs/wp-content/upload/2018/03/slack_compressed-e1521621363404-360x360.jpg',
            logo: 'photo_2022-04-21_19-18-59.png',
            put: 'https://pbs.twimg.com/profile_images/1247016785108447234/LEPENTy__400x400.jpg',
        }
    },
    methods:{
        likeicon(){

        }
    }
}
</script>