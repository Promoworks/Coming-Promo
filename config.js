var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();
 
var config = {
    username: "promo",
    password: "@sZrAR#wM,Iz", // optional, prompted if none given 
    host: "promo.works",
    port: 22,
    localRoot: __dirname ,
    remoteRoot: "/public_html/",
    include: ['vendor','routes','views','app.js','package.json','package-lock.json'],
    exclude: ['.git', '.idea', 'tmp/*', 'build/*']
}
    
ftpDeploy.deploy(config, function(err) {
    if (err) console.log(err)
    else console.log('finished');
});

