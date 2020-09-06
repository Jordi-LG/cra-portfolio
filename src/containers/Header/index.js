import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { showNavBar } from 'src/actions';

const mapStateToProps = (state) => ({
  displayNavBar: state.header.displayNavBar,
});

const mapDispatchToProps = (dispatch) => ({
  handleOnHamburger: () => {
    dispatch(showNavBar());
  },
});

// const componentToConnect = connect(mapStateToProps, mapDispatchToProps);
// const connectedComponent = componentToConnect(Messages);
// export default connectedComponent;

// Container
const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
