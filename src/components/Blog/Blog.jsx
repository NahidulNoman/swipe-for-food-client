import React from 'react';

const Blog = () => {
    return (
        <div className='container mt-5'>
            <div className='bg-light p-4 shadow-lg'>
                <h3>What is the difference between SQL and NoSQL?</h3>
                <h4>SQL Database :</h4>
                <p>
                SQL databases are primarily called as Relational Databases (RDBMS).SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful.SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful.These databases are best suited for complex queries. <br />
                Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc
                </p>
                <h4>NoSQL Database :</h4>
                <p>
                NoSQL database are primarily called as non-relational or distributed database.A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store.These databases are best suited for hierarchical data storage.These databases are not so good for complex queries. <br />
                Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc
                </p>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Blog;