import Axios from "axios";

const api = Axios.create({
    baseURL: '/api/',
});

const chatAPI = {
    // getMessages: (groupId) => {
    //     console.log('Calling get messages from API');
    //     return api.get(`messages/${groupId}`);
    // },

    sendMessage: (chatMessage) => {
        return api.post(`send`, chatMessage);
    }
}


export default chatAPI;
