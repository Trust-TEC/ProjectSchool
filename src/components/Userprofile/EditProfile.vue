<template>
    <div id="EditProfile">
    <!--Header-->
        <nav class=" bg-gray-200 rounded-2xl mt-2">
            <div class=" px-9">
            <div class="flex justify-between text-2xl">
                    <div class="my-2"> <img :src="logo" alt="" class="w-6 h-6 "></div>
                <div class="flex justify-evenly flex-rows">
                    <div class="">
                       <input type="search" name="" id="" class=" my-2 mr-20 text-lg h-7 w-64 outline-none border border-blue bg-gray-50 rounded-xl pl-5 " placeholder="Search">
                        <!--<i class="fa-solid fa-magnifying-glass "></i>-->
                    </div>
                    <router-link to="/Tittle">
                    <a href="" class="mr-10 pl-20"><button class=" bg-indigo-600 text-white mt-3 px-4 rounded-md hover:bg-sky-700 text-lg float-left"><p>Create</p></button></a>
                    </router-link>
                    <div class="pr-5">
                        <router-link to="/Profile">
                        <img :src="perlog" alt="" class=" w-12 h-12 rounded-full p-1">
                        </router-link>
                    </div>
                </div>
            </div>
            </div>
        </nav>
    <!-----body------->
        <div class="flex mt-1">
            <div class=" h-screen w-1/5 bg-gray-100 ">
            <div class="flex items-center justify-center flex-col">
                <div class="list-none font-family:'arial'">
                    <div class="mt-10 text-2xl text-bold underline underline-offset-4">
                        <a href=""><li>Account Setting</li></a>
                    </div>
                    <div class="mt-10 text-2xl">
                        <router-link to="">
                        <a href=""><li>Edit Profile</li></a>
                        </router-link>
                    </div>
                    <div class="mt-10 text-2xl">
                        <router-link to="">
                        <a href=""><li>Log out</li></a>
                        </router-link>
                    </div>
                </div>    
            </div>       
        </div>
    <!--****************-->
        <div class="w-4/5">
            <div class="flex">
                <div class="w-1/5 bg-gray-300 h-screen">
                    <div class="flex items-center justify-center flex-col mt-10 text-bold text-2xl border-b-4 border-indigo-400">
                        <h2>Account Setting</h2>
                    </div>
                    <div class="flex mt-10 pl-5">
                        <div class="flex-none">
                            <div><i class="fa-solid fa-user text-3xl"></i></div>
                        </div>
                        <div class="flx-1 text-2xl pl-4">
                            <router-link to="/Setting">
                            <a href=""><h2>Profile</h2></a>
                            </router-link>
                        </div>
                        
                    </div>
                    <div class="flex mt-10 pl-5">
                        <div class="flex-none">
                            <div><i class="fa-solid fa-bell text-3xl "></i></div>
                        </div>
                        <div class="flex-1 text-2xl pl-4 font-bold underline underline-offset-4">
                            <h2>Notification</h2>
                        </div>
                    </div>
                    <div class="flex mt-10 pl-5">
                        <div class="flex-none">
                            <div><i class="fa-solid fa-shield text-3xl"></i></div>
                        </div>
                        <div class="flex-1 text-2xl pl-4">
                            <h2>Security</h2>
                        </div>
                    </div> 
                </div>
        <!--****************-->
        <div class="w-4/5 bg-gray-200 h-screen p-5">
            <div class="flex justify-right pl-5 mt-7 text-bold text-2xl">
                <h2>Notification</h2>
            </div>
            <div class=" h-5/6 mt-5 bg-gray-50 rounded-3xl p-5">
                <div class="mt-2 pl-16">
                <div class="rounded-2xl border-2 flex flex-rows items-center justify-between m-1 p-3 w-5/6">
                    <div class=" flex ">
                            <div class="">
                                <h1 class="text-lg font-bold text-black pb-2 mt-2 pr-2">
                                    <div class="flex mt-5 pl-5">
                                    <div class="flex-none">
                                        <div class=" px-2"><i class="fa-solid fa-calendar-days text-3xl"></i></div>
                                    </div>
                                    <div class="flex-1 font-bold text-2xl pl-4 font-mono mb-2">
                                        <h2>Event</h2>
                                    </div>
                                    </div>
                                </h1>
                                </div>
                            </div>
                            <div>
                        <button class="w-24 p-2  bg-gray-500 text-white rounded-full text-sm cursor-pointer " :class="{active:isActive}" @click="toggle">{{isActive ? 'ON' : 'OFF'}}</button>
                    </div>
                 </div>
                 <!--**************-->
                  <div class="rounded-2xl border-2 flex flex-rows items-center justify-between m-1 p-3 w-5/6 mt-5">
                    <div class=" flex ">
                            <div class="">
                                <h1 class="text-lg font-bold text-black pb-2 mt-2 pr-2">
                                    <div class="flex mt-5 pl-5">
                                    <div class="flex-none">
                                        <div class=" px-2"><i class="fa-solid fa-message text-3xl"></i></div>
                                    </div>
                                    <div class="flex-1 font-bold text-2xl pl-4 font-mono mb-2">
                                        <h2>Comment</h2>
                                    </div>
                                    </div>
                                </h1>
                                </div>
                            </div>
                            <div>
                        <button class="w-24 p-2  bg-gray-500 text-white rounded-full text-sm cursor-pointer " :class="{active:isActive}" @click="toggle">{{isActive ? 'ON' : 'OFF'}}</button>
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