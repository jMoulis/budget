module.exports = {
  apps: [
    {
      name: 'API',
      script: 'back/index.js',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'budget',
      script: 'npm',
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],

  deploy: {
    production: {
      user: 'root',
      host: '93.90.204.229',
      ref: 'origin/master',
      repo: 'git@github.com:jMoulis/budget.git',
      path: '/var/www/html/budget/production',
      ssh_options: ['ForwardAgent=yes'],
      'post-deploy':
        'npm run server && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
    },
  },
};
