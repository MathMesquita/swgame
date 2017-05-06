import React from 'react';

const getDisplayName = Component => Component.displayName || Component.name || 'Component';

/*
  I prefered to use a HOC in place of normal redux because
  by the size of the project, i didn't thought redux
  would worth it, making our users download another
  library just because the "native" state is more verbose
  isn't correct, with this HOC we let the component state
  looks more closer to a redux store.
*/
const reduxer =
  reducerFunction =>
    (Component) => {
      class ReduxerHOC extends React.Component {
        constructor(props) {
          super(props);

          this.state = reducerFunction();

          this.dispatch = this.dispatch.bind(this);
        }

        dispatch(action) {
          this.setState(state => reducerFunction(state, action));
        }

        render() {
          return <Component dispatch={this.dispatch} {...this.state} />;
        }
      }

      ReduxerHOC.displayName = `Reduxer(${getDisplayName(Component)})`;

      return ReduxerHOC;
    };

export default reduxer;
