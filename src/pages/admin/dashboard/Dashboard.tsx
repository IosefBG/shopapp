const Dashboard = () => {
    return (
        <div>
            <main style={{
                flex: 1,
                padding: '20px',
                backgroundColor: '#ECF0F1',
                color: '#2C3E50',
                boxSizing: 'border-box',
                overflow: 'auto'
            }}>
                <h1>Welcome to the Dashboard Page</h1>
                <p>This is the main content area of the Dashboard Page. It will resize based on the navbar at the top.</p>
            </main>
        </div>
    );
};

export default Dashboard;
