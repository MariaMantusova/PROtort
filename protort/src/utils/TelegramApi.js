class TelegramApi {
    constructor(config) {
        this._token = config.token;
        this._header = config.headers;
        this._url = config.url;
        this._chatId = config.chatId;
    }

    sendOrder(message) {
        return fetch(`${this._url}${this._token}/sendMessage?chat_id=${this._chatId}&text=${message}`, {
            headers: this._header,
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(new Error(res.status.toString()));
                }
            })
            .catch((err) => console.log(err));
    }

}

const telegramApiOption = {
    url: "https://api.telegram.org/bot",
    token: "6108491226:AAGBEFnC6aILRV4JnLqW6BE2TETlsbk1iFI",
    chatId: "-680341127",
    headers: {
        "Content-Type": "application/json",
    },
}

export const telegramApi = new TelegramApi(telegramApiOption)
