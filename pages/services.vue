<script setup>
import Services from '~/components/pages/Services.vue';
import CallNow from '~/components/pages/CallNow.vue'

const config = useAppConfig()

useHead({
    title: 'Services - '+ config.siteName,
    meta: [
        {
            name: 'description',
            content: 'SERVICES Pure Gold Leafing for Masjid In Masjid gold leafing leafing is done on Mehrab, Mimber, gumbad and ayat . Mostly it’s done in original gold but rarely in artificial. Shrines & Temples In a residential interior space leafing gives aesthetic looks and it is usually done to enhance the decoration of the space .Gold […]'
        },
    ]
})

</script>

<template>
    <Services />
    <section>
        <div class="holy_places | py-60 relative">
            <div class="curtain "></div>
            <div class="container">
                <div class="text-center relative z-10 px-0 lg:px-52">
                    <h3 class="text-white font-bold text-4xl uppercase mb-4">HOLY PLACES</h3>
                    <p class="text-white text-2xl py-5">In Holy places, like Mandir, Masjid, Grudwara and Holy Shrines. Only real Gold and precious materials are being used from centuries.</p>
                    <p class="text-white text-2xl py-5">In olden times only 24kt real Gold Leaves were used for interior decoration inspite of very heavy budget. But synthetic leaves from China came in market which wrote a new era in the world of interior lamination and paintings.</p>
                </div>
            </div>
        </div>
    </section>
    <CallNow />

</template>

<style>
.holy_places {
    background: url('/images/relegious.webp');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;

}
</style>