const { getOptions } = require("loader-utils");
const validateOptions = require("schema-utils");

const schema = {
  "type": "object",
  "properties": {
      "work": {
        "type": "string"
      },
      "sick": {
        "type": "string"
      }
  }
};

module.exports = function(source) {

    const options = getOptions(this);
    console.log(options);
    validateOptions(schema, options, 'loader');

    const  {work, sick} = options;
    source = source.replace(/\[work\]/g, work).replace(/\[sick\]/g, sick);

    return `${JSON.stringify(source)}`;
};