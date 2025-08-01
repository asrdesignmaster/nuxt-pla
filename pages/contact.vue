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