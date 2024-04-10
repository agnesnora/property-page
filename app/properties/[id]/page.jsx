"use client";
import React from "react";
import { useParams } from "next/navigation";
const PropertyPage = () => {
  const { id } = useParams();
  console.log(id);
  return <div>PropertyPage{id}</div>;
};

export default PropertyPage;
PropertyPage;
