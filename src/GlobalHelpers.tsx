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