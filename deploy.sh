npm run build
cd dist
git init
git add .
git commit -m 'deploy'
git remote add origin https://github.com/optosoftware/mysite.git
git push -f origin master
cd ..