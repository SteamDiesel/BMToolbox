<template>
	<div class="pt-12 pb-24 container mx-auto px-4 sm:px-2">
		<div>
			<h1 class="text-2xl">BDFI</h1>
			<p class="mt-5">Brokerage & Dealership Finance & Insurance.</p>
		</div>
		<div class="mt-16">
			<h1 class="text-2xl">Offline-first</h1>
			<p class="mt-5">
				BDFI is an "offline-first" web application. This means that it
				doesn't depend on an internet connection to function.
			</p>
			<p class="mt-5">
				Why offline-first? Because it's the fastest and most reliable
				way to build an application! <br />
				A spotty internet connection strikes at the worst times, such as
				when you're sitting with a client ready to quote payments or
				take an application.
				<br />With BDFI, you can be confident that if the internet
				fails, you won't be stuck waiting for the connection to improve.
				Every feature of this application, including access to all of
				your client data, can be used while fully offline!
			</p>
			<p class="mt-5">
				BDFI can be installed easily on your desktop or mobile device.
				So check your browser address bar for an icon inviting you to
				install it.
			</p>
		</div>
		<div class="mt-16">
			<h1 class="text-2xl">Where is my data stored?</h1>
			<p class="mt-5">
				All information you enter into lite.bdfi.app is saved to your
				browsers local storage (on your computer, tablet or mobile).
				<br />
				You can also retrieve all of your application data easily, if
				you wish to keep your own offline storage archive.
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
			<h1 class="text-2xl">Could I lose my data?</h1>
			<p class="mt-5">
				Yes, because data you enter into BDFI is stored only on that
				device, there is a risk of data loss if that device fails.<br />
				It is recommended that users make regular data-backups and store
				them on a usb key or cloud storage of your choice.
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
			<h1 class="text-2xl">Is my client data secure?</h1>
			<p class="mt-5">
				The client data stored on your device is not accessible to the
				internet, this is a standard security feature built into all
				modern web browsers. <br />
				This means that, to the extent that your device is secure, your
				client data is secure.
			</p>
			<p class="mt-5">
				Your connection to the BDFI secure server is fully encrypted.
			</p>
		</div>

		<div class="mt-16">
			<h1 class="text-2xl">
				What Operating Systems & Browsers does BDFI support?
			</h1>
			<p class="mt-5">
				BDFI is designed to utilise the latest technology standards in
				most modern web browsers such as Google Chrome, Microsoft Edge &
				Firefox.
			</p>
			<p class="mt-5">
				This means that BDFI will run on any Windows PC, Android, Mac,
				iPhone & Linux system that can run a modern browser.
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
	</div>
</template>
