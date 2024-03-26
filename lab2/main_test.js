const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

class MailSystem {
    write(name) {
        // 修改 MailSystem 的 write 方法，使其返回包含名稱的特定內容
        console.log('--write mail for ' + name + '--');
        const context = 'Congrats, ' + name + '!';
        return context;
    }

    send(name, context) {
        // 修改 MailSystem 的 send 方法，模擬發送郵件並隨機返回成功或失敗
        console.log('--send mail to ' + name + '--');
        const success = Math.random() > 0.5; // 模擬郵件發送的隨機成功或失敗
        if (success) {
            console.log('mail sent');
        } else {
            console.log('mail failed');
        }
        return success; // 返回發送成功或失敗的結果
    }
}

class Application {
    constructor() {
        this.people = [];
        this.selected = [];
        this.mailSystem = new MailSystem();
        this.getNames().then(([people, selected]) => {
            this.people = people;
            this.selected = selected;
        });
    }

    async getNames() {
        // 修改 getNames 方法，使其從文件中讀取名稱列表
        const data = await readFile('name_list.txt', 'utf8');
        const people = data.split('\n');
        const selected = [];
        return [people, selected];
    }

    getRandomPerson() {
        // 修改 getRandomPerson 方法，隨機返回一個名稱
        const i = Math.floor(Math.random() * this.people.length);
        return this.people[i];
    }

    selectNextPerson() {
        // 修改 selectNextPerson 方法，隨機選擇並返回一個未被選擇過的名稱
        console.log('--select next person--');
        if (this.people.length === this.selected.length) {
            console.log('all selected');
            return null;
        }
        let person = this.getRandomPerson();
        while (this.selected.includes(person)) {
            person = this.getRandomPerson();
        }
        this.selected.push(person);
        return person;
    }

    notifySelected() {
        // 修改 notifySelected 方法，通知所有已選擇的人
        console.log('--notify selected--');
        for (const x of this.selected) {
            const context = this.mailSystem.write(x);
            this.mailSystem.send(x, context);
        }
    }
}

module.exports = {
    Application,
    MailSystem,
};
