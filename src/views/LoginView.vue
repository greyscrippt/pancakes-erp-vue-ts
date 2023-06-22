<template>
  <div class='login-mask'>
    <div class='login-container'>
      <div class='login-container-left'>
        <h2>Login</h2>
        
        <div class='input-wrapper'>
          <label for='email-input'>Email</label>
          <input id='email-input' type="text" />
        </div>

        <div class='input-wrapper'>
          <label for='password-input'>Password</label>
          <input id='password-input' type="password" />
        </div>

        <div class='buttons-wrapper'>
          <button class='buttons secondary'>Cancel</button>
          <div class='break' />
          <button class='buttons primary'>Login</button>
        </div>
      </div>
      <div class='login-container-right'>
        <img class='login-container-background' src='/public/login-background.jpg' />
      </div>
    </div>
  </div>
</template>


<style scoped>

.login-mask {
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

.login-container {
  display: flex;

  width: 50vw;
  height: 60vh;

  border-radius: 20px;

  background-color: white;
  overflow: hidden;

  box-shadow: 8px 8px 8px 1px rgba(0, 0, 0, 0.3);
}

.login-container-left {
  width: 100%;
  height: 100%;
  padding: 50px;
}
.login-container-right {
  display: flex;
  justify-content: right;
  width: 100%;
  height: 100%;
}

.login-container-background {
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
