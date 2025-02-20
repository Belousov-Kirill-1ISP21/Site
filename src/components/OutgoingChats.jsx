export const OutgoingChats =(props)=>{
    const {message} = props

    return <div class="outgoing-chats">
        <div class="outgoing-msg">
            <div class="outgoing-chats-msg">
                <p class="multi-msg">{message}</p>
                <div class="time">18:30 | Июнь 24</div>
            </div>
        </div>
  </div>
}