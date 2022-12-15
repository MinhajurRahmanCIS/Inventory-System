import React from 'react';

const Update = () => {
    return (
        <div className="stats stats-vertical lg:stats-horizontal bg-base-300 w-full m-auto mb-8 p-20">
            <div className="stat">
                <div className="stat-title">New Users</div>
                <div className="stat-value text-indigo-300">2k</div>
            </div>

            <div className="stat">
                <div className="stat-title">New Registers</div>
                <div className="stat-value text-secondary">5k</div>
            </div>
            <div className="stat">
                <div className="stat-title">Total Reviews</div>
                <div className="stat-value text-indigo-300">1k</div>
            </div>
        </div>

    );
};

export default Update;