<template>
  <Button
    :class="['bg-brand text-grey-new-900 hover:bg-brand/80 font-semibold text-sm', props.class]"
    :size="size"
    :variant="variant"
  >
    <slot />
  </Button>
</template>

<script setup lang="ts">
import { Button, type ButtonVariants } from '~/components/ui/button'
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
})
</script>

<style scoped>

</style>
