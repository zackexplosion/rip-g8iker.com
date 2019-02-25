module.exports = function (shipit) {
  require('shipit-deploy')(shipit)

  shipit.initConfig({
    // branch: 'supplier-login',
    default: {
      workspace: '/tmp/github-monitor',
      deployTo: '/app/rip-g8iker',
      repositoryUrl: 'https://github.com/zackexplosion/rip-g8iker.com',
    },
    production: {
      servers: 'zack@YEE'
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
      // await shipit.l¡ocal('yarn build'),
      // await shipit.start('assets:push')
      await shipit.copyToRemote(
        './build',
        shipit.currentPath,
      )
    } catch (error) {
      console.log(error)
    }

    shipit.start('startApp')
  })

  shipit.task('startApp', async () => {
    const name = 'rip-g8iker'
    const current_path = `${shipit.config.deployTo}/current`
    try {
      await shipit.remote(`pm2 start ${current_path}/server.js --name ${name}`)
    } catch (error) {
      await shipit.remote(`pm2 restart ${name}`)
    }

  })
}
