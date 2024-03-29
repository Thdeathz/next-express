module.exports = {
  // lint and format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],

  // format MarkDown and JSON
  '**/*.(md|json)': (filenames) => `yarn prettier --write ${filenames.join(' ')}`,
}
