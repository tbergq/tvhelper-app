// @flow

/*::
 type API = {|
  +cache: boolean => void,
|};
*/

module.exports = function(api /* :API */) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'flow'],
  };
};
