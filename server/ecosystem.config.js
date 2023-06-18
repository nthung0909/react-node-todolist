module.exports = {
  apps : [{
    script: 'app.js',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'hung',
      host : '192.168.11.128',
      ref  : 'origin/master',
      repo : 'git@github.com:nthung0909/react-node-todolist.git',
      path : '/var/www/production',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
