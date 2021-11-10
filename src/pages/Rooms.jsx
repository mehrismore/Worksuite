import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Room1 } from "./Room-1";
import { Room2 } from "./Room-2";

export const Rooms = () => {
  return (
    <div className="container mx-auto min-h-screen font-family: 'IBM Plex Sans', sans-serif bg-gray-400 pt-3 lg:bg-transparent">
      <Router>
        <div className="flex justify-start text-3xl">
          <div className="flex flex-col pl-6 pr-6 mb-4 ml-4 mr-4 rounded-md shadow bg-white lg:pl-4 shadow-none">
            <Link
              to="/room-1"
              className="text-gray-900 bg-gray-50 inline-flex items-center p-6 text-xl font-light w-44 focus:bg-blue-50 hover:bg-gray-100"
            >
              Room 1
            </Link>
            <Link
              to="/room-2"
              className="text-gray-900 bg-gray-50 inline-flex items-center p-6 text-xl font-light w-44 focus:bg-blue-50 hover:bg-gray-100"
            >
              Room 2
            </Link>
          </div>
          <div className="mt-10">Rooms</div>
        </div>

        <Switch>
          <Route path="/room-1">
            <Room1 />
          </Route>
          <Route path="/room-2">
            <Room2 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
