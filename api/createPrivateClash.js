const superagent = require('superagent');

const URL = 'https://www.codingame.com/services/ClashOfCode/createPrivateClash';
const lobbyURL = 'https://www.codingame.com/clashofcode/clash/';

const createPrivateClash = async (settingsJSON) => {
    let handler = "";
    superagent
        .post(URL)
        .send(settingsJSON) // sends a JSON post body
        .set('accept', 'json')
        .set('Cookie', process.env.COOKIE)
        .set('TE', 'Trailers')
        .end((err, res) => {
            if (err) console.log(err);
            else handler = res.body.publicHandle;
        });

    return lobbyURL+handler;
};

module.exports = createPrivateClash;
