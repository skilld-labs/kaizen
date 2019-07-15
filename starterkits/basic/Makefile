IMAGE_FRONT = node:lts-alpine

# Execute front container function.
front = docker run \
	--rm \
	--init \
	-v $(shell pwd):/usr/src/app -w /usr/src/app \
	-w /usr/src/app \
	$(IMAGE_FRONT) ${1}

# Build front tasks.
install:
	@echo "Installing dependencies..."
	$(call front, yarn install --ignore-optional --prod)

build:
	$(call front, yarn build --verbose)

lint:
	$(call front, yarn lint-fix)
