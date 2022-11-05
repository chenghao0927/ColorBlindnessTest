
    const startbtn = document.querySelector('.startbtn')
    const score = document.querySelector('.score')
    const timebox = document.querySelector('.timebox')
    const time = document.querySelector('.time')
    const container = document.querySelector('#container')
    const startWindows = document.querySelector('.start-game')
    const stopbtn = document.querySelector('.stop')
    const hintbtn = document.querySelector('.hint')
    const endWindows = document.querySelector('.end')
    const result = document.querySelector('.end1')
    const comment = document.querySelector('.end2')
    const restartbtn = document.querySelector('.restartbtn')

    var timeleft 
    var level  
    var ans  
    var difficulty 

    startbtn.onclick = function(){
        score.innerHTML = 0
        timeleft = 30
        time.innerHTML ='剩餘時間：'+ timeleft + '秒'
        level = 2
        difficulty = 0.6
        score.classList.add('act')
        timebox.classList.add('act')
        time.classList.add('act')
        container.classList.add('act')

        ans = Math.floor(Math.random() * (level*level))

        r = Math.floor(Math.random()*200)
        g = Math.floor(Math.random()*200)
        b = Math.floor(Math.random()*200)
        for (let index = 0; index < level * level; index++) {
            if (index == ans){
                container.innerHTML += `<div onclick="checkAnswer(true)" class="box answer" style="width:${100 / level}% ;height:${100 / level}%;background-color: rgb(${r}, ${g}, ${b});opacity: ${difficulty};"></div>`

            }else{
                container.innerHTML += `<div onclick="checkAnswer(false)" class="box" style="width:${100 / level}% ;height:${100 / level}%;background-color: rgb(${r}, ${g}, ${b});"></div>`

            }
        }
        // 關閉起始畫面
        startWindows.classList.add('off')
        // 設定倒數計時
        var timer1 = setInterval(function(){
            timeleft = timeleft - 1
            time.innerHTML ='剩餘時間：'+ timeleft + '秒'
            if (timeleft == 0){
                clearInterval(timer1) 

                //將遊玩區塊隱藏
                score.classList.remove('act')
                timebox.classList.remove('act')
                time.classList.remove('act')
                container.classList.remove('act')
                container.innerHTML = ''

                //結果視窗的顯示與輸出
                endWindows.classList.add('act')
                result.innerHTML = '總得分' + score.innerHTML
                if (score.innerHTML > 10){
                    comment.innerHTML = '評語: 恭喜過關' 
                }else{
                    comment.innerHTML = '評語: 加油好嗎' 
                }

            }
        }, 1000);
    }
    // 時間暫停
    stopbtn.onclick = function(){
        alert('時間暫停! 不可以作弊喔~~')
    }
    // 提示
    hintbtn.onclick = function(){
        // 用提示的扣分
        score.innerHTML = score.innerHTML - 1
        // 選取到正確答案的框框
        const ansbox = document.querySelector('.box.answer')
        // 將正確答案的框框加上css屬性變得更顯眼
        ansbox.classList.add('act')
    }
    restartbtn.onclick = function(){

        endWindows.classList.remove('act')

        startWindows.classList.remove('off')
    }

    function checkAnswer(guess){
        if (guess){ 
            score.innerHTML = parseInt(score.innerHTML) + 1
            container.innerHTML = ''

            if (score.innerHTML > 5 && level < 3){ 
                level = 3
            }
            if(score.innerHTML > 10 && level < 4){
                level = 4
            }
            if(score.innerHTML > 15 && level < 5){
                level = 5
                difficulty = 0.7
            }
            if(score.innerHTML > 20 && level < 6){
                level = 6
            }
            if(score.innerHTML > 25 && level < 7){
                level = 7
                difficulty = 0.8
            }
            

            ans = Math.floor(Math.random() * (level*level))
            r = Math.floor(Math.random()*200)
            g = Math.floor(Math.random()*200)
            b = Math.floor(Math.random()*200)
            for (let index = 0; index < level * level; index++) {
                if (index == ans){
                    container.innerHTML += `<div onclick="checkAnswer(true)" class="box answer" style="width:${100 / level}% ;height:${100 / level}%;background-color: rgb(${r}, ${g}, ${b});opacity: ${difficulty};"></div>`
                }else{
                    container.innerHTML += `<div onclick="checkAnswer(false)" class="box" style="width:${100 / level}% ;height:${100 / level}%;background-color: rgb(${r}, ${g}, ${b});"></div>`
                }
            }

        }else{

            score.innerHTML = score.innerHTML - 1
        }
    }
