pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        bat 'docker build -t project .'
        bat 'docker -d -p 8808:80 --name project project'
      }
    }

  }
}