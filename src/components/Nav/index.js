import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {

    // Deconstruct the three parameters that are fed into the props from App.js
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    // use React's useEffect hook to update the browser tab's text content
    useEffect(() => {
        // Update browser tab to reflect the current category selected
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return(
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera">📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {/* 
                        map() processes each item in an array and returns a new array
                        In this case, it makes li and span item for each item in categories array
                    */}
                    {categories.map((category) => (
                        <li
                            /* 
                                To the li, assign class name 'mx-1'.
                                If this li is selected, set class name 'navActive' too
                            */
                            className={`mx-1" ${
                                currentCategory.name === category.name && 'navActive'
                            }`}
                            key={category.name}
                        >
                            <span 
                                onClick={() => {
                                    /* sets currentCategory = category */
                                    setCurrentCategory(category)
                                }}
                            >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;