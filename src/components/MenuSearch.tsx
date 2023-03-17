import React, { Component, useState } from "react";

import "./style.css";
import "./flags.min.css";

import countriesList from "./countries.json";
import { Card, Grid, Input, Segment } from "semantic-ui-react";

console.log(countriesList);

// class MenuSearch extends Component {
//   state = {
//     search: ""
//   };

//   renderCountry = country => {
//     const { search } = this.state;
//     var code = country.code.toLowerCase();

//     /*if( search !== "" && country.name.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
//         return null
//     }*/

//     return (
//       <div className="col-md-3" style={{ marginTop: "20px" }}>
//         <Card>
//           <CardBody>
//             <p className="">
//               <img
//                 src={blankImg}
//                 className={"flag flag-" + code}
//                 alt={country.name}
//               />
//             </p>
//             <CardTitle title={country.name}>
//               {country.name.substring(0, 15)}
//               {country.name.length > 15 && "..."}
//             </CardTitle>
//           </CardBody>
//         </Card>
//       </div>
//     );
//   };

//   onchange = e => {
//     this.setState({ search: e.target.value });
//   };

//   render() {
//     const { search } = this.state;
//     const filteredCountries = countriesList.filter(country => {
//       return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
//     });

//     return (
//       <div className="flyout">
//         <main style={{ marginTop: "4rem" }}>
//           <div className="container">
//             <div className="row">
//               <div className="col-12">
//                 <center>
//                   <h3>
//                     <a
//                       href="https://www.youtube.com/watch?v=RM_nXOyHwN0"
//                       target="_blank"
//                     >
//                       Watch youtube demo here
//                     </a>
//                   </h3>
//                 </center>
//               </div>
//               <div className="col">
//                 <Input
//                   label="Search Country"
//                   icon="search"
//                   onChange={this.onchange}
//                 />
//               </div>
//               <div className="col" />
//             </div>
//             <div className="row">
//               {filteredCountries.map(country => {
//                 return this.renderCountry(country);
//               })}
//             </div>
//           </div>
//         </main>
//         <Footer color="indigo">
//           <p className="footer-copyright mb-0">
//             &copy; {new Date().getFullYear()} Copyright
//           </p>
//         </Footer>
//       </div>
//     );
//   }
// }

const MenuSearch = () => {
  const [search, setSearch] = useState("");

  const [country, seyCountry] = useState(countriesList) as any;

  const renderCountry = (country: any) => {
    var code = country.code.toLowerCase();

    /*if( search !== "" && country.name.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
            return null
        }*/

    return (
      //   <div className="col-md-3"  style={{display:"flex", marginTop: "20px"}}>
      //   <Segment>
      //     <Grid>
      //     <Card>          <CardBody>             <p className="">
      //        <img
      //         src={blankImg}
      //         className={"flag flag-" + code}
      //         alt={country.name}
      //       />
      //     </p>
      //     <CardTitle title={country.name}>
      //       {country.name.substring(0, 15)}
      //       {country.name.length > 15 && "..."}
      //     </CardTitle>
      //   </CardBody>
      //  </Card>
      //     </Grid>
      //     </Segment>
      //      </div>
      <div className="ui link cards">
        <div className="card">
          <div className="image">
            <img className={"flag flag-" + code} />
          </div>
          <div className="content">
            <div className="header"> {country.name.substring(0, 15)}
           {country.name.length > 15 && "..."}</div>
            <div className="meta">
              {/* <a>Friends</a> */}
            </div>
            <div className="description">
              {/* Matthew is an interior designer living in New York. */}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const onchange = (e: any) => {
    setSearch(e.target.value);
  };

  // const { search } = this.state;
  const filteredCountries = countriesList.filter((country) => {
    return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });
  return (
    <div className="flyout">
      <div style={{ marginTop: "4rem" }}>
        <div className="container">
          <div className="row">
            <div className="col-12"></div>
            <div className="col">
              <Input label="Search Country" icon="search" onChange={onchange} />
            </div>
            <div className="col" />
          </div>
          <Segment>
            {filteredCountries.map((country) => {
              return renderCountry(country);
            })}
          </Segment>
        </div>
      </div>
    </div>
  );
};

export default MenuSearch;
