# Q.3 What are REST API ?

REST (Representational State Transfer) is an architectural style for designing networked applications. RESTful APIs (Application Programming Interfaces) are a set of guidelines and principles based on the REST architecture. REST APIs provide a standardized way for different software systems to communicate and interact over the internet.

Key characteristics and principles of REST APIs include:

1. Stateless Communication: REST APIs are stateless, meaning each request from a client to a server contains all the necessary information to process the request. The server does not store any client context between requests, which simplifies scalability and allows requests to be processed independently.

2. Resources and URLs: Resources are the fundamental concept in REST APIs, representing entities or objects that can be identified using a URL (Uniform Resource Locator). Each resource has a unique URL that serves as its identifier, and clients interact with these resources through HTTP methods (GET, POST, PUT, DELETE) to perform operations on the resources.

3. Uniform Interface: REST APIs have a uniform interface, which means they follow a set of standardized HTTP methods and status codes. HTTP methods define the type of operation to be performed on a resource, while status codes indicate the result of the request (e.g., success, error, redirection). Common HTTP methods used in REST APIs include GET, POST, PUT, and DELETE.

4. Stateless Responses: REST APIs typically return stateless responses in a representational format such as JSON (JavaScript Object Notation) or XML (eXtensible Markup Language). The client can parse the response to extract the necessary data or use it to modify the application's state.

5. Hypermedia as the Engine of Application State (HATEOAS): HATEOAS is a constraint of REST APIs that encourages providing links within responses to guide clients to further actions or related resources. These links provide discoverability and enable the client to navigate the API dynamically.

6. Cacheability: REST APIs can take advantage of caching mechanisms provided by the HTTP protocol. Responses can be marked as cacheable or non-cacheable based on the needs of the application. Caching improves performance by allowing clients to reuse responses and reduces the load on the server.

REST APIs are widely used in web development for building scalable and interoperable applications. They provide a standard and flexible way for clients to interact with server-side resources, enabling communication between different systems and platforms. RESTful APIs are commonly used for web services, mobile applications, and integrations between various software components.