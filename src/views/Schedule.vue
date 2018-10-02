<template>
<div class="container">

<ul class="main">
  <li class="date">
    <h3>Oct 4th</h3>
    <p>Schedule of Events</p>
  </li>
  <li class= "events">
    <ul class="events-detail">
      <li>
        <a href="#">
          <span class="event-time">2:00pm - </span>
          <span class="event-name">Kickoff Ceremony</span>
          <br />
          <span class="event-location">Headquarters</span>
        </a>
      </li>
       
       <li>
        <a href="#">
          <span class="event-time">3:00pm - </span>
          <span class="event-name">Atlanta VS Montana</span>
          <br />
          <span class="event-location">Memorial Stadium</span>
        </a>
      </li>
      
       <li>
        <a href="#">
          <span class="event-time">5:00pm - </span>
          <span class="event-name">Official Sponsor</span>
          <br />
          <span class="event-location">Headquarters</span>
        </a>
      </li>
      
       <li>
        <a href="#">
          <span class="event-time">6:00pm - </span>
          <span class="event-name">Ranking</span>
          <br />
          <span class="event-location">Headquarters</span>
        </a>
      </li>
      
       <li>
        <a href="#">
          <span class="event-time">7:00pm - </span>
          <span class="event-name">Closing Ceremony</span>
          <br />
          <span class="event-location">Headquarters</span>
        </a>
      </li>
    </ul>  
    
  
  </li>
         
  
  
    <li class="date">
    <h3>Nov 5th</h3>
    <p>Schedule of Events</p>
  </li>
  <li class= "events cf">
    <ul class="events-detail">
      <li>
        <a href="#">
          <span class="event-time">2:00pm - </span>
          <span class="event-name">Kickoff Ceremony</span>
          <br />
          <span class="event-location">Headquarters</span>
        </a>
      </li>
       
       <li>
        <a href="#">
          <span class="event-time">3:00pm - </span>
          <span class="event-name">Detroit VS Dallas</span>
          <br />
          <span class="event-location">Spectrum Stadium</span>
        </a>
      </li>
      
       <li>
        <a href="#">
          <span class="event-time">4:00pm - </span>
          <span class="event-name">Official Sponsors</span>
          <br />
          <span class="event-location">Headquarters</span>
        </a>
      </li>
      
       <li>
        <a href="#">
          <span class="event-time">5:00pm - </span>
          <span class="event-name">Ranking</span>
          <br />
          <span class="event-location">Headquarters</span>
        </a>
      </li>
      
       <li>
        <a href="#">
          <span class="event-time">6:00pm - </span>
          <span class="event-name">Kickoff Ceremony</span>
          <br />
          <span class="event-location">Closing Ceremony</span>
        </a>
      </li>
    </ul>  
    
  
  </li>
         
</ul>  

    </div>

</template>

<script>
export default {
  name: 'Schedule',
  props: {
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .events {
  float: left;
  width: 80%;
  border-left: 1px solid #ccc;
  margin-top: 10%;
  padding-top: 3%;
}

.events-detail {
  max-width: 550px;
}

.events-detail li{
  padding: 10px;
  border-bottom: 1px dashed #ccc;
  line-height: 22px;
  transition: ease .4s all;
}

.events-detail li:hover {
  background: #e9e9e9;
}

.event-time {
  font-weight: 900;
}

.events-detail li a {
  text-decoration: none;
  color: #444;
  width: 100%;
  height: 100%;
  display: block;
}

.event-location {
    font-size: .8em;
    color: tomato;
    margin-left: 70px;
}



@media all and (max-width: 641px) {
    .date {
      width: 100%;
      border-bottom: 1px solid #ccc;
      margin-bottom: 10px;
    }
  
  .events {
    border:none;
    width: 100%;
    margin-top: 0;
  }
  
  .events-detail {
    padding: 0;
  }
  
  li.date p {
    margin:0;
  }
}

  
</style>
