<template>
	<div class="bg-gray-100">
		<div class="w-full xl:flex px-4 justify-between bg-gray-200 no-print">
			<!-- Menu -->
			<div class="flex flex-wrap">
				<!-- <button @click="switchPage('Summary')" :class="{'text-blue-600 border-t border-l border-r rounded-t-lg font-semibold': Summary, 'border-b': !Summary}" class="px-3 py-1 hover:text-blue-400">Summary</button> -->
				<div
					@click="switchPage('Identity')"
					:class="{
						'text-blue-600 bg-gray-100 border-t border-l border-r rounded-t-lg font-semibold': Identity,
						'border-b': !Identity,
					}"
					class="px-3 cursor-pointer py-1 hover:text-blue-400"
				>
					Identity
				</div>
				<!-- <button @click="switchPage('Kids')" :class="{'text-blue-600 border-t border-l border-r rounded-t-lg font-semibold': Kids, 'border-b': !Kids}" class="px-3 py-1 hover:text-blue-400">Kids</button> -->
				<div
					@click="switchPage('Addresses')"
					:class="{
						'text-blue-600 bg-gray-100 border-t border-l border-r rounded-t-lg font-semibold': Addresses,
						'border-b': !Addresses,
					}"
					class="px-3 cursor-pointer py-1 hover:text-blue-400"
				>
					Addresses
				</div>
				<div
					@click="switchPage('Employers')"
					:class="{
						'text-blue-600 bg-gray-100 border-t border-l border-r rounded-t-lg font-semibold': Employers,
						'border-b': !Employers,
					}"
					class="px-3 cursor-pointer py-1 hover:text-blue-400"
				>
					Employers
				</div>
				<!-- <button @click="switchPage('Properties')" :class="{'text-blue-600 border-t border-l border-r rounded-t-lg font-semibold': Properties, 'border-b': !Properties}" class="px-3 py-1 hover:text-blue-400">Properties</button> -->
				<div
					@click="switchPage('Vehicles')"
					:class="{
						'text-blue-600 bg-gray-100 border-t border-l border-r rounded-t-lg font-semibold': Vehicles,
						'border-b': !Vehicles,
					}"
					class="px-3 cursor-pointer py-1 hover:text-blue-400"
				>
					Vehicles
				</div>
				<div
					@click="switchPage('CreditCards')"
					:class="{
						'text-blue-600 bg-gray-100 border-t border-l border-r rounded-t-lg font-semibold': CreditCards,
						'border-b': !CreditCards,
					}"
					class="px-3 cursor-pointer py-1 hover:text-blue-400"
				>
					Credit Cards
				</div>
				<div
					@click="switchPage('OtherLoans')"
					:class="{
						'text-blue-600 bg-gray-100 border-t border-l border-r rounded-t-lg font-semibold': OtherLoans,
						'border-b': !OtherLoans,
					}"
					class="px-3 cursor-pointer py-1 hover:text-blue-400"
				>
					Other Loans
				</div>
				<div
					@click="switchPage('OtherAssets')"
					:class="{
						'text-blue-600 bg-gray-100 border-t border-l border-r rounded-t-lg font-semibold': OtherAssets,
						'border-b': !OtherAssets,
					}"
					class="px-3 cursor-pointer py-1 hover:text-blue-400"
				>
					Other Assets
				</div>
				<div
					@click="switchPage('DomesticExpenses')"
					:class="{
						'text-blue-600 bg-gray-100 border-t border-l border-r rounded-t-lg font-semibold': DomesticExpenses,
						'border-b': !DomesticExpenses,
					}"
					class="px-3 cursor-pointer py-1 hover:text-blue-400"
				>
					Domestic Expenses
				</div>
				<div
					@click="switchPage('Defaults')"
					:class="{
						'text-blue-600 bg-gray-100 border-t border-l border-r rounded-t-lg font-semibold': Defaults,
						'border-b': !Defaults,
					}"
					class="px-3 cursor-pointer py-1 hover:text-blue-400"
				>
					Credit Impairments
				</div>
				<div
					@click="switchPage('BalanceSheet')"
					:class="{
						'text-blue-600 bg-gray-100 border-t border-l border-r rounded-t-lg font-semibold': BalanceSheet,
						'border-b': !BalanceSheet,
					}"
					class="px-3 cursor-pointer py-1 hover:text-blue-400"
				>
					Balance Sheet
				</div>
			</div>
			<div>
				<button
					@click="addPersonToApplication"
					class="bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full mx-2"
				>
					<svg viewBox="0 0 24 24" class="h-4 w-4">
						<path
							class="primary"
							d="M9 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
						/>
						<path
							class="secondary"
							d="M17 9V7a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2zm-1 10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"
						/>
					</svg>
				</button>
			</div>
		</div>

		<div class="xl:flex xl:justify-around ml-10">
			<div
				class="w-full mr-10 mb-10 lg:max-w-2xl"
				v-for="(person, index) in application.people"
				:key="index"
				:person_index="index"
				:people="application.people"
				:person="person"
			>
				<div>
					<h2 class="text-3xl font-semibold">
						{{ person.first_name }}
						<span v-if="person.alias">"{{ person.alias }}"</span>
						{{ person.surname }}
					</h2>
					<select
						name="role"
						:id="'app_role' + index"
						v-model="person.role"
					>
						<option
							v-for="(role, index) in app_roles"
							:key="index"
							value="role"
							>{{ role }}</option
						>
					</select>
					<hr />
				</div>

				<div v-if="Identity">
					<Identity
						:key="'id' + index"
						:person_index="index"
						:people="application.people"
						:person="person"
					>
						<button
							@click="
								dropFromArray({
									array: application.people,
									object: person,
									type: 'person',
									index: index,
									person: person,
								})
							"
							class="bg-gray-300 hover:bg-red-200 p-2 shadow-lg rounded-lg no-print"
						>
							delete
							<!-- <svg viewBox="0 0 24 24" class="h-5 w-5">
								<path class="primary" d="M9 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
								<path
									class="secondary"
									d="M15 9h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2zm1 10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"
								/>
								</svg>-->
						</button>
					</Identity>

					<Kids
						:key="'kid' + index"
						:person_index="index"
						:people="application.people"
						:person="person"
					/>
				</div>

				<div v-if="Addresses" class="w-full">
					<Addresses
						:key="'a' + index"
						:person_index="index"
						:people="application.people"
						:person="person"
					/>
					<Properties
						:key="'p' + index"
						:person_index="index"
						:people="application.people"
						:person="person"
					/>
				</div>

				<div v-if="Employers" class>
					<Employers
						:key="index"
						:person_index="index"
						:people="application.people"
						:person="person"
					/>
				</div>
				<div v-if="Vehicles" class>
					<Vehicles
						:key="index"
						:person_index="index"
						:people="application.people"
						:person="person"
					/>
				</div>
				<div v-if="CreditCards" class>
					<CreditCards
						:key="index"
						:person_index="index"
						:people="application.people"
						:person="person"
					/>
				</div>
				<div v-if="OtherLoans" class>
					<OtherLoans
						:key="index"
						:person_index="index"
						:people="application.people"
						:person="person"
					/>
				</div>
				<div v-if="OtherAssets" class>
					<OtherAssets
						:key="index"
						:person_index="index"
						:people="application.people"
						:person="person"
					/>
				</div>
				<div v-if="DomesticExpenses" class>
					<DomesticExpenses
						:key="index"
						:person_index="index"
						:people="application.people"
						:person="person"
					/>
				</div>
				<div v-if="Defaults" class>
					<Defaults
						:key="'d' + index"
						:person_index="index"
						:people="application.people"
						:person="person"
					/>
					<Judgements
						:key="'j' + index"
						:person_index="index"
						:people="application.people"
						:person="person"
					/>
					<Bankruptcies
						:key="'b' + index"
						:person_index="index"
						:people="application.people"
						:person="person"
					/>
				</div>
				<div v-if="BalanceSheet" class>
					<BalanceSheet
						:key="index"
						:person_index="index"
						:people="application.people"
						:person="person"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Identity from "@/components/application/sections/Identity";
	import Kids from "@/components/application/sections/Kids";
	import Addresses from "@/components/application/sections/Addresses";
	import Employers from "@/components/application/sections/Employers";
	import Properties from "@/components/application/sections/Properties";
	import Vehicles from "@/components/application/sections/Vehicles";
	import CreditCards from "@/components/application/sections/CreditCards";
	import OtherLoans from "@/components/application/sections/OtherLoans";
	import OtherAssets from "@/components/application/sections/OtherAssets";
	import DomesticExpenses from "@/components/application/sections/DomesticExpenses";
	import Defaults from "@/components/application/sections/Defaults";
	import Judgements from "@/components/application/sections/Judgements";
	import Bankruptcies from "@/components/application/sections/Bankruptcies";
	import BalanceSheet from "@/components/application/sections/BalanceSheet";
	import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
	export default {
		name: "AppPage",
		components: {
			Identity,
			Kids,
			Addresses,
			Employers,
			Properties,
			Vehicles,
			CreditCards,
			OtherLoans,
			OtherAssets,
			DomesticExpenses,
			Defaults,
			BalanceSheet,
			Judgements,
			Bankruptcies,
		},
		data() {
			return {
				Summary: false,
				Identity: true,
				Kids: false,
				Addresses: false,
				Employers: false,
				Properties: false,
				Vehicles: false,
				CreditCards: false,
				OtherLoans: false,
				OtherAssets: false,
				DomesticExpenses: false,
				Defaults: false,
				BalanceSheet: false,
			};
		},
		computed: {
			...mapState(["applications", "app_roles"]),
			...mapGetters(["application"]),
		},

		methods: {
			switchPage(page) {
				this.Summary = false;
				this.Identity = false;
				this.Kids = false;
				this.Addresses = false;
				this.Employers = false;
				this.Properties = false;
				this.Vehicles = false;
				this.CreditCards = false;
				this.OtherLoans = false;
				this.OtherAssets = false;
				this.DomesticExpenses = false;
				this.Defaults = false;
				this.BalanceSheet = false;
				switch (page) {
					case "Identity":
						this.Identity = true;
						break;
					case "Kids":
						this.Kids = true;
						break;
					case "Addresses":
						this.Addresses = true;
						break;
					case "Employers":
						this.Employers = true;
						break;
					case "Properties":
						this.Properties = true;
						break;
					case "Vehicles":
						this.Vehicles = true;
						break;
					case "CreditCards":
						this.CreditCards = true;
						break;
					case "OtherLoans":
						this.OtherLoans = true;
						break;
					case "OtherAssets":
						this.OtherAssets = true;
						break;
					case "DomesticExpenses":
						this.DomesticExpenses = true;
						break;
					case "Defaults":
						this.Defaults = true;
						break;
					case "BalanceSheet":
						this.BalanceSheet = true;
						break;
				}
			},
			...mapMutations([
				"addPersonToApplication",
				"addBusinessToApplication",
				"removePersonFromApplication",
			]),
			...mapActions(["dropFromArray"]),
		},
	};
</script>

<style>
	@media print {
		.for-printing {
			display: flex !important;
		}
	}
</style>
