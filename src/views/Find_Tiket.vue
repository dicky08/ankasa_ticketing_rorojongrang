<template>
  <div>
    <Navbar/>
      <div class="row">
        <div class="box d-flex">
          <div class="col-md-6 ml-5">
           <div class="row justify-content-center items ml-5">
              <div class="col-md-1">
                <img src="../assets/assets/img/vector 02.png" alt="Image-ankasa-white">
              </div>
              <div class="col-md-4">
                <p class="from">From</p>
                <h4 class="city ml-3"> Medan(IDN)</h4>
              </div>
              <div class="col-md-1 text-white">
                <b-icon-arrow-left-right></b-icon-arrow-left-right>
              </div>
              <div class="col-md-3 ml-3">
                <p class="to">To</p>
                <h4 class="city">Tokyo(JPN)</h4>
                <h4 class="change-search">Change Search</h4>
              </div>
           </div>
           <div class="row">
             <div class="schedule">
               <div class="day">Monday, 20 July 20</div>
               <div class="passenger">
                  <img src="../assets/assets/img/box.png" alt="">
                 6 Passanger</div>
               <div class="class">
                  <img src="../assets/assets/img/box.png" alt="">
                 Economy</div>
             </div>
           </div>
          </div>
      </div>
  </div>
         <div class="row">
           <div class="container">
             <h4>asd</h4>
           </div>
         </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  name: 'Find_Tiket',
  components: {
    Navbar
  }
}
</script>

<style>
.items {
  position: relative;
}
.box {
  width: 100%;
  height: 226px;
  background-color: #41A4FF;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
}
.items {
  margin-top: 100px;
  /* margin: auto 20px; */
}
.city{
  font-family: poppinsNormal;
  font-weight: 300;
  color: white;
}
.text-white{
  font-size: 20px;
  font-weight: bold;
}
.from {
  position: absolute;
  top: -25px;
  left: 30px;
  color: white;
  opacity: .7;
  font-size: 12px;
}
.change-search {
  position: absolute;
  top: 5px;
  right:-600px;
  font-family: poppinsNormal;
  font-weight: 300;
  color: white;
  font-size: 16px;
}
.to {
  position: absolute;
  top: -25px;
  left: 120px;
  color: white;
  opacity: .7;
  font-size: 12px;
}
.schedule {
  justify-content: space-between;
  display: flex;
  width: 380px;
  position: absolute;
  top: 140px;
  left: 220px;
  font-size: 12px;
  color: white;
  opacity: .8;
}
</style>
