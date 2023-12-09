document.write(`
<style>

* {
  box-sizing: border-box;
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



@media (min-width:1281px) and (min-width:1025px){
  /* For desktop: */

    .margin-0 {
        margin-left: 25%;
        margin-right: 25%;
    }

   .margin-1 {
        margin-left: 25%;
        margin-right: 25%;
        margin-top: 1%;
    }

    .margin-2 {
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



@media (min-width:961px) and (min-width:641px) and (min-width:481px) and (min-width:320px)
  /* For mobile phones: */

  .margin-0, ,margin-1, margin-2, .left .right {
    width: 100%;
    padding: 10px;
  }
}

</style>
`);
