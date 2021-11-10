import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Upcoming } from "./Upcoming";
import { History } from "./History";

export const Meetings = () => {
  return (
    <div className="container flex flex-row mx-auto min-h-screen font-family: 'IBM Plex Sans', sans-serif bg-gray-400 pt-3 lg:bg-transparent text-3xl">
      <Router>
        <div className="flex justify-start text-3xl">
          <div className="flex flex-col pl-6 pr-6 mb-4 ml-4 mr-4 rounded-md shadow bg-white lg:pl-4 shadow-none">
            <Link
              to="/upcoming-meeting"
              className="text-gray-900 bg-gray-50 inline-flex items-center p-6 text-xl font-light w-44 focus:bg-blue-50 hover:bg-gray-100"
            >
              Upcoming
            </Link>
            <Link
              to="/history-meeting"
              className="text-gray-900 bg-gray-50 inline-flex items-center p-6 text-xl font-light w-44 focus:bg-blue-50 hover:bg-gray-100"
            >
              History
            </Link>
          </div>
        </div>
        <Switch>
          <Route path="/meetings">
            <div className="mt-10">Meetings</div>
          </Route>
          <Route path="/upcoming-meeting">
            <Upcoming />
          </Route>
          <Route path="/history-meeting">
            <History />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
