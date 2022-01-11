import React from 'react';
import CourseHeaderRecord from './CourseHeaderRecord';
import CalloutRecord from './CalloutRecord';
import LearnSectionRecord from './LearnSectionRecord';
import PricingSectionRecord from './PricingSectionRecord';

export default function CourseSection({ details }) {
  console.log(details);

  const components = {
    CourseHeaderRecord,
    CalloutRecord,
    LearnSectionRecord,
    PricingSectionRecord,
  };

  const DynamicComponent = components[details.__typename];
  return <DynamicComponent id='dynamic_component' details={details} />;
  // switch (details.__typename) {
  //   case 'CourseHeaderRecord':
  //     return <CourseHeaderRecord details={details} />;
  //     break;
  //   case 'CalloutRecord':
  //     return <CalloutRecord details={details} />;
  //     break;
  //   case 'LearnSectionRecord':
  //     return <LearnSectionRecord details={details} />;
  //     break;
  //   case 'PricingSectionRecord':
  //     return <PricingSectionRecord details={details} />;
  //     break;
  //   default:
  //     break;
  // }
  // if (details.__typename === 'CourseHeaderRecord') {
  //   return <CourseHeaderRecord details={details} />;
  // }
  // return (
  //   <div>
  //     <h1>Course Section</h1>
  //     {details.description}
  //     <p>------------</p>
  //   </div>
  // );
}
