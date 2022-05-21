import { Router } from "react-router-dom";
import { useState, useLayoutEffect } from "react";

const CustomRouter = ({ history, ...props }: any) => {

  const [state, setState] = useState({
    action: history.action,
    location: history.location
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  function showLog() {
    console.log("HISTORY_IN_CUSTOM_ROUTER: ",history);
    console.log("STATE_IN_CUSTOM_ROUTER: ",state);
    console.log("PROPS_IN_CUSTOM_ROUTER: ",props);
  }

  return (
    <>
    {showLog()}
      <Router
        {...props}
        location={state.location}
        navigationType={state.action}
        navigator={history}
      />
    </>
  );

}

export default CustomRouter;