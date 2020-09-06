import { connect } from 'react-redux';
import Welcome from 'src/components/Welcome';

const mapStateToProps = (state) => ({
  socialButtons: state.welcome.socialButtons,
});

const mapDispatchToProps = {};

// Container
const WelcomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Welcome);

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeContainer);
