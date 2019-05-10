<template>
  <main>
    <section id="call-to-action">
      <h2>Bootcamper's Collective Summer Hackathon Preparation</h2>
    </section>

    <section id="project-requirements">
      <p>
        The next BCC Hackathon is coming soon and we are looking to build out an
        improved hackathon registration system
      </p>

      <div>
        <h1>Project requirement checklist</h1>
        <ul>
          <li>
            Allow users to sign up and create a profile that contains contact
            information and skill set
          </li>
          <li>Allow users to create and join teams</li>
          <li>Allow team leaders to manage team members</li>
          <li>Have fun collaborating on this project!</li>
        </ul>
      </div>
    </section>
    <section id="project-technologies">
      <div>
        <h1>What technologies are we using for the project?</h1>
        <div id="technology-logos">
          <div id="vue">
            <img
              src="../assets/vue-logo.png"
              width="162"
              height="162"
              alt="Vue.js Logo"
            />
            <p>Vue.js</p>
          </div>
          <div id="firebase">
            <img
              src="../assets/firebase-logo.png"
              width="162"
              height="162"
              alt="Firebase Logo"
            />
            <p>Firebase</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
main {
  text-align: center;

  #call-to-action {
    width: auto;
    font-size: 20px;
    font-weight: bold;
  }

  #project-requirements {
    p {
      font-size: 20px;
    }
  }

  #project-technologies {
    #technology-logos {
      display: flex;
      justify-content: center;
      grid-template-columns: 1fr 1fr;
    }
  }
}
</style>
