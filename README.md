
# https://github.com/thach2108/auto-test
# Required node v10.19.0
# Follow this link https://nodejs.org/en/ to install nodejs

# Step 1:
# install node_modules

npm install

# or

yarn
# If you cannot install. Follow this link https://yarnpkg.com/cli/install to install yarn

# Step 2:
# run app

npm run start

# or

yarn start

# Step 3:
# install webdriver
# Follow this link https://www.npmjs.com/package/webdriver-manager to install webdriver

npm install -g webdriver-manager

# Step 4:
# run webdriver

npm run driver

# or

yarn budriver

# Step 5:
# run your test script

npm run test

# or

yarn test

# If it is not work. You may run 

webdriver-manager clean
webdriver-manager update

# then return for step 4

# Now you can write your test script in "/src"
# Follow this link https://www.protractortest.org/#/tutorial to learn more
