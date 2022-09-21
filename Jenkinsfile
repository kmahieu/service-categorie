pipeline {
  agent any
  tools {nodejs "nodejs"}
  stages {
    
    stage("git") {
      steps {
        git branch : "main", url : "https://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@github.com/kmahieu/service-categorie.git"
      }
    }

    stage("npm install") {
      steps {
          sh "npm install"
      }
    }

    stage("mocha") {
      steps {
        sh "npm uninstall mocha && npm i mocha"
      }
    }

    stage('npm test') {
      steps {
          sh "npm test"
        }
    }

    stage('git merge') {
      steps {
          sh "git checkout Prod"
          sh "git merge main"
          sh "git push origin Prod"
        }
    }
}

  }
