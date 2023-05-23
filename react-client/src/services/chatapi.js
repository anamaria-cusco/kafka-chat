import Axios from "axios";

const api = Axios.create({
    baseURL: '/api/',
});

const chatAPI = {
    // getMessages: (groupId) => {
    //     console.log('Calling get messages from API');
    //     return api.get(`messages/${groupId}`);
    // },

    sendMessage: (username, receiver, text) => {
        let msg = {
            sender: username,
            reeiver: receiver,
            content: text
        }
        return api.post(`send`, msg);
    }
}


export default chatAPI;
