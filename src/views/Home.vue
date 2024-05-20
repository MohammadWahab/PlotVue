<template>
  <div class="root">
    <header class="header">
        <div class="left-section">
          <img class="hamburger-menu" src="@/assets/images/icons/hamburger-menu.svg">
          <img class="logo" src="@/assets/images/channel-pictures/bskds.jpg" alt="Logo">
          <!-- <img class="youtube-logo" src="icons/youtube-logo.svg"> -->
        </div>
        <div class="right-section">
             <router-link to="/">
                <button class="logout-button">Logout</button>
            </router-link>
            
        </div>
    </header>

    <nav class="sidebar">
       <div class="sidebar-link">
          <img src="@/assets/images/icons/home.svg">
          <div>Notification</div>
        </div>
        <div class="sidebar-link">
          <router-link to="/search">
          <img src="@/assets/images/icons/explore.svg">
          <div>Explore</div>
          </router-link>
        </div>
        <div class="sidebar-link">
          <img src="@/assets/images/icons/home.svg">
          <div>Profile</div>
        </div>
        <div class="sidebar-link">
          <img src="@/assets/images/icons/explore.svg">
          <div>Setting</div>
        </div>
        <div class="sidebar-link">
          <img src="@/assets/images/icons/home.svg">
          <div>News</div>
        </div>
        <div class="sidebar-link">
          <router-link to="/home">
          <img src="@/assets/images/icons/explore.svg">
          <div>Home</div>
          </router-link>
        </div>
    </nav>
    
    <div class="card-section">
        <div class="card">
            <router-link to="/details">
              <img src="@/assets/images/channel-pictures/land1.jpg" alt="Picture 2" class="card-image">
           </router-link>
            
            <div class="card-content">
                <h3 class="card-title">Property Title</h3>
                <p class="card-description">This is a description for This property.</p>
            </div>
        </div>
        <div class="card">
            <router-link to="/details">
              <img src="@/assets/images/channel-pictures/land2.jpg" alt="Picture 2" class="card-image">
           </router-link>
            <div class="card-content">
                <h3 class="card-title">Property Title</h3>
                <p class="card-description">This is a description for This property..</p>
            </div>
        </div>
        <div class="card">
            <router-link to="/details">
              <img src="@/assets/images/channel-pictures/land3.jpg" alt="Picture 2" class="card-image">
           </router-link>
            <div class="card-content">
                <h3 class="card-title">Property Title</h3>
                <p class="card-description">This is a description for This property..</p>
            </div>
        </div>
        <div class="card">
            <router-link to="/details">
              <img src="@/assets/images/channel-pictures/land1.jpg" alt="Picture 2" class="card-image">
           </router-link>
            <div class="card-content">
                <h3 class="card-title">Property Title</h3>
                <p class="card-description">This is a description for This property..</p>
            </div>
        </div>
        <div class="card">
            <router-link to="/details">
              <img src="@/assets/images/channel-pictures/land2.jpg" alt="Picture 2" class="card-image">
           </router-link>
            <div class="card-content">
                <h3 class="card-title">Property Title</h3>
                <p class="card-description">This is a description for This property..</p>
            </div>
        </div>
        <div class="card">
            <router-link to="/details">
              <img src="@/assets/images/channel-pictures/land3.jpg" alt="Picture 2" class="card-image">
           </router-link>
            <div class="card-content">
                <h3 class="card-title">Property Title</h3>
                <p class="card-description">This is a description for This property..</p>
            </div>
        </div>
         <div class="card">
           <router-link to="/details">
              <img src="@/assets/images/channel-pictures/land1.jpg" alt="Picture 2" class="card-image">
           </router-link>
            <div class="card-content">
                <h3 class="card-title">Property Title</h3>
                <p class="card-description">This is a description for This property..</p>
            </div>
        </div>
        <div class="card">
            <router-link to="/details">
              <img src="@/assets/images/channel-pictures/land2.jpg" alt="Picture 2" class="card-image">
           </router-link>
            <div class="card-content">
                <h3 class="card-title">Property Title</h3>
                <p class="card-description">This is a description for This property..</p>
            </div>
        </div>
         <div class="card">
            <router-link to="/details">
              <img src="@/assets/images/channel-pictures/land3.jpg" alt="Picture 2" class="card-image">
           </router-link>
            <div class="card-content">
                <h3 class="card-title">Property Title</h3>
                <p class="card-description">This is a description for This property..</p>
            </div>
        </div>
        <div class="card">
            <router-link to="/details">
              <img src="@/assets/images/channel-pictures/land1.jpg" alt="Picture 2" class="card-image">
           </router-link>
            <div class="card-content">
                <h3 class="card-title">Property Title</h3>
                <p class="card-description">This is a description for This property..</p>
            </div>
        </div>
         <div class="card">
            <router-link to="/details">
              <img src="@/assets/images/channel-pictures/land2.jpg" alt="Picture 2" class="card-image">
           </router-link>
            <div class="card-content">
                <h3 class="card-title">Property Title</h3>
                <p class="card-description">This is a description for This property..</p>
            </div>
        </div>
        <div class="card">
            <router-link to="/details">
              <img src="@/assets/images/channel-pictures/land3.jpg" alt="Picture 2" class="card-image">
           </router-link>
            <div class="card-content">
                <h3 class="card-title">Property Title</h3>
                <p class="card-description">This is a description for This property..</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
    body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f0f0f0;
        }

        .detail-card {
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            text-align: center;
            width: 90%;
            max-width: 500px;
            padding: 20px;
        }

        .detail-image {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 8px;
        }

        .detail-title {
            font-size: 24px;
            margin: 20px 0;
            color: #333;
        }

        .detail-description {
            font-size: 16px;
            color: #666;
        }

        .back-link {
            margin-top: 20px;
            display: inline-block;
            color: #007BFF;
            text-decoration: none;
            font-size: 16px;
        }

        .back-link:hover {
            text-decoration: underline;
        }

        .logo {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }

        .card-section {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            padding: 20px;
            width: 100%;
            max-width: 1200px;
        }

        .card {
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            text-align: center;
        }

        .card-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }

        .card-title {
            font-size: 20px;
            margin: 10px 0;
            color: #333;
        }

        .card-description {
            font-size: 14px;
            color: #666;
            padding: 0 10px 10px 10px;
        }

</style>