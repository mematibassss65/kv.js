# kv.js


## Özellikler

- Varsayılan olarak yerleşik veritabanı desteği ve çok amaçlı kullanıma hazır.
- Yerleşik 600+ işlev, basit ve öğrenmesi kolay.
- Öğrenmesi basit, tümü dizi tabanlı ve kompakt.
- Topluluk tarafından kullanılmak üzere mevcut uzantı desteği. 

## Kurulum

**node.js v16.6.0+ Gereklidir!**

```bash
npm install kv.js
```

## Ayarlamalar

```javascript
const kvjs = require("kv.js")

const bot = new kvjs.KvClient({
token: "Discord Bot Tokeniniz",
prefix: "Discord Bot Prefixiniz",
intents: ["MessageContent", "Guilds", "GuildsMessages"]
})

//Eventler
bot.onMessage()

//Komut Örneği (ping)
bot.command({
name: "ping",
code: `Pong! $pingms`
})

//Slash Interaction Komutu Örneği (ping)
/*ÇALIŞMASI İÇİN BU FONKSİYONU ÇALIŞTIRMALISINIZ:
$createApplicationCommand[$sunucuID;ping;Pong!;true;slash]
*/
bot.interactionCommand({
  name: "ping",
  prototype: 'slash',
  code: `$interactionReply[Pong! $pingms]`
})
```

### Fonksiyon Kullanım Örneği

```php
$authorID - İşlevi yürüten yazar kimliğini/kullanıcı kimliğini döndür
```

### Nasıl Çalışır?

Yürütülecek bir işlev anlamında `$` kullanmak oldukça basittir, bir komut tarafından çalıştırılır.
İşlev adından ve ek alanlarından (varsa) sonra `$` kullanılması, işlevin amaçladığı şekilde çalışacaktır.

## Eventler

Eventler, bir Discord Botu oluşturmadaki en önemli faktördür. Bu, geliştiricilerin İstemcilerinde gerçekleşecek belirli olayları oluşturmasına yardımcı olur. aoi.js içinde birkaç olay vardır; örnek olay, İstemcinin hazır olduğu ve API'de oturum açtığı zamandır.

```javascript
bot.readyCommand({ //Event Komutu
    channel: "Kanal ID", //İstemcinin oturum açacağı kanal. (isteğe bağlı)
    code: `Yürütülecek kod` //Bu, yürütülecek bir mesaj veya kod olabilir.
})
```

## Disclaimer
    
kv.js, Discord veya başka herhangi bir hizmetle bağlantılı veya bağlantılı değildir.
    
## Links
- [Website]()
- [NPM](https://www.npmjs.com/package/kv.js)
- [Discord Support Server]()
- [Documentation](https://.tk/docs/)
