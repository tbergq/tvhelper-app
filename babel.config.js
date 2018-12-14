// @flow

/*::
 type API = {|
  +cache: boolean => void,
|};
*/

module.exports = function(api /* :API */) {
  api.cache(true);
  const presets = ['babel-preset-expo'];
  const plugins = ['@babel/plugin-transform-runtime'];

  return {
    presets,
    plugins,
  };
};
