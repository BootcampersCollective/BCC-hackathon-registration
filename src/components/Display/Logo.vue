<template>
    <img
        id="logo"
        src="../../assets/BCC_unfilled.png"
        alt="Bootcamper's Collective Logo"
        :width="this.width"
        :height="this.height"
    />
</template>

<script>
export default {
    name: 'logo',
    props: {
        width: Number,
        height: Number,
    },
};
</script>
