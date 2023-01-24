var  JOGAR  =  1 ;
var  FIM  =  0 ;
var  estadodojogo  =  JOGAR ;

var  trex ,  trex_running ,  trex_collided ;
var  ground ,  invisívelGround ,  groundImage ;

var  cloudGroup ,  cloudImage ;
var  obstaculosGroup ,  obstaculo1 ,  obstaculo2 ,  obstaculo3 ,  obstaculo4 ,  obstaculo5 ,  obstaculo6 ;

var  pontuação ;




função pré-  carga ( ) {
  trex_running  =  loadAnimation ( "trex1.png" , "trex3.png" , "trex4.png" ) ;
  trex_collided  =  loadAnimation ( "trex_collided.png" ) ;
  
  groundImage  =  loadImage ( "ground2.png" ) ;
  
  cloudImage  =  loadImage ( "cloud.png" ) ;
  
  obstáculo1  =  loadImage ( "obstáculo1.png" ) ;
  obstáculo2  =  loadImage ( "obstacle2.png" ) ;
  obstáculo3  =  loadImage ( "obstacle3.png" ) ;
  obstáculo4  =  loadImage ( "obstacle4.png" ) ;
  obstáculo5  =  loadImage ( "obstacle5.png" ) ;
  obstáculo6  =  loadImage ( "obstacle6.png" ) ;
  
  
}

 configuração de função ( )  {
  createCanvas ( 600 ,  200 ) ;
  
  trex  =  createSprite ( 50 , 180 , 20 , 50 ) ;
  . _ addAnimation ( "em execução" ,  trex_running ) ;
  . _ addAnimation ( "colidiu"  ,  trex_collided )
  . _ escala  =  0,5 ;
  
  chão  =  createSprite ( 200 , 180 , 400 , 20 ) ;
  terreno . addImage ( "ground" , groundImage ) ;
  terreno . x  =  terra . largura  / 2 ;
 
  

  Terreno invisível  =  createSprite ( 200 , 190 , 400 , 10 ) ;
  invisívelGround . visível  =  falso ;
  
  obstáculosGrupo  =  criarGrupo ( ) ;
  nuvensGroup  =  createGroup ( ) ;
  
  console . log ( "Olá"  +  5 ) ;
  
  pontuação  =  0 ;
}

função  desenhar ( )  {
  plano de fundo ( 180 ) ;
  text ( "Pontuação: " +  pontuação ,  500 , 50 ) ;
  
  
  
  if ( gameState  ===  JOGAR ) {
       
    terreno . velocidadeX  =  -4 ; _
   
    pontuação  =  pontuação  +  matemática . rodada ( frameCount / 60 ) ;
    
    if  ( terra . x  <  0 ) {
      terreno . x  =  terra . largura / 2 ;
    }
    
   
    if ( keyDown ( "espaço" ) &&  trex . y  >=  100 )  {
        . _ velocidade Y  =  - 13 ;
    }
    
  
    . _ velocidade Y  =  trex . velocidade Y  +  0,8
  
  
    spawnClouds ( ) ;
  
   
    spawnObstacles ( ) ;
    
    if ( obstaculosGroup . isTouching ( trex ) ) {
        gameState  =  END ;
    }
  }
   else  if  ( gameState  ===  END )  {
       
      terreno . velocidadeX  =  0 ;
     
     obstáculosGrupo . setVelocityXEach ( 0 ) ;
     cloudGroup . setVelocityXEach ( 0 ) ;
   }
  
 

  . _ colidir ( invisívelGround ) ;
  
  
  
  desenharSprites ( ) ;
}

function  spawnObstacles ( ) {
 if  ( frameCount  %  60  ===  0 ) {
   var  obstáculo  =  createSprite ( 400 , 165 , 10 , 40 ) ;
   obstáculo . velocidadeX  =  - 6 ;
   
    var  rand  =  Math . rodada ( aleatório ( 1 , 6 ) ) ;
    alternar ( rand )  {
      caso  1 : obstáculo . addImage ( obstáculo1 ) ;
              quebrar ;
      caso  2 : obstáculo . addImage ( obstáculo2 ) ;
              quebrar ;
      caso  3 : obstáculo . addImage ( obstáculo3 ) ;
              quebrar ;
      caso  4 : obstáculo . addImage ( obstáculo4 ) ;
              quebrar ;
      caso  5 : obstáculo . addImage ( obstáculo5 ) ;
              quebrar ;
      caso  6 : obstáculo . addImage ( obstáculo6 ) ;
              quebrar ;
      padrão : quebrar ;
    }
   
    obstáculo . escala  =  0,5 ;
    obstáculo . tempo de vida  =  300 ;
   
    obstáculosGrupo . adicionar ( obstáculo ) ;
 }
}

function  spawnClouds ( )  {
   if  ( frameCount  %  60  ===  0 )  {
     nuvem  =  createSprite ( 600 , 100 , 40 , 10 ) ;
    nuvem . y  =  matemática . redondo ( aleatório ( 10 , 60 ) ) ;
    nuvem . addImage ( cloudImage ) ;
    nuvem . escala  =  0,5 ;
    nuvem . velocidadeX  =  - 3 ;
    
    nuvem . tempo de vida  =  134 ;
    
    nuvem . profundidade  =  trex . profundidade ;
    . _ profundidade  =  trex . profundidade  +  1 ;
    
   cloudGroup . adicionar ( nuvem ) ;
    }
}