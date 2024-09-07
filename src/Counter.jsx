import React, { useState, useRef } from "react";

function Counter() {

    const [words, setWords] = useState(0);
    const [characters, setCharacters] = useState(0);
    const inputTextRef = useRef(null);

    function updateState() {
        const text = inputTextRef.current.value.trim();
        const wordsCount = text.split(/\s+/).filter(word => word !== '').length;
        setWords(wordsCount);
        const charactersCount = text.length;
        setCharacters(charactersCount);
    }

    function handleUpper() {
        const upperText = inputTextRef.current.value.toUpperCase();
        inputTextRef.current.value = upperText;
        updateState();
    }

    function handleLower() {
        const lowerText = inputTextRef.current.value.toLowerCase();
        inputTextRef.current.value = lowerText;
        updateState();
    }

    function handleDelete() {
        inputTextRef.current.value = "";
        updateState();
    }

    function handleCopy() {
        navigator.clipboard.writeText(inputTextRef.current.value).then(() => {
            console.log('Text copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }

    return (
        <>
            <header className="header">
                <div className="logo">Counter</div>
                <nav className="navbar">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>

            <div className="heading">Enter the Text To Analyze</div>

            <div className="text">
                <textarea
                    ref={inputTextRef}
                    rows={10}
                    cols={100}
                    placeholder="Enter the text here"
                    onChange={updateState}
                ></textarea>
            </div>
            <div className="buttons">
                <button onClick={handleUpper} className="upper">Convert to UpperCase</button>
                <button onClick={handleLower} className="lower">Convert to LowerCase</button>
                <button onClick={handleDelete} className="delete">Delete Text</button>
                <button onClick={handleCopy} className="copy">Copy To ClipBoard</button>
            </div>

            <div className="heading summary">Your Text Summary is </div>
            <div className="summaryResult">{words} Words and {characters} Characters</div>
        </>
    );
}

export default Counter;
