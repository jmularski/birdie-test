import { AppState } from "@store/reducers";
import { isAuthenticated } from "@store/selectors";
import { connect } from "react-redux";
import ProtectedRoute, { StateProps } from "./ProtectedRoute";

const mapStateToProps = (state: AppState): StateProps => ({
  isAuthenticated: isAuthenticated(state)
});

export default connect(mapStateToProps)(ProtectedRoute);
