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
                sh 'CI=false npm run build'
            }
        }

        stage('Deploy to NGINX') {
            steps {
                script {
                    sh "sudo /bin/rm -rf ${BUILD_DIR}/*"
                    sh "sudo /bin/mv build/* ${BUILD_DIR}/"
                }
            }
        }

        stage('Restart Nginx') {
            steps {
                sh "sudo /bin/systemctl restart nginx"
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
