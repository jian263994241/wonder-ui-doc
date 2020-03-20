const docgen = require('react-docgen');
const externalProptypesHandler = require('react-docgen-external-proptypes-handler');


module.exports = (path) => {
  const handlers = docgen.defaultHandlers.concat(externalProptypesHandler('./iconNames'))
  const code = require('raw-loader!./iconNames').default;

  docgen.parse(code, docgen.resolver.findAllComponentDefinitions, handlers)
  
  // return docgen.parse(code, null, handlers);
}