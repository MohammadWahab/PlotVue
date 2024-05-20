<template>
<div class="body">
  <div class="login-card">
        <h1>Login</h1>
        <form action="dashboard.html">
            <input type="text" placeholder="Username" required>
            <input type="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
        
        <router-link to="/signup">
            <p>Don't have an account? Register Here!</p>
        </router-link>
    </div>
</div>
</template>

<script>
export default {
   
}
</script>



<style scoped>
#app {
  /* This style below will be inherited */
  padding-top: 0px !important;
  padding-left: 0px;
  padding-right: 0px;
}
      .body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;  /* Choose your desired font family here */
            /* background-color: #f5f5f5; */
            background-image: linear-gradient(to right, #ff9999, #66b3ff);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        /* Login Card Styles */
        .login-card {
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
            width: 350px;
            padding: 30px;
            text-align: center;
        }

        .login-card h1 {
            margin-bottom: 20px;
            color: #333;
        }

        .login-card input {
            width: 87%;
            padding: 15px 20px;
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 16px;
        }

        .login-card button {
            width: 100%;
            padding: 15px 20px;
            margin-top: 20px;
            border: none;
            border-radius: 4px;
            background-color: #007bff;
            color: white;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.2s ease-in-out;
        }

        .login-card button:hover {
            background-color: #0056b3;
        }

        .login-card p {
            color: #007bff;
            text-decoration: none;
            font-size: 14px;
            margin-top: 20px;
            display: block;
            transition: color 0.2s ease-in-out;
        }

        .login-card a:hover {
            color: #0062cc;
        }

        /* Optional: Error Message Styling */
        #error-message {
            color: red;
            font-size: 14px;
            margin-top: 10px;
        }
</style>