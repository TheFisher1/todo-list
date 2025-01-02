  #!/bin/bash
  
  curl -sSL https://github.com/zricethezav/gitleaks/releases/download/v8.10.0/gitleaks-linux-amd64 -o gitleaks
            chmod +x gitleaks
            ./gitleaks detect --source=.