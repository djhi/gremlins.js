.PHONY: package.js

watch:
	./node_modules/webpack-dev-server/bin/webpack-dev-server.js --colors --progress --host=0.0.0.0

setup:
	npm install

build:
	NODE_ENV=production ./node_modules/webpack/bin/webpack.js -p

package.js:
	@rm -f $@
	node bin/meteor package.json > package.js
	@chmod a-w $@
