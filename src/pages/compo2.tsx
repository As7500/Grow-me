import React, { useState } from "react";
import {Button,Checkbox} from "@mui/material";

interface ComponentTwoProps {
  name: string;
  ind: string;
  subDept: string[];
}

export default function ComponentTwo(props: ComponentTwoProps) {
  
  // Intitial state of parent departments is set to unchecked
  const [checked, setChecked] = useState(false);

  //array of length equal to sub_dept length to store the state of the sub_depts 
  const [childCheckboxes, setChildCheckboxes] = useState<boolean[]>(
    new Array(props.subDept.length).fill(false)
  );

  // state for hide/display sub_depts
  const [showChildren, setShowChildren] = useState(false);

  // handleClick expands/collapses the sub_depts
  const handleClick = () => {
    setShowChildren(!showChildren);
  };

  // handleInputChange is a function for parent department which keeps track of checked/unchecked condtion of parent and checks/unchecks all the sub_depts  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    setChecked(newValue);
    setChildCheckboxes(childCheckboxes.map(() => newValue));
  };

  interface ChildrenProps {
    forClass: string;
    forId: number;
    name: string;
  }

  // Component for sub_depts
  function Children(props: ChildrenProps) {
    return (
      <div>
        <Checkbox
        className={props.forClass}
        id={props.forClass + "" + (props.forId + 1)}
        onChange={handleInputChangeChild(props.forId)}
        checked={childCheckboxes[props.forId]}
        defaultChecked />
        {props.name}
      </div>
    );
  }

  // handleInputChangeChild is a function for sub_dept events and if all sub_depts are checked parent also get checked.
  const handleInputChangeChild = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    const updatedChildCheckboxes = [...childCheckboxes];
    updatedChildCheckboxes[index] = newValue;
    setChildCheckboxes(updatedChildCheckboxes);
    
    setChecked(updatedChildCheckboxes.every((isChecked) => isChecked));
  };


  return (
    <>
      <div>
        <Button variant="contained" size="small" onClick={handleClick} className={props.ind}>
          {showChildren ? "-" : "+"}
        </Button>
        <Checkbox
        id={props.ind}
        onChange={handleInputChange}
        checked={checked}
        defaultChecked />
        {props.name}
      </div>
      {showChildren && (
        <div
          id={"children" + props.ind}
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "80px",
          }}
        >
          {props.subDept.map((ele, index) => (
            <Children key={ele} name={ele} forClass={props.ind} forId={index} />
          ))}
        </div>
      )}
      <br />
    </>
  );
}



