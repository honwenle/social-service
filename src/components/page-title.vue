<template>
  <div class="page-title">
    <div class="title-left">{{$route.query.title}}</div>
    <div class="title-right">
      <slot></slot>
    </div>
  </div>
</template>
