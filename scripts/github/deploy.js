
#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const child_process = require('child_process'); // eslint-disable-line camelcase
const inquirer = require('inquirer');
const pkg = require('../../package.json');

process.on('unhandledRejection', reason => console.log(reason));
(async function() {
  const currentVersion = pkg.version;

  console.log(`\nCurrent version: ${currentVersion}\n`);

  await askUnskippableQuestion(
    `Have you updated changelog file with recent features and bugfixes? [CHANGELOG.md]`
  );

  const nextVersion = await inquirer
    .prompt({
      name: 'bump',
      message: 'Which version part do you want to update?',
      type: 'list',
      choices: ['major', 'minor', 'patch', 'skip'],
      default: 'skip'
    })
    .then(
      answers =>
        new Promise((resolve, reject) => {
          const [major, minor, patch] = currentVersion
            .split('.')
            .map(x => parseInt(x, 10));

          switch (answers.bump) {
            case 'major':
              resolve(`${major + 1}.0.0`);
              break;
            case 'minor':
              resolve(`${major}.${minor + 1}.0`);
              break;
            case 'patch':
              resolve(`${major}.${minor}.${patch + 1}`);
              break;
            case 'skip':
              resolve(`${major}.${minor}.${patch}`);
              break;
            default:
              reject('Incorrect version bump');
          }
        })
    );

  const {shouldUpdateFiles} = await inquirer.prompt({
    name: 'shouldUpdateFiles',
    message: `Do you want to update all files to version ${nextVersion}?`,
    type: 'confirm',
    default: false
  });

  if (shouldUpdateFiles) {
    updatePackageConfig(nextVersion);
  }

  const {shouldRunBuild} = await inquirer.prompt({
    name: 'shouldRunBuild',
    message: `Do you want to run the build process?`,
    type: 'confirm',
    default: false
  });

  if (shouldRunBuild) runBuild();

  const {shouldCommitChanges} = await inquirer.prompt({
    name: 'shouldCommitChanges',
    message: `Do you want to commit the changes?`,
    type: 'confirm',
    default: false
  });

  if (shouldCommitChanges) commitChanges(nextVersion);

  const {shouldCreateTag} = await inquirer.prompt({
    name: 'shouldCreateTag',
    message: `Do you want to create a tag?`,
    type: 'confirm',
    default: false
  });

  if (shouldCreateTag) createTag(nextVersion);

  const {shouldPushChanges} = await inquirer.prompt({
    name: 'shouldPushChanges',
    message: `Do you want to push the changes?`,
    type: 'confirm',
    default: false
  });

  if (shouldPushChanges) pushChanges();

  const {shouldPublish} = await inquirer.prompt({
    name: 'shouldPublish',
    message: `Do you want to publish on CDN and NPM?`,
    type: 'confirm',
    default: false
  });

  if (shouldPublish) publish();

  await askUnskippableQuestion(
    `Sweet! Now go to https://github.com/stbui/angular-material-app/releases and copy a changelog in there`
  );

  console.log(`\n✔ Deployment of angular-material-app ${nextVersion} complete!\n`);
})();

async function askUnskippableQuestion(question) {
  const {answer} = await inquirer.prompt({
    name: 'answer',
    message: question,
    type: 'confirm',
    default: false
  });

  if (!answer) {
    console.log(
      'Wait A Sec Are U Trying To Cheat Me Again? Sorry, you have to do it ¯\\_(ツ)_/¯'
    );
    await askUnskippableQuestion(question);
  }
}

function updatePackageConfig(nextVersion) {
  const filePath = path.join(__dirname, '../../package.json');
  const originalData = require('../../package.json');
  const data = Object.assign({}, originalData, {version: nextVersion});
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
  console.log(`✔ package.json updated`);
}

function execCommand(command) {
  try {
    child_process.execSync(command, {
      stdio: 'inherit'
    });
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

function runBuild() {
  execCommand(`npm run buid:github`);
  execCommand(`npm run publish:github`);
  console.log('✔ Build process completed');
}

function commitChanges(nextVersion) {
  execCommand(`git add -A && git commit -am "${nextVersion}"`);
  console.log('✔ Changes committed');
}

function createTag(nextVersion) {
  execCommand(`git tag -a ${nextVersion} -m "Version ${nextVersion}"`);
  console.log('✔ Tag created');
}

function pushChanges() {
  execCommand(`git push --follow-tags`);
  console.log('✔ Changes pushed');
}

function publish() {
  execCommand(`npm publish`);
  console.log('✔ Published on CDN and NPM');
}