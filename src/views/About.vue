<template>
	<div class="pt-12 pb-24 container mx-auto px-4 sm:px-2">
		<div>
			<h1 class="text-2xl">About lite.BDFI.app</h1>
			<p
				class="mt-5"
			>Brokerage & Dealership Finance & Insurance.</p>

		</div>
		<div class="mt-16">
			<h1 class="text-2xl">Offline first</h1>
			<p class="mt-5">
				BDFI is developed to be an "offline-first" web application. This means that it doesn't depend on an internet connection to function.
			</p>
			<p class="mt-5">
				Why offline-first? Unreliable internet connection strikes at the worst times, often when you're sitting with a client ready to take their application... 
				<br>If this happens, you won't be stuck making desperate small talk while you wait for the connection to improve. This application with all of your client data can be used without any connection at all.
			</p>
			<p class="mt-5">
				You can even install this application quickly and easily on your desktop or mobile device. So check your browser address bar for an icon inviting you to install it.
			</p>
			
		</div>
		<div class="mt-16">
			<h1 class="text-2xl">Where is your data?</h1>
			<p class="mt-5">
				All data you enter into lite.bdfi.app is saved to your browsers local storage (on your computer, tablet or mobile) and all client applications are stored as fully encrypted entries in our secure cloud infrastructure. <br>
				This "offline-first" approach gives you the benefits of additional data security and persistent offline access.
			</p>
			<p class="mt-5">
				You are also able to retrieve all of your application data easily, if you wish to also keep your own offline storage archive.
				<router-link class="hover:underline text-indigo-500 font-semibold" to="/data-dump">
					See all of your data here.
				</router-link> 
			</p>
		</div>
		<div class="mt-16">
			<h1 class="text-2xl">Is my client data secure?</h1>
			<p class="mt-5">
				Yes, we take data security and protection very seriously. <br> 
				All client data stored in our secure cloud is fully encrypted using AES-256.
			</p>
			<p class="mt-5">
				Your connection with our secure cloud is via an encrypted ssl connection, with no client information accessible to packet sniffing attacks.
			</p>
			<p class="mt-5">
				This means that the only security vulnerability to consider from here... is you (and anyone who has access to your devices and account). 
				<br> Please ensure you practice good online security by picking a long and unique password not shared with other accounts you have. 
			</p>
			<p class="mt-5">
				Better still, use a password manager to generate and store your passwords for you. We use and recommend <a class="hover:underline text-indigo-500 font-semibold" href="https://www.lastpass.com/" target="_blank">LastPass</a>.
			</p>
		</div>
	</div>
</template>
