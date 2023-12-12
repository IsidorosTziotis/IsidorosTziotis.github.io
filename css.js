document.write(`
<style>

* {
  box-sizing: border-box;
   a { text-decoration: none; }
}
body {
  margin: 0;
}


.topnav {
  overflow: hidden;
  background-color: #333;   /*Color of the bar */
}

.topnav a {
  display: inline-block;
  list-style-type: none;
  color: #f2f2f2;           /*Color of the text */
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.topnav a:hover {
  background-color: #ddd;       /*Color when hovering (gray) */
  color: black;
}

.topnav a.active {
  color: grey;                  /*Color of Active bar  (gray) */
}


@media all and (min-width:769px) {
  /* For desktop: */

    .margin-resume {
        margin-left: 25%;
        margin-right: 25%;
    }

   .margin-profile {
        margin-left: 25%;
        margin-right: 25%;
        margin-top: 1%;
        margin-bottom: 3%;
    }

    .margin-research {
        margin-left: 25%;
        margin-right: 25%;
        margin-top: 2%;
        margin-bottom: 3%;
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

    .profile_img {
        width: 100%;
    }


    .university_img {
        width: 100%;
        margin-top: 1%;
    }
}



@media all and (max-width:768px){
  /* For mobile phones: */

  
  a { text-decoration: none; }
  
  .margin-resume{
      width: 100%;
  }

  .margin-profile{
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

    .profile_img {
        width: 80%;
    }

  .university_img {
        width: 100%;
        margin-top: 40%;
  }
}

</style>
`);
