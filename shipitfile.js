module.exports = function (shipit) {
  require('shipit-deploy')(shipit)
  require('shipit-assets')(shipit)

  shipit.initConfig({
    // branch: 'supplier-login',
    default: {
      workspace: '/tmp/github-monitor',
      deployTo: '/app/rip-g8iker',
      repositoryUrl: 'https://github.com/zackexplosion/rip-g8iker.com',
      assets: {
        remoteBasePath: '/app/rip-g8iker/current/build',
        'paths': [
          'build'
        ]
      }
    },
    production: {
      servers: 'zack@zackexplosion-fun.us-west1-b.infinite-loader-151509'
    }
  })

  shipit.on('deployed', async function () {
    // var shared_path = `${shipit.config.deployTo}/shared`
    try {
      await shipit.remote(`cd ${shipit.currentPath} && nvm use && yarn`)

      // await Promise.all([
      //   shipit.local('yarn build'),
      //   shipit.remote(`ln -nfs ${shared_path}/.env ${shipit.currentPath}/.env`)
      // ])
      await shipit.local('yarn build'),
      await shipit.start('assets:push')
    } catch (error) {
      console.log(error)
    }

    shipit.remote('NODE_ENV=production node server.js')
  })
}
