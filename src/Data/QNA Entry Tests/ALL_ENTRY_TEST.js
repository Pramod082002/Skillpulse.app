const cnEntryTest = [
  {
    question: "What is DNS and how it is helps us in our day to day life",
    user_answer: "",
    expected_answer: `DNS stands for Domain Name System, and it is a fundamental technology used to translate human-readable domain names into IP addresses
        uses in daily life
        1.efficient browsing
        2.caching
        3.load balancing
        `,
    sub_topic: "Application Level Concepts",
  },

  {
    question:
      "What is a firewall, and can a company use firewall to monitor the requests that its employee send?",
    user_answer: "",
    expected_answer: `
        A firewall is a network security device or software that acts as a barrier between a
        trusted internal network and untrusted external networks, such as the internet.
        Its primary purpose is to monitor, filter, and control incoming and outgoing network traffic based on predetermined security rules.
        `,
    sub_topic: "Application Level Concepts",
  },

  {
    question: "Is both Internet and Web Same ?",
    user_answer: "",
    expected_answer: `The internet and the web are often used interchangeably,
    but they are not the same thing.
    The internet is a global network of computers,
    while the web is a way of accessing information on the internet.
`,
    sub_topic: "Application Level Concepts",
  },

  {
    question:
      "what is network topology and what topology does college labs use in common  to connect with each other",
    user_answer: "",
    expected_answer: `Network topology refers to the physical or logical arrangement of devices, nodes, and links within a computer network.
    It defines how devices are interconnected and how data flows between them.
    One of the more common topologies used in such environments is likely the star topology.
    `,
    sub_topic: "Hardware Concepts",
  },

  {
    question: "what is a Proxy Server , does it provide Anonymity and Privacy",
    user_answer: "",
    expected_answer: `A proxy server is an intermediate server that sits between a client device and a destination server. It acts as a gateway,
    forwarding client requests to the destination server and potentially providing caching,
    filtering, and anonymity services. Proxy servers can act as intermediaries between users and the internet, making the user's IP address and identity hidden from the websites they visit.
    This enhances user privacy and helps protect sensitive information.
    `,
    sub_topic: "Hardware Concepts",
  },

  {
    question: "Does a router contain switch inside it",
    user_answer: "",
    expected_answer: `Yes, most routers contain a switch inside it.
    The switch is used to connect the different ports on the router together,
    so that devices on the same network can communicate with each other.
    The router also contains a routing engine, which is responsible for routing data packets between different networks.
    In some cases, a router may not have a built-in switch. This is usually the case with high-end routers that are designed for use in large networks.
    These routers typically have more ports than a typical home router, and they may also need to support more advanced routing protocols.
    In these cases, the router will typically have a separate switch that is connected to the router.`,
    sub_topic: "Hardware Concepts",
  },

  {
    question: "What is Peer to Peer Systems and is BitTorrent Peer to Peer?",
    user_answer: "",
    expected_answer: `
    Peer-to-peer is a networking model in which each computer in the network acts as both a client and a server.
    This means that each computer can both send and receive data from other computers on the network.
    BitTorrent: BitTorrent is a popular file-sharing system that uses P2P technology.
    In BitTorrent, users share files with each other directly, without the need for a central server.
    `,
    sub_topic: "Generic Questions",
  },

  {
    question: "What is load balancing ?",
    user_answer: "",
    expected_answer: `Load balancing is a technique that distributes traffic across multiple servers. This helps to improve performance and reliability by preventing any single server from becoming overloaded.
    Load balancing is often used for web servers, but it can also be used for other types of servers, such as database servers and application servers.`,
    sub_topic: "Generic Questions",
  },

  {
    question:
      "Is it possible to share data between systems without web ? If Yes then mention few ways to do it.",
    user_answer: "",
    expected_answer: `
    Yes, it is possible to share data between systems without the web.
    Peer to Peer file sharing, Direct file sharing, Shared Network File Sharing
    `,
    sub_topic: "Generic Questions",
  },

  {
    question: "what is udp and how it improves your online gaming performance?",
    user_answer: "",
    expected_answer: `User Datagram Protocol, is a transport protocol used in computer networking for sending data between devices over a network.
    UDP provides a more lightweight and connectionless approach to data transmission.
    UDP improves online gaming performance primarily due to its characteristics:
    1.Low Latency
    2.Faster Data Transmission
    3.Reduced Congestion
    `,
    sub_topic: "Data Transportation",
  },

  {
    question:
      "What are the names that are used to depict data in different OSI layers",
    user_answer: "",
    expected_answer: "Bit, Frame, Packet, Segment",
    sub_topic: "Data Transportation",
  },

  {
    question: "Explain the concept of caching in data transport.",
    user_answer: "",
    expected_answer: `Caching involves storing copies of web resources locally, either in the browser or on intermediary servers.
    This reduces the need to fetch resources from the original server, improving page load times.`,
    sub_topic: "Data Transportation",
  },

  {
    question:
      "What is Bandwidth ? Does Higher bandwidth promise faster data seed",
    user_answer: "",
    expected_answer: `Bandwidth refers to the maximum amount of data that can be transmitted over a network connection in a given period of time.
    Higher bandwidth does not always guarantee faster data speed, although it can contribute to it under certain conditions.`,
    sub_topic: "understanding of Basic terminologies",
  },
  {
    question: "What is ping ? is Higher ping prefered over Lower ping ?",
    user_answer: "",
    expected_answer: `
    "Ping" is a network utility used to test the reachability of a host (usually a computer or server) on an Internet Protocol (IP) network and to measure the round-trip time it takes for data packets to travel from the source to the destination and back.
    No lower the ping better the speed is`,
    sub_topic: "understanding of Basic terminologies",
  },
  {
    question: "Is OSI model actually implemented in real life? If yes where",
    user_answer: "",
    expected_answer: `No the OSI model is just a reference model. It is not implemented anywhere but rather used as a reference for building other models`,
    sub_topic: "understanding of Basic terminologies",
  },
];





const dbmsEntryTest=[
  {
    question: "How does a DBMS ensure data consistency in a distributed application environment?",
    user_answer: "",
    expected_answer: `
    DBMS ensures data consistency through mechanisms like distributed transactions and two-phase commit protocols. 
    It coordinates transactions across multiple nodes, ensuring either all transactions commit or none do`,
    sub_topic: "Application Level Concepts",
  },

  {
    question:
      "Explain the use of indexing in speeding up search operations within a real-time social media feed application.",
    user_answer: "",
    expected_answer: `
    Indexing in a real-time social media feed application involves creating structured data references that expedite search operations. 
    By pre-sorting and organizing data based on relevant attributes like timestamps or user IDs, indexing reduces the need for full data scans, enabling quicker retrieval of posts and updates.`,
    sub_topic: "Application Level Concepts",
  },

  {
    question: "Explain the benefits of denormalization in a data warehouse for business intelligence.",
    user_answer: "",
    expected_answer: `Denormalization in a data warehouse enhances business intelligence by reducing query complexity and improving performance. 
    By consolidating data and minimizing joins, it speeds up complex analytical queries, enabling faster insights. 
    This simplification aids in meeting reporting needs efficiently, making the data warehouse a powerful tool for decision-making.`,
    sub_topic: "Application Level Concepts",
  },

  {
    question:
      "Describe the purpose and usage of surrogate keys in database design, along with their benefits and potential drawbacks.",
    user_answer: "",
    expected_answer: `Surrogate keys are artificially created unique identifiers used as primary keys in database tables to simplify data management, enhance performance, and maintain data integrity. 
    They eliminate reliance on natural keys, ensuring data consistency; however, they may introduce additional complexity and require extra storage due to their synthetic nature.`,
    sub_topic: "Data Modeling",
  },

  {
    question: "Explain the concept of metadata and its importance in documenting and managing the database design.",
    user_answer: "",
    expected_answer: `
    Metadata refers to the descriptive information about data within a database, including details about its structure, relationships, constraints, and usage. 
    It is vital for understanding, documenting, and effectively managing the database design, aiding in data governance, maintenance, and ensuring accurate interpretation and utilization of stored information.`,
    sub_topic: "Data Modeling",
  },

  {
    question: "Explain the concept of cardinality and participation constraints in entity-relationship modeling.",
    user_answer: "",
    expected_answer: `Cardinality in entity-relationship modeling specifies the number of instances that can be associated with a relationship. It can be one-to-one, one-to-many, many-to-one, or many-to-many. 
    Participation constraints determine whether all or only some entities in an entity set must participate in a relationship.`,
    sub_topic: "Data Modeling",
  },

  {
    question: "What is SQL injection, and how can it be prevented?",
    user_answer: "",
    expected_answer: `SQL injection is a cyber attack where malicious SQL code is inserted into input fields to manipulate or access a database improperly. 
    Prevention involves using parameterized queries, input validation, and web application firewalls to sanitize user inputs and thwart unauthorized database access via injected code.`,
    sub_topic: "Generic Questions",
  },

  {
    question: "What is a stored procedure, and how is it used in a database?",
    user_answer: "",
    expected_answer: `
    A stored procedure is a precompiled set of SQL statements stored in a database that can be executed as a single unit. 
    It's used to encapsulate frequently executed tasks, enhance security, and improve performance by reducing network traffic between the application and database server.`,
    sub_topic: "Generic Questions",
  },

  {
    question: "How does a foreign key establish relationships between tables?",
    user_answer: "",
    expected_answer: `A foreign key in a database table establishes a relationship by referencing the primary key of another table. 
    It enforces referential integrity, ensuring that values in the foreign key column match existing values in the referenced primary key column, maintaining data consistency and enabling data retrieval across related tables.`,
    sub_topic: "Generic Questions",
  },

  {
    question: "Describe the concept of data fragmentation and its impact on storage management.",
    user_answer: "",
    expected_answer: `Data fragmentation involves dividing tables or relations into smaller subsets for storage efficiency, often as horizontal (row-wise) or vertical (column-wise) fragments.
     This can optimize storage by allowing data to be distributed across storage devices or nodes, but may increase complexity for query processing due to the need for fragment assembly during retrievals.`,
    sub_topic: "Database Storage",
  },

  {
    question:
      "What is a B-tree, and how is it utilized for efficient data storage and retrieval?",
    user_answer: "",
    expected_answer: "A B-tree is a balanced tree data structure used in databases for efficient data storage and retrieval. It maintains sorted data in nodes, enabling logarithmic time complexity for insertion, deletion, and search operations, making it suitable for indexing and managing large datasets in databases.",
    sub_topic: "Database Storage",
  },

  {
    question: "What are the considerations when choosing between row-based and column-based storage formats?",
    user_answer: "",
    expected_answer: `When choosing between row-based and column-based storage formats, consider factors like query patterns (analytical vs. transactional), data compression efficiency, and the need for selective retrieval. 
    Row-based suits transactional workloads due to full-record retrieval, while column-based is ideal for analytics with better compression and selective column access.`,
    sub_topic: "Database Storage",
  },

  {
    question:
      "Explain the term Data Redundancy.",
    user_answer: "",
    expected_answer: `Data redundancy refers to the duplication of data within a database, leading to unnecessary storage and potential inconsistencies when updates are made. 
    It can hinder data integrity and increase maintenance efforts.`,
    sub_topic: "understanding of Basic terminologies",
  },
  {
    question: "What does Query Optimization refer to?",
    user_answer: "",
    expected_answer: `Query optimization refers to the process in a Database Management System (DBMS) where the system analyzes various ways to execute a query and selects the most efficient execution plan, aiming to minimize resource usage and response time while retrieving the required data from the database.
     This optimization involves considering factors like indexing, join methods, and access paths to enhance the performance of queries.`,
    sub_topic: "understanding of Basic terminologies",
  },
  {
    question: "Explain the difference between a table and a view in a database. ",
    user_answer: "",
    expected_answer: `
    A table in a database stores actual data as structured rows and columns, while a view is a virtual table that presents a subset of data from one or more tables, offering a dynamic way to access and manipulate data without altering the underlying structure.`,
    sub_topic: "understanding of Basic terminologies",
  },
];





const osEntryTest=[
  {
    question: "Describe the role of an operating system in managing I/O operations for different applications.",
    user_answer: "",
    expected_answer: `The operating system oversees I/O operations by mediating access to devices, ensuring fair resource allocation among applications, and buffering data for efficient transfers. 
    It provides a standardized interface for applications to interact with various hardware devices, abstracting complexities and maintaining data integrity during reads and writes. `,
    sub_topic: "Application Level Concepts",
  },

  {
    question:
      "Explain the concept of process scheduling and how it impacts application responsiveness.",
    user_answer: "",
    expected_answer: `Process scheduling is the mechanism in an operating system that determines the order in which processes are executed on the CPU. 
    It impacts application responsiveness by ensuring fair CPU utilization, reducing wait times, and maintaining a balanced distribution of resources, thereby preventing one process from monopolizing the CPU and enabling smoother multitasking and quicker user interactions.`,
    sub_topic: "Application Level Concepts",
  },

  {
    question: "Explain how the operating system facilitates process migration across different hardware environments.",
    user_answer: "",
    expected_answer: `
    Operating systems enable process migration by abstracting hardware details, encapsulating processes, and employing network communication to transfer state and execution context, allowing seamless movement between systems. 
    This supports load balancing, fault tolerance, and resource optimization in distributed environments.`,
    sub_topic: "Application Level Concepts",
  },

  {
    question:
      "Explain the role of a page table in virtual memory systems.",
    user_answer: "",
    expected_answer: `A page table is a data structure used in virtual memory systems to map virtual addresses to physical addresses, enabling efficient address translation. 
    It allows the operating system to manage the illusion of a larger address space than physically available memory by facilitating the translation of virtual memory addresses to their corresponding physical memory locations.`,
    sub_topic: "Memory Management",
  },

  {
    question: "What is thrashing and how can it be avoided in memory management?",
    user_answer: "",
    expected_answer: `
    Thrashing occurs when a system spends more time swapping pages in and out of main memory than executing actual processes, severely degrading performance. 
    It can be avoided by optimizing the degree of multiprogramming, using efficient page replacement algorithms, and employing techniques like working set models to ensure that processes have access to their required pages without excessive swapping.`,
    sub_topic: "Memory Management",
  },

  {
    question: "How does memory allocation differ in a monolithic kernel versus a microkernel-based operating system?",
    user_answer: "",
    expected_answer: `
    In a monolithic kernel, most operating system functions run in a single address space, leading to direct memory access and potential for larger memory footprint, while in a microkernel, only essential services reside in the kernel space, reducing memory usage and improving modularity but possibly increasing inter-process communication overhead.`,
    sub_topic: "Memory Management",
  },

  {
    question: "What are system calls, and how do they enable user programs to interact with the operating system?",
    user_answer: "",
    expected_answer: `
    System calls are interface functions provided by the operating system that allow user programs to request services or resources (e.g., file operations, network communication) that can only be provided by the kernel. 
    User programs initiate system calls, and the OS switches from user mode to kernel mode to perform the requested operation securely, managing hardware resources and enforcing access controls, before returning control to the user program.`,
    sub_topic: "Generic Questions",
  },

  {
    question: "Explain the difference between a kernel and a shell in an operating system. ",
    user_answer: "",
    expected_answer: `The kernel is the core component of the operating system that manages hardware resources and provides essential services to other software. 
    The shell, on the other hand, is a user interface that interacts with the kernel, allowing users to execute commands and manage processes, files, and applications.`,
    sub_topic: "Generic Questions",
  },

  {
    question:
      "How does an operating system handle deadlock situations and ensure system stability?",
    user_answer: "",
    expected_answer: `
    An operating system prevents deadlock by utilizing techniques such as resource allocation graphs or Banker's algorithm to detect and break circular wait conditions, and by employing strategies like resource preemption and process termination to resolve deadlocks and restore system stability.`,
    sub_topic: "Generic Questions",
  },

  {
    question: "Explain the differences between a FAT and an NTFS file system, highlighting their advantages and drawbacks.",
    user_answer: "",
    expected_answer: `
    FAT (File Allocation Table) is simpler, widely compatible, but lacks advanced features like security permissions and journaling. 
    NTFS (New Technology File System) offers enhanced security, larger file sizes, and journaling for better data integrity, but it's more complex and may have compatibility issues on non-Windows systems.`,
    sub_topic: "File System Management",
  },

  {
    question:
      "Discuss the concept of inodes in Unix-like file systems and their role in managing file metadata.",
    user_answer: "",
    expected_answer: `In Unix-like file systems, inodes are data structures that store metadata about files, such as permissions, ownership, timestamps, and pointers to data blocks.
     They play a crucial role in efficient file management by allowing quick access to file attributes and mapping to data blocks, minimizing the need for continuous searching and enhancing overall file system performance.`,
    sub_topic: "File System Management",
  },

  {
    question: "How does a file system handle data recovery in case of accidental deletion or corruption?",
    user_answer: "",
    expected_answer: `File systems handle data recovery by implementing features like backup copies, versioning, and journaling. 
    These mechanisms allow for the restoration of previous file states or the reconstruction of lost data from backup points or transaction logs in case of accidental deletion or corruption.`,
    sub_topic: "File System Management",
  },

  {
    question:
      "What is the role of a process in an operating system?",
    user_answer: "",
    expected_answer: `A process in an operating system represents an executing program, consisting of code, data, and resources. 
    It's the fundamental unit of work, enabling multitasking, resource allocation, and parallel execution, managed by the OS to achieve efficient utilization of system resources.`,
    sub_topic: "understanding of Basic terminologies",
  },
  {
    question: "Define interrupt and its role in managing hardware events.",
    user_answer: "",
    expected_answer: `An interrupt is a signal sent by hardware or software to the CPU, prompting it to temporarily halt its current activities and handle the event. 
    It plays a crucial role in managing hardware events by enabling the CPU to promptly respond to external events, such as I/O operations, hardware errors, or time-sensitive tasks, improving system efficiency and responsiveness.`,
    sub_topic: "understanding of Basic terminologies",
  },
  {
    question: "Explain the difference between multitasking and multiprocessing.",
    user_answer: "",
    expected_answer: `Multitasking involves running multiple tasks or processes on a single CPU, quickly switching between them to give the appearance of concurrent execution. 
    Multiprocessing, on the other hand, utilizes multiple CPUs or cores to execute tasks simultaneously, improving overall system performance by true parallel execution.`,
    sub_topic: "understanding of Basic terminologies",
  },
];

export {
  cnEntryTest,
  dbmsEntryTest,
  osEntryTest
}