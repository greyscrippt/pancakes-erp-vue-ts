<template>
  <div class='register-mask'>
    <div class='register-container'>
      <div class='register-container-left'>
        <h2>Register</h2>
        
        <div class='input-wrapper'>
          <label for='username-input'>Username</label>
          <input id='username-input' type="text" />
        </div>

        <div class='input-wrapper'>
          <label for='email-input'>Email</label>
          <input id='email-input' type="text" />
        </div>

        <div class='input-wrapper'>
          <label for='password-input'>Password</label>
          <input id='password-input' type="password" />
        </div>

        <div class='input-wrapper'>
          <RouterLink to="/login">Already have an account? Go to login.</RouterLink>
        </div>

        <div class='buttons-wrapper'>
          <button class='buttons secondary'>Back</button>
          <div class='break' />
          <button class='buttons primary'>Register</button>
        </div>
      </div>
      <div class='register-container-right'>
        <img class='register-container-background' src='/public/login-background.jpg' />
      </div>
    </div>
  </div>
</template>


<style scoped>

.register-mask {
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background-color: rgba(255, 255, 255, 0.1);
}

.register-container {
  display: flex;

  width: 50vw;
  height: 70vh;

  border-radius: 20px;

  background-color: white;
  overflow: hidden;

  box-shadow: 8px 8px 8px 1px rgba(0, 0, 0, 0.3);
}

.register-container-left {
  width: 100%;
  height: 100%;
  padding: 50px;
}
.register-container-right {
  display: flex;
  justify-content: right;
  width: 100%;
  height: 100%;
}

.register-container-background {
  object-fit: none;
  width: 100%;
  height: 100%;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.buttons {
  width: 100%;
}

.buttons:hover {
  cursor: pointer;
}

.buttons-wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.break {
  width: 24px;
}

</style>
