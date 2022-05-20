<template>
 <Transition name="modal">
     <div v-if="show" class="modal-mask" @click="$emit('close')">  
         <div class="modal-wrapper">
        <div class="confirm-modal-container">
          <div class="modal-header">
            <slot name="header">default header</slot>
          </div>

          <div class="confirm-modal-body">
            <slot name="body">default body</slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button
                class="modal-default-button"
                @click="$emit('close')"
              >OK</button>
            </slot>
          </div>
        </div>
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