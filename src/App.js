import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Search";
import Search from "./Search";
import axios from "axios";
import Result from "./Result";
import Detail from "./Detail";

function App() {
  const [state, setState] = useState({
    search: "",
    results: [],
    selected:{}
  });

  const handleInput = (event) => {
    let search = event.target.value;
    setState((prevState) => {
      return { ...prevState, search: search };
    });
  };
  const SearchResult = (event) => {
    if (event.key === "Enter") {
      axios
        .get(
          "http://www.omdbapi.com/?i=tt3896198&apikey=f136ede3" +
            "&s=" +
            state.search
        )
        .then((res) => {
          setState((prevState) => {
            return { ...prevState, results: res.data.Search };
          });
        })
        .catch((err) => console.log(err));
    }
  };

  const openDetail=(id)=>{
   axios.get("http://www.omdbapi.com/?i=" +id+"&apikey=f136ede3")
   .then(({data})=>{
    setState((prevState)=>{
      return{
      ...prevState,selected:data
      }
    })
   }).catch(err=> console.log(err))
  }

  const close=()=>{
    setState((prevState)=>{
  return{...prevState,selected:{}}
    })
  }

  return (
    <div className="w-100 main-wrapper d-flex flex-column align-items-center min-vh-100">
      {typeof state.selected.Title != "undefined" ? (
        <Detail selected={state.selected} close={close}/>
      ) : (
        <header className=" header w-100 text-center  my-5">
          <h2>Movie Search</h2>

          <Search handleInput={handleInput} SearchResult={SearchResult} />
          <div className="container">
            <div className="row">
              {state.results.map((result, i) => (
                <div className="col-12 col-sm-6 col-md-3 col-lg-3 my-2">
                  <Result result={result} openDetail={openDetail} />
                </div>
              ))}
            </div>
          </div>
        </header>
      )}
    </div>
  );
}

export default App;
