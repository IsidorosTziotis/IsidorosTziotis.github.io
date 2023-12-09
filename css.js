document.write(`


<style>

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

.black{
  background-color: #333; 
}

.middle {
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 2%;
    margin-bottom: 0%;
    background-color: white; 
}

.main {
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 1%;
    margin-bottom: 0%;
}

/* Control the left side */
.left {
    float:left;
    width:30%;
    margin-top: 7.5%;
}

/* Control the right side */
.right {
    float:right;
    width:70%;
}

.cv {
    margin-left: 25%;
    margin-right: 25%;
    margin-bottom: 0%; 
}

/* Style the header */
.header {
  background-color: #f1f1f1;
  padding: 20px;
  text-align: center;
}
/* Style the top navigation bar */
.topnav {
  overflow: hidden;
  background-color: #333;   /*Color of the bar */
}
/* Style the topnav links */
.topnav a {
  display: inline-block;
  list-style-type: none;
  color: #f2f2f2;           /*Color of the text */
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
/* Change color on hover */
.topnav a:hover {
  background-color: #ddd;       /*Color when hovering (gray) */
  color: black;
}


@media only screen and (max-width:800px) {
  /* For tablets: */
  .main {
    width: 80%;
    padding: 0;
  }
  .right {
    width: 100%;
  }

    .menu, .main, .right {
      padding: 10px;
  }
}
@media only screen and (max-width:500px) {
  /* For mobile phones: */
  .menu, .main, .right {
    width: 100%;
    padding: 10px;
  }
}
</style>

`);
