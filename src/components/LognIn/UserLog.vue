<template>
    <div id="Userlog">
        <div class="min-h-screen bg-gray-100 flex items-center justify-center  text-bluck flex-col mb-3">
            <div class="bg-white p-5 px-10 rounded-lg shadow-2xl w-1/3 mt-10">
                <h2 class=" text-bold text-3xl text-blue mb-8 font-bold text-indigo-600 text-center">Log In</h2>
                <form action="" class="space-y-5">
               <div class=" mt-2 mb-2">
                   <label for="" class="block mb-1 text-sm text-gray-500">Acccount</label>
                   <input v-model="email" type="email" class="py-3 rounded-md px-4 w-full outline-none border border-blue" placeholder="Email or Phone Number">
               </div>
               <div class=" mt-2 mb-1">
                   <label for="" class="block mb-1 text-sm text-gray-500">Password</label>
                   <input v-model="password" type="password" class="py-3 rounded-md px-4 w-full outline-none border border-blue" placeholder="Password">
               </div>
               <div class="flex flex-row">
                <div><input type="checkbox" :disabled="disabled" id="toggle_button" v-model="checkedValue"></div>
                <div class="pl-2 text-sm text-gray-500"><p>Remember me</p></div>

                <div class="text-sm text-gray-500 underline cursor-pointer pl-40 hover:text-black"><p>Forgot password?</p></div>
                </div>
                <div class=" justify-center items-center flex">
               <router-link to="Homepage"><input @click="signin" type="submit" value="Log in" class=" mt-2 w-28 h-8 bg-indigo-500 hover:bg-indigo-600  text-white rounded-2xl text-lg cursor-pointer"></router-link>
               </div>
               <div class="flex flex-row items-center justify-center">
                    <div class=" text-sm"><p>Don't have an acccount ?</p></div>
                    <router-link to="SignIn">
                    <div class="text-indigo-500 font-bold pl-1"><p>Sign up</p></div>
                    </router-link>
               </div>
               <div class="text-center text-sm">Or continue with</div>
           </form>
           <div class=" justify-center items-center flex mt-5">
                <div class="grid grid-cols-3 grid-flow-col gap-5">
                <div>
                    <a href="#"><i class="fa-brands text-blue-600 fa-facebook text-2xl"></i></a>
                </div>
                <div>
                    <a href="#"><i class="fa-brands text-teal-600 fa-google text-2xl"></i></a>
                </div>
                <div>
                    <a href="#"><i class="fa-brands text-gray-900 fa-github text-2xl"></i></a>
                </div>
                <div>
                    <a href="#"><i class="fa-brands text-sky-600 fa-twitter text-2xl"></i></a>
                </div>
                </div>
            </div>    
        </div>
           
        </div>
    </div>
</template>
<script>
//import firebase from "firebase/app"

export default{
    name: 'LogIn',
    data: function(){
        return{
            email: "",
            password: "",
            initail: "",
            nameuser: "",
            currentState: this.defaultState
        }
    },
    methods: {
        singnin(){
            /*firebase.auth().signInWithEmailAndPassword(this.email, this.password, this.nameuser).then(
                (user) =>{
                    console.log(user)
                },
                (err) =>{
                    alert(err)
                }
            )*/
        }
    }
}
</script>