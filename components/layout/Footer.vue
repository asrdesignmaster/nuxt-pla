<template>
  <footer class="footer">
    <div class="container">
      <div class="flex flex-col lg:flex-row justify-center lg:justify-between gap-3">

        <p>&copy; 2025 {{ config.siteName }}. All rights reserved.</p>
        <p>Design & Developed by <a href="https://3dotsmedia.in" class="underline">3dotsmedia.in</a></p>
      </div>
    </div>
  </footer>
  <footer class="mobile_footer | block md:hidden relative z-[999]">
    <div class="footer_content | hover:text-primary">

      <SocialIcons />
    </div>
  </footer>
</template>

<script setup>
import SocialIcons from '~/components/layout/Social.vue'

const config = useAppConfig()
</script>
<style scoped>
.footer {
  padding: 20px;
  background-color: #000;
  color: white;
  text-align: center;
}
.mobile_footer .footer_content {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #2a2a2a;
    padding: 12px;
    color: #dadada;
    :where(.i-mdi\:instagram){
        background-color: #fff !important;
        
      }
    .nav_wrap{
      justify-content: space-around;
    }
  }
  .mobile_footer .footer_content .social_icon {
  fill: #fff; 
}


@media (max-width:768px) {
  .footer {
    padding-bottom: 100px;
  }

  
}
</style>
