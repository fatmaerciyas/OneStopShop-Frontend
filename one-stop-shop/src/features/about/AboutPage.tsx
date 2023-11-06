// import { useState } from "react";

// import {
//   Alert,
//   AlertTitle,
//   Button,
//   ButtonGroup,
//   Container,
//   List,
//   ListItem,
//   ListItemText,
// } from "@mui/material";
// import agent from "../../app/api/agent";

export default function AboutPage() {
  return <h2 className="m-40">heloo</h2>;
  // const [validationErrors, setValidationErrors = useState<string[]>([]);
  // function getValidatonError(){
  //   agent.TestErrors.getValidationError()
  //   .then(() =>console.log("should not see this"))
  //   .catch(error=>setValidationErrors(error));
  // }
  // return (
  //   <Container>
  //     <ButtonGroup>
  //       <Button variant="contained" onClick={()=>agent.TestErrors.get400Error().catch(error=>console.log(error)
  //       )}>Test 400 error
  //       </Button>
  //       <Button variant="contained" onClick={()=>agent.TestErrors.get401Error().catch(error=>console.log(error)
  //         )}>Test 401 error
  //         </Button>
  //         <Button variant="contained" onClick={()=>agent.TestErrors.get404Error().catch(error=>console.log(error)
  //           )}>Test 404 error
  //           </Button>
  //           <Button variant="contained" onClick={()=>agent.TestErrors.get500Error().catch(error=>console.log(error)
  //             )}>Test 500 error
  //             </Button>
  //           <Button variant="contained" onClick={getValidatonError}>Test Validation error
  //             </Button>
  //     </ButtonGroup>
  //     {validationErrors.length > 0 &&
  //       <Alert severity="error">
  //         <AlertTitle>
  //           ValidationErrors
  //         </AlertTitle>
  //         <List>
  //         {validationErrors.map(console.error(=> (
  //           <ListItem key={error}>
  //             <ListItemText>{error}</ListItemText>
  //           </ListItem>
  //         ));
  //         </List>
  //       </Alert>}
  //   </Container>
  // );
}
