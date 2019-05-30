<template>
    <main>
        <h1>Event</h1>
        <section
            class="event-container"
            v-for="{ id, name, description } in events"
            :key="id"
        >
            <card :name="name" :description="description" />
        </section>
    </main>
</template>

<script>
import Card from '@/components/Base/Card.vue';

export default {
    components: {
        Card,
    },
    data() {
        return {
            events: [
                {
                    id: 1,
                    name: 'CO.js - JavaScript Study Group',
                    description:
                        "CO.js - weekly JavaScript meetup in Denver. We'll be meeting weekly on Mondays to do lightning talks, community projects, coding challenges / white boarding, and more. Feel free to work with the group or study on your own",
                },
                {
                    id: 2,
                    name: "Coders' Workshop",
                    description:
                        "Join Bootcampers Collective in our collaborative new group, Coders' Workshop. Our goal? To make you a better problem solver.",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped></style>
