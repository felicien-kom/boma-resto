
function Button({svg, msg, className}) {
    return (
        <button type="button" className={className}>
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