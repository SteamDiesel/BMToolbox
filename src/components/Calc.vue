<template>

    <div @keyup.17="hotkey()" class="bg-gray-200 text-gray-600 min-h-screen w-full py-12">
        <div class="container mx-auto">
            <div class="sm:flex sm:justify-center mx-16 sm:mx-0">
                <div class="sm:w-1/3">
                    <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
                        <label class="font-semibold">Vehicle</label>
                        <input v-model="vehicle_price" type="number" class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3  px-2 leading-tight focus:outline-none">
                    </div>
                    <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
                        <label class="font-semibold">Warranty</label>
                        <input v-model="warranty" type="number" class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3  px-2 leading-tight focus:outline-none">
                    </div>
                    <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
                        <label class="font-semibold">Trade</label>
                        <input v-model="trade_value" type="number" class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3  px-2 leading-tight focus:outline-none">
                    </div>
                    <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
                        <label class="font-semibold">Payout</label>
                        <input v-model="trade_payout" type="number" class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3  px-2 leading-tight focus:outline-none">
                    </div>
                    <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
                        <label class="font-semibold">Deposit</label>
                        <input  v-model="sign_deposit" type="number" class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none">
                    </div>
                    <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
                        <label class="font-semibold">Deposit</label>
                        <input v-model="further_deposit" type="number" class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3  px-2 leading-tight focus:outline-none">
                    </div>
                    <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
                        <label class="font-semibold">Balance</label>
                        <input readonly v-model="balance_financed" type="number" class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3  px-2 leading-tight focus:outline-none">
                    </div>
                </div>
                <div class="sm:w-1/3">
                    <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
                        <label class="font-semibold">DOF</label>
                        <input v-model="origination_fee" type="number" class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3  px-2 leading-tight focus:outline-none">
                    </div>
                    <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
                        <label class="font-semibold">EST</label>
                        <input v-model="lender_fee" type="number" class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3  px-2 leading-tight focus:outline-none">
                    </div>
                    <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
                        <label class="font-semibold">CCI</label>
                        <input v-model="cci" type="number" class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3  px-2 leading-tight focus:outline-none">
                    </div>
                    <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
                        <label class="font-semibold">RTI</label>
                        <input v-model="gap" type="number" class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3  px-2 leading-tight focus:outline-none">
                    </div>
                    <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
                        <label class="font-semibold">Brokerage</label>
                        <input v-model="brokerage" type="number" class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3  px-2 leading-tight focus:outline-none">
                    </div>
                    <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
                        <label class="font-semibold">Monthly</label>
                        <input v-model="monthly_fee" type="number" class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3  px-2 leading-tight focus:outline-none">
                    </div>
                    <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
                        <label class="font-semibold">NAF</label>
                        <input readonly v-model="displaynaf" type="number" class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3  px-2 leading-tight focus:outline-none">
                    </div>
                </div>
                <div class="sm:w-1/3">
                    <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
                        <label class="font-semibold">Term</label>
                        <input v-model="term" type="number" 
                        class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none">
                    </div>
                    <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
                        <label class="font-semibold">APR</label>
                        <input v-model="apr" type="number" 
                        class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none">
                    </div>
                    <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
                        <label class="font-semibold">RV</label>
                        <input @keyup="setRvPercent" 
                        v-model="rv" type="number" 
                        class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none">
                    </div>
                    <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
                        <label class="font-semibold">RP</label>
                        <input @keyup="setRv" 
                        v-model="rv_percent" type="number" 
                        class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none">
                    </div>
                </div>
            </div>
            <div class="lg:flex lg:justify-between mx-16 sm:mx-0 mt-24">
                <div class="lg:flex lg:flex-col lg:justify-end ">
                    <p @click="makeBig('week')" class="text-md cursor-pointer text-right" v-bind:class="{ 'text-6xl': weekly_big }">
                        ${{weekly_pmt}} per week
                    </p>
                </div>
                <div class="lg:flex lg:flex-col lg:justify-end ">
                    <p @click="makeBig('fort')" class="text-md cursor-pointer text-right" v-bind:class="{ 'text-6xl': fort_big }">
                        ${{fort_pmt}} per fortnight
                    </p>
                </div>
                <div class="lg:flex lg:flex-col lg:justify-end ">
                    <p @click="makeBig('month')" class="text-md cursor-pointer text-right" v-bind:class="{ 'text-6xl': monthly_big }">
                        ${{monthly_pmt}} per month
                    </p>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
// Author is Jason Lloyd Law 
// contact me at jason.lloyd.law@gmail.com or call me on 0400 696 332
        data: function() {
return {
            vehicle_price: 30000,
            accessories: 0,
            trade_value: 0,
            trade_payout: 0,
            payout_lender: '',
            sign_deposit: 2000,
            further_deposit: 0,
            origination_fee: 975,
            brokerage: 0,
            gap: 0,
            cci: 0,
            warranty: 0,
            lender_fee: 398,
            other_fee: 0,
            monthly_fee: 0,
            term: 48,
            apr: 5.99,
            rv: 0,
            rv_percent: 0,
            weekly_big: true,
            fort_big: false,
            monthly_big: false,
            hidden: false
        };
},

// Author is Jason Lloyd Law 
// contact me at jason.lloyd.law@gmail.com or call me on 0400 696 332
        filters:{
            money(amount){
                return "$" + +(Math.round(amount + "e+" + 2) + "e-" + 2);
            },
            option(naf,apr,term,divide){
                var int = apr/100/12;
                var y = Math.pow(1+ int, term);
                var pmt = (naf * y * int) / (y - 1)/ divide;
                return +(Math.round(pmt + "e+" + 2) + "e-" + 2);
            },
            pmt(naf,apr,term,rv,fee,divide){
                var x = naf - rv;
                var int = apr/100/12;
                var y = Math.pow(1+ int, term);
                var rvint = rv * int;
                var pmt = ((x * y * int) / (y - 1) + fee + rvint) / divide;
                return +(Math.round(pmt + "e+" + 2) + "e-" + 2);
            },
        },

// Author is Jason Lloyd Law 
// contact me at jason.lloyd.law@gmail.com or call me on 0400 696 332
        computed: {
        
            balance_financed(){
                return +this.vehicle_price
                    + +this.accessories
                    + +this.warranty
                    - +this.trade_value
                    + +this.trade_payout
                    - +this.sign_deposit
                    - +this.further_deposit;
            },

            naf(){
                return this.balance_financed +
                    +this.origination_fee
                    + +this.brokerage
                    + +this.gap
                    + +this.cci
                    + +this.lender_fee
                    + +this.other_fee
                    - +this.rv;
            },
            displaynaf(){
                return this.balance_financed +
                    +this.origination_fee
                    + +this.brokerage
                    + +this.gap
                    + +this.cci
                    + +this.lender_fee
                    + +this.other_fee;
            },
            intrate(){
                return this.apr / 100;
            },
            monthly_pmt(){
                var int = this.intrate/12;
                var y = Math.pow(1+ int, this.term);
                var rvint = this.rv * int;
                var pmt = (this.naf * y * int) / (y - 1) + this.monthly_fee + rvint;
                return +(Math.round(pmt + "e+" + 2) + "e-" + 2)
            },
            fort_pmt(){
                var term = this.term / 12 * 26;
                var int = this.intrate/26;
                var y = Math.pow(1+ int, term);
                var rvint = this.rv * int;
                var pmt = (this.naf * y * int) / (y - 1) + (this.monthly_fee / 2) + rvint;
                return +(Math.round(pmt + "e+" + 2) + "e-" + 2);
            },
            weekly_pmt(){
                var term = this.term / 12 * 52;
                var int = this.intrate/52;
                var y = Math.pow(1+ int, term);
                var rvint = this.rv * int;
                var pmt = (this.naf * y * int) / (y - 1) + (this.monthly_fee / 4) + rvint;
                return +(Math.round(pmt + "e+" + 2) + "e-" + 2);
            },
            
        },

// Author is Jason Lloyd Law 
// contact me at jason.lloyd.law@gmail.com or call me on 0400 696 332
        methods: {
            hotkey(){
                alert('that only works when logged into your account')
            },
            makeBig(io){
                switch(io){
                    case 'week': 
                    this.weekly_big = true;
                    this.fort_big = false;
                    this.monthly_big = false;
                    break;
                    case 'fort': 
                    this.weekly_big = false;
                    this.fort_big = true;
                    this.monthly_big = false;
                    break;
                    case 'month': 
                    this.weekly_big = false;
                    this.fort_big = false;
                    this.monthly_big = true;
                    break;
                    default:
                    this.weekly_big = true;
                    this.fort_big = false;
                    this.monthly_big = false;
                }
            },
            setRv(){
                this.rv = this.rv_percent/100 * this.vehicle_price;
            },
            setRvPercent(){
                this.rv_percent = this.rv / this.vehicle_price * 100;
            },
        },
        mounted(){
            
        }
    

}
</script>

<style>

</style>