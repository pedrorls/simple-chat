import { connect } from "react-redux";
import { Sidebar } from "../components/Sidebar";

const mapStateToProps = state => ({
  users: state.usersReducer
});

export const SidebarContainer = connect(mapStateToProps)(Sidebar);
