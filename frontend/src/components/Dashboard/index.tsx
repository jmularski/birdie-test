import Dashboard, { DispatchProps } from "./Dashboard";
import { AppState } from "@App/store/reducers";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { getHistory } from "@App/store/statistics/statisticsActions";
import { StatisticsState } from "@App/store/statistics/types";

const mapStateToProps = (state: AppState): StatisticsState => ({
  events: state.statistics.events
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  getHistory: () => dispatch(getHistory())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
