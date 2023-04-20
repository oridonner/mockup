#! /bin/sh

echo "[INFO]: started building images..."

# to docker registry
# docker build -t gcr.io/optimal-tide-293517/mock-defender:auth -f ./services/auth/Dockerfile .
# docker build -t gcr.io/optimal-tide-293517/mock-defender:faker -f ./services/faker/Dockerfile .
# docker build -t gcr.io/optimal-tide-293517/mock-defender:client -f ./clients/front/Dockerfile .
# docker push gcr.io/optimal-tide-293517/mock-defender:auth
# docker push gcr.io/optimal-tide-293517/mock-defender:faker
# docker push gcr.io/optimal-tide-293517/mock-defender:client

# to artifact registry
docker build -t us-central1-docker.pkg.dev/optimal-tide-293517/wizdome:auth -f ./services/auth/Dockerfile .
docker build -t us-central1-docker.pkg.dev/optimal-tide-293517/wizdome:faker -f ./services/faker/Dockerfile .
docker build -t us-central1-docker.pkg.dev/optimal-tide-293517/wizdome:client -f ./clients/front/Dockerfile .
docker push us-central1-docker.pkg.dev/optimal-tide-293517/wizdome:auth
docker push us-central1-docker.pkg.dev/optimal-tide-293517/wizdome:faker
docker push us-central1-docker.pkg.dev/optimal-tide-293517/wizdome:client

echo "
[DONE]: succesfully built images.
"
