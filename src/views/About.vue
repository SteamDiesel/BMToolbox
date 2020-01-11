<template>
	<div class="pt-12 pb-24 container mx-auto px-4 sm:px-2">
		<div>
			<h1 class="text-2xl">About the lite version of BDFI.app</h1>
			<p
				class="mt-5"
			>BDFI is a handy set of tools for 'Broker & Dealer Finance & Insurance'.</p>

			<p class="mt-5">
				This is the free version, which has many useful features for
				operating a Finance and Insurance department in your motor dealership 
				or Finance Brokerage.
			</p>
		</div>
		<div class="mt-16">
			<h1 class="text-2xl">Features</h1>
			<p class="mt-5">- Fully featured loan calculator with 3 customizable fields.</p>
			<p
				class="mt-5"
			>- A clean and user friendly application form, built for taking both quick or detailed application from your client.</p>
			<p
				class="mt-5"
			>- The application form has no "Required fields" or "Minimum lengths" because you're a professional: you know what you need to collect.</p>
			<p class="mt-5">- User customizable fields and pre-sets for the loan calculator.</p>

			<p class="mt-5">- More features are being added every day!</p>
		</div>
		<div class="mt-16">
			<h1 class="text-2xl">Where is your data?</h1>
			<p class="mt-5">
				All data you enter into the free version of lite.bdfi.app is saved to your browsers local storage cache (on your computer, tablet or mobile),
				this comes with the benefit of extra data security and persistent offline access.
				It also means we don't have access to your client data,
				in fact, the only data we collect is your contact information.
				<br />However:
				<strong>this means you could lose the data if you clear your browser's cache!</strong>
				<br />
			</p>
			<p class="mt-5">
				It is easy to back up your data, it can be retrieved from this app as plain text (JSON) and
				you are free to store and create backups for it as you see fit.
				Other data formats may become available on request. <br>
				<router-link class="hover:underline text-indigo-500 font-semibold" to="/data-dump">
					See all of your data here.
				</router-link> 
			</p>
			<p class="mt-5">
				A cloud storage option is being considered for the lite version and
				you are encouraged to express your interest by contacting us.
				<br />Storing your data and your client's sensitive personal information securely in 
				the cloud is costly to set up and maintain. 
			</p>
			<p class="mt-5">
				You can expect cloud storage, service API integrations and many more features in 
				the pro version when it launches in the 1st quarter of 2020.
			</p>
		</div>

		<div class="mt-16 md:flex md:items-center">
			<div class="w-full md:w-1/5 mx-4 flex justify-center">
				<img class="w-1/2 md:w-full rounded-full" src="@/assets/Jason Law.jpg" alt="Jason Law" />
			</div>
			<div>
				<h1 class="text-2xl">Contact</h1>
				<p class="mt-5">
					This is a project built by me, Jason Law.
					<br />I've been a Business Manager Locum in the motor trade since 2012, an
					asset finance broker since 2014 and a web developer since 2017.
					<br />In 2012 it seemed weird that many Business Managers and Finance Brokers still take handwritten
					applications... now it's 2020 and we've made very little progress.
				</p>
				<p class="mt-5">
					To be fair, there haven't been many good alternatives to pen and paper in this domain. 
					Hopefully this app can change some minds.	
				</p>
				<p class="mt-5">
					So I'm building the features into this system that I use, let me know if you think 
					something is missing.
				</p>
				<p class="mt-5">
					You can find me on
					<a
						class="hover:underline text-indigo-500 font-semibold"
						href="https://www.linkedin.com/in/jason-bdfi/"
					>LinkedIn</a>, or at my developer portfolio
					<a
						class="hover:underline text-indigo-500 font-semibold"
						href="https://steamdiesel.dev/"
					>SteamDiesel.dev</a>.
				</p>
			</div>
		</div>
	</div>
</template>
