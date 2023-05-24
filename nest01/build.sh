docker build -t img01 .
docker run -p 3000:3000 -it img01 /bin/bash