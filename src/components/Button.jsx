
function Button({svg, msg, className, sectionTarget}) {
    const handleClick = () => {
        const section = document.getElementById(sectionTarget);
        if (!section) return;

        // force le scroll même si déjà visible
        const top = section.offsetTop;
        window.scrollTo({ top, behavior: "smooth" });
    };
    return (
        <button type="button" className={className} onClick={handleClick}>
            {svg && (
                svg
            )}
            {msg && (
                <span>{msg}</span>
            )}
        </button>
    );
}

export default Button;