import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);
    const [cursorText, setCursorText] = useState("");

    useEffect(() => {
        const addEventListeners = () => {
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseenter", onMouseEnter);
            document.addEventListener("mouseleave", onMouseLeave);
            document.addEventListener("mousedown", onMouseDown);
            document.addEventListener("mouseup", onMouseUp);
        };

        const removeEventListeners = () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseenter", onMouseEnter);
            document.removeEventListener("mouseleave", onMouseLeave);
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mouseup", onMouseUp);
        };

        const onMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const onMouseEnter = () => {
            setHidden(false);
        };

        const onMouseLeave = () => {
            setHidden(true);
        };

        const onMouseDown = () => {
            setClicked(true);
        };

        const onMouseUp = () => {
            setClicked(false);
        };

        const handleLinkHoverEvents = () => {
            document.querySelectorAll("a, button, .dock-item").forEach((el) => {
                el.addEventListener("mouseover", () => setLinkHovered(true));
                el.addEventListener("mouseout", () => setLinkHovered(false));
            });

            document.querySelectorAll(".project-card").forEach((el) => {
                el.addEventListener("mouseover", () => {
                    setLinkHovered(true);
                    setCursorText("VIEW");
                });
                el.addEventListener("mouseout", () => {
                    setLinkHovered(false);
                    setCursorText("");
                });
            });
        };

        addEventListeners();
        handleLinkHoverEvents();

        // Re-attach listeners on route change or DOM updates if needed
        // For now, we might need a MutationObserver or just re-run on location change
        // But since this is global, we'll keep it simple. 
        // Ideally, use a context or a custom hook for cleaner integration.

        return () => removeEventListeners();
    }, []);

    const cursorClasses = `cursor ${hidden ? "cursor--hidden" : ""} ${clicked ? "cursor--clicked" : ""} ${linkHovered ? "cursor--link-hovered" : ""} ${cursorText ? "cursor--text-mode" : ""}`;

    return (
        <div
            className={cursorClasses}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`
            }}
        >
            <span className="cursor-text">{cursorText}</span>
        </div>
    );
};

export default CustomCursor;
