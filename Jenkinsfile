pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/mukeshjangid16/ec2-node-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Restart App') {
            steps {
                sh 'pm2 restart ec2-node-app || pm2 start app.js --name ec2-node-app'
                sh 'pm2 save'
            }
        }
    }
}

