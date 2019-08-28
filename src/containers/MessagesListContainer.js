import { connect } from "react-redux";
import { MessagesList } from "../components/MessagesList";

const mapStateToProps = state => ({
  messages: state.messagesReducer
});

export const MessagesListContainer = connect(mapStateToProps)(MessagesList);
