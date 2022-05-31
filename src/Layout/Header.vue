<template>
  <header class="text-gray-50">
    <Header class="xl:hidden" />
    <header-grand class="hidden xl:flex" />
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <footer-deux class="sm:hidden" />
    <Footer class="hidden sm:flex" />
  </footer>
</template>