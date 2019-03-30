import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="home">Home</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="Library">Library</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="Data">Data</BreadcrumbItem>
        <BreadcrumbItem active tag="Bootstrap">Bootstrap</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default Example;