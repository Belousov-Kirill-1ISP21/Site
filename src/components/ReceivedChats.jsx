
export const ReceivedChats =(props)=>{
    const {message} = props

    return <div class="received-chats">
        <div class="received-msg">
            <div class="received-msg-inbox">
                <p> {message}</p>
                <div class="time">18:06 | Июнь 24</div>
            </div>
        </div>
    </div>
}