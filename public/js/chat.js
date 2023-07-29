const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");

const BOT_IMG = "data:image/jpeg;base64,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";
const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";

const chatWith = get(".chatWith");
const typing = get(".typing");
const chatStatus = get(".chatStatus");
const chatId = window.location.pathname.substr(6);
let authUser;


window.onload = function (){
    axios.get('/auth/user').then( res => {
        authUser = res.data.authUser;
    })
        .then( () => {
        axios.get(`/chat/${chatId}/get_users`).then(res=>{
            let results = res.data.users.filter(user => user.id != authUser.id);
            if(results.length > 0)
                chatWith.innerHTML = results[0].name;

        }).then( () => {
            axios.get(`/chat/${chatId}/get_messages`).then( res =>{
                appendMessages(res.data.messages);
            });
        }).then(() => {
            // Echo
            const chatStatusElement = get(".chatStatus"); // Get the reference to the chatStatus element

            Echo.join(`chat.${chatId}`)
                .here(users => {
                    updateChatStatus(users);
                })
                .joining(user => {
                    // Fetch the updated users list, including the joining user
                    const updatedUsers = [...Echo.getPresence(`chat.${chatId}`).users, user];
                    updateChatStatus(updatedUsers);
                })
                .leaving(user => {
                    // Fetch the updated users list after the leaving user is removed
                    const updatedUsers = Echo.getPresence(`chat.${chatId}`).users.filter(u => u.id !== user.id);
                    updateChatStatus(updatedUsers);
                });

            function updateChatStatus(users) {
                const authUserId = authUser.id;
                const onlineUsers = users.filter(user => user.id !== authUserId);

                if (onlineUsers.length === 0) {
                    chatStatusElement.className = 'chatStatus offline'; // Update class name to 'chatStatus offline' if chat is empty or only the current user is online
                } else {
                    chatStatusElement.className = 'chatStatus online'; // Update class name to 'chatStatus online' if other users are online
                }
            }
        });

        });


}

msgerForm.addEventListener("submit", event => {
    event.preventDefault();

    const msgText = msgerInput.value;
    if (!msgText) return;

    axios.post('/message/sent',{
        message: msgText,
        chat_id: 1 //Pendiente: hacer dinamico
    }).then(res =>{
        let data = res.data;
        appendMessage(
            data.user.name,
            PERSON_IMG,
            'right',
            data.content,
           formatDate(new Date(data.created_at))
        );
    }).catch(error =>{
        console.log('Ha ocurrido un error al enviar su mensaje');
        console.log(error);
    });

    msgerInput.value = "";

});

function appendMessages(messages){
    let side = 'left';

    messages.forEach(message =>{
        side = (message.user_id == authUser.id) ? 'right' : 'left';
        appendMessage(
            message.user.name,
            BOT_IMG,
            side,
            message.content,
            formatDate(new Date(message.created_at))
        );
    })
}

function appendMessage(name, img, side, text, date) {
    //   Simple solution for small apps
    const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${date}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

    msgerChat.insertAdjacentHTML("beforeend", msgHTML);


    scrollToBottom();
}






// Utils
function get(selector, root = document) {
    return root.querySelector(selector);
}

function formatDate(date) {
    const d = date.getDate();
    const mo = date.getMonth() + 1;
    const y = date.getFullYear();
    const h = "0" + date.getHours();
    const m = "0" + date.getMinutes();

    return `${d}/${mo}/${y} ${h.slice(-2)}:${m.slice(-2)}`;
}

function scrollToBottom(){
    msgerChat.scrollTop = msgerChat.scrollHeight;
}
