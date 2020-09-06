import { connect } from 'react-redux';
import Works from 'src/components/Works';

const mapStateToProps = (state) => ({
  projects: state.works.projectsDatas,
});

const mapDispatchToProps = {};

// Container
const WorksContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Works);

export default connect(mapStateToProps, mapDispatchToProps)(WorksContainer);
