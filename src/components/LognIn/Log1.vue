<template>
    <div>
        <div class="min-h-screen flex items-center justify-center bg-blue text-bluck flex-col">
            <div class="bg-white p-5 rounded shadow-2xl">
                <h2 class="text-center text-2xl mb-3 text-indigo-500 font-bold">Date of birth</h2>
                <div class="flex justify-between gap-2">

                    <div class="text-center m-2">
                        <label for="" >Year</label>
                        <select name="" id="" class="outline-none border-2 w-full m-2 p-2 text-lg rounded-md">
                                <option value="2021">2014</option>
                                <option value="2020">2013</option>
                                <option value="2022">2013</option>
                                <option value="2022">2012</option>
                                <option value="2022">2011</option>
                                <option value="2022">2010</option>
                                <option value="2021">2009</option>
                                <option value="2020">2008</option>
                                <option value="2022">2007</option>
                                <option value="2022">2006</option>
                                <option value="2022">2005</option>
                                <option value="2022">2004</option>
                                <option value="2021">2003</option>
                                <option value="2020">2002</option>
                                <option value="2022">2001</option>
                                <option value="2022">2000</option>
                                <option value="2022">1999</option>
                                <option value="2022">1998</option>
                                <option value="2021">1997</option>
                                <option value="2020">1996</option>
                                <option value="2022">1995</option>
                                <option value="2022">1994</option>
                                <option value="2022">1993</option>
                                <option value="2022">1992</option>
                        </select>
                        
                    </div>
                    <div class="text-center m-2">
                        <label for="">Month</label>
                        <select name="" id="" class="outline-none border-2 w-full m-2  p-2 text-lg rounded-md">
                            <option value="2022">January</option>
                            <option value="2022">February</option>
                            <option value="2022">March</option>
                            <option value="2022">April</option>
                            <option value="2022">May</option>
                            <option value="2022">June</option>
                            <option value="2022">July</option>
                            <option value="2022">August</option>
                            <option value="2022">September</option>
                            <option value="2022">October</option>
                            <option value="2022">November</option>
                            <option value="2022">December</option>
                        </select>
                    </div>
                    <div class="text-center m-2">
                        <label for="">Day</label>
                        <select name="" id="" class="outline-none border-2 w-full m-2  p-2 text-lg rounded-md">
                            <option value="2022">1</option>
                            <option value="2022">2</option>
                            <option value="2022">3</option>
                            <option value="2022">4</option>
                            <option value="2022">5</option>
                            <option value="2022">6</option>
                            <option value="2022">7</option>
                            <option value="2022">8</option>
                            <option value="2022">9</option>
                            <option value="2022">10</option>
                            <option value="2022">11</option>
                            <option value="2022">12</option>
                            <option value="2022">13</option>
                            <option value="2022">14</option>
                            <option value="2022">15</option>
                            <option value="2022">16</option>
                            <option value="2022">17</option>
                            <option value="2022">18</option>
                            <option value="2022">19</option>
                            <option value="2022">20</option>
                            <option value="2022">21</option>
                            <option value="2022">22</option>
                            <option value="2022">23</option>
                            <option value="2022">24</option>
                            <option value="2022">25</option>
                            <option value="2022">26</option>
                            <option value="2022">27</option>
                            <option value="2022">28</option>
                            <option value="2022">29</option>
                            <option value="2022">30</option>
                            <option value="2022">31</option>


                        </select>
                    </div>

                </div>
                <router-link to="LogPhone"><input type="submit" value="Next" class="w-full p-2 bg-indigo-600 text-white  rounded-full text-xl mt-5 cursor-pointer"></router-link>
            </div>  
        </div>
    </div>
</template>
<script>
export default{
    name: 'Log1',
    data: function(){
        return{
            LogIn1: ''
        }
    }
}
</script>