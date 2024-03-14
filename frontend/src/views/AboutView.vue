<template>
  <div class="row">
<div class="containers col-lg-6 col-md-6">
  
  <div class="pic"></div>
  
  <div class="box1"></div>
  <div class="box2"></div>
  
  <div class="social1">
    <i class="fa fa-facebook" aria-hidden="true"></i> 
  </div>
  <div class="social2">
  <i class="fa fa-dribbble" aria-hidden="true"></i>
  </div>
  <div class="social3">
    <i class="fa fa-codepen" aria-hidden="true"></i>
  </div>
</div>

<div class="content col-md-offset-6 col-lg-offset-6">
  <center><h1 class="contentHead">ABOUT ME</h1></center>
  
  <h2>Hi Folks, <br/><br/>
    This is Shaik Maqsood. I'm a Freakin frontend developer, jus came up with this concept of having a 45<sup>o</sup> trasformed DIV with a -45<sup>o</sup> background.<br/><br/>
    Can't belive that it worked.
    <br/><br/>
    Show your L<span>&hearts;</span>VE if you like my pen.
    <br/><br/>
    <p>(NOTICE: The lady in the PIC is not me, I'm a guy :P)</p>
    <p><span style="text-align:right; color:#000000; font-size:18px;">* No matter what u say, that gal is sorta cute.</span></p>
  </h2>
</div>
</div>   
</template>

<style scoped>
.Container-fluid {
  background-color: #e7eaf6; /* Set the background color */
  color: black; /* Set the text color to black */
  padding: 20px; /* Add padding */
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.lead {
  font-size: 1.2rem;
  line-height: 1.6;
}

/* Media query for smaller screens */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  .lead {
    font-size: 1.2rem;
    line-height: 1.6;
    color: black; /* Custom text color */
  }
}
</style>

