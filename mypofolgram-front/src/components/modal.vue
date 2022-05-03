<template>
    <Transition name="modal">
        <div v-if="show" class="modal-mask" @click="check($event)">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <slot name="header">default header</slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body">default body</slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            default footer
                            <button class="modal-default-button" @click="$emit('close')">OK</button>
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
        show: Boolean,
    },
    methods: {
        check: function (e) {
            let target = e.target;
            if (target.classList.contains("modal-wrapper")) {
                this.$emit("close");
            }
        },
    },
};
</script>
