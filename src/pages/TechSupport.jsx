import '../css/TechSupportStyle.css'
import Img1 from '../assets/TechSupport/Triangle.png'
import { ReceivedChats } from '../components/ReceivedChats.jsx'
import { OutgoingChats } from '../components/OutgoingChats.jsx'

const messages = [
  "Здравствуйте, это чат техподдержки, технический специалист Александр.",
  "Здравствуйте, у меня не отображаются тарифы в личном кабинете.",
  "У нас сейчас идут технические работы, в ближайшие 2 часа должны появится.",
  "Спасибо."
]

export const TechSupportPage = (props)=>{

    return <div class="container">
      
    <div class="header">
      <button class="HomeButton">Главная</button>
    </div>

    <div class="chatPage">
      <div class="msg-inbox">
        <div class="chats">

          <div class="msg-page">
          
            <ReceivedChats message={messages[0]} />

            <OutgoingChats message={messages[1]} />

            <ReceivedChats message={messages[2]} />

            <OutgoingChats message={messages[3]} />

          </div>

        </div>

        <div class="footer"> 
            <input
              type="text"
              class="form-control"
              placeholder="Message"
            />
            <button class="sendButton"><img src={Img1}></img></button>
        </div>

      </div>
    </div>
  </div>        
      
}