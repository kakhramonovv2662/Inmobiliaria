dcnf ?= docker.env
include $(dcnf)
export $(shell sed 's/=.*//' $(dcnf))

build-app:
	docker build --rm -t $(CONTAINER_NAME):$(TAG) .	

stop-app:
	docker stop $(CONTAINER_NAME); docker rm $(CONTAINER_NAME)

run-app:
	docker run -d --publish $(EXTERNAL_PORT):$(PORT) --restart always --name $(CONTAINER_NAME) -it $(CONTAINER_NAME)
	
up-app: build-app run-app

logs-app:
	docker logs --follow $(CONTAINER_NAME)

bash-app:
	docker exec -it $(CONTAINER_NAME) sh

status:
	docker ps