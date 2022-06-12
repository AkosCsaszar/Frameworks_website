<template>
     <div class='card'>
      <div class='cardHeader'>
        <h1 class='name'>{{data.name}}</h1>
      </div>
      <div class="cardBody">
        <p class='projectDescription'>{{data.description}}</p>
        <p class='technologies'>{{data.technologies}}</p>
      </div>
        
    
  </div>
</template>

<script>
export default {
    name: 'ProjectsData',
    props: {
        data: Object,
    },
}
</script>

<style>

  

  
  .card {
    width: 100%;
    background: #fff;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    transition: 0.3s;
    
  }
  .projectDescription {
    color: #0f172a;
  }
  
  .cardHeader {
    text-align: center;
    padding: 50px 10px;
    background: linear-gradient(to right, #044b2f, #0c2119);
    color: #fff;
  }
  .name {
    color: white;
  }

  
  .cardBody {
    padding: 30px 20px;
    text-align: center;
    font-size: 18px;
  }
  
  .cardBody .technologies {
    display: block;
    color: #fff;
    text-align: center;
    background: linear-gradient(to right, #044b2f, #0c2119);
    margin-top: 30px;
    text-decoration: none;
    padding: 10px 5px;
    border-radius: 10px;
  }
  
  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 0 40px -10px rgba(0, 0, 0, 0.25);
  }
  
  
</style>