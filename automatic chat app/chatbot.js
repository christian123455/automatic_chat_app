// message input
const textarea = document.querySelector('.chatbox-massage-input')
const chatboxForm = document.querySelector('.chatbox-massage-form')

textarea.addEventListener('input', function () {
    let line = textarea.value.split('\n').length

    if(textarea.rows < 6 || line < 6) {
        textarea.rows = line
    }

    if(textarea.rows > 1) {
        chatboxForm.style.alignItems = 'flex-end'
    } else {
        chatboxForm.style.alignItems = 'center'
    }

})

// toggle chatbox 
const chatboxToggle = document.querySelector('.chatbox-toggle')
const chatboxMessage = document.querySelector('.chatbox-massage-wrapper')

chatboxToggle.addEventListener('click', function () {
    chatboxMessage.classList.toggle('show')
})

// drop down toggle

const dropdownToggle = document.querySelector('.chatbox-message-dropdown-toggle')
const dropdownMenu = document.querySelector('.chatbox-message-dropdown-menu')

dropdownToggle.addEventListener('click', function () {
    dropdownMenu.classList.toggle('show')
})

document.addEventListener('click', function(e) {
    if(!e.target.matches('.chatbox-message-dropdown, .chatbox-message-dropdown *')) {
        dropdownMenu.classList.remove('show')
    }
})


// chatbox message
const chatboxMessageWrapper = document.querySelector('.chatbox-message-content')
const chatboxNoMessage = document.querySelector('.chatbox-massage-no-message')

// getting sent messege from dom

chatboxForm.addEventListener('submit', function (e) {
    e.preventDefault()

   if(isValid(textarea.value)) {
    const today = new Date()
    let replies = textarea.value
    console.log(replies)
        let message = `
            <div class="chatbox-message-item sent">
                <span class="chatbox-message-item-text">
                    ${replies.trim().replace(/\n/g, '<br>\n')}
                </span>
                <span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
            </div>
        `
        chatboxMessageWrapper.insertAdjacentHTML('beforeEnd', message)
        chatboxForm.style.alignItems = 'center'
        textarea.rows = 1
        textarea.focus()
        textarea.value = ''
        chatboxNoMessage.style.display = 'none'
        scrollBottom()
        
        setTimeout(autoReply, 1000)

        // checking if word exist
        
        function autoReply() {
            const today = new Date()
            
            function repliexx(phrase) {
                let messageReply = ''
                let frequency = {}
                
                word = phrase.toLowerCase()
                words = word.split(' ')
                console.log(words)
                
                // greating
                if(words.indexOf("hey") != -1){
                    messageReply = 'hello there how may i help u'
                }
                else if(words.indexOf("hi!") != -1){
                    messageReply = 'Hi how may i help you today?'
                }
                else if(words.indexOf("good") != -1 && words.indexOf("morning") != -1){
                    messageReply = 'Good morning, how can I be of help to you'
                }
                else if(words.indexOf("good") != -1 && words.indexOf("day") != -1){
                    messageReply = 'Good day, how can I be of help to you'
                }
                else if(words.indexOf("good") != -1 && words.indexOf("afternoon") != -1){
                    messageReply = 'Good afternoon, how can I be of help to you'
                }
                else if(words.indexOf("good") != -1 && words.indexOf("evening") != -1){
                    messageReply = 'Good evening, how can I be of help to you'
                }
                else if(words.indexOf("what's") != -1 && words.indexOf("up!") != -1 || words.indexOf("up") != -1){
                    messageReply = 'Everything is cool, sowhow can i be of help to you'
                }

                // getting quetions
                else if(words.indexOf("who") != -1 || words.indexOf("what") != -1 && words.indexOf("up!") != -1 && words.indexOf("are") != -1 && words.indexOf("you") != -1){
                    messageReply = 'I am a chat bot here to tell you more on this school.'
                }
                else if(words.indexOf("when") != -1 && words.indexOf("school") != -1 || words.indexOf("eneterprise") != -1 && words.indexOf("open") != -1 || words.indexOf("available") != -1){
                    messageReply = 'We are available from monday to saturday as from 8:00-5:00.'
                }
                else if(words.indexOf("where") != -1 && words.indexOf("located") != -1 || words.indexOf("situated") != -1 ){
                    messageReply = 'we are located in Cameroon at Yaounde 6 Biyemassi'
                }
                else if(words.indexOf("tell") != -1 || words.indexOf("brief") != -1 && words.indexOf("more") != -1 && words.indexOf("about") != -1 || words.indexOf("on") != -1 && words.indexOf("school") != -1 || words.indexOf("insstitute") != -1 || words.indexOf("institution") != -1 || words.indexOf("eneterprise") != -1 || words.indexOf("administration") != -1){
                    messageReply = 'We are HERITAGE HIGHER INSTITUTE OF PEACE AND DEVELOPMENT STUDIES at biyemassi Cameroon younde 6. We aim at creating a peaceful and job guaranteeing system of eduction for our students.'
                }
                else if(words.indexOf("why") != -1 || words.indexOf("what") != -1 && words.indexOf("reason") != -1 || words.indexOf("whould") != -1 || words.indexOf("should") != -1 && words.indexOf("enroll") != -1 || words.indexOf("register") != -1  && words.indexOf("school") != -1 || words.indexOf("institution") != -1 || words.indexOf("eneterprise") != -1 || words.indexOf("administration") != -1){
                    messageReply = 'We are the best as we have a policy of we say what we mean and mean what we say. Not just that we come with benefits as we as we offer free laptops to every student in our institute, we go further to employing skilled students to work for us. We have also granted plenty of scholarships, an thus HERITAGE is a place to be.'
                }
                else if(words.indexOf("which") != -1 || words.indexOf("foriegn") != -1 && words.indexOf("partners") != -1 || words.indexOf("partner") != -1 && words.indexOf("associat") != -1 && words.indexOf("work") != -1 || words.indexOf("partner") != -1 || words.indexOf("partnership") && words.indexOf("school") != -1 || words.indexOf("institution") != -1 || words.indexOf("eneterprise") != -1 || words.indexOf("administration") != -1 || words.indexOf("with") != -1){
                    messageReply = 'Our Foriegn partners are the DICKINSON COLLEGE PENSYLVANIA USA, THE SAVANNAH STATE INIVERSITY GEORGIA UA, MICHIGAN STATE UNIVERSITY GEORGIA UA, THE OXFORD UNIVERSITY UK, SCHOOL FOR INTERNATIONAL TRAINING(SIT) US and our home partners are THE UNIVERSITY OF BAMENDA, THE UNIVERSITY OF MAROUA, THE ICT UNIVERSITY nad the NICO-HALLE & COLAW FIRM.'
                }
                else if(words.indexOf("what") != -1 || words.indexOf("which") != -1 && words.indexOf("terms") != -1 || words.indexOf("necessity") != -1 && words.indexOf("necessities") != -1 || words.indexOf("inquiries") != -1 || words.indexOf("to") != -1 && words.indexOf("register") || words.indexOf("enrol") != -1 && words.indexOf("institution") != -1 || words.indexOf("eneterprise") != -1 || words.indexOf("administration") != -1 || words.indexOf("school") != -1 ){
                    messageReply = 'Our registation modalities are \"registration fee, photocopy of national ID cart or birth certificate, two passport(4x4) size photographs and report cart or GCE slips for respective cycles\".'
                }
                else if(words.indexOf("what") != -1 || words.indexOf("which") != -1 && words.indexOf("program") != -1 || words.indexOf("programmes") != -1 && words.indexOf("offered") != -1 || words.indexOf("offer") != -1 || words.indexOf("tought") ){
                    messageReply = 'We offer the following programs \"MECHANICAL ENGINEERING, BUSINESS FINANCE & MANAGEMENT, EDUCATION AND PROFESSIONAL DEVELOPMENT, COMPUTER ENGINEERING and PEACE STUDIES AND HUMANITAIAN ACTION\".'
                }
                else if(words.indexOf("what") != -1 || words.indexOf("which") != -1 && words.indexOf("level") != -1 && words.indexOf("education") != -1 && words.indexOf("offered") != -1 || words.indexOf("offer") != -1 || words.indexOf("tought") ){
                    messageReply = 'We offer education from first grade to masters.'
                }
                // words of gratitute
                else if(words.indexOf("thanks") != -1 || words.indexOf("thank") != -1 || words.indexOf("appreciate") != -1 && words.indexOf("greatful") != -1 || words.indexOf("thankful") != -1 ){
                    messageReply = 'The plesure is all mine, and thanks for your time.'
                }
                else{
                    messageReply = 'For more info visit our about page and read more on our school or contact us on facebook, by visiting the icon bellow.'
                }

                console.log(frequency)
                return messageReply
            }
            let message = `<div class="chatbox-message-item received">
                    <span class="chatbox-message-item-text">
                    ${repliexx(replies)}    
                    </span>
                    <span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
                </div>
            `


            chatboxMessageWrapper.insertAdjacentHTML('beforeEnd', message)
            scrollBottom()
        }
}
})

function addZero(num) {
    return num < 10 ? '0'+num : num
}

function scrollBottom() {
    chatboxMessageWrapper.scrollTo(0, chatboxMessageWrapper.scrollHeight)
}

function isValid(value) {
    let text = value.replace(/\n/g, '')
    text = text.replace(/\s/g, '')
    return text.length > 1

}


// linear search

// let letter = ['hey', 'how', 'mine', 'u']

//         function binarySearch(array, target){
//             return binarySearchhelper(array, target, 0, array.length -1)
//         }
    
//         function binarySearchhelper(array, target, left, right){
//             if(left > right){
//                 return false
//             }

//             let mid = Math.floor((left + right) / 2)
//             if(target === array[mid]){
//                 return mid
//             } else if (target < array[mid]){
//                 return binarySearchhelper(array, target, left, mid - 1)
//             }else{
//                 return binarySearchhelper(array, target, mid + 1, right)
//             }
//         }
//         console.log(binarySearch(letter, 'hey'))
//         console.log(binarySearch(letter, 'how'))
//         console.log(binarySearch(letter, 'you'))
//         console.log(binarySearch(letter, 'mine'))
//         console.log(binarySearch(letter, 'u'))