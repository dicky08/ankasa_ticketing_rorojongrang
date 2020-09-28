<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-transaparan">
    <div class="container mt-3">
      <a class="navbar-brand" href="#"><img src="../assets/assets/img/logoangkas.png"> Ankasa</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item active">
            <!-- <div class="search">
            <input type="text" class=" search" placeholder=" Where you want to go ?">sad
            </div> -->
            <b-input-group size="sm" class="mb-2">
                <b-input-group-prepend is-text>
                  <b-icon icon="search"></b-icon>
                </b-input-group-prepend>
                <b-form-input type="search" class="search" placeholder="Search terms"></b-form-input>
            </b-input-group>
            <!-- <div class="search">
            </div> -->
            <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
          </li>
          <li class="nav-item ml-4">
            <a class="nav-link" href="#">Find Ticket</a>
          </li>
          <li class="nav-item ml-4">
            <a class="nav-link" href="#">My Booking</a>
          </li>
        </ul>
        <ul class="navbar-nav">
           <li class="nav-item mr-5">
            <a class="nav-link" href="#">
              <b-icon-envelope></b-icon-envelope>
            </a>
          </li>
          <li class="nav-item mr-5">
            <a class="nav-link" href="#">
              <b-icon-bell></b-icon-bell>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
             <div class="me">
                <img src="../assets/assets/img/me.png" alt="">
             </div>
            </a>
          </li>
        </ul>
       </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
/* Search */
  .search {
    background-color: #F5F5F5;
    border-radius: 10px;
    width: 250px;
    height: 40px;
  }
  /* Font */
  .navbar-brand,.nav-item {
    font-family: poppinsBold;
    font-weight: 700;
  }
  /* Nav-Link */
  .nav-link:hover::after {
  content: '';
  display: block;
  border-bottom: 3px solid #2395FF;
  width: 50%;
  margin: auto;
  padding-bottom: 3px;
  margin-bottom: -8px;
  transition: width 2s;
  }
  /* Profile */
  .me {
    width: 36px;
    height: 36px;
    background-color: aquamarine;
    border-radius: 50%;
    overflow: hidden;
  }
</style>
