
var bgmusic = new Audio('sounds/roblox-minecraft-fortnite-video-game-music-358426.mp3')



document.querySelector('.title').addEventListener("mouseover",function(){
    this.innerText="Start"
})

document.querySelector('.title').addEventListener("mouseout",function(){
    this.innerText="Guess Game"
})


function startGame(){

  

    playClick('zapsplat_multimedia_game_sound_simple_negative_hit_buzz_114670.mp3')

    const startMessageElemnt = document.getElementById('start_mess');
    const btn_content = document.querySelector('.title').textContent.trim()

    if(btn_content!=="Restart"){
        bgmusic.loop = true 
        bgmusic.play()
    }

    if(btn_content==="Restart"){
        
        restart()
        return
    }

    if(startMessageElemnt){
                document.getElementById('start_mess').remove()
                document.querySelector('.title').removeEventListener("mouseover",function(){
                this.innerText="Start";
                })

                document.querySelector('.title').addEventListener("mouseover",function(){
                this.innerText="Restart"
                })
           
            document.getElementById('entry').style.display="flex"
    }

    //const random_number =



}

 

const levels_info={0:"numbers between 0-9",
    1:"numbers between 0-20",
    2:"numbers between 10-100"
}
const setting = document.querySelector('.setting');
const levels_box = document.querySelectorAll('.level')

var random_num = null ; 
var attempts_num = null ;
change_level(0)

function open_setting(){
    document.querySelector('.container').style.display='none'
    setting.style.display = "flex";
    playClick("click_sound_1.mp3")


}

function go_back(){
    setting.style.display="none";
    document.querySelector('.container').style.display='flex'
    playClick("click_sound_1.mp3")

}

function playClick(sound_effect){
    let clickSound = new Audio("sounds/"+sound_effect)
    clickSound.play()
}


var current_level=0;


function change_level(x){


    playClick('Menu Selection Click.mp3')
    
    current_level=x
    const numbers = [0,1,2]
    let level_not_active = []
    for (let num of numbers){
        if (num!== x){
            level_not_active.push(num)
        }
    }

    
    for (let num of level_not_active){
        levels_box[num].style.backgroundColor="rgba(223, 223, 223, 1)"
    }
    levels_box[x].style.backgroundColor="rgb(180, 252, 72)"
    document.getElementById('info').innerText=levels_info[x]

    generate_number(x)
    restart()


}



function generate_number(x){
    
    if(x===0){
        random_num = Math.floor(Math.random()*10)
    }else if (x===1){
        random_num = Math.floor(Math.random()*21)
    }else{
        random_num = Math.floor(Math.random()*(100-10+1))+10
    }


}


function check(){

    let user_input = document.getElementById('user_input').value.trim();
    if(!isNaN(user_input) && user_input!=="" ){
        user_input = parseInt(user_input)

        if(user_input === random_num){
            bgmusic.volume = 0.5;
            playClick('Won!.mp3')
            setTimeout(()=>{
                bgmusic.volume=1;
            },2000)

            document.getElementById('para').innerText="Congratulations,You won!"
            document.querySelector('.btn_check').disabled=true
            document.getElementById('user_input').disabled=true

            const direction = document.createElement('p');
            direction.className="direction";
            direction.innerText="press the button above to restart the game"
            document.getElementById('directions').appendChild(direction)

        }else{
            playClick('error.mp3')
            attempts_num+=1
            document.getElementById('user_input').value=""
            update_uttempts()

            
        }


    }

}


function update_uttempts(){
    const attempts = document.getElementById('attempts')
    attempts.innerText=attempts_num

    if(attempts_num>3 && attempts_num<10){
        document.getElementById('frame').style.borderColor="yellow"
    }else if(attempts_num>=10 &&  attempts_num<20){
        document.getElementById('frame').style.borderColor="orange"
        
    }else if (attempts_num>=20){
        document.getElementById('frame').style.borderColor="red"
    }


}


function restart(){
    document.getElementById('frame').style.borderColor="green"
    attempts_num=0
    update_uttempts()
    const direction = document.querySelector('.direction')
    if (direction){
        direction.remove()
    }

    document.getElementById('para').innerText="Numbers of attempts"

    document.querySelector('.btn_check').disabled=false
    document.getElementById('user_input').disabled=false
    document.getElementById('user_input').value=""
    generate_number(current_level)



}