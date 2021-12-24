IMAGE_FRONT = node:lts-alpine

# Execute front container function.
front = docker run \
	--rm \
	--init \
	--user $(shell id -u):$(shell id -g) \
	-v $(shell pwd):/app -w /app \
	$(IMAGE_FRONT) ${1}

# Build front tasks.
install:
	@echo "Installing dependencies..."
	$(call front, yarn install --ignore-optional --prod)

build:
	$(call front, yarn --verbose build)

lint:
	$(call front, yarn lint-fix)
