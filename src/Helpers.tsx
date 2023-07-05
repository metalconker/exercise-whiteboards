export function validateProps(props) {
  //First check if the props itself is null or unefined
  if (!props) {
    throw new Error("props are required parameter");
  }

  //Second check for each child of the props
  for (let key in props) {
    if (props[key] === null || typeof props[key] === "undefined") {
      throw new Error(key + " is required parameter ");
    }
  }
}

export function assertNotNull(
  key: String,
  value: any,
  functionName: String
) {
  if (value === null || value === undefined) {
    throw new Error(
      `The variable ${key} in class ${functionName} must not be null or undefined.`
    );
  }
}

export function checkParameters(params: Array<any>, functionName: String) {
   params.forEach( ([key, value]) => {
    assertNotNull(key, value, functionName);
  });
};

//Error check
export function checkSetter(value: any, variable: string): any {
  try {
    if (!value || value === null || value === undefined) {
      throw new Error(variable + " is invalid!");
    }
    return value;
  } catch (err) {
    return console.log(err);
  }
}

export function checkGetter(value: any, variable: string): any {
  try {
    if (!value || value === null || value === undefined) {
      throw new Error(variable + " is invalid!");
    }
    return value;
  } catch (err) {
    return console.log(err);
  }
}

export function getWeek(date_input: any) {
  var date = new Date(date_input);
  date.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
  // January 4 is always in week 1.
  var week1 = new Date(date.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
  return (
    1 +
    Math.round(
      ((date.getTime() - week1.getTime()) / 86400000 -
        3 +
        ((week1.getDay() + 6) % 7)) /
        7
    )
  );
}
