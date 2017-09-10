<template>
    <span class="vtooltip-wrapper">
        <slot></slot>

        <span
            :style="{ color: color, backgroundColor: bgcolor, fontSize: textsize + 'px' }"
            :class="['vtooltip', always ? 'vtooltip-always' : '', 'vtooltip-' + position, rounded ? 'vtooltip-rounded' : '']">
            {{ text }}<i :style="{'border-bottom-color': bgcolor, 'border-top-color': bgcolor }"></i>
        </span>
    </span>
</template>

<script>
    export default {
        props: {
            always: {
                type: Boolean,
                default: false
            },
            rounded: {
                default: false
            },
            text: {
                type: String,
                required: true
            },
            color: {
                type: String,
                default: '#ffffff'
            },
            bgcolor: {
                type: String,
                default: '#383838'
            },
            textsize: {
                type: Number,
                default: 13
            },
            position: {
                type: String,
                validator(value) {
                    if(['top', 'bottom'].indexOf(value) >= 0) {
                        return true
                    }
                    console.warn('Position accepted values: top, bottom, left, right')
                    return false
                },
                default: 'bottom'
            }
        }
    };
</script>

<style>
.vtooltip-wrapper {
    position: relative;
}
.vtooltip-wrapper:hover > .vtooltip {
    opacity: 1;
    transition-delay: 100ms;
    transform: translateX(-50%) translateY(5px);
}
.vtooltip-always {
    opacity: 1 !important;
    transition-delay: 100ms;
    transform: translateX(-50%) translateY(5px) !important;
}
.vtooltip {
	margin: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    position: absolute;
    padding: 8px 10px;
    line-height: 12px;
    white-space: nowrap;
    box-shadow: 4px 4px 8px rgba(0,0,0,.3);
    top: 100%;
    left: 50%;
    z-index: 1000000;
    pointer-events: none;
    opacity: 0;
    transition: .3s ease;
    transition-delay: 100ms;
    transform: translateX(-50%) translateY(-8px);
}
.vtooltip i {
    position: absolute;
    background: 0 0;
    border: 6px solid transparent;
    z-index: 1000001;
    left: calc(50% - 6px);
}
.vtooltip-top {
    top: -200%;
}
.vtooltip-rounded {
    border-radius: 10px;
}
.vtooltip-top i {
    top: auto;
    border-bottom: none;
    bottom: -6px;
}
.vtooltip-bottom i {
    top: auto;
    border-top: none;
    top: -6px;
}
</style>