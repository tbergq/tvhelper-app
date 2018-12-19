// @flow

export { withNavigation, SafeAreaView } from 'react-navigation';
type NavigationStateParameters = Object;

export type RouteNames = 'TvShow' | 'TvFavorite';

export type NavigationListener = (
  key: 'willBlur' | 'willFocus' | 'didFocus' | 'didBlur',
  // See payload https://reactnavigation.org/docs/en/navigation-prop.html#addlistener-subscribe-to-updates-to-navigation-lifecycle
  callback: (payload: Object) => void,
) => { remove: () => void };

/**
 * Based on official types with custom changes (like RouteNames)
 * @see https://github.com/flow-typed/flow-typed/tree/master/definitions/npm/react-navigation_v2.x.x
 */
export type Navigation<T> = {
  +navigate: (
    routeName:
      | RouteNames
      | {|
          +routeName: RouteNames,
          +params?: NavigationStateParameters,
        |},
    params?: NavigationStateParameters,
  ) => void, // In fact it returns boolean but we don't care of this result
  +state: {
    +params: T,
  },
  +setParams: (newParameters: NavigationStateParameters) => void,
  +getParam: (key: string) => any,
  +goBack: (key?: string | null) => void,
  addListener: NavigationListener,
};
