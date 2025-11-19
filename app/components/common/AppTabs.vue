<template>
  <div
    class="app-tabs"
    :class="variantClasses"
  >
    <div class="app-tabs-header">
      <div
        v-for="tabItem in tabs"
        :key="tabItem.value"
        class="app-tabs-item"
        :class="{
          'app-tabs-item-active': tabItem.value === tab,
        }"
        @click="tab = tabItem.value"
      >
        {{ tabItem.title }}
      </div>
    </div>
    <div class="app-tabs-content">
      <slot
        :name="tab"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  tabs: { title: string, value: string }[]
  variant?: 'outline' | 'default'
}>(), {
  variant: 'default',
})

const tab = defineModel({
  type: String,
  required: true,
})

const variantClasses = computed(() => {
  if (props.variant === 'default') {
    return 'bg-white-new-100'
  }
  return 'border border-[#ebebeb]'
})
</script>
