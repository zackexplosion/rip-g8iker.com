module.exports = function (shipit) {
  require('shipit-deploy')(shipit)
  // require('shipit-assets')(shipit)

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
      servers: 'zack@YEE'
    }
  })
  const YARN = '/home/zack/.nvm/versions/node/v8.12.0/bin/yarn'
  shipit.on('deployed', async function () {
    // var shared_path = `${shipit.config.deployTo}/shared`
    try {
      await shipit.remote(`cd ${shipit.currentPath} && nvm use && ${YARN}`)

      // await Promise.all([
      //   shipit.local('yarn build'),
      //   shipit.remote(`ln -nfs ${shared_path}/.env ${shipit.currentPath}/.env`)
      // ])
      // await shipit.l¡ocal('yarn build'),
      // await shipit.start('assets:push')
      await shipit.copyToRemote(
        './build',
        `${shipit.currentPath}/build`,
      )
    } catch (error) {
      console.log(error)
    }

    shipit.start('startApp')
  })

  shipit.task('startApp', async () => {
    await shipit.remote(`pm2 start ${shipit.currentPath}/server.js`)
  })
}
