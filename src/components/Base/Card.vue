<template>
    <div class="card">
        <div class="header">
            <h2>{{ name }}</h2>
            <a
                href="https://www.meetup.com/Bootcampers-Collective/events/gsnwzqyzjbfb/"
                >MeetUp Page</a
            >
        </div>
        <div class="body">
            <p>
                {{ description }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['name', 'description'],
};
</script>

<style lang="scss" scoped>
.card {
    height: auto;
    box-shadow: rgba(8, 35, 51, 0.1) 0px 3px 6px;
    border-radius: 8px;
    margin: 1rem 3rem;
    padding: 8px 24px;
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: center;
        padding: 4px;
    }
}
</style>
