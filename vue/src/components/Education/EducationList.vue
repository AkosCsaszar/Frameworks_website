<template>
<div class="sectionContent">
    <div class="timelineContainer" >
        <ul>
            <li v-for="currdata in alldata" :key="currdata.id">
                <h3 class="title">{{currdata.schoolName}}</h3>
                    <p>{{currdata.city}}</p>
                    <span class="circle"></span>
                    <span class="date">{{currdata.time}}</span>
            </li>
            
        </ul>
        
    </div>
</div>
</template>

<script>



export default {
    name: "EducationList",
    props: {
        alldata: Array,
    }
}
</script>

<style scoped>


.sectionContent{
    width: 100%;
    height: auto;
    background-color: #0c2119;
    font-family: poppins;
    padding: 50px 0;
    display: grid;
    place-items: center;
}
/* Container Css Start  */
.timelineContainer{
    width: 100%;
    height: auto;
    position: relative;
}
.timelineContainer ul::after{
    position: absolute;
    content: '';
    width: 2px;
    height: 100%;
    background-color: white;
    left: 245px;
}
.timelineContainer ul{
    list-style: none;
   
}
.timelineContainer ul li{
    width: 50%;
    height: auto;
    padding: 15px 20px;
    background-color: #fff;
    margin-bottom: 30px;
    border-radius: 10px;
    box-shadow: 4px 4px 25px rgba(51, 51, 51, 0.192);
    position: relative;
    z-index: 99;
}
.timelineContainer ul li:nth-child(odd){
    float: left;
    clear: right;
    transform: translateX(-30px);
}
.timelineContainer ul li:nth-child(odd) .date{
    right: 20px;
}
.timelineContainer ul li:nth-child(even){
    float: right;
    clear: left;
    transform: translateX(30px);
}
.timelineContainer ul li:nth-child(4){
    margin-bottom: 0;
}
.timelineContainer ul li .title{
    font-size: 20px;
    font-weight: 500;
    color: #0c2119;
    font-weight: 800;
}
ul li p{
    font-size: 15px;
    color: #444;
    margin: 7px 0;
    line-height: 23px;
}
ul li {
    font-size: 15px;
    text-decoration: none;
}
ul li .date{
    position: absolute;
    color: black;
    top: -45px;
    width: 135px;
    height: 35px;
    border-radius: 20px;
    
    background-color: white;
    display: grid;
    place-items: center;
    font-size: 14px;
}
.timelineContainer ul li .circle{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgb(176, 174, 179);
    position: absolute;
    top: 0;
}
.timelineContainer ul li .circle::after{
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.timelineContainer ul li:nth-child(odd) .circle{
    right: -30px;
    transform: translate(50%, -50%);
}
.timelineContainer ul li:nth-child(even) .circle{
    left: -30px;
    transform: translate(-50%, -50%);
}

/*  Media Query Started  */

@media screen and (max-width:1224px){
    .timelineContainer{
        width: 100%;
    }
}




@media screen and (max-width:993px){
    .timelineContainer{
        width: 80%;
        transform: translateX(15px);
    }
    .timelineContainer ul::after{
        left: -30px;
    }
    .timelineContainer ul li{
        width: 100%;
        float: none;
        clear: none;
        margin-bottom: 80px;
    }

    .timelineContainer ul li:nth-child(odd){
        transform: translateX(0);
        text-align: left;
        left: -2rem;
    }
    .timelineContainer ul li:nth-child(odd) .date{
        left: 20px;
    }

    .timelineContainer ul li:nth-child(odd) .circle{
        left: -30px;
        transform: translate(-50%, -50%);

    }
    

    .timelineContainer ul li:nth-child(even){
        transform: translateX(0);
        text-align: left;
        left: -2rem;
    }
}
</style>