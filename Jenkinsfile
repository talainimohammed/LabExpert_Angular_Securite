pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
              bat 'npm cache clean --force'
                bat 'npm install'
            }
        }

        stage('Build Angular App') {
            steps {
                bat 'npm run build'
            }
        }
      stage('Tests') {
            steps {
                bat 'ng test'
            }
        }
    }
}
