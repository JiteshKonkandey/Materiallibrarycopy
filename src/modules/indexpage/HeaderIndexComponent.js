import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import "./indexpage.css";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import users from './navitems.json'


const UpperNav = styled.div`
    height: 3vh;
    background-color: #f6f7fc;

`;
const Header = styled.div`
    position: sticky;
    top: 0;
    z-index: 2;
`;

const LogoNav = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: #f6f7fc;
    height: 75px;
    @media (max-width: 480px) {
        display: flex;
        justify-content: space-between;
        background-color: #f6f7fc;
        height: 10vh;
        width: 20vw;
    }
`;

const Logo = styled.img`
  width: 220px;
  margin: 10px 0px 0px 25px;
  display: flex;
  justify-content: flex-start;
  cursor: grab;
  @media (max-width: 480px) {
    width: 100px;
    margin: 20px 0px 0px 15px;
    display: flex;
    justify-content: flex-start;
    cursor: grab;
  }
`;

const Nav = styled.nav`
    display: flex;
    background-color: #7d7d7d;
    @media (max-width: 480px) {
        display: flex;
        background-color: #7d7d7d;
    }
`;

const HeaderIndexComponent = () => {
  return (
    <>
        <Header>
            <UpperNav>
                <div className="colu">
                    <ul className="upperheaderitems">
                        <li className="itemLink">
                            <a href="#">Store Finder1</a>
                        </li>
                        <li className="itemLink">
                            <a href="#">Store Finder2</a>
                        </li>
                        <li className="itemLink">
                            <a href="#">Store Finder3</a>
                        </li>
                        <li className="itemLink">
                            <a href="#">Store Finder4</a>
                        </li>
                        <li className="itemLink">
                            <a href="#">Store Finder5</a>
                        </li>
                        <li className="itemLink">
                            <a href="#">Store Finder6</a>
                        </li>
                        <li className="itemLink">
                            <a href="#">Store Finder7</a>
                        </li>
                    </ul>
                </div>
            </UpperNav>
            <LogoNav>

                <div><Logo src="/images/materiallibrarylogo.png" alt="mlLogo"></Logo></div>
                {/* element 1 */}

                <div className="mycontent">
                    <div className="dropdown">
                        <button className="dropbtn">Portfolios</button>
                        <div className="dropdown-content">
                            <li>Create Portfolio</li>
                            <li>Company/Studio</li>
                            <li>Student/Professionals</li>
                            <li>Brand</li>
                            <li>College</li>

                        </div>
                    </div>
                
                {/* element 2 */}
                    <div className="dropdown">
                        <button className="dropbtn">Tutorials</button>
                        <div className="dropdown-content">
                            <li>Videos</li>
                            <li>Blogs</li>
                        </div>
                    </div>
                


                {/* element 3 */}
                
                    <div className="dropdown">
                        <button className="dropbtn">Jobs</button>
                        <div className="dropdown-content">
                            <li>Apply for Jobs</li>
                            <li>Post a Job</li>
                        </div>
                    </div>

                    <div className="iconPerson">
                        <div className="myinput"><input className="input-content" type="text" placeholder="Select Language" /></div>
                    </div>

                    <div className="iconsPerson">
                        <div className="iconbtn">
                        <Link to="/login"><FaUser style={{color: "#7d7d7d"}}/></Link>
                        </div>
                    </div>
                    <div className="iconsPerson">
                        <div className="iconbtn">
                            <FaShoppingCart />
                        </div>
                    </div>
                </div>
            </LogoNav>
          
          
            <Nav>
                <div className="navbardropdown">
                    {users.map((menuitems) => {
                        return (
                            <>
                                <div className="moredropdown">
                                    <button className="listitem" key={menuitems.id}>{menuitems.name}</button>
                                    <div className="licolumnitems">
                                        {menuitems.material.map((all) => {
                                            return <button className="subnavicons">{all.name1}</button>
                                        })}
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </Nav>
      </Header>
    </>
  );
};



export default HeaderIndexComponent;
