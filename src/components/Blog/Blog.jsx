import React from 'react';

const Blog = () => {
    return (
        <div className='container mt-5'>
            <div className='bg-light p-4 shadow-lg mb-4'>
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
            <div className='bg-light p-4 shadow-lg mb-4'>
                <h3>What is JWT, and how does it work?</h3>
                <p>
                    What is JWT? JWT or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. <br />
                    How it works? Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.User sign-in using username and password or google/facebook.
                    Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.Resource server then verifies the authenticity of the token using the secret salt/ public key.
                </p>
            </div>
            <div className='bg-light p-4 shadow-lg mb-4'>
                <h3>What is the difference between javascript and NodeJS?</h3>
                <h4>NodeJS</h4>
                <p>
                NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.Nodejs does not have capability to add HTML tags. V8 is the Javascript engine inside of node.js that parses and runs Javascript.Nodejs is written in C, C++ and Javascript.
                </p>
                <h4>JavaScript</h4>
                <p>
                Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. Javascript can only be run in the browsers.It is basically used on the client-side.	Javascript is capable enough to add HTML and play with the DOM.Javascript is used in frontend development.Javascript is used in frontend development.
                </p>
            </div>
            <div className='bg-light p-4 shadow-lg mb-4'>
                <h3>How does NodeJS handle multiple requests at the same time?</h3>
                <p>
                NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded.NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. 
                </p>
            </div>
        </div>
    );
};

export default Blog;