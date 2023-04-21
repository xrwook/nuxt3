<template>
  <div>
    <slot name="header">
      <LayoutType2Header/>
    </slot>
  </div>
  <div class="content-wrapper">
    <div class="column menu">
      <SideMenu/>
    </div>
    <div class="column content">
      <div class="k-drawer-container k-drawer-mini k-drawer-push">
        <div class="card-container">
          <slot />
        </div>
      </div>
    </div>
  </div>
  <div>
    <slot name="footer">
      <LayoutType1Footer/>
    </slot>
  </div>

</template>
<style scoped>

</style>

<style lang="scss">
.column {
  display: inline-block;
}

.column.content{
  min-width: 500px;
}


.k-item.k-menu-item.k-drawer-item.k-state-selected {
  color: #ffffff;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 220px 1fr;
}

.k-drawer-container.k-drawer-push {
  display: inherit;
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>
