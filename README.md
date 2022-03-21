- **Don't ignore _site** 
- Install node modules
  ```
  npm install
  ```
  
- Run the project
  ```
  bundle exec jekyll serve  &  gulp
  ```
- Deploy to github pages
    ````
    push to repo -> gulp deploy
    ````


**Error: Gulp-gh-pages reports TypeError: Cannot read property '0' of null**
solution:

1. CD the node_modules / GULP-GH-Pages / 
2. NPM the install --save Gift @ 0 . 10 . 2 // specified version Installation 
3. CD ../../ // moved back to the root directory 
4. gulp deploy // re-execution deploy
[More...](https://hsiangfeng.github.io/gulp/20191220/1507807439/ "For More")

**Error: Command failed: fatal: pathspec '.' did not match any files**
solution:
1. leave a .publish folder in the repo via gitignore.
[More...](https://github.com/harrypujols/gulp/issues/1 "More...")