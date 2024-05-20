<template>
  <div class="body">
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
    
    <div class="container">
        <div class="detail-card">
            <img src="@/assets/images/channel-pictures/land1.jpg" alt="Picture 1" class="detail-image">
            <div class="detail-content">
                <h1 class="detail-title">Detail Title 1</h1>
                <p class="detail-description">This is a detailed description for card 1. It contains more information about the image and any other relevant details.</p>
                <h2>Address: 123 Main St, City, Country</h2>
            </div>
            <div class="detail-buttons">
                <button class="pending-button">Pending</button>
                <button class="approval-button">Approval</button>
            </div>
        </div>
        <div class="detail-card">
            <img src="@/assets/images/channel-pictures/land1.jpg" alt="Picture 1" class="detail-image">
            <div class="detail-content">
                <h1 class="detail-title">Detail Title 2</h1>
                <p class="detail-description">This is a detailed description for card 2. It contains more information about the image and any other relevant details.</p>
                <h2>Address: 456 Another St, City, Country</h2>
            </div>
            <div class="detail-buttons">
                <button class="pending-button">Pending</button>
                <button class="approval-button">Approval</button>
            </div>
        </div>

        <div class="detail-card">
            <img src="@/assets/images/channel-pictures/land1.jpg" alt="Picture 1" class="detail-image">
            <div class="detail-content">
                <h1 class="detail-title">Detail Title 2</h1>
                <p class="detail-description">This is a detailed description for card 2. It contains more information about the image and any other relevant details.</p>
                <h2>Address: 456 Another St, City, Country</h2>
            </div>
            <div class="detail-buttons">
                <button class="pending-button">Pending</button>
                <button class="approval-button">Approval</button>
            </div>
        </div>

         <div class="detail-card">
            <img src="@/assets/images/channel-pictures/land1.jpg" alt="Picture 1" class="detail-image">
            <div class="detail-content">
                <h1 class="detail-title">Detail Title 2</h1>
                <p class="detail-description">This is a detailed description for card 2. It contains more information about the image and any other relevant details.</p>
                <h2>Address: 456 Another St, City, Country</h2>
            </div>
            <div class="detail-buttons">
                <button class="pending-button">Pending</button>
                <button class="approval-button">Approval</button>
            </div>
        </div>
         <div class="detail-card">
            <img src="@/assets/images/channel-pictures/land1.jpg" alt="Picture 1" class="detail-image">
            <div class="detail-content">
                <h1 class="detail-title">Detail Title 2</h1>
                <p class="detail-description">This is a detailed description for card 2. It contains more information about the image and any other relevant details.</p>
                <h2>Address: 456 Another St, City, Country</h2>
            </div>
            <div class="detail-buttons">
                <button class="pending-button">Pending</button>
                <button class="approval-button">Approval</button>
            </div>
        </div>
         <div class="detail-card">
            <img src="@/assets/images/channel-pictures/land1.jpg" alt="Picture 1" class="detail-image">
            <div class="detail-content">
                <h1 class="detail-title">Detail Title 2</h1>
                <p class="detail-description">This is a detailed description for card 2. It contains more information about the image and any other relevant details.</p>
                <h2>Address: 456 Another St, City, Country</h2>
            </div>
            <div class="detail-buttons">
                <button class="pending-button">Pending</button>
                <button class="approval-button">Approval</button>
            </div>
        </div>
         <div class="detail-card">
            <img src="@/assets/images/channel-pictures/land1.jpg" alt="Picture 1" class="detail-image">
            <div class="detail-content">
                <h1 class="detail-title">Detail Title 2</h1>
                <p class="detail-description">This is a detailed description for card 2. It contains more information about the image and any other relevant details.</p>
                <h2>Address: 456 Another St, City, Country</h2>
            </div>
            <div class="detail-buttons">
                <button class="pending-button">Pending</button>
                <button class="approval-button">Approval</button>
            </div>
        </div>
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
            height: 100%;
            background-color: #f0f0f0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
            gap: 20px;
            width: 90%;
            max-width: 2000px;
            margin-top: 80px;
        }

        .detail-card {
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            text-align: left;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            
        }

        .detail-image {
            width: 200px;
            height: 200px;
            object-fit: cover;
            border-radius: 8px;
        }

        .detail-content {
            flex-grow: 1;
            margin-left: 20px;
            display: flex;
            flex-direction: column;
        }

        .detail-title {
            font-size: 24px;
            margin: 10px 0;
            color: #333;
        }

        .detail-description {
            font-size: 16px;
            color: #666;
            margin-bottom: 20px;
        }

        .detail-buttons {
            display: flex;
            flex-direction: column;
        }

        .detail-buttons button {
            padding: 10px 20px;
            margin-bottom: 10px;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .logo {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }

        .pending-button {
            background-color: #f0ad4e;
            color: white;
        }

        .approval-button {
            background-color: #5cb85c;
            color: white;
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