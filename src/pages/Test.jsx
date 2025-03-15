import React from "react";
import { Outlet } from "react-router-dom";

export function Test() {
  return (
    <div>
      <Outlet /> {/* Renders child routes */}
    </div>
  );
}
