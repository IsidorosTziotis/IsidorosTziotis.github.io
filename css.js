document.write(`
<style>

* {
  box-sizing: border-box;
   a { text-decoration: none; }
}
body {
  margin: 0;
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
  top 0%;
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



@media all and (min-width:769px) {
  /* For desktop: */

    .margin-resume {
        margin-left: 25%;
        margin-right: 25%;
    }

   .margin-home {
        margin-left: 25%;
        margin-right: 25%;
        margin-top: 1%;
    }

    .margin-research {
        margin-left: 25%;
        margin-right: 25%;
        margin-top: 2%;
    }

    .left {
        float:left;
        width:30%;
        margin-top: 7.5%;
    }

    .right {
        float:right;
        width:70%;
    }

    .black{
      background-color: #333; 
    }
}



@media all and (max-width:768px){
  /* For mobile phones: */

  .margin-resume{
      width: 110%;
  }

  .margin-home {
    box-sizing: border-box; 
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 10%;
    padding-bottom: 10%;
  }

  .margin-research {
    box-sizing: border-box; 
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 5%;
    padding-bottom: 10%;
  }
}

</style>
`);
