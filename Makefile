TESTS = ./test.spec.js
REPORTER = list
MOCHA = node_modules/.bin/mocha

watch: npm-install
	@NODE_ENV=test $(MOCHA) \
		--reporter $(REPORTER) \
		--bail \
		--growl \
		--watch \
		$(TESTS)

npm-install:
	@npm install -d

.PHONY: npm-install watch
