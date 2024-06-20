const Loading = () => {
    return (
        <div className="Loading">
            <div className="loading-item">
                <div>
                    <p>Logging In...</p>
                </div>
                <svg>
                    <circle cx="60" cy="60" r="50"></circle>
                    <circle cx="60" cy="60" r="50"></circle>
                </svg>
            </div>
        </div>
    )
}

export default Loading
