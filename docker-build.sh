#! /bin/sh

echo "[INFO]: started building images..."

docker build -t gcr.io/optimal-tide-293517/mock-defender:auth -f ./services/auth/Dockerfile .
docker build -t gcr.io/optimal-tide-293517/mock-defender:faker -f ./services/faker/Dockerfile .
docker build -t gcr.io/optimal-tide-293517/mock-defender:client -f ./clients/front/Dockerfile .

#docker push gcr.io/optimal-tide-293517/mock-defender:auth
#docker push gcr.io/optimal-tide-293517/mock-defender:faker
#docker push gcr.io/optimal-tide-293517/mock-defender:client

echo "
[DONE]: succesfully built images.
"
