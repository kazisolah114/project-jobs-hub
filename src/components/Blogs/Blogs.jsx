import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blog-section-main'>
            <div className='job-details-banner'>
                <h2>Blogs</h2>
            </div>
            <div className="blog-section">
                <div>
                    <h5>When should you use context API?</h5>
                    <p>Ans: Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
                </div>
                <div>
                    <h5>What is a custom hook?</h5>
                    <p>Ans: A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. Let's take a look at some major differences between a custom React JS hook and React JS components: A custom hook does not require a specific signature.</p>
                </div>
                <div>
                    <h5>What is useRef?</h5>
                    <p>Ans: useRef is a built-in React hook that accepts one argument as the initial value and returns a reference. A reference is an object having a special property current .</p>
                </div>
                <div>
                    <h5>What is useMemo?</h5>
                    <p>Ans: useMemo is a React Hook that lets you cache the result of a calculation between re-renders. const cachedValue = useMemo(calculateValue, dependencies) Reference. useMemo(calculateValue, dependencies)</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;