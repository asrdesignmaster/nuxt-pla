<template>
      <section class="about_us | py-20">
            <div class="container">

                  <div class="md:flex">
                        <!-- Left Side -->
                        <div class="md:w-2/3">
                              <h2 class="flex items-center gap-3 text-[24px] lg:text-4xl">Get in touch </h2>
                              <p class="text-gray-700">
                                    Interested to know more about leafing or need to get advice which leafing is best for your . you can email or call us anytime.
                              </p>
                              <div class="py-4 text-gray-700 mt-3">
                                    <p class="uppercase text-2xl font-bold">Paradise Leafing Art</p>
                                    <p>
                                          PB Marg, 6th Kharwa Lane, 22-A,<br/>
                                          Yaqoob bldg. 2nd floor, <br/>
                                          Mumbai – 400 004.
                                    </p>
                              </div>
                              <div class="py-4 text-gray-700">
                                    <div class="flex items-center py-2">
                                          <Icon name="mynaui:mobile-solid" class="text-2xl mr-2" />+91 982 076 7744
                                    </div>
                                    <div class="flex items-center py-2">
                                          <Icon name="mynaui:mobile-solid" class="text-2xl mr-2" />+91 911 057 4692
                                    </div>
                                    <div class="flex items-center py-2">
                                          <Icon name="mdi:mail" class="text-2xl mr-2" />paradiseleafingart@gmail.com
                                    </div>
                                    <div class="flex items-center py-2">
                                          <Icon name="mdi:mail" class="text-2xl mr-2" />info@paradiseleafingart.in
                                    </div>

                              </div>
                              <SocialIcons />

                        </div>

                        <div class="md:w-1/3 py-5 px-0 lg:p-10 flex flex-col justify-between">
                              <form class="space-y-6"  id="contactForm">
                                    <div class="">
                                          <!-- Full Name -->
                                          <div class="mb-6">
                                                <input type="text" name="fullName" placeholder="Full Name"
                                                      class="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-gray-700 focus:border-gray-800"
                                                      required />
                                          </div>

                                          <!-- Email -->
                                          <div class="mb-6">
                                                <input type="email" name="email" placeholder="Email Address"
                                                      class="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-gray-700 focus:border-gray-800"
                                                      required />
                                          </div>

                                          <!-- Mobile Number -->
                                          <div class="mb-6">
                                                <input type="tel" name="mobile" placeholder="Mobile Number"
                                                      class="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-gray-700 focus:border-gray-800"
                                                      required />
                                          </div>

                                          <!-- Company -->
                                          <div class="mb-6">
                                                <input type="text" name="company" placeholder="Company"
                                                      class="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-gray-700 focus:border-gray-800"
                                                      required />
                                          </div>
                                          <!-- Message -->
                                          <div class="mb-6">
                                                <textarea id="message" name="message"
                                                      class="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                                                      required>Message</textarea>
                                          </div>



                                    </div>

                                    <!-- Submit -->
                                    <div>
                                          <button type="submit"
                                                class="w-full py-3 px-6 bg-[#147CB5] text-white font-medium rounded-lg shadow-sm hover:bg-red-700 transition duration-300">
                                                Contact us
                                          </button>
                                    </div>
                              </form>
                              <p id="status" style="display:none;color:green;">Message is sent!</p>
                              <p id="error" style="display:none;color:red;"></p>

                        </div>

                        <!-- Right Side - Form -->

                  </div>

            </div>
      </section>

</template>

<script setup>
import SocialIcons from '~/components/layout/Social.vue'

const config = useAppConfig()

useHead({
    title: 'Contact us - '+ config.siteName,
    meta: [
        {
            name: 'description',
            content: 'CONTACT Interested to know more about leafing or need to get advice which leafing is best for your . you can email or call us anytime. MumbaiPB Marg, 6th Kharwa Lane, 22-A, Yaqoob bldg. 2nd floor, Mumbai – 400 004. WhatsApp Now+91 982 076 7744+91 911 057 4692 Emailparadiseleafingart@gmail.cominfo@paradiseleafingart.in Your name Your email Subject Your […]'
        },
    ]
})
</script>