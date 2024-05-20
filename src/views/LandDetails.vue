<template>
  <div class="body">
    <header class="header">
        <div class="left-section">
          <img class="hamburger-menu" src="@/assets/images/icons/hamburger-menu.svg">
         <img class="logo" src="@/assets/images/channel-pictures/bskds.jpg" alt="Logo">          <!-- <img class="youtube-logo" src="icons/youtube-logo.svg"> -->
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
    

    <div class="detail-card">
        <img src="@/assets/images/channel-pictures/land1.jpg" alt="Picture 1" class="detail-image">
        <h1 class="detail-title">Detail Title 1</h1>
        <p class="detail-description">This is a detailed description for card 1. It contains more information about the image and any other relevant details.</p>
        <div class="description-boxes">
             <p>Info 1....................</p>
            <p>Info 2....................</p>
            <p>Info 3....................</p>
            <p>Info 4....................</p>
             <p>Info 1....................</p>
            <p>Info 2....................</p>
            <p>Info 3....................</p>
            <p>Info 4....................</p>
             <p>Info 1....................</p>
            <p>Info 2....................</p>
            <p>Info 3....................</p>
            <p>Info 4....................</p>
            <p>Info 3....................</p>
            <p>Info 4....................</p>

        </div>
        <a href="index.html" class="back-link">Back to Home</a>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
     .body{
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
            max-width: 600px;
            padding: 20px;
            margin-top: 100px;
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

        .description-boxes {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
    margin-bottom: 20px;
}

.description-boxes p {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 10px;
    margin: 0;
    font-size: 14px;
}

        .logo {
            width: 40px;
            height: 40px;
            border-radius: 50%;
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
</style>