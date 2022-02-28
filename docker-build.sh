#! /bin/sh

echo "[INFO]: started building images..."

docker build -t test314zdes/mock-defender:auth -f ./services/auth/Dockerfile .
docker build -t test314zdes/mock-defender:faker -f ./services/faker/Dockerfile .
docker build -t test314zdes/mock-defender:client -f ./clients/front/Dockerfile .

docker push test314zdes/mock-defender:auth
docker push test314zdes/mock-defender:faker
docker push test314zdes/mock-defender:client

echo "
[DONE]: succesfully built images.
"
