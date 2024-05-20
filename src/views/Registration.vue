<template>
<div class="body">
   <div class="login-card">
        <h1>Register</h1>
        <form action="process_registration.php">
            <input type="text" placeholder="Username" required>
            <input type="email" placeholder="Email" required>
            <input type="password" placeholder="Password" required>
            <input type="password" placeholder="Confirm Password" required>
            <router-link to="/home">
            <button type="submit">Register</button>            
           </router-link>
            
        </form>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
     .body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: linear-gradient(to right, #ff9999, #66b3ff);
            /* background-color: #f0f0f0; */
        }

        .login-card {
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            width: 350px;
            padding: 30px;
            text-align: center;
        }

        .login-card h1 {
            margin-bottom: 20px;
            color: #333;
        }

        .login-card input {
            width: 90%;
            padding: 15px;
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 4px;
        }

        .login-card button {
            width: 100%;
            padding: 15px;
            margin-top: 20px;
            border: none;
            border-radius: 4px;
            background-color: #007BFF;
            color: white;
            font-size: 16px;
            cursor: pointer;
        }

        .login-card button:hover {
            background-color: #0056b3;
        }
</style>