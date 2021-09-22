<template>
	<div class="pt-12 pb-24 container mx-auto px-4 sm:px-2">
		<div>
			<h1 class="text-2xl">About lite.BDFI.app</h1>
			<p class="mt-5">Brokerage & Dealership Finance & Insurance.</p>
		</div>
		<div class="mt-16">
			<h1 class="text-2xl">Offline-first</h1>
			<p class="mt-5">
				BDFI is an "offline-first" web application. This means that it
				doesn't depend on an internet connection to function.
			</p>
			<p class="mt-5">
				Why offline-first? Unreliable internet connection strikes at the
				worst times, often when you're sitting with a client ready to
				take their application...
				<br />If this happens, you won't be stuck making desperate small
				talk while you wait for the connection to improve. Every feature
				of this application, including access to all of your client
				data, can be used without any connection at all!
			</p>
			<p class="mt-5">
				You can even install this application quickly and easily on your
				desktop or mobile device. So check your browser address bar for
				an icon inviting you to install it.
			</p>
		</div>
		<div class="mt-16">
			<h1 class="text-2xl">Where is your data?</h1>
			<p class="mt-5">
				All data you enter into lite.bdfi.app is saved to your browsers
				local storage (on your computer, tablet or mobile). <br />
				This offline-first approach gives you the benefits of additional
				data security and persistent offline access.
			</p>
			<p class="mt-5">
				You are also able to retrieve all of your application data
				easily, if you wish to also keep your own offline storage
				archive.
				<router-link
					class="hover:underline text-indigo-500 font-semibold"
					to="/data-dump"
				>
					See all of your data here.
				</router-link>
			</p>
		</div>
		<div class="mt-16">
			<h1 class="text-2xl">Could I lose my data?</h1>
			<p class="mt-5">
				Yes, there is a chance that if your computer fails, then all of
				your data is at risk. <br />
				You should take regular backups of your data and store them in a
				usb key or cloud storage of your choice.
			</p>
			<p class="mt-5">
				<router-link
					class="hover:underline text-indigo-500 font-semibold"
					to="/data-dump"
				>
					See all of your data here.
				</router-link>
			</p>
		</div>
		<div class="mt-16">
			<h1 class="text-2xl">Can BDFI back up my data for me?</h1>
			<p class="mt-5">
				Yes, BDFI will offer automated secure cloud backups. This is
				part of a set of premium features that will be available in the
				future.
			</p>
		</div>
		<div class="mt-16">
			<h1 class="text-2xl">Is my locally stored data secure?</h1>
			<p class="mt-5">
				Yes, we take data security and protection very seriously. <br />
				The data stored on your device is not accessible to the
				internet.
			</p>
			<p class="mt-5">
				Your connection to our secure cloud is via an encrypted
				connection, with no client information accessible.
			</p>
		</div>
	</div>
</template>
