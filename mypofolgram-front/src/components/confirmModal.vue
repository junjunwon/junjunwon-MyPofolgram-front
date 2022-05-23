<template>
 <Transition name="modal">
     <div v-if="show" class="modal-mask" @click="$emit('close')">  
        <!-- <div class="modal-wrapper"> -->
          <div class="confirm-modal-container">
              <slot name="body">default body</slot>
          <!-- </div> -->
      </div>
     </div>
 </Transition>
</template>
<script>
export default {
  props: {
    show: Boolean
  }
}
</script>