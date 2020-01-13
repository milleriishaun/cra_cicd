Main: Regular create-react-app to be configured with travisci for CI/CD purposes.
(build and deploy to Netlify only when tests pass)(get used to yaml config files and workflows)

Notes:
use GitKraken for simplified GUI for local an remote repository management
implement git hooks: pre-commit to verify build still works
for cleaner git logs/commits: git config --global alias.logg 'log --oneline --graph --decorate',
then 'git logg' rather than 'git log'
for cleaner git commits: use commit.template on GitKraken for the repo
git pull requests: create and allow a template for git pull requests for a certain branch
use user stories, tests, epochs, and personas
