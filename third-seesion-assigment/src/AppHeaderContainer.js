import React from "react";
import ReactDOM from "react-dom/client"
import appLogo  from "./shared/images/app-logo.png"
import userLogo from "./shared/images/user-1.jpeg"
import Avatar from '@mui/material/Avatar';
import './appHeaderContainer.css'
import AppSearchComponent from "./AppSearchComponent";

// const appTitle = "Heyya Intern";
// const appTagLine = "Let's learn along!"
// const appSummary = "This is a peer-2-peer learning platform built for beginners of any field. Through this process anyone can teach whatever new they have learnt and thereby benefit others and also their own-self through feedbacks!!!."

/*
In this piece of code we have used repetitive React.createElement to create nested elements. We can also destructure the react object in import and directly access creatElement to create our required elements.
[i.e import { createElement } from "react";  ]

const headerContainer = React.createElement("div", {id:"app-header-container", className:"header-container"}, [
    React.createElement("h1", {id: "app-header-title", className: "header-container__title", key: appTitle}, appTitle ),
    React.createElement("h2", {id: "app-header-tagline", className: "header-container__tagline", key: appTagLine}, appTagLine ),
    React.createElement("h3", {id: "app-header-summary", className: "header-container__summary", key: appSummary}, appSummary)
])
*/


/* 
In this piece of code we have have pure JSX to create our nested elements. Parenthesis have been used as JSX expect expressions.

const headerContainer = (
<div id="app-header-container" className="header-container">
    <h1 id="app-header-title" className="header-container__title" key={appTitle}>
        { appTitle }
    </h1>
    <h2 id="app-header-tagline" className="header-container__tagline" key={appTagLine}>
        { appTagLine }
    </h2>
    <h3 id="app-header-summary" className="header-container__summary" key={appSummary}>
        { appSummary }
    </h3>
</div>
)
*/


/* 
In this piece of code we have created a functional component using JSX

const HeaderContainer = () => { 
return(
<div id="app-header-container" className="header-container">
    <h1 id="app-header-title" className="header-container__title" key={appTitle}>
        { appTitle }
    </h1>
    <h2 id="app-header-tagline" className="header-container__tagline" key={appTagLine}>
        { appTagLine }
    </h2>
    <h3 id="app-header-summary" className="header-container__summary" key={appSummary}>
        { appSummary }
    </h3>
</div>)
}
*/

// In this piece of code we have created a functional component named AppHeaderContainer and imported another component named AppSearchComponent to be used as child component. Along with that used material-ui and some expermentation with material styled components.
const AppHeaderContainer = () => {
    return (
        <div className="header-container">
            <img src={appLogo} id="app-logo" className="header-container__logo"></img>
            <AppSearchComponent/>
            <div id="app-avatar" className="header-container__avatar">
                <Avatar alt="MI" src={userLogo} sx={{color:"#a770ef", backgroundColor: "#ffffff"}}></Avatar>
            </div>
        </div>

    )
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<AppHeaderContainer/>); //here as we have created a functional component instead of directly rendering the variable we have to pass it as tag. For normal element root.render(elementName). While for functional component root.render(<elementName/>).