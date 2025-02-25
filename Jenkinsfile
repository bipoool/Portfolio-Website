pipeline {
    agent any

    environment {
        BUILD_DIR = "/var/www/vipul-gupta-me"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to NGINX') {
            steps {
                script {
                    sh "sudo rm -rf ${BUILD_DIR}/*"
                    sh "sudo mv build/* ${BUILD_DIR}/"
                }
            }
        }

        stage('Restart Nginx') {
            steps {
                sh "sudo systemctl restart nginx"
            }
        }
    }

    post {
        success {
            echo "Deployment successful!"
        }
        failure {
            echo "Deployment failed."
        }
    }
}
