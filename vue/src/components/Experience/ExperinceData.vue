<template>
    <div class='cardContainer'>
    <div class="experienceCard">
      <div class="face face1">
        <div class="content">
          <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" />
          <h3>{{data.company}}</h3>
        </div>
      </div>
      <div class="face face2">
        <div class="content">
          <h1>{{data.type}}</h1>
          <p>{{data.description}}</p>
          <h4>{{data.date}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ExperinceData',
    props: {
        data: Object,
    },
}
</script>

<style>
.cardContainer{
    
    position: relative;
    display: flex;
    justify-content: space-between;
}

.cardContainer .experienceCard{
    position: relative;
    cursor: pointer;
}

.cardContainer .experienceCard .face{
    width: 300px;
    height: 200px;
    transition: 0.5s;
}

.cardContainer .experienceCard .face.face1{
    position: relative;
    background: #0e261c;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: translateY(100px);
}

.cardContainer .experienceCard:hover .face.face1{
    background: #0c2119;
    transform: translateY(0);
}

.cardContainer .experienceCard .face.face1 .content{
    opacity: 0.2;
    transition: 0.5s;
}

.cardContainer .experienceCard:hover .face.face1 .content{
    opacity: 1;
}

.cardContainer .experienceCard .face.face1 .content img{
    max-width: 100px;
}

.cardContainer .experienceCard .face.face1 .content h3{
    margin: 10px 0 0;
    padding: 0;
    color: #fff;
    text-align: center;
    font-size: 1.5em;
}

.cardContainer .experienceCard .face.face2{
    position: relative;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
    transform: translateY(-100px);
}

.cardContainer .experienceCard:hover .face.face2{
    transform: translateY(0);
}

.cardContainer .experienceCard .face.face2 .content p{
    margin: 0;
    padding: 0;
}

.cardContainer .experienceCard .face.face2 .content h4{
    margin: 15px 0 0;
    display:  inline-block;
    text-decoration: none;
    font-weight: 900;
    color: #333;
    padding: 5px;
    
}

h4{
    font-size: medium;
    color:#0c2119;
}


.cardContainer .experienceCard .face.face2 .content h4 h1:hover{
    background: rgb(144, 144, 144);
    color: #fff;
}
</style>